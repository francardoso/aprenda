const addUserModel = require('../models/addUser');
async function addUser(req, res){
    const validationMessage = validateParameters(req.body);
    if(validationMessage){
        res.status(400).send(validationMessage);
    }else{
        const ans = await addUserModel(req.body);
        if(!ans.error){
            res.status(200).send({idUser: ans.id});
        }else{
            res.status(400).send({error: ans.error});
        }
    }
};
function validateParameters(body){
    const {email, name, role, password} = body
    const roles = ['professor', 'student'];

    if(typeof email !== "string" || email === "") return "INVALID EMAIL";
    if(typeof name !== "string" || name === "") return "INVALID NAME";
    if(roles.indexOf(role) < 0 ) return "INVALID ROLE";
    if(typeof password !== "string" || password === "") return "INVALID PASSWORD";

    return null;
};

module.exports = addUser;