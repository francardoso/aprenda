const getUsersController = require('./controllers/getUsers');
const getActivitiesController = require('./controllers/getActivities');

module.exports = routesInit;

function routesInit(app){
    app.get('/', (req, res)=>{
        res.send('Hello from Aprenda');
    })

    app.get('/users', getUsersController);
    app.get('/activities', getActivitiesController);
} 