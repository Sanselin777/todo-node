import { inquirerMenu, pause } from "./helpers/inquirer.js";

console.clear();

const main = async () => {
  let opt = "";
  do {
    opt = await inquirerMenu();
    if (opt !== "0") await pause();
    console.log({ opt });
  } while (opt !== "0");
};

main();
