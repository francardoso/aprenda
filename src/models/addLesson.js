const Lesson = require('../schemas/Lesson');
async function addLesson(context){
    const newLesson = new Lesson({
        ...context
    });
    const savedLesson = await newLesson.save();
    return savedLesson;
};

module.exports = addLesson;