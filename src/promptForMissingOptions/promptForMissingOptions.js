import arg from "arg";
import inquirer from "inquirer";

export async function promptForMissingOptions(options) {
  const defaultTemplate = "Component";
  if (options.skipPrompts) {
    return {
      ...options,
      template: options.template || defaultTemplate,
    };
  }

  const questions = [];
  if (!options.template) {
    questions.push({
      type: "list",
      name: "template",
      message: "Please choose which template to use",
      choices: ["Component", "ComponentStories", "Function", "Hook", "Machine"],
      default: defaultTemplate,
    });
  }
  if (!options.name) {
    questions.push({
      type: "input",
      name: "name",
      message: "Please write a name",
      default: "MyComponent",
    });
  }
  if (!options.name) {
    questions.push({
      type: "input",
      name: "target",
      message: "Please write a target path",
      default: "src",
    });
  }

  const answers = await inquirer.prompt(questions);
  return {
    ...options,
    template: options.template || answers.template,
    name: options.name || answers.name,
    target: options.target || answers.target
  };
}
