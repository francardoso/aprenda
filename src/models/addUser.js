const User = require('../schemas/User');
async function addUser(context){
    const user = await findUser(context.email);
    if(user) return {error: 'USER EMAIL ALREADY EXISTS'}

    const newUser = new User({
        ...context
    });
    newUser.hashed_password = newUser.hashPassword(context.password);
    const savedUser = await newUser.save();
    return {
        error: null,
        id: savedUser.id
    }
};

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
module.exports = addUser;