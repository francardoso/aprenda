const User = require('../../schemas/User');
const Answer = require('../../schemas/Answer');
const Lesson = require('../../schemas/Lesson');

async function getStudentReport(context) {
    const { idStudent } = context;
    const student = await findStudent(idStudent);
    if(!student) return {error: "STUDENT NOT FOUND"} 
    const studentLessons = await findStudentLessons(idStudent);
    const studentAnswers = await findStudentAnswers(idStudent);

    const lessons = studentLessons.map((lesson) =>{
        const les = {...lesson.toObject()};
        const answer = studentAnswers.find((ans) => ans.idLesson.toString() === lesson._id.toString());
        if(answer){
            answer.questions.forEach((ques) =>{
                les.questions[ques.index].answer = ques;
            });
        }
        return les;
    });
    return {
        _id: student._id,
        role: student.role,
        name: student.name,
        email: student.email, 
        lessons
    };
};

function findStudent(idStudent){
    return new Promise((resolve, reject) =>{
        User.findById(idStudent,(err, User) =>{
            if(err){
                reject(err);
            }else{
                resolve(User);
            }
        });
    });
}

function findStudentLessons(idStudent) {
    return new Promise((resolve, reject) => {
        Lesson.find({ students: idStudent }, (err, lessons) => {
            if (err) {
                reject(err);
            } else {
                resolve(lessons);
            }
        });
    });
}

function findStudentAnswers(idStudent) {
    return new Promise((resolve, reject) =>{
        Answer.find({idStudent}, (err, answers) =>{
            if(err){
                reject(error);
            }else{
                resolve(answers);
            }
        });
    });
}

module.exports = getStudentReport;