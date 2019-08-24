const getUsersController = require('./controllers/getUsers');
const getActivitiesController = require('./controllers/getActivities');
const loginController = require('./controllers/login');
const addUserController = require('./controllers/addUser');
const deleteUserController = require('./controllers/deleteUser');
const isLoggedController = require('./controllers/isLogged');

function routesInit(app){
    app.get('/', (req, res)=>{
        res.send('Hello from Aprenda');
    });

    app.post('/login', loginController);
    app.get('/isLogged', isLoggedController);
    
    app.post('/addUser', addUserController);
    app.delete('/deleteUser', deleteUserController);
    app.get('/getUsers', getUsersController);

    app.get('/getActivities', getActivitiesController);
}
 
module.exports = routesInit;