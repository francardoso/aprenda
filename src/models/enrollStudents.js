const Lesson = require('../schemas/Lesson');
async function enrollStudents(context){
    const { idLesson, students } = context;
    const lesson = await findLesson(idLesson);
    if(!lesson) return {error: 'LESSON NOT FOUND'}
    const previousStudents = lesson.students;

    const newStudents = students.reduce((acc, curr)=>{
        if(previousStudents.indexOf(curr) === -1){
            acc.push(curr);
        }
        return acc;
    },[]);

    const lessonWithNewStudents = await enrollStudentsToLesson(idLesson,[...previousStudents, ...newStudents]);
    
    return lessonWithNewStudents.students;

};

function findLesson(id){
    return new Promise((resolve, reject)=>{
        Lesson.findById(id,(err, lesson)=>{
            if(err){
                reject(err);
            }else{
                resolve(lesson);
            }
        })
    });
};

function enrollStudentsToLesson(idLesson, students){
    const queryOptions = {
        new:true
    };
    return new Promise((resolve, reject)=>{
        Lesson.findByIdAndUpdate(idLesson, {students:students}, queryOptions,(err, lesson)=>{
            if(err){
                reject(err);
            }else{
                resolve(lesson)
            }
        })
    })
}

module.exports = enrollStudents;