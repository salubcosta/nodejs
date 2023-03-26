const inquirer = require("inquirer");
const chalk = require("chalk");

questions = [
  {
    name: "name",
    message: "Qual é seu nome? ",
  },
  {
    name: "age",
    message: "Qual é sua idade?",
  },
];

/**
 * Não circulei o inquirer no try catch por que já existe um then().catch()
 */
inquirer
  .prompt(questions)
  .then((response) => {
    console.log(chalk.bgYellow.black(`Your name is: ${response.name}`));
    console.log(chalk.bgYellow.black(`Your age is: ${response.age}`));
  })
  .catch((err) =>
    console.log(`Something went wrong! Sorry about it. Error: ${err}`)
  );
