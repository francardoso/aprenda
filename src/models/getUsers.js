const User = require('../schemas/User');
async function getUsers(context){
    const users = await findUsers();
    return users;
};

function findUsers(){
    return new Promise((resolve, reject) =>{
        User.find({},(err, users) =>{
            if(err){
                reject(err);
            }else{
                resolve(users);
            }
        });
    });
}
module.exports = getUsers;