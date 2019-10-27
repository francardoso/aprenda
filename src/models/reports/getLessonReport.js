const Lesson = require('../../schemas/Lesson');
const Answer = require('../../schemas/Answer');
async function getLessonReport(context){
    const { idLesson } = context;
    const lesson = await findLesson(idLesson);
    if(!lesson) return {error:'NO LESSON FOUND'}
    const lessonAnswers = await findLessonAnswers(idLesson);
    return joinLessonWithAnswers(lesson.toObject(), lessonAnswers);
}

function findLesson(id){
    return new Promise((resolve, reject)=>{
        Lesson.findById(id,(err, lesson)=>{
            if(err){
                reject(err);
            }else{
                resolve(lesson);
            }
        })
    });
}

function findLessonAnswers(idLesson){
    return new Promise((resolve, reject)=>{
        Answer.find({idLesson}, (err, answers)=>{
            if(err){
                reject(err);
            }else{
                resolve(answers);
            }
        });
    });
}

function joinLessonWithAnswers(lesson, answers){
    const lessonWithAns = {...lesson, respondents: []};
    answers.forEach((ans) =>{
        const ansObj = ans.toObject();
        ansObj.questions.forEach((quest)=>{
            lessonWithAns.respondents.push(ansObj.idStudent);
            const isCorrect = checkAnswerToQuestion(quest.studentAnswers, quest.questionAnswers);
            if(isCorrect){
                if(!lessonWithAns.questions[quest.index].correctStudents){
                    lessonWithAns.questions[quest.index].correctStudents = [ansObj.idStudent]
                }else{
                    lessonWithAns.questions[quest.index].correctStudents.push(ansObj.idStudent);
                }
            }else{
                if(!lessonWithAns.questions[quest.index].incorrectStudents){
                    lessonWithAns.questions[quest.index].incorrectStudents = [ansObj.idStudent]
                }else{
                    lessonWithAns.questions[quest.index].incorrectStudents.push(ansObj.idStudent);
                }
            }
        });
    });
    return lessonWithAns;
}

function checkAnswerToQuestion(studentAns, questionAns){
    return studentAns.sort().join(',') === questionAns.sort().join(',');
}

module.exports = getLessonReport;