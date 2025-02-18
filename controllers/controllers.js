//Controllers are here 

exports.home = function(req, res){
    if(req.query.name === undefined){
        res.redirect('/?name=Guest');
    }
    res.render('index', req.query);
};

