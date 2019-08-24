const deleteUserModel = require('../models/deleteUser');
async function deleteUser(req, res){
    const validationMessage = validateParameters(req.body);
    if(validationMessage){
        res.status(400).send(validationMessage);
    }else{
        const ans = await deleteUserModel(req.body);
        res.status(200).send(ans)
    }
};
function validateParameters(body){
    const {idUser} = body

    if(typeof idUser !== "string" || idUser === "") return "INVALID USER ID";

    return null;
};

module.exports = deleteUser;