const checkLessonQuestionAnswerModel = require('../models/checkLessonQuestionAnswer');

async function checkLessonQuestionAnswer(req,res){
    const validationMessage = validateParameters(req.body);
    if(validationMessage){
        res.status(400).json({error: validationMessage});
    }else{
        const ans = await checkLessonQuestionAnswerModel(req.body);
        res.status(200).send(ans);
    }
};

function validateParameters(body){
    const { idLesson, idStudent,questionIndex, answer } = body;

    if(typeof idLesson !== 'string' || idLesson === "") return "INVALID ID LESSON";
    if(typeof idStudent !== 'string' || idStudent === "") return "INVALID ID STUDENT";
    if(isNaN(questionIndex)) return "INVALID QUESTION INDEX";
    if(answer && !Array.isArray(answer)) return "INVALID ARRAY OF ANSWER"

    return null;
};

module.exports = checkLessonQuestionAnswer;