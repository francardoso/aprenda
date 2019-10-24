const Lesson = require('../../schemas/Lesson');

async function getTotalLessons (context){
    const numberOfLessons = await getAllLessons();

    return numberOfLessons;
};

function getAllLessons(){
    return new Promise((resolve, reject) =>{
        Lesson.countDocuments({}, (err, number)=>{
            if(err){
                reject(err);
            } else{
                resolve(number);
            }
        })
    });
}

module.exports = getTotalLessons;