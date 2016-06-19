var should = require('should'),
	node_fw = require('..');

describe('app', function() {
	describe('.use', function() {
		it('should be an Function', function() {
			var app = node_fw;

			(app.use).should.be.a.instanceOf(Function);
		});
	});
});