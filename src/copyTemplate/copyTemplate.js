import ncp from "ncp";
import { Transform } from "stream";

const copy = ncp;

function capitalizeFirstLetter(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}


function replace(value, target) {
  const targetUp = capitalizeFirstLetter(target);
  return value.replace(new RegExp("\\[Name]", "g"), target).replace(new RegExp("\\[UpName]", "g"), targetUp);
}

export function copyTemplate(options) {
  copy(options.templateDirectory, options.targetDirectory, {
    transform: function (read, write) {
      const replaceData = new Transform({
        transform(chunk, encoding, cb) {
          let result = replace(chunk.toString(), options.name);
          if (options.version) {
            
            result = result.replace(new RegExp(/import \* as React from 'react';/, "g"), ""); 
            
          }
          this.push(result)
        }
      });
      read.pipe(replaceData).pipe(write);
    },
    rename: function (target) {
      return replace(target, options.name);
    }
  }, (errors) => {
    errors?.forEach(err => console.log(err))
  });
}
