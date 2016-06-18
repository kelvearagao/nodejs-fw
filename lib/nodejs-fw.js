/**
 * Module dependencies.
 * @private
 */

var http = require('http'),
	util = require('util');

/**
 * Module variables.
 * @private
 */

var middleweres = [];

/**
 * Add middleweres.
 * @public
 */

exports.use = function(fn) {
	middleweres.push(fn);
};

/**
 * Create a server and listen requests.
 * @public
 */

exports.listen = function(port, address) {
	http.createServer(function(req, res) {
		console.log(req.url);

		for( var i in middleweres )
		{
			console.log('Processando middlewere' + ( parseInt(i) + 1 ) );

			middleweres[i].run(req, res);
		}
		
		console.log('fim');
		res.end();

	}).listen(port, address);
};