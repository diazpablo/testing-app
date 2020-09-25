function highestOccurrence(arr) {
	let countedItems = [];
	return arr.reduce(function (ant, item) {
		if (countedItems.indexOf(item) < 0) {
			const count = arr.filter(function (it) {
				return it === item.length;
			});
			countedItems.push(item);
			if (count > ant.count) return { chars: [ item ], count };
			if (count === ant.count) return { chars: [ ...ant.chars, item ], count }
		}
		return ant;
	}, { chars: [], count: 0 }).chars;
}

console.log(highestOccurrence([ 2, 3, 2, 2, 2, 4, 2 ]));
// [2]

console.log(highestOccurrence([ 2, 3, 2, 3, 2, 3, 4 ]));
// [2, 3]

console.log(highestOccurrence([ 'a', 'b', 'c', 'a', 'a', 'a', 'a' ]));
// ['a']

console.log(highestOccurrence([ 'a', 'a', 2, 2, 2, 'a', 4 ]));
// ['a', 2]