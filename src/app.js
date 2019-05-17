const express = require('express');
const mongoose = require('mongoose');
const app = express();
const routesInit = require('./routes');
const bodyParser = require('body-parser');

mongoose.connect('mongodb://localhost:27017/aprenda',
    {
        useNewUrlParser: true,
        useFindAndModify: false
    }
);

const db = mongoose.connection;

db.on('error', console.error.bind(console, 'connection error:'));

//connect do MongoDB
db.once('open', () =>{
    console.log('connected to DB');
});


app.use(bodyParser.json());

routesInit(app);

app.listen('3008', () => console.log('Server Listening on port 3008'));