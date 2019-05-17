const mongoose = require('mongoose');
const UserSchema = require('../schemas/User');
const User = mongoose.model('User', UserSchema);
async function addUser(context){
    const user = await findUser(context.email);
    if(user) return {error: 'USER EMAIL ALREADY EXISTS'}

    const newUser = await User.create({
        ...context
    });
    
    if(newUser.id){
        return {
            error: null,
            id: newUser.id
        }
    }else{
        return {
            error: 'NOT ABLE TO ADD USER'
        }
    }
    
    function findUser(email){
        return new Promise((resolve, reject) =>{
            User.findOne({email: email}, (err, user) =>{
                if(user){
                    resolve({
                        user
                    });
                    return;
                }
                resolve(null);
            });
        });
    }
    
};
module.exports = addUser;