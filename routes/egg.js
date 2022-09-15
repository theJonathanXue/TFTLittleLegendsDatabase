const helpers = require('./helpers');
const express = require('express');
const router = express.Router();

router.get('/view/:name', async (req, res, next) => {
  const { name } = req.params, template = 'viewEgg';
  const littleLegends = await helpers.getLittleLegend(name);
  res.render(template, {
    title: 'View Egg', littleLegends,
    ...helpers.getClientSideResourcesFor(template)
  });
});

router.get('/delete/:name', async (req, res, next) => {
  const { name } = req.params, template = 'deleteEggOrLittleLegend';
  const egg = (await helpers.getEgg(name)).pop();
  res.render(template, {
    title: 'Delete Egg', 'collection': 'egg', name,
    ...helpers.getClientSideResourcesFor(template)
  });
})

router.get('/update/:name', async (req, res, next) => {
  const { name } = req.params, template = 'addOrUpdateEgg';
  const egg = (await helpers.getEgg(name)).pop();
  res.render(template, {
    title: 'Update Egg', message: `update egg ${name}`, egg,
    ...helpers.getClientSideResourcesFor(template)
  });
});

router.get('/add', async (req, res, next) => {
  const template = 'addOrUpdateEgg';
  res.render(template, {
    title: 'Add Egg', message: 'add new egg', data: {},
    ...helpers.getClientSideResourcesFor(template)
  });
});

module.exports = router;
