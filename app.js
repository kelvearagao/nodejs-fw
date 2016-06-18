/**
 * Constantes
 *
 */
const LIB_PATH = './lib/';

/**
 * Requires
 *
 */
var app  = require(LIB_PATH + 'node-fw');


var test1 = function() {

	var run = function(req, res) {
		console.log('test 1');
	};

	return {
		run: run
	};
}

var test2 = function() {

	var run = function(req, res) {
		console.log('test 2');
	};

	return {
		run: run
	};
}

var test3 = function() {

	var run = function(req, res) {
		console.log('test 3');
	};

	return {
		run: run
	};
}

app.use(test1());
app.use(test2());
app.use(test3());

app.listen(3000, '127.0.0.1');

/*
http.createServer(function(req, res) {
	console.log(req.url);
	res.end();
}).listen('2000', '127.0.0.1');
*/

console.log('Server running at 127.0.0.1:3000');