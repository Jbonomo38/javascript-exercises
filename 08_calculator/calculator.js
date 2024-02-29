const add = function(numOne, numTwo) {
    return numOne + numTwo;
};

const subtract = function(numOne, numTwo) {
    return numOne - numTwo;
};

const sum = function(nums) {
    return nums.reduce((total, currentItem) => total + currentItem, 0);
};

const multiply = function(nums) {
    return nums.reduce((result, currentItem) => currentItem * result);
};

const power = function(num, pow) {
    if(pow === 1) return num;
    return num * power(num, pow - 1);
};

const factorial = function(num) {
  if(num === 0) return 1;
  if(num === 1) return num;
    return factorial(num - 1) * num;
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
