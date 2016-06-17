var http = require('http');
var util = require('util');

var app = (function() {
	
	var middlewere = [];

	var use = function(fn) {
		middlewere.push(fn);
	};

	var listen = function(port, address) {

		http.createServer(function(req, res) {
			console.log(req.url);

			for( var i in middlewere )
			{
				console.log('Processando middlewere' + ( parseInt(i) + 1 ) );

				middlewere[i].run(req, res);
			}
			
			console.log('fim');
			res.end();

		}).listen(port, address);
	};

	return {
		use: use,
		listen: listen,
		middlewere: middlewere
	};
})();

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

app.listen(2000, '127.0.0.1');

/*
http.createServer(function(req, res) {
	console.log(req.url);
	res.end();
}).listen('2000', '127.0.0.1');
*/

console.log('ok');