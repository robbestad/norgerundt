const replaceQueryParam = require('./replaceQueryParam');
module.exports = (query, page) => {
	let hrefLocation = replaceQueryParam('q', query, location);
	hrefLocation = replaceQueryParam('page', page, {href: hrefLocation});
	const splitHttp = hrefLocation.split('/?')
	let l = hrefLocation;
	if (splitHttp.length > 0) {
		l = `?${splitHttp[1]}`;
	}

	if (history.pushState) {
		history.pushState(null, null, l);
	}
	else {
		location.href = l;
	}
	window.scrollTo(0, 0);
};
