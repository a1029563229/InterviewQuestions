function selectionSort(arr) {
	for (let i = 0; i < arr.length - 1; i++) {
		let min = i;
		for (let j = i + 1; j < arr.length; j++) {
			if (arr[j] < arr[min]) min = j;
		}
		const temp = arr[i];
		arr[i] = arr[min];
		arr[min] = temp;
	}
	return arr;
}

console.log(selectionSort([5, 6, 1, 2, 5, 2, 21, 421, 12, 1, 21, 121, 2, 121, 13123, -1212, 3123, -1]));