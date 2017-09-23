/*
 * Shuffles an array,
 *
 * @param text The input array.
 *
 * @return the same array but shuffled.
 */
module.exports = (array) => {
	for (var i = array.length - 1; i > 0; i--) {
    var j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]]=[array[j], array[i]]            
  }
  return array;
}