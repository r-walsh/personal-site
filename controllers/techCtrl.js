var Tech = require('../models/techModel.js');

module.exports = {

	getTechs: function( req, res ) {
		Tech.find()
			.then(function( data ) {
				res.send(data);
			});
	},

	suggestTech: function( req, res ) {
		new Tech(req.body).save(function( err, data ) {
			if (err) {
				res.status(500).send(err);
			} else {
				res.send(data);
			}
		})
	}

}