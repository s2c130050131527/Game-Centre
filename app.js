import express from 'express';
import bodyParser from 'body-parser';
import db from './database';
import routes from './components/routes';

const app = express();
app.use(bodyParser.json());


var server = app.listen(3001, () => {
  let host = server.address().address;
  host = (host === '::' ? 'localhost' : host);
  const port = server.address().port;


  console.log('listening at http://%s:%s', host, port);
  console.log(db);
  console.log(routes);
});
