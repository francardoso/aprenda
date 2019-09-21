const Lesson = require('../schemas/Lesson');
async function unenrollStudents (context){
    const { idLesson, students } = context;
    const lesson = await findLesson(idLesson);
    if(!lesson) return {error: 'LESSON NOT FOUND'}
    const previousStudents = lesson.students;

    const updateStudents = previousStudents.reduce((acc,curr)=>{
        if(students.indexOf(curr.toString()) === -1){
            acc.push(curr);
        }
        return acc;
    },[]);

    const lessonWithUpdatedStudents = await enrollStudentsToLesson(idLesson, updateStudents);

    return lessonWithUpdatedStudents.students;
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

module.exports = unenrollStudents;