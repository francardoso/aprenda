const express = require('express');
const app = express();
const routesInit = require('./routes');
const bodyParser = require('body-parser');

app.use(bodyParser.json());

routesInit(app);

app.listen('3008', () => console.log('Server Listening on port 3008'));