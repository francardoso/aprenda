const loginModel = require('../models/login');
async function login(req, res){
    const validationMessage = validateParameters(req.body);
    if(validationMessage){
        res.status(400).json({error:validationMessage});
    }else{
        const ans = await loginModel(req.body);
        if(!ans.error){
            if(!req.session.APRENDA){
                req.session.APRENDA = {};
            }
            req.session.APRENDA.idUser = ans.idUser;
            req.session.APRENDA.role = ans.role;
            res.status(200).send(ans.idUser);

        }else{
            res.status(200).json(ans);
        }
    }
};

function validateParameters(body){
    const {email, password} = body;
    
    if(typeof email !== "string" || email === "") return "INVALID EMAIL";
    if(typeof password !== "string" || password === "") return "INVALID PASSWORD";

    return null;
};
module.exports = login;