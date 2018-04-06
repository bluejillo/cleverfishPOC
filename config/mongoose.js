let env = process.env.NODE_ENV || 'development',
	config = require('./config')[env],
	mongoose = require('mongoose');

module.exports = function() {
	mongoose.Promise = global.Promise;
	let db = mongoose.connect(config.db);
	mongoose.connection.on('error', function(err){
		console.log('error could not connect to mongodb'.red);
	}).on('open', function(){
		console.log('connection established');
	});

	return db;
};