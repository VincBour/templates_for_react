import chalk from "chalk";
import { parseArgumentsIntoOptions } from "./parseArgumentsIntoOptions/parseArgumentsIntoOptions.js";
import { promptForMissingOptions } from "./promptForMissingOptions/promptForMissingOptions.js";
import { createProject } from "./createProject/createProject.js";
import figlet from "figlet";

export async function cli(args) {
  console.log(
    "%s",
    chalk.blue(figlet.textSync("Templates CLI", { horizontalLayout: "fitted" }))
  );
  try {
    let options = parseArgumentsIntoOptions(args);
    options = await promptForMissingOptions(options);
    createProject(options);
    console.log("%s template ready", chalk.green.bold("DONE"));
    return true;
  } catch (error) {
    console.log("Something went wrong !!");
    process.exit(1);
  }
}
