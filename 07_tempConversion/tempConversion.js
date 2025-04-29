const convertToCelsius = function(fahr) {
  let celsius = (fahr - 32) / 1.8;
  return Math.round(celsius * 10) / 10;
};

const convertToFahrenheit = function(cel) {
  let fahr = cel * 1.8 + 32;
  return Math.round(fahr * 10) / 10;
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
