const name = "Salumão";
let birth = 1991;
const currentYear = new Date();

console.log(
  `Hello ${name}, you is ${currentYear.getFullYear() - birth} years old!`
);
