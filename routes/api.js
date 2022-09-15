const db = require('./../models/db');
const express = require('express');
const router = express.Router();

const messages = {
  'authenticationError': 'Cannot perform given operation, incorrect password given !!',
  'requestSuccessful': 'Request completed successfully !!!'
}

const password = process.env.administratorPassword || 'theJonathanXue';
const successful = messages.requestSuccessful;

const prepareResponse = (status, data, message = successful, error = null) => {
  return { status, data, message, error }
}

const prepareUnauthorizedResponse = () => {
  const error = 'authenticationError';
  return prepareResponse('NOT_OK', null, messages[error], error);
}

router.post('/update_littleLegend.json', async (req, res) => {
  if (req.body.password !== password) {
    res.status(401).json(prepareUnauthorizedResponse());
    return;
  }
  const { name, doc } = req.body;
  const data = await db.littleLegends.updateOne({ name }, { $set: doc });
  res.json(prepareResponse('OK', {
    'littleLegendUpdated': data.modifiedCount
  }));
});

router.post('/update_egg.json', async (req, res) => {
  if (req.body.password !== password) {
    res.status(401).json(prepareUnauthorizedResponse());
    return;
  }
  const { name, doc } = req.body;
  const updateEgg = { $set: doc };
  const updateLittleLegend = { $set: { egg: doc.name } };
  const dataEgg = await db.eggs.updateOne({ name }, updateEgg);
  const dataLittleLegend = await db.littleLegends.updateMany({ egg: name }, updateLittleLegend);
  res.json(prepareResponse('OK', {
    'littleLegendUpdated': dataLittleLegend.modifiedCount,
    'eggUpdated': dataEgg.modifiedCount
  }));
});

router.post('/add_littleLegend.json', async (req, res) => {
  if (req.body.password !== password) {
    res.status(401).json(prepareUnauthorizedResponse());
    return;
  }
  const { doc } = req.body;
  const data = await db.littleLegends.insertOne(doc);
  res.json(prepareResponse('OK', {
    'littleLegendInserted': data.insertedCount
  }));
});

router.post('/add_egg.json', async (req, res) => {
  if (req.body.password !== password) {
    res.status(401).json(prepareUnauthorizedResponse());
    return;
  }
  const { doc } = req.body;
  const data = await db.eggs.insertOne(doc);
  res.json(prepareResponse('OK', {
    'eggInserted': data.insertedCount
  }));
});

router.post('/remove_littleLegend.json', async (req, res) => {
  if (req.body.password !== password) {
    res.status(401).json(prepareUnauthorizedResponse());
    return;
  }
  const { name } = req.body;
  const data = await db.littleLegends.deleteOne({ name });
  res.json(prepareResponse('OK', {
    'littleLegendDeleted': data.deletedCount
  }));
});

router.post('/remove_egg.json', async (req, res) => {
  console.log(req.body.password);
  if (req.body.password !== password) {
    res.status(401).json(prepareUnauthorizedResponse());
    return;
  }
  const { name } = req.body;
  const dataEgg = await db.eggs.deleteOne({ name });
  const dataLittleLegend = await db.littleLegends.deleteMany({ egg: name });
  res.json(prepareResponse('OK', {
    'littleLegendDeleted': dataLittleLegend.deletedCount,
    'eggDeleted': dataEgg.deletedCount
  }));
});

module.exports = router;
