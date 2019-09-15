const Lesson = require('../schemas/Lesson');
async function getLesson(context){
    const lesson = await findLesson(context.idLesson);
    if(!lesson){
        return {
            error: 'LESSON NOT FOUND',
        }
    }else{
        return lesson;
    }
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
}

module.exports = getLesson;