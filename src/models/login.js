const User = require('../schemas/User');
async function login(context){
    const user = await findUser(context.email);
    if(!user){
        return {
            error: 'USER_NOT_FOUND',
        }
    }else{
        const isValidPassword = user.validatePassword(context.password);
        if(!isValidPassword){
            return {
                error: 'PASSWORD_INCORRECT'
            }
        }else{
            return 'LOGOU'
        }
    }
}
function findUser(email){
    return new Promise((resolve, reject) =>{
        User.findOne({email: email}, (err, user) =>{
            if(err){
                reject(err);
            }else{
                resolve(user);
            }
        });
    });
}
module.exports = login;