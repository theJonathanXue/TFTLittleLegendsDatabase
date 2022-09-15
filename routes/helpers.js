const db = require('./../models/db');

const sanitizeMongoDocument = doc => {
  delete doc._id; return doc;
}

exports.getEgg = (name = '') => {
  const filter = name === '' ? {} : { name };
  return db.eggs.find(filter).toArray()
    .then(docs => docs.map(doc => sanitizeMongoDocument(doc)));
}

exports.getLittleLegend = (egg, name = '') => {
  const filter = name === '' ? { egg } : { name };
  return db.littleLegends.find(filter).toArray()
    .then(docs => docs.map(doc => sanitizeMongoDocument(doc)));
}

exports.getClientSideResourcesFor = template => ({
  javascript: template, stylesheet: template
})

exports.getLittleLegends = (name = '') => {
  const filter = name === '' ? {} : { name };
  return db.littleLegends.find(filter).toArray()
    .then(docs => docs.map(doc => sanitizeMongoDocument(doc)));
}

