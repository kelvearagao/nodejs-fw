var should = require('should'),
	node_fw = require('..');

describe('app', function() {
	describe('.listen', function() {
		it('should be an Function', function() {
			var app = node_fw;

			(app.listen).should.be.a.instanceOf(Function);
		});
	});
});