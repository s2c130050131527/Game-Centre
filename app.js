import express from 'express';
import bodyParser from 'body-parser';
import {Database} from './database';

const app = express();
app.use(bodyParser.json());

app.get('/', function(req, res) {
  res.send('Hello World!');
});


var server = app.listen(3001, () => {
  let host = server.address().address;
  host = (host === '::' ? 'localhost' : host);
  const port = server.address().port;

  console.log('listening at http://%s:%s', host, port);
});

