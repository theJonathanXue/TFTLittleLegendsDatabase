const helpers = require('./helpers');
const express = require('express');
const router = express.Router();

router.get('/', async (req, res, next) => {
  const littleLegends = await helpers.getLittleLegends();
  const template = littleLegends.length > 0 ? 'index' : 'noLittleLegendAvailable';
  const populateWith = littleLegends.length == 0 ? {} : {
    title: 'Index', littleLegends, ...helpers.getClientSideResourcesFor(template)
  };
  res.render(template, populateWith);
});

module.exports = router;
