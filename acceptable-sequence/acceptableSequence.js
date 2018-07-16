module.exports = function acceptableSequence(str) {
  // write your code here
  for (let i = 0; i < str.length; i++) {
    if(str[i].match(/[a-zA-Z]/) ) {
      if( (str[i+1]!=="+" && str[i-1]!=="+") || (str[i+1]===undefined) || (str[i-1]===undefined) ) {
        return false;
      }

    }

    return true; //put the return after all the for loop is ran.
  }

}