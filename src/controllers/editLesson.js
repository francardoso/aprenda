const editLessonModel = require('../models/editLesson');
async function editLesson(req,res){
    const validationMessage = validateParameters(req.body);
    if(validationMessage){
        res.status(400).send(validationMessage);
    }else{
        const ans = await editLessonModel(req.body);
        res.status(200).send(ans);
    }
};

function validateParameters(body){
    const {idLesson} = body;

    if(!idLesson || typeof idLesson !== 'string') return "INVALID ID LESSON";

    return null;
};

module.exports = editLesson;