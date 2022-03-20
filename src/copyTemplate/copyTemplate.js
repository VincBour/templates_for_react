import ncp from "ncp";
import { promisify } from "util";
import fs from "fs";
import path from 'path';

const copy = promisify(ncp);

function replace(value, target) {
  return value.replace(new RegExp("\\[Name]", "g"), target);
}

export async function copyTemplate(options) {
  await copy(options.templateDirectory, options.targetDirectory, {
    transform: function (read, write, file) {
      fs.readFile(read.path, "utf8", (err, data) => {
        if (err) {
          console.error(err);
          return;
        }
        const result = replace(data, options.name);

        write.write(result, "utf8");
      });
    },
    rename: function (target) {
      return replace(target, options.name);
    },
  });
}
