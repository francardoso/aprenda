const User = require('../schemas/User');
async function addUser(context){
    const deletedUser = await deleteUser(context.idUser);
    console.log('deleted user', deletedUser);
    if(deletedUser){
        return {
            error: null,
            idUser: deletedUser.id
        }
    }else{
        return {
            error: 'USER NOT FOUND IN DB'
        }
    }
};

function deleteUser(id){
    return new Promise((resolve, reject) =>{
        User.findByIdAndRemove(id, (err, user) =>{
            if(err){
                reject(err);
            }else{
                resolve(user);
            }
        });
    });
}
module.exports = addUser;