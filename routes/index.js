const helpers = require('./helpers');
const express = require('express');
const router = express.Router();

router.get('/', async (req, res, next) => {
  const eggs = await helpers.getEgg();
  const template = eggs.length > 0 ? 'index' : 'noLittleLegendAvailable';
  const populateWith = eggs.length == 0 ? {} : {
    title: 'Index', eggs, ...helpers.getClientSideResourcesFor(template)
  };
  res.render(template, populateWith);
});

module.exports = router;
