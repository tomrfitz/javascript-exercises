const palindromes = function (str) {
  let newString = str.replace(/[^a-zA-Z]/g, "").toLowerCase();
  let reversedString = newString.split("").reverse().join("");
  return newString === reversedString;
};

// Do not edit below this line
module.exports = palindromes;
