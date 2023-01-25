const fibonacci = function (n) {
  let num = parseInt(n);
  if (num < 0) {
    return "OOPS";
  }
  const fibonacci = [1, 1];
  for (i = 2; i <= num; i++) {
    fibonacci.push(fibonacci[i - 1] + fibonacci[i - 2]);
  }
  return fibonacci[num - 1];
};

// Do not edit below this line
module.exports = fibonacci;
