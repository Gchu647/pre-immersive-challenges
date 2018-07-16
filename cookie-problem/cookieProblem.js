module.exports = function cookieProblem(array) {
  // write your code in here
  var maxnum = Math.max.apply(null, array);
  var difference = 0;


  for (let i = 0; i < array.length; i++) {
      difference += (maxnum - array[i]);
  }

  return difference;

}