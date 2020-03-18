/**
 * @param {string[]} book
 */
var WordsFrequency = function (book) {
	this.books = {};
	for (let i = 0; i < book.length; i++) {
		const word = book[i];
		if (!this.books[word]) this.books[word] = 0
		this.books[word]++;
	}
};

/** 
 * @param {string} word
 * @return {number}
 */
WordsFrequency.prototype.get = function (word) {
	return this.books[word] || 0;
};

/**
 * Your WordsFrequency object will be instantiated and called as such:
 * var obj = new WordsFrequency(book)
 * var param_1 = obj.get(word)
 */