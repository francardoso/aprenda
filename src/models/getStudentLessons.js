const Lesson = require('../schemas/Lesson');
async function getStudentLessons(context){
    const { idStudent } = context;
    const lessons = await findStudentLessons(idStudent);
    return lessons;
};

function findStudentLessons(idStudent){
    return new Promise((resolve, reject)=>{
        Lesson.find({ students: idStudent},(err, lessons)=>{
            if(err){
                reject(err);
            }else{
                resolve(lessons);
            }
        });
    });
}

module.exports = getStudentLessons;