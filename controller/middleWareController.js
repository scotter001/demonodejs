const db = require('../db')
module.exports.Auth =  (req, res, next) =>{
	if(req.cookies.name){
		res.redirect('')
		return;
	}

	const user = db.get('users',find({id:req.cookies.name}).value());
	next();
}