const getStudentReportModel = require('../../models/reports/getStudentReport');

async function getStudentReport(req,res){
    const validationMessage = validateParameters(req.query);
    if(validationMessage){
        res.status(400).json({error: validationMessage});
    }else{
        const ans = await getStudentReportModel(req.query);
        res.status(200).json(ans);
    }
};

function validateParameters(body){
    const { idStudent } = body;
    if(typeof idStudent !== 'string' || idStudent === "") return "INVALID ID STUDENT";
    return null;
};

module.exports = getStudentReport;