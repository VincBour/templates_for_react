import chalk from "chalk";
import { parseArgumentsIntoOptions } from "./parseArgumentsIntoOptions/parseArgumentsIntoOptions.js";
import { promptForMissingOptions } from "./promptForMissingOptions/promptForMissingOptions.js";
import { createProject } from "./createProject/createProject.js";
export async function cli(args) {
  console.log('%s creating template',chalk.blue.bold("START"));
  let options = parseArgumentsIntoOptions(args);
  options = await promptForMissingOptions(options);
  await createProject(options);
  console.log('%s template ready',chalk.green.bold("DONE"));
  return true;
}
