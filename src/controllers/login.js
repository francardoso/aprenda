const loginModel = require('../models/login');
async function login(req, res){
    const validationMessage = validateParameters(req.body);
    if(validationMessage){
        res.status(400).send(validationMessage);
    }else{
        const ans = await loginModel(req.body);
        res.status(200).send(ans);
    }
};

function validateParameters(body){
    const {email, password} = body;
    
    if(typeof email !== "string" || email === "") return "INVALID EMAIL";
    if(typeof password !== "string" || password === "") return "INVALID PASSWORD";

    return null;
};
module.exports = login;