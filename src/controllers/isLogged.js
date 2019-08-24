function isLogged(req, res){
    const validationMessage = validateParameters(req.body);
    if(validationMessage){
        res.status(400).send(validationMessage);
    }else{
        if(req.session && req.session.APRENDA && req.session.APRENDA.idUser){
            res.status(200).send({
                isLogged: true,
                idUser: req.session.APRENDA.idUser
            });
        }else{
            res.status(200).send({
                isLogged: false,
            })
        }
    }
};
function validateParameters(body){
    return null;
};

module.exports = isLogged;