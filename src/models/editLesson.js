const Lesson = require('../schemas/Lesson');

async function editLesson(context){
    const { idLesson } = context;
    const lesson = await findLesson(idLesson);

    if(!lesson) return{error: "LESSON NOT FOUND"};

    const newLesson = {
        ...lesson._doc,
        ...context
    };

    const editedLesson = editLessonOnDB(idLesson, newLesson);
    
    return editedLesson;
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

function editLessonOnDB(id, newLesson){
    const queryOptions = {
        new:true
    };
    return new Promise((resolve, reject)=>{
        Lesson.findByIdAndUpdate(id, newLesson, queryOptions,(err, lesson)=>{
            if(err){
                reject(err);
            }else{
                resolve(lesson)
            }
        })
    });
}

module.exports = editLesson;