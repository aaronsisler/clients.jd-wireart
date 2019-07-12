const fs = require("fs");
const fse = require("fs-extra");
const { validateArgs } = require("./utils/validateArgs");
const { generateUpperName } = require("./utils/generateUpperName");
const { generateLowerName } = require("./utils/generateLowerName");
const { replaceNamesInFiles } = require("./utils/replaceNamesInFiles");

//Validate the name and isContainer is sent correctly
const envArgs = require("minimist")(process.argv.slice(2));
validateArgs(envArgs);
const { isContainer, name } = envArgs;

//Craft the names with logic against isContainer
const isContainerBoolean = isContainer === "true";
const upperName = generateUpperName(name, isContainerBoolean);
const lowerName = generateLowerName(name, isContainerBoolean);

//Create a copy of templates in a directory using crafted name
const nameDirectory = `${__dirname}/${lowerName}`;
fse.copySync(`${__dirname}/templates`, nameDirectory);

//Replace the upper and lower name using crafted name
replaceNamesInFiles(nameDirectory, lowerName, upperName);

//Rename the JS and SCSS files
fs.renameSync(
  `${nameDirectory}/javascript.js`,
  `${nameDirectory}/${lowerName}.js`
);

fs.renameSync(
  `${nameDirectory}/sass.scss`,
  `${nameDirectory}/${lowerName}.scss`
);

//Move folder and files to containers or components
if (isContainerBoolean) {
  fse.moveSync(nameDirectory, `${__dirname}/../src/containers/${lowerName}/`);
} else {
  fse.moveSync(nameDirectory, `${__dirname}/../src/components/${lowerName}/`);
}
