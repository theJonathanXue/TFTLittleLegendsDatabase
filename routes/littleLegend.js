const helpers = require('./helpers');
const express = require('express');
const router = express.Router();

router.get('/update/:name', async (req, res, next) => {
  const { name } = req.params, template = 'addOrUpdateLittleLegend';
  const options = await helpers.getEgg();
  const littleLegend = (await helpers.getLittleLegend(null, name)).pop();
  res.render(template, {
    title: 'Update LittleLegend', message: `update Little Legend ${name}`, options,
    littleLegend, ...helpers.getClientSideResourcesFor(template)
  });
});

router.get('/delete/:name', async (req, res, next) => {
  const { name } = req.params, template = 'deleteEggOrLittleLegend';
  const littleLegend = (await helpers.getLittleLegend(null, name)).pop();
  res.render(template, {
    title: 'Delete LittleLegend', collection: 'littleLegend', name,
    ...helpers.getClientSideResourcesFor(template)
  });
});

router.get('/add', async (req, res, next) => {
  const template = 'addOrUpdateLittleLegend';
  const options = await helpers.getEgg();
  res.render(template, {
    title: 'Add LittleLegend', message: 'add new Little Legend', options, data: {},
    ...helpers.getClientSideResourcesFor(template)
  });
});

module.exports = router;
