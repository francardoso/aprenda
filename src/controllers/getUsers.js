const getUsersModel = require('../models/getUsers');
async function getUsers(req, res){
    if(!validateParameters(req.body)){
        res.status(400).send('MISSING PARAMATERS');
    }else{
        const ans = await getUsersModel();
        res.status(200).send(ans);
    }
}

function validateParameters(body){
    return true
};
module.exports = getUsers;