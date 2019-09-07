const Lesson = require('../schemas/Lesson');
const quest = [
            {
                type: 'single',
                title: 'O que é uma api? ',
                alternatives :[
                    {
                        order:0,
                        title: 'é uma interface de troca de mensagens',
                        selected: true,
                    },
                    {
                        order:1,
                        title: 'não sei',
                        selected: false,
                    },
                    {
                        order:2,
                        title: 'todas as anteriores',
                        selected: false,
                    },
                ]
            },
            {
                type: 'multiple',
                title: 'quais são os paradigmas de programação',
                alternatives:[
                    {
                        order:0,
                        title: 'Imperativa',
                        selected: true,
                    },
                    {
                        order:1,
                        title: 'funcional',
                        selected: true,
                    },
                    {
                        order:2,
                        title: 'tipada',
                        selected: false,
                    },
                ]
            }
        ]
async function addLesson(context){
    const newLesson = new Lesson({
        questions: quest,
        students: ['5d619429621b372049e78366']
    })
    const savedLesson = await newLesson.save();
    return savedLesson;
};

module.exports = addLesson;