const express = require('express');
const app = express();
const routesInit = require('./routes');

routesInit(app);

app.listen('3008', () => console.log('Server Listening on port 3008'));