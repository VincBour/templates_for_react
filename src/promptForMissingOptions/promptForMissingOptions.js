import path from "path";
import fuzzy from "inquirer-fuzzy-path";
import inquirer from "inquirer";

inquirer.registerPrompt('fuzzypath', fuzzy);

export async function promptForMissingOptions(options) {
  const defaultTemplate = "Component";
  if (options.skipPrompts) {
    return {
      ...options,
      template: options.template || defaultTemplate,
    };
  }

  const questions = [{
    type: "confirm",
    name: "version",
    message: "Is your version of react >= 18 ?",
    default: false
  },{
    type: "list",
    name: "template",
    message: "Please choose which template to use",
    choices: ["TempComponent","BecComponent","Component", "ComponentWithStorybook", "Context", "Function", "Hook", "StoreZustand", "Machine", "AssignXstate", "GuardXstate", "useMutation", "useQuery"],
    default: defaultTemplate,
    when: () => !options.template
  },
  {
    type: "input",
    name: "name",
    message: "Please write a name",
    when: ()=> !options.name,
    default: (answers) => {
      if (answers.template === "Hook") {
        return 'useMyComponent'
      } else {
        return "MyComponent"
      }
    },
    filter: (input, answers) => {
      if (answers.template === "Hook") {
        if (input.length > 3 && input.slice(0,3) === "use") {
          return input;
        } else {
          return `use${input}`;
        }
      } else {
        return input;
      }
    },
  },{
    type: "fuzzypath",
    name: "target",
    excludePath: nodePath => nodePath.startsWith('node_modules', 'git'),
    excludeFilter: nodePath => nodePath == '.',
    itemType: "directory",
    rootPath: "src",
    message: "Select a target directory for your component:",
    default: "src/components",
    suggestOnly: false,
    depthLimit: 5,
  }];
  

  const answers = await inquirer.prompt(questions);
  const result = {
    ...options,
    template: options.template || answers.template,
    name: options.name || answers.name,
    target: options.target || answers.target,
    version: options.version || answers.version
  };
  console.log(result, answers);
  return result;
}
