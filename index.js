// const chalk = require("chalk");
// console.log(chalk.blue.bold.inverse("Hiiii"));

// var figlet = require("figlet");

// figlet("Hello, world", function (err, data) {
//   if (err) {
//     console.log("Something went wrong...");
//     console.dir(err);
//     return;
//   }
//   console.log(chalk.green(data));
// });

// console.log(process.argv);

// yargs.command({
//   command: "greet",
//   description: "Greet name",
//   builder: {
//     name: {
//       describe: "name of user",
//       type: "string",
//       demandOption: true,
//     },
//     age: {
//       describe: "Age of user",
//       type: "number",
//       demandOption: true,
//     },
//   },
// handler: (argv) => {
//   console.log("Hello " + argv.name + "\n" + "Your age is " + argv.age);
// },
// });

// yargs.command({
//   command: "sum",
//   describe: "To add numbers",
//   builder: {
//     number1: {
//       describe: "Number one",
//       type: "number",
//       demandOption: true,
//     },
//     number2: {
//       describe: "Number two",
//       type: "number",
//       demandOption: true,
//     },
//   },
//   handler: (argv) => {
//     console.log(argv.number1 + argv.number2);
//   },
// });

// yargs.parse();

// const yargs = require("yargs");
// yargs.command({
//   command: "user",
//   description: "User command",
//   builder: (yargs) => {
//     return yargs.command({
//       command: "greet",
//       description: "Greet message",
//       builder: {
//         name: {
//           describe: "Name of the user",
//           type: "string",
//           demandOption: true,
//         },
//         age: {
//           describe: "Age of the user",
//           type: "number",
//           demandOption: true,
//         },
//       },
//       handler: (argv) => {
//         console.log("Hello " + argv.name + "\n" + "Your age is " + argv.age);
//       },
//     });
//   },
//   handler: () => {
//     console.log("Use a subcommand of 'user' to proceed.");
//   },
// });

const yargs = require("yargs");

yargs.command({
  command: "user",
  description: "User command",
  builder: {
    command: "greet",
    description: "Greet message",
    builder: {
      name: {
        describe: "Name of the user",
        type: "string",
        demandOption: true,
      },
      age: {
        describe: "Age of the user",
        type: "number",
        demandOption: true,
      },
    },
    handler: (argv) => {
      console.log("Hello " + argv.name + "\n" + "Your age is " + argv.age);
    },
  },
});
yargs.parse();
