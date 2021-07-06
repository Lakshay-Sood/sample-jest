const { add, myForEach } = require('./hello');

// test('adding 2 numbers -- async await', async () => {
// 	const res = await add(2, 4);
// 	// console.log(typeof res, res);
// 	expect(res).toBe(6);
// });

jest.setTimeout(2000);

test('adding 2 numbers -- promise', async () => {
	const res = await add(2, 4);
	console.log(typeof res, res);
	expect(res).toBe(6);
});
test('adding 2 numbers -- promise', async () => {
	const res = await add(2, 4);
	console.log(typeof res, res);
	expect(res).toBe(6);
});
test('adding 2 numbers -- promise', async () => {
	const res = await add(2, 4);
	console.log(typeof res, res);
	expect(res).toBe(6);
});
test('adding 2 numbers -- promise', async () => {
	const res = await add(2, 4);
	console.log(typeof res, res);
	expect(res).toBe(6);
});

// const mockCallback = jest
// 	.fn((ele) => {
// 		console.log(ele);
// 		return ele * 10;
// 	})
// 	.mockName('this is my mock name');

// describe('mock callbacks describe', () => {
// 	test('mock legth', () => {
// 		expect(mockCallback.mock.calls.length).toBe(0);
// 	});
// 	test('mock called', () => {
// 		expect(mockCallback).not.toHaveBeenCalled();
// 	});
// });
