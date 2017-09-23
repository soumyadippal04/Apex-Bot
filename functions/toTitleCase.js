/*
 * Returns the same string but with the first letter of each words being uppercase.,
 *
 * @param text The input text.
 *
 * @return The text with first letters of each words in uppercase.
 */
module.exports = (str) => {
	return str.replace(/\w\S*/g, function(txt){return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();});
}