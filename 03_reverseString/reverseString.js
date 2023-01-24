const reverseString = function (str) {
  let chars = str.split("");
  let result = "";
  result = chars.reverse().join("");
  return result;
};

// Do not edit below this line
module.exports = reverseString;
