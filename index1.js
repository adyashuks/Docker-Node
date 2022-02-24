// var mongoDB = 'mongodb://mongodb:27017/tech-talk-db';
// var mongoDB = 'mongodb://127.0.0.1:27017/tech-talk-db';
var MongoClient = require('mongodb').MongoClient;
const express = require('express');
const cors = require('cors');
const app = express();
app.use(express.json());
app.use(cors());
app.options('*', cors());

const books = [
{title: 'Harry Potter', id: 1},
{title: 'Wings of Fire', id: 2},
{title: 'Ignited Minds', id: 3},
{title: 'Pride and Predjudice', id: 4}
]
 
//READ Request Handlers
app.get('/', (req, res) => {
  const uri = "mongodb://mongodb:27017";
  try {
      MongoClient.connect(uri,{ useUnifiedTopology: true }, function(err, db) {
        if (err) throw err;
        var dbo = db.db("check");
        dbo.collection("test").findOne({}, function(err, result) {
          if (err) throw err;
          console.log(result.name);
          db.close();
        });
      });
  } catch (e) {
      console.error(e);
  } finally {
      //await client.close();
  }
res.send('Welcome to Angular and Node app!!');
});

app.get('/api/books', (req,res)=> {
    res.send(books);
    });
     
const port = process.env.PORT || 8080;
app.listen(port, () => console.log(`Listening on port ${port}..`));