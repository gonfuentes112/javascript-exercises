const add = function(a, b) {
	return a + b;
};

const subtract = function(a, b) {
	return a - b;
};

const sum = function(arr) {
  return arr.reduce((accum, current) => {
    return accum + current;
  }, 0);
	
};

const multiply = function(arr) {
  return arr.reduce((accum, current) => {
    return accum * current;
  }, 1);
	
};

const power = function(base, power) {
  if (power === 0) {
    return 1;
  }
  let res = 1;
  for (let i = 1; i <= power; i++) {
    res *= base;
  }
  return res;
	
};

const factorial = function(num) {
  if (num === 0 || num === 1) {
    return 1;
  }
  let res = 1;
  for (let i = 2; i <= num; i++){
    res *= i;
  }
  return res;
	
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
