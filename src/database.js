var Sequelize = require('sequelize');
var sequelize = new Sequelize('bulletin', 'postgres', null, {
	host: 'localhost',
	dialect: 'postgres'
});

var Post = sequelize.define('post', {
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

sequelize.sync().then(function () {
	Post.create({

		
		title: 'birds are chirpy',
		body: 'chirp chirp'
	});

	Post.create({

		
		title: 'rabbits jump pretty high',
		body: 'but not as high as cats'
	});
});