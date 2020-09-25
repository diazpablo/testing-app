function maxSubarraySum(input, num) {
	let i = 0;
	let maxCount = null;
	while (i <= input.length - num) {
		let sum = 0;
		for (let j = 0; j < num; j++) {
			sum += input[j + i];
		}

		if (!maxCount || sum > maxCount)
			maxCount = sum;

		i++;
	}
	console.log(maxCount);
	return maxCount;
}

maxSubarraySum([ 1, 2, 5, 2, 8, 1, 5 ], 4)
// 17

maxSubarraySum([ 1, 2, 5, 2, 8, 1, 5 ], 2)
// 10

maxSubarraySum([ 4, 2, 1, 6 ], 1)
// 6

maxSubarraySum([ 4, 2, 1, 6, 2 ], 4)
// 13

maxSubarraySum([], 4)
// null