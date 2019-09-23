const Lesson = require('../schemas/Lesson');
const updateAnswer = require('./updateAnswer');

async function checkLessonQuestionAnswer(context){
    const { idLesson, questionIndex, answer = [], idStudent } = context;
    const lesson = await findLesson(idLesson);
    if(!lesson) return {error: 'LESSON NOT FOUND'};
    const question = lesson.questions[questionIndex]
    const questionAnswers = question.options.reduce((acc, option, index)=>{
        if(option.selected){
            acc.push(index);
        }
        return acc;
    },[]);
    const correct = compareAnswer(answer, questionAnswers);

    await updateAnswer({
        idLesson,
        idStudent,
        question: {
            index: questionIndex,
            questionAnswers,
            studentAnswers: answer
        }
    });
    return correct;
};

function compareAnswer(userAns, realAns){
    return userAns.sort().join(',') === realAns.sort().join(',');
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

module.exports = checkLessonQuestionAnswer;