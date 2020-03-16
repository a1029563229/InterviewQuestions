const m = new Map();
let i = 0;

/**
 * Encodes a URL to a shortened URL.
 *
 * @param {string} longUrl
 * @return {string}
 */
var encode = function(longUrl) {
	const encodeUrl = i++;
	m.set(encodeUrl, longUrl);
	return `http://tinyurl.com/${encodeUrl}`;
};

/**
 * Decodes a shortened URL to its original URL.
 *
 * @param {string} shortUrl
 * @return {string}
 */
var decode = function(shortUrl) {
	const code = shortUrl.split("http://tinyurl.com/")[1];
	return m.get(code);
};

/**
 * Your functions will be called as such:
 * decode(encode(url));
 */