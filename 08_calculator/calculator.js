const add = function(a,b) {
	return a + b;
};

const subtract = function(a,b) {
	return a - b;
};

const sum = function(ar) {
	return ar.reduce((sum, current)  => sum + current, 0);
};

const multiply = function(ar) {
  return ar.reduce((sum, current)  => sum * current, 1);
};

const power = function(a,b) {
	return a **b;
};

const factorial = function(n) {
	let res = 1;

  if (n === 0 ){
    return res;
  }
  for (let i = 2; i <= n; i++){
    res = res * i;
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
