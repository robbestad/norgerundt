//pass location.href
module.exports = function getQueryParam(param, location) {
	const paddedParam = `${param}=`;
	const q = location.href.substr(location.href.indexOf(paddedParam));
	const value = q.split(paddedParam);
	let result = value[1];

	if(!result){
		return;
	}
	const hasMore = result.indexOf('&');

	if (hasMore !== -1) {
		const splitQuery = result.split('&');
		result = splitQuery[0];
	}

	return result;
};

