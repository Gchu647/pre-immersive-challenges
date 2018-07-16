module.exports = function checkAscOrder(numArray) {
  // write your code in here
  for (let i = 0; i < numArray.length; i++) {
    if(isNaN(numArray[i])=== false ) {
      if((numArray[i] > numArray[i+1]) || (numArray[i+1] === undefined) || (numArray[i-1 === undefined])) {
        return false;
      } else {
        return true;
      }

    }  
  }

}