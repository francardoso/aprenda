const User = require('../../schemas/User');

async function getStudentsTotal (context){
    const studentsTotal = await getStudentsCount();
    return studentsTotal;
};

function getStudentsCount(){
    return new Promise((resolve, reject) =>{
        User.countDocuments({role: 'student'}, (err, count) =>{
            if(err){
                reject(err);
            }else{
                resolve(count);
            }
        });
    });
}
module.exports = getStudentsTotal;