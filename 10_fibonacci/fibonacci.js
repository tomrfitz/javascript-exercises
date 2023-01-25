const fibonacci = function (n) {
  let num = parseInt(n);
  if (num < 0) {
    return "OOPS";
  }
  let fiboOne = 0;
  let fiboTwo = 1;
  let sum = 0;
  for (i = 0; i < num; i++) {
    sum = fiboOne + fiboTwo;
    fiboOne = fiboTwo;
    fiboTwo = sum;
  }
  return fiboOne;
};

// Do not edit below this line
module.exports = fibonacci;
