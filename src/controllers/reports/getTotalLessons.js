
const getTotalLessonsModel = require('../../models/reports/getTotalLessons');

async function getTotalLessons(req,res){
    const validationMessage = validateParameters(req.query);
    if(validationMessage){
        res.status(400).json({error: validationMessage});
    }else{
        const ans = await getTotalLessonsModel();
        res.status(200).json(ans);
    }
};

function validateParameters(body){
    return null;
};

module.exports = getTotalLessons;