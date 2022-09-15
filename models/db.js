const mongoClient = require('mongodb').MongoClient;

const connectionString = 'mongodb+srv://LittleLegendCollector:MLQaMMNFnhCiGEn5@cluster0.gdnccia.mongodb.net/?retryWrites=true&w=majority' || 'mongodb://localhost:27017';

const littleLegendsCollectionName = 'littleLegends';
const eggsCollectionName = 'eggs';
const dbName = 'inventoryDB';

const makeConnection = async () => {
  const options = { 'useUnifiedTopology': true };
  const client = await mongoClient.connect(connectionString, options);
  const db = client.db(dbName);
  exports.eggs = db.collection(eggsCollectionName);
  exports.littleLegends = db.collection(littleLegendsCollectionName);
}

exports.connection = makeConnection();
exports.eggs = undefined;
exports.littleLegends = undefined;

