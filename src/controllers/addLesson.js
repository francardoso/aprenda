const addLessonModel = require('../models/addLesson');
async function addLesson(req,res){
    const validationMessage = validateParameters(req.body);
    if(validationMessage){
        res.status(400).send(validationMessage);
    }else{
        const ans = await addLessonModel(req.body);
        res.status(200).send(ans);
    }
};

function validateParameters(body){
    return null;
};

module.exports = addLesson;