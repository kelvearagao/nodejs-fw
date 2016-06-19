var should = require('should'),
	node_fw = require('..');

describe('app', function() {
	it('should be Object', function() {
		var app = node_fw;

		(app).should.be.an.instanceOf(Object);
	});
});