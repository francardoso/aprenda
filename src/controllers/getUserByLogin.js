const getUserByLoginModel = require('../models/getUserByLogin');
async function getUserByLogin(req, res){
    const validationMessage = validateParameters(req.query);
    if(validationMessage){
        res.status(400).send(validationMessage);
    }else{
        const ans = await getUserByLoginModel(req.query);
        res.status(200).send(ans);
    }
};
function validateParameters(body){
    const {email} = body;
    if(typeof email !== "string" || email === "") return "INVALID EMAIL";
    return null;
};

module.exports = getUserByLogin;