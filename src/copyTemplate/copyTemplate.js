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
          this.push(replace(chunk.toString(), options.name))
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
