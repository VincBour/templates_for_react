import { checkTargetDirectory } from "../checkTargetDirectory/checkTargetDirectory.js";
import { checkTemplateFolder } from "../checkTemplateFolder/checkTemplateFolder.js";
import { copyTemplate } from "../copyTemplate/copyTemplate.js";
import Listr from "listr";

export async function createProject(options) {
    const tasks = new Listr([
        {
            title: 'Check Template Directory',
            task: () => checkTemplateFolder(options),
        },
        {
            title: 'Check Target Directory',
            task: () => checkTargetDirectory(options)
        },
        {
            title: 'Copy Template',
            task: () => copyTemplate(options)
        }
    ])
    ;
    await tasks.run();
  }