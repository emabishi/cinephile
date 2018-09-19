// Seed mongo collections with seed data
require('dotenv').config();
const queryString = require('querystring');

const movies = require('./seed_data').movies;
const db = 'cinemaphile';
const cluster = 'proto';

const MongoClient = require('mongodb').MongoClient;
const connectionString = `mongodb+srv://mabishi:${process.env.MONGO_CLUSTER_USER_PASS}@${cluster}-6hkh7.mongodb.net/${db}?retryWrites=true`;


MongoClient.connect(connectionString, { useNewUrlParser: true }, (error, client) => {
  if (!error) {
    const moviesCollection = client.db('proto').collection('movies');
    moviesCollection.insertMany(movies, (err, result) => {
      if (!err) {
        console.log(`Seed operation successful ${JSON.stringify(result)}`);
      } else {
        console.log(`Error seeding documents === ${err}`);
      }
    });
  } else {
    console.log(`Error connecting to db === ${error}`)
  }
  client.close();
});
