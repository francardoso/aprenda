const Answer = require('../schemas/Answer');

async function getStudentAnswer(context){
    const { idLesson, idStudent } = context;
    const answer = await findAnswer(idLesson, idStudent);
    return answer;
};

function findAnswer(idLesson, idStudent,){
    return new Promise((resolve, reject)=>{
        Answer.findOne({idLesson,idStudent}, (err,answer)=>{
            if(err){
                reject(err);
            }else{
                resolve(answer);
            }
        });
    });
};

module.exports = getStudentAnswer;