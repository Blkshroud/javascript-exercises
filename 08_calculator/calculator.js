const add = function() {
	let sum = arguments[0];
  for(let argPos = 1; argPos < arguments.length; argPos++){
    sum += arguments[argPos];
  }
  return sum;
};

const subtract = function() {
	let amount = arguments[0];
  for(let argPos = 1; argPos < arguments.length; argPos++){
    amount -= arguments[argPos];
  }
  return amount;
};

const sum = function(inputArray) {
  if(inputArray.length == 0){
    return 0;
  }
  let total = inputArray[0];
  for(let argPos = 1; argPos < inputArray.length; argPos++){
    total += inputArray[argPos];
  }
  return total;
};

const multiply = function(inputArray) {
  if(inputArray.length == 0){
    return 0;
  }
  let total = inputArray[0];
  for(let argPos = 1; argPos < inputArray.length; argPos++){
    total *= inputArray[argPos];
  }
  return total;
};

const power = function(num, power) {
  let amount = num;
  for(let i = 1; i < power; i++){
    amount *= num;
  }
  return amount;
};

const factorial = function(num) {
  if(num == 0 || num == 1){
    return 1;
  }
  let amount = num;
  for(let i = num-1; i > 0; i--){
    amount *= i;
  }
  return amount;
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
