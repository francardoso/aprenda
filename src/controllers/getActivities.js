function getActivities(req, res){
    const activities = [
        {
            id: '1',
            title: 'aquele',
            gabarito : 3,
        },
        {
            id: '2',
            title: 'aquele',
            gabarito : 1,
        },
        {
            id: '3',
            title: 'aquele',
            gabarito : 4,
        }
    ];

    res.send(activities);
}

module.exports = getActivities;