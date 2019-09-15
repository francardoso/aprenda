const getLessonModel = require('../models/getLesson');
async function getLesson(req,res){
    const validationMessage = validateParameters(req.query);
    if(validationMessage){
        res.status(400).send({error:validationMessage});
    }else{
        const ans = await getLessonModel(req.query);
        res.status(200).send(ans);
    }
};

function validateParameters(body){
    const { idLesson } = body;
    if(typeof idLesson !== "string" || idLesson === "") return "INVALID ID LESSON";

    return null;
};

module.exports = getLesson;