import fs from 'fs';

export async function checkTargetDirectory(options) {
    const target =
      options.targetDirectory +
      "/" +
      options.name.charAt(0).toLowerCase() +
      options.name.slice(1);
    
      if (!fs.existsSync(target)) {
      fs.mkdirSync(target, { recursive: true });
    }
    options.targetDirectory = target;
  }