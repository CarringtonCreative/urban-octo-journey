#!/usr/bin/env node

import chalk from "chalk";
import boxen from "boxen";
import yargs from "yargs/yargs";
import readline from "readline";

const argv = yargs(process.argv.slice(2)).argv;

// let reader = readline.createInterface({
//   input: process.stdin,
//   output: process.stdout,
// });

// reader.question(`What's your name?`, (name) => {
//   console.log(`Hi ${name}!`);
//   reader.close();
// });

// if (argv.ships > 3 && argv.distance < 53.5) {
//   console.log("Plunder more riffiwobbles!");
// } else {
//   console.log("Retreat from the xupptumblers!");
// }

// const greeting = chalk.white.bold("Hello!");

// const boxenOptions = {
//   padding: 2,
//   margin: 2,
//   borderStyle: "round",
//   borderColor: "green",
//   backgroundColor: "#fff",
// };
// const msgBox = boxen(greeting, boxenOptions);

// console.log(msgBox);
