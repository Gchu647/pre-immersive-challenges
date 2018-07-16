module.exports = function countByMultiples(length, x) {
  // write your code in here
  var multiplesof = [];
  var num = x;

  for (let i = 0; i < length; i++) {
      multiplesof[i] = num*(i+1);                  
  }

  return multiplesof
}