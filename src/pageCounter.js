function counter(i) {
	const start = i * 3;
	return (start - 2) >= 0 ? start - 2 : (start - 1) >= 0 ? (start - 1) : 0
}

module.exports = function count(input) {
	const startCount = counter(input) - 1;
	const endCount = startCount + 2;
	return {startCount, endCount};
};
