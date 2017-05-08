exports.DATABASE_URL = 'mongodb://ryrankin:Mn7u5g5a223@ds129651.mlab.com:29651/music-tab' ||
				process.env.DATABASE_URL || 
				global.DATABASE_URL ||
				'mongodb://localhost/music-tab';

exports.TEST_DATABASE_URL = (
	'mongodb://ryrankin:Mn7u5g5a223@ds129651.mlab.com:29651/music-tab' ||
	process.env.TEST_DATABASE_URL || 
	'mongodb://localhost/test-music-tab'
	);

exports.PORT = process.env.PORT || 8080;