const getAllLessonsModel = require('../models/getAllLessons');
async function getAllLessons(req,res){
    const validationMessage = validateParameters(req.body);
    if(validationMessage){
        res.status(400).send(validationMessage);
    }else{
        const ans = await getAllLessonsModel(req.body);
        res.status(200).send(ans);
    }
};

function validateParameters(body){
    return null;
};

module.exports = getAllLessons;