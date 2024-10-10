const convertToCelsius = function(fahrenheit) {
  const res = (fahrenheit -32) * 5 / 9;
  if (Number.isInteger(res)) {
    return res;
  }
  return Number(res.toFixed(1));
};

const convertToFahrenheit = function(celsius) {
  const res = (celsius * 9 / 5) + 32;
  if (Number.isInteger(res)) {
    return res;
  }
  return Number(res.toFixed(1));
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
