const Answer = require('../schemas/Answer');

async function updateAnswer(context){
    const { idLesson, idStudent, question } = context;
    let lessonAnswer =  await findStudentAnsToLesson(idLesson,idStudent);
    if(!lessonAnswer){
        const newLessonAns = new Answer({
            ...context
        });
        lessonAnswer = await newLessonAns.save();
    }
    const questionIndex = lessonAnswer.questions.findIndex(el=>question.index === el.index);
    const newQuestions = [...lessonAnswer.questions];
    if(questionIndex === -1 ){
        newQuestions.push(question);
    }else{
        newQuestions[questionIndex] = question;
    }
    const newAnswer = await updateLessonAswers(lessonAnswer._id, newQuestions);
    return new Promise((resolve,reject)=>{
        resolve(newAnswer.questions);
    });
};

function findStudentAnsToLesson(idLesson, idStudent){
    return new Promise((resolve,reject)=>{
        Answer.findOne({idLesson,idStudent}, (err,answer)=>{
            if(err){
                reject(err);
            }else{
                resolve(answer);
            }
        })
    });
};

function updateLessonAswers(idAnswer,questions){
    const queryOptions ={
        new: true,
    }
    return new Promise((resolve,reject)=>{
        Answer.findByIdAndUpdate(idAnswer,{questions},queryOptions,(err, answer)=>{
            if(err){
                reject(err);
            }else{
                resolve(answer);
            }
        });
    });
};


module.exports = updateAnswer;