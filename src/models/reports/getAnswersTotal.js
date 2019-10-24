const Answer = require('../../schemas/Answer');

async function getAnswersTotal (context){
    const numberOfAnswersTotal = await getAllAnswersCount();

    return numberOfAnswersTotal;
};

function getAllAnswersCount(){
    return new Promise((resolve, reject) =>{
        Answer.countDocuments({}, (err, count)=>{
            if(err){
                reject(err);
            }else{
                resolve(count);
            }
        });
    });
}
module.exports = getAnswersTotal;