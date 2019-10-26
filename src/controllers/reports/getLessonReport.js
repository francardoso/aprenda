const getLessonReportModel = require('../../models/reports/getLessonReport');
async function getLessonReport(req,res){
    const validationMessage = validateParameters(req.query);
    if(validationMessage){
        res.status(400).json({error: validationMessage});
    }else{
        const ans = await getLessonReportModel(req.query);
        res.status(200).json(ans);
    }
}

function validateParameters(body){
    const { idLesson } = body;
    if(typeof idLesson !== 'string' || idLesson === "") return "INVALID ID LESSON";
    return null;
};

module.exports = getLessonReport;