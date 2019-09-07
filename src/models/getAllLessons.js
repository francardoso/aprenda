const Lesson = require('../schemas/Lesson');
async function getAllLessons(context){
    const lessons = await findLessons();
    return lessons;
};

function findLessons(){
    return new Promise((resolve, reject) =>{
        Lesson.find({},(err, lessons) =>{
            if(err){
                reject(err);
            }else{
                resolve(lessons);
            }
        });
    });
}

module.exports = getAllLessons;