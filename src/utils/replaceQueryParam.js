//pass location.href
module.exports = function replaceQueryParams(param, value, location) {
	const locationHref = decodeURIComponent(location.href);

	if (locationHref.indexOf('?') === -1) {
		return `${locationHref}?${param}=${value}`
	} else {
		if (locationHref.indexOf(param) === -1) {
			return `${locationHref}&${param}=${value}`
		} else {
			switch (param) {
				case "page":
					return locationHref.replace(/page=(\d*)/, `${param}=${value}`);
				case "q":
					return locationHref.replace(/q=([a-zA-ZæøåÆØÅ]*)/, `${param}=${value}`);
			}
			// const re = new RegExp("/" + param + "=(\d*)/");
			// return locationHref.replace(re, `${param}=${value}`);
		}
	}
};
