const mongoose = require('mongoose');

const Answer = new mongoose.Schema({
    idLesson: mongoose.SchemaTypes.ObjectId,
    idStudent: mongoose.SchemaTypes.ObjectId,
    questions:[
        {
            _id: false,
            index: Number,
            questionAnswers: {
                _id: false,
                type: [Number]
            },
            studentAnswers: {
                _id: false,
                type: [Number]
            },
            answered: Boolean
        }
    ]
});

module.exports = mongoose.model('Answer', Answer);