const User = require('../schemas/User');
async function getUsers(context){
    const users = await findUsers();
    const usersInformations = users.map(user=>({
        _id: user._id,
        name: user.name,
        email: user.email,
        role: user.role
    }))
    return usersInformations;
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