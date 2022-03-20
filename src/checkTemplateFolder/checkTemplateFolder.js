import path from 'path';
import fs from "fs";
import { promisify } from "util";
import chalk from 'chalk';
const access = promisify(fs.access);

export async function checkTemplateFolder(options) {

    options.targetDirectory = path.resolve(process.cwd(), options.target);
  
    const currentFileUrl = import.meta.url;
    const templateDir = path
      .resolve(
        new URL(currentFileUrl).pathname,
        "../../../templates",
        options.template.toLowerCase()
      )
      .slice(3);
    options.templateDirectory = templateDir;
    
    try {
      await access(templateDir, fs.constants.R_OK);
    } catch (err) {
      console.error("%s Invalid template name", chalk.red.bold("ERROR"));
      process.exit(1);
    }
    
    return options;
  }