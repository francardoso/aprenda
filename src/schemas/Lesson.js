const mongoose = require('mongoose');

const Lesson = new mongoose.Schema({
    students: [
        mongoose.SchemaTypes.ObjectId
    ],
    questions: [
        {
            _id: false,
            type: {
                type: String,
                default: 'single',
                required: true,
            },
            title: {
                type: String,
                required: true,
            },
            alternatives: [
                {
                    _id: false,
                    order: Number,
                    title: String,
                    selected: Boolean
                }
            ]

        }
    ],
    // students: [],
    // questions: [],
});

module.exports = mongoose.model('Lesson', Lesson);
// const lesson = {
//     id: 'aa7171a8',
//     students: ['idaw3','aiawi12', 'wiaw'],
//     questions: [
//         {
//             type: 'single',
//             title: 'O que é uma api? ',
//             alternatives :[
//                 {
//                     order:0,
//                     title: 'é uma interface de troca de mensagens',
//                     selected: true,
//                 },
//                 {
//                     order:1,
//                     title: 'não sei',
//                     selected: false,
//                 },
//                 {
//                     order:2,
//                     title: 'todas as anteriores',
//                     selected: false,
//                 },
//             ]
//         },
//         {
//             type: 'multiple',
//             title: 'quais são os paradigmas de programação',
//             alternatives:[
//                 {
//                     order:0,
//                     title: 'Imperativa',
//                     selected: true,
//                 },
//                 {
//                     order:1,
//                     title: 'funcional',
//                     selected: true,
//                 },
//                 {
//                     order:2,
//                     title: 'tipada',
//                     selected: false,
//                 },
//             ]
//         }
//     ]
// }