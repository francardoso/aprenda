
const getAnswersTotalModel = require('../../models/reports/getAnswersTotal');

async function getAnswersTotal(req,res){
    const validationMessage = validateParameters(req.query);
    if(validationMessage){
        res.status(400).json({error: validationMessage});
    }else{
        const ans = await getAnswersTotalModel();
        res.status(200).json(ans);
    }
};

function validateParameters(body){
    return null;
};

module.exports = getAnswersTotal;