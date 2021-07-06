exports.add = (a, b) => {
	return new Promise((resolve) =>
		setTimeout(() => {
			resolve(a + b);
		}, 1500)
	);
};

exports.myForEach = (arr, callback) => {
	for (let index = 0; index < arr.length; index++) {
		callback(arr[index]);
	}
};
