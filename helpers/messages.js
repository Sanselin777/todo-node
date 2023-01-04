require("colors");

const showMenu = () => {
  /* we convert in promises */
  return new Promise((resolve) => {
    console.log("===========================".green);
    console.log("    Select an option       ".green);
    console.log("===========================\n".green);

    console.log(`${"1.".green} Create task`);
    console.log(`${"2.".green} List tasks`);
    console.log(`${"3.".green} List completed tasks`);
    console.log(`${"4.".green} List pending tasks`);
    console.log(`${"5.".green} Complete task(s)`);
    console.log(`${"6.".green} Delete task`);
    console.log(`${"0.".green} Exit\n`);

    //stdin: standard input, node knows that we are going to write something, and it is going to wait for us to write something
    //stdout: standard output, node knows that we are going to write something, and it is going to wait for us to write something

    const readline = require("readline").createInterface({
      input: process.stdin,
      output: process.stdout,
    });

    readline.question("Select an option: ", (opt) => {
      readline.close();
      resolve(opt);
    });
  });
};

const pause = () => {
  return new Promise((resolve) => {
    const readline = require("readline").createInterface({
      input: process.stdin,
      output: process.stdout,
    });
    readline.question(`Please Press ${"Enter".green}`, (opt) => {
      readline.close();
      resolve();
    });
  });
};

module.exports = {
  showMenu,
  pause,
};
