const User = require('../schemas/User');
async function getUserByLogin(context){
    const user = await findUser(context.email);
    if(user){
        return {
            user: {
                idUser: user.id,
                role: user.role
            }
        }
    }else{
        return {
            error: 'USER NOT FOUND IN DB'
        }
    }
};

function findUser(email){
    return new Promise((resolve, reject) =>{
        User.findOne({email: email}, (err, user) =>{
            if(user){
                resolve(
                    user
                );
                return;
            }
            resolve(null);
        });
    });
}
module.exports = getUserByLogin;