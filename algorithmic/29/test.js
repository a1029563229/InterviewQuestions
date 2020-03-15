/**
 * @param {string} address
 * @return {string}
 */
var defangIPaddr = function(address) {
	return address.replace(/\./g, "[.]");
};