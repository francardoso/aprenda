const Answer = require('../../schemas/Answer');
const Lesson = require('../../schemas/Lesson');

async function getStudentReport(context) {
    const { idStudent } = context;
    const studentLessons = await findStudentLessons(idStudent);
    return studentLessons;
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

function getStudentAnswers() {

}

module.exports = getStudentReport;