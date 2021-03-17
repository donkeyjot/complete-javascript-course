// Remember, we're gonna use strict mode in all scripts now!
// "use strict";

// let birthYear = 1990;

// const calcAge = birthYear => 2037 - birthYear;
// //BUGx:x

// console.log('Hello there!');

const measureKelvin = function () {
  const measurement = {
    type: "temp",
    unit: "celsius",
    value: Number(prompt("Degrees celsius:")),
  };

  console.log(measurement.value);

  const kelvin = measurement.value + 273;
  return kelvin;
};

console.log(measureKelvin());
