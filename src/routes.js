const getUsersController = require('./controllers/getUsers');
const loginController = require('./controllers/login');
const addUserController = require('./controllers/addUser');
const deleteUserController = require('./controllers/deleteUser');
const isLoggedController = require('./controllers/isLogged');
const getUserByLoginController = require('./controllers/getUserByLogin');
const addLessonController = require('./controllers/addLesson');
const getAllLessonsController = require('./controllers/getAllLessons');

function routesInit(app){
    app.get('/', (req, res)=>{
        res.send('Hello from Aprenda');
    });

    app.post('/login', loginController);
    app.get('/isLogged', isLoggedController);
    
    app.post('/addUser', addUserController);
    app.get('/getUserByLogin', getUserByLoginController);
    app.delete('/deleteUser', deleteUserController);
    app.get('/getUsers', getUsersController);

    app.post('/addLesson', addLessonController);
    app.get('/getAllLessons', getAllLessonsController);
}
 
module.exports = routesInit;