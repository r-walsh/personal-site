var express = require('express'),
	app = express(),
	mongoose = require('mongoose'),
	bodyParser = require('body-parser'),
	cors = require('cors'),
	port = 3000,
	dbName = 'personalSite',
	mongoUri = 'mongodb://localhost:27017/' + dbName;

app.use(bodyParser.json());
app.use(cors());
app.use(express.static(__dirname + '/'));

mongoose.connect(mongoUri);
mongoose.connection.once('open', function() {
	console.log('connected to mongo at ' + mongoUri);
});

app.listen(port, function() {
	console.log('Listening on ' + port);
});
