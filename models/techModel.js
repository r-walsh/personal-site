var mongoose = require('mongoose'),
	Schema = mongoose.Schema;

var Tech = Schema({
	name: { type: String, required: true },
	current: { type: Boolean, required: true }
})