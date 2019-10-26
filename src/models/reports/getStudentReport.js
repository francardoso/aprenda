const Answer = require('../../schemas/Answer');
const Lesson = require('../../schemas/Lesson');

async function getStudentReport(context) {
    const { idStudent } = context;
    const studentLessons = await findStudentLessons(idStudent);
    const studentAnswers = await findStudentAnswers(idStudent);

    const fullInformation = studentLessons.map((lesson) =>{
        const les = {...lesson.toObject()};
        const answer = studentAnswers.find((ans) => ans.idLesson.toString() === lesson._id.toString());
        if(answer){
            answer.questions.forEach((ques) =>{
                les.questions[ques.index].answer = ques;
            });
        }
        return les;
    });
    return fullInformation;
};

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