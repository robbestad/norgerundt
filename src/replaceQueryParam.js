//pass location.href
module.exports = function replaceQueryParams(param, value, location) {
	if (location.href.indexOf('?') === -1) {
		return `${location.href}?${param}=${value}`
	} else {
		if (location.href.indexOf(param) === -1) {
			return `${location.href}&${param}=${value}`
		} else {
			switch (param) {
				case "page":
					return location.href.replace(/page=(\d*)/, `${param}=${value}`);
				case "q":
					return location.href.replace(/q=(\w*)/, `${param}=${value}`);
			}
			// const re = new RegExp("/" + param + "=(\d*)/");
			// return location.href.replace(re, `${param}=${value}`);
		}
	}
};
