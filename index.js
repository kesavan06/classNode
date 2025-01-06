const chalk = require("chalk");
console.log(chalk.blue.bold.inverse("Hiiii"));

var figlet = require("figlet");

figlet("Hello", function (err, data) {
  if (err) {
    console.log("Something went wrong...");
    console.dir(err);
    return;
  }
  console.log(chalk.green(data));
});
