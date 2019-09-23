const getStudentAnswerModel = require('../models/getStudentAnswer');
async function getLesson(req,res){
    const validationMessage = validateParameters(req.query);
    if(validationMessage){
        res.status(400).send({error:validationMessage});
    }else{
        const ans = await getStudentAnswerModel(req.query);
        res.status(200).json(ans);
    }
};

function validateParameters(body){
    const { idLesson, idStudent } = body;
    if(typeof idLesson !== "string" || idLesson === "") return "INVALID ID LESSON";
    if(typeof idStudent !== "string" || idStudent === "") return "INVALID ID STUDENT";

    return null;
};

module.exports = getLesson;