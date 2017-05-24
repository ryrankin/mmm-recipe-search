import unirest from 'unirest';
import events from 'events';

const getApi = (endpoint, keyword) => {
	const emitter = new events.EventEmitter();
	if(endpoint === 'recipe'){
		endpoint = 'recipe/' + keyword;
	}
	const Request = unirest.get('http://api.yummly.com/v1/' + endpoint).qs(keyword)
	Request.end((res) => {
		if(res.ok){
			emitter.emit('end', res.body);
		}
		else{
			emitter.emit('error', res.code);
		}
	});
	return emitter;
}

exports.getApi = getApi;