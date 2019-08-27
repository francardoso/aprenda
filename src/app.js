const express = require('express');
const session = require('express-session');
// const FileStore = require('session-file-store')(session);
const MongoStore = require('connect-mongo')(session);
const cors = require('cors');
const mongoose = require('mongoose');
const app = express();
const routesInit = require('./routes');
const bodyParser = require('body-parser');
const settings = require('../settings');

mongoose.connect(settings.DB_URL,
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
    initServer();
});

function initServer(){
    app.use(cors({
        origin: settings.CORS_ALLOWED_URL,
        credentials:true,
        optionsSuccessStatus: 200
    }));
    // session
    app.set('trust proxy', 1); // trust first proxy
    app.use(session({
        secret: settings.SESSION_SECRET,
        resave: true,
        saveUninitialized: true,
        cookie: {secure:false}, // MAYBE WILL HAVE TO CHANGE ON PRODUCTION
        store: new MongoStore({
            url: settings.DB_URL
        })
    }));
    app.use(bodyParser.json());
    // routes debbug 
    app.use((req,res,next)=>{
        console.log(req.method, req.url);
        next();
    }); 
    routesInit(app);    
    app.listen(settings.PORT, () => console.log(`Server Listening on port ${settings.PORT}`));
}

