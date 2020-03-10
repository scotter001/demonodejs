const db = require('../db')
const shortid = require('shortid');

module.exports.index = (req, res) => {
    res.render('users/index', {
        users: db.get('users').value()
    })
};
module.exports.search = (req, res) => {
    var q = req.query.q;
    var filterSearch = db.get('users').value().filter(user => user.name.toLowerCase().indexOf(q.toLowerCase()) !== -1);
    res.render('users/index', {
        users: filterSearch
    });
};
module.exports.view = (req, res) => {
    var id = req.params.id;
    var user = db.get('users').find({ id: id }).value();
    res.render('users/view', { user: user })
};
module.exports.getCreate = (req, res) => {
    res.render('users/create')
};
module.exports.postCreate = (req, res) => {
    req.body.id = shortid.generate();
     var errors = [];
    if(!req.body.name){
        errors.push('Name require')
    }
    if(!req.body.phone){
        errors.push('phone require')
    }
    if (errors.length) {
        res.render('users/create',{
            errors: errors,
            value:req.body
        })
    }
    db.get('users').push(req.body).write();
    res.redirect('/users')
};