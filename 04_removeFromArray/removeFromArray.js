const removeFromArray = function (array, ...args) {
  for (let i = 0; i < args.length; i++) {
    if (array.includes(args[i])) {
      array.splice(array.indexOf(args[i]), 1); // searches for index of arg to be removed and splices at that idx in original array
    }
  }
  return array;
};

// Do not edit below this line
module.exports = removeFromArray;
