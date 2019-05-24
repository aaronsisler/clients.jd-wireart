const fs = require("fs");
const fse = require("fs-extra");
const replace = require("replace-in-file");
const { validateArgs } = require("./validateArgs");
const { generateUpperName } = require("./generateUpperName");

const envArgs = require("minimist")(process.argv.slice(2));
validateArgs(envArgs);

const { isContainer, name } = envArgs;
const isContainerBoolean = isContainer === "true";

//Craft the names with logic against isContainerBoolean
const upperName = generateUpperName(name, isContainerBoolean);
const lowerName = isContainerBoolean
  ? `${name.toLowerCase()}-container`
  : name.toLowerCase();

const nameDirectory = `${__dirname}/${lowerName}`;

//Create a copy of templates in a directory using crafted name
fse.copySync(`${__dirname}/templates`, nameDirectory);

//Replace the upper and lower name using crafted name

const files = [`${nameDirectory}/javascript.js`, `${nameDirectory}/index.js`];

const upperOptions = {
  files,
  from: /UPPER_NAME/g,
  to: upperName
};

const lowerOptions = {
  files,
  from: /LOWER_NAME/g,
  to: lowerName
};

try {
  replace.sync(upperOptions);
  replace.sync(lowerOptions);
  console.log("Files have been replaced");
} catch (error) {
  console.error("Error occurred:", error);
}

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
