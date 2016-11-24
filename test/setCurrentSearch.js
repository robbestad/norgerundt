const getQueryParam = require('../src/utils/getQueryParam');

var assert = require('assert');
describe('q', function () {
	it('should return "søster" when location has a single query', function () {
		const location = {href: '/?q=søster'};
		assert.equal('søster', getQueryParam('q', location));
	});
});
