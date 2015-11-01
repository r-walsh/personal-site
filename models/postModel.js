var mongoose = require('mongoose'),
	Schema = mongoose.Schema;

var PostSchema = Schema({
	title: { type: String, required: true },
	date: { type: Date, required: true },
	content: { type: String, required: true }
});

module.exports = mongoose.model('Post', PostSchema);