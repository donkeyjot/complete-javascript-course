"use strict";

// let hasDriversLicence = false;
// const passTest = true;

// if (passTest) hasDriversLicence = true;
// if (hasDriversLicence) console.log(passTest);

// function logger(name) {
//   console.log(`My name is ${name}!`);
// }

// logger("Ondrej");
// logger("TOmas");

// function calcAge1(birthYear) {
//   return 2037 - birthYear;
// }

// const age1 = calcAge1(1990);
// console.log(age1);

// const calcAge2 = function (birthYear) {
//   return 2037 - birthYear;
// };

// const age2 = calcAge2(1990);
// console.log(age1, age2);

// const calcAge3 = (birthYear) => 2037 - birthYear;
// const age3 = calcAge3(1990);
// console.log(age3);

//add elements
const friends = ["Michael", "Steven", "Peter"];
const newLength = friends.push("Jay");
console.log(friends);
console.log(newLength);

friends.unshift("John");
console.log(friends);

//remove elements
const popped = friends.pop();
console.log(popped);
console.log(friends);

friends.shift();
console.log(friends.indexOf("Peter"));

console.log(friends.includes("Peter"));

const dinner = {
  dish: "big",
  portions: 4,
};
console.log(dinner);
console.log(dinner.portions);
console.log(dinner["por" + "tions"]);

console.log(dinner.portions);
console.log(dinner.portions);
console.log(dinner.portions);
