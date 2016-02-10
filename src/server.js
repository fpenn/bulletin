// All requirements

var express = require('express');
var bodyParser = require('body-parser');
var fs = require('fs');
var pg = require('pg');
var Sequelize = require('sequelize');


var app = express();
app.use(bodyParser.urlencoded({
	extended: true
}));

//Set up sequelize

var sequelize = new Sequelize('bulletinboard', 'postgres', null, {
	host: 'localhost',
	dialect: 'postgres'
});

//var connectionString = "postgres://postgres:0000@localhost/bulletin";
var connectionString = 'postgres://' + process.env.POSTGRES_USER + ':' + process.env.POSTGRES_PASSWORD + '@localhost/bulletinboard';


//Set up correct jade folder
app.set('views', __dirname + '/views');
app.set('view engine', 'jade');

// Make a model for posting messages.

var Post = sequelize.define('messages', {
	id: {
		type: Sequelize.INTEGER,
		primaryKey: true,
		autoIncrement: true
	},

	title: {
		type: Sequelize.STRING
	},

	body: {
		type: Sequelize.TEXT
	}
});


//Routes


app.get('/', function(request, response) {

	response.render('page1');

});



app.get('/view', function(request, response) {
	
	
 	
	Post.findAll().then(function(posts) {
		var data = posts.map(function(post) {
			return {
				title: post.dataValues.title,
				body: post.dataValues.body
			};
		});

		//console.log(data);
		
		
		response.render('page2', {data: data});

	});


	


});

// What happens when client submits message.

app.post('/data', function(request, response) {

	var title = request.body.title
	var message = request.body.message
		//console.log(title);
		//console.log(message);

	// sync new message with the database

	sequelize.sync().then(function() {

		Post.create({

			title: title,
			body: message

		});



	});


});

var server = app.listen(3000);