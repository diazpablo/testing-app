function averagePair(input, number) {
	let i = 0;
	let result = false;
	while (i < input.length - 1) {
		const average = (input[i] + input[i + 1]) / 2;
		if (average === number) {
			result = true;
			break;
		}
		i++;
	}
	console.log(result);
	return result;
}

averagePair([ 1, 2, 3 ], 2.5)
// true

averagePair([ 1, 3, 3, 5, 6, 7, 10, 12, 19 ], 8)
// true
// I think is an error:
// [1,3] => 2 !== 8, [3,3] => 3 !== 8, [3,5] => 4 !== 8, [5,6] => 5.5 !== 8,
// [6,7] => 6.5 !== 8, [7,10] => 8.5 !== 8, [10,12] => 11 !== 8 , [12,19] => 15.5 !== 8

averagePair([ -1, 0, 3, 4, 5, 6 ], 4.1)
// false

averagePair([], 4)
// false