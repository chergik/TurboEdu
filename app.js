'use strict'

const express = require('express');
const app = express();
const port = process.env.PORT || 8080;

app.disable('x-powered-by');
app.set('port', process.env.PORT || 8080);

app.use(express.static(__dirname + '/static'));

app.listen(port, () => {
  console.log('listening on ' + port);
});
