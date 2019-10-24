const getStudentsTotalModel = require('../../models/reports/getStudentsTotal');

async function getStudentsTotal(req,res){
    const validationMessage = validateParameters(req.query);
    if(validationMessage){
        res.status(400).json({error: validationMessage});
    }else{
        const ans = await getStudentsTotalModel();
        res.status(200).json(ans);
    }
};

function validateParameters(body){
    return null;
};

module.exports = getStudentsTotal;