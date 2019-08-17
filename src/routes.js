const getUsersController = require('./controllers/getUsers');
const getActivitiesController = require('./controllers/getActivities');
const loginController = require('./controllers/login');
const addUserController = require('./controllers/addUser');

function routesInit(app){
    app.get('/', (req, res)=>{
        res.send('Hello from Aprenda');
    });
    app.post('/login', loginController);
    
    app.post('/addUser', addUserController);
    app.get('/getUsers', getUsersController);

    app.get('/getActivities', getActivitiesController);
}
 
module.exports = routesInit;