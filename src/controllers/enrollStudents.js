const enrollStudentsModel = require('../models/enrollStudents');
async function enrollStudents(req, res){
    const validationMessage = validateParameters(req.body);
    if(validationMessage){
        res.status(400).send(validationMessage);
    }else{
        const ans = await enrollStudentsModel(req.body);
        if(!ans.error){
            res.status(200).send(ans);
        }else{
            res.status(400).send({error: ans.error});
        }
    }
};
function validateParameters(body){
    const { idLesson, students } = body;
    if(typeof idLesson !== "string" || idLesson === "") return "INVALID ID LESSON";
    if(!Array.isArray(students)) return "INVALID ARRAY OF STUDENTS";

    return null;
};

module.exports = enrollStudents;