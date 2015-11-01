var mongoose = require('mongoose'),
	Schema = mongoose.Schema;

var Tech = Schema({
	name: { type: String, required: true },
	current: { type: Boolean, default: false },
	approved: { type: Boolean, default: false }
})

module.exports = mongoose.model('Tech', Tech);