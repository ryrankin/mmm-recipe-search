exports.DATABASE_URL = 'mongodb://admin:password@ds159517.mlab.com:59517/yummly-capstone' ||
				process.env.DATABASE_URL || 
				global.DATABASE_URL ||
				'mongodb://localhost/yummly-capstone';

exports.PORT = process.env.PORT || 8080;