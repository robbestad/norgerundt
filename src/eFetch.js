module.exports = function (input) {
	const request = new Request('/search', {
		method: 'POST',
		body: JSON.stringify({
			input
		}),
		headers: new Headers({
			'Accept': 'application/json, text/plain, */*',
			'Content-Type': 'application/json'
		})
	});
	return fetch(request)
		.then(res => res.json())
};
