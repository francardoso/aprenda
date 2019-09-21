const loginModel = require('../models/login');
async function login(req, res){
    const validationMessage = validateParameters(req.body);
    if(validationMessage){
        res.status(400).json({error:validationMessage});
    }else{
        req.session.destroy();
        res.status(200).json({error: null});
    }
};

function validateParameters(body){
    return null;
};
module.exports = login;