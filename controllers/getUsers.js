module.exports = getUsers;

function getUsers(req, res){
    const users =  [
        {
            id: '1',
            name:'Fran'
        },
        {
            id: '2',
            name: 'André'
        },
        {
            id: '3',
            id: 'Arely'
        }
    ];

    res.send(users);
}