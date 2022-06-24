import { checkTargetDirectory } from "../checkTargetDirectory/checkTargetDirectory.js";
import { checkTemplateFolder } from "../checkTemplateFolder/checkTemplateFolder.js";
import { copyTemplate } from "../copyTemplate/copyTemplate.js";
import Listr from "listr";

export function createProject(options) {
    const tasks = new Listr([
        {
            title: 'Check Template Directory',
            task: async () => await checkTemplateFolder(options),
        },
        {
            title: 'Check Target Directory',
            task: async () => await checkTargetDirectory(options)
        },
        {
            title: 'Copy Template',
            task: () => copyTemplate(options),
        }
    ])
    ;
    const result = tasks.run().catch(err => {
        console.error(err);
    });
    console.log('create project',result)
  }