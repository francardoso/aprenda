const getUsersController = require('./controllers/getUsers');
const loginController = require('./controllers/login');
const logoutController = require('./controllers/logout');
const addUserController = require('./controllers/addUser');
const deleteUserController = require('./controllers/deleteUser');
const isLoggedController = require('./controllers/isLogged');
const getUserByLoginController = require('./controllers/getUserByLogin');
const addLessonController = require('./controllers/addLesson');
const getAllLessonsController = require('./controllers/getAllLessons');
const getLessonController = require('./controllers/getLesson');
const enrollStudentsController = require('./controllers/enrollStudents');
const unenrollStudentsController = require('./controllers/unenrollStudents');
const getStudentLessonsController = require('./controllers/getStudentLessons');
const checkLessonQuestionAnswerController = require('./controllers/checkLessonQuestionAnswer');
const getStudentAnswerController = require('./controllers/getStudentAnwser');
const editLessonController = require('./controllers/editLesson');

const getAnswersTotalController = require('./controllers/reports/getAnswersTotal');
const getStudentReportController = require('./controllers/reports/getStudentReport');
const getLessonReportController = require('./controllers/reports/getLessonReport');

function routesInit(app){
    app.get('/', (req, res)=>{
        res.send('Hello from Aprenda');
    });

    app.post('/login', loginController);
    app.get('/isLogged', isLoggedController);
    app.post('/logout', logoutController);
    
    app.post('/addUser', addUserController);
    app.get('/getUserByLogin', getUserByLoginController);
    app.delete('/deleteUser', deleteUserController);
    app.get('/getUsers', getUsersController);

    app.get('/getLesson', getLessonController);
    app.post('/addLesson', addLessonController);
    app.put('/editLesson', editLessonController);
    app.get('/getAllLessons', getAllLessonsController);
    app.get('/getStudentLessons', getStudentLessonsController);
    app.put('/enrollStudents', enrollStudentsController);
    app.put('/unenrollStudents', unenrollStudentsController);

    app.post('/checkLessonQuestionAnswer', checkLessonQuestionAnswerController);
    app.get('/getStudentAnswer', getStudentAnswerController);

    app.get('/getAnswersTotal', getAnswersTotalController);
    app.get('/getStudentReport', getStudentReportController);
    app.get('/getLessonReport', getLessonReportController);
}
 
module.exports = routesInit;