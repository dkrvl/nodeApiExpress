const express        = require('express');
const MongoClient    = require('mongodb').MongoClient;
const bodyParser     = require('body-parser');
const app            = express();
const db             = require('./config/db');

const port = 5000;
app.use(bodyParser.urlencoded({ extended: true }));

MongoClient.connect(db.url, (err, database) => {
  if (err) return console.log(err)
  require('./app/routes')(app, database);

    // Make sure you add the database name and not the collection name
  dbnew = database.db("drmongodbtest");
  require('./app/routes')(app, dbnew);
  app.get('/', function (req, res) {
    res.end("This is the API");
  });

  app.listen(port, () => {
    console.log('We are live on ' + port);
  });               
})