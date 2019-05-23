const envArgs = require("minimist")(process.argv.slice(2));
const { validateArgs } = require("./validateArgs");
validateArgs(envArgs);

const { isContainer, lowerName, upperName } = envArgs;

//Craft the name with logic against isContainerBoolean
const isContainerBoolean = isContainer === "true";
const craftedLowerName = isContainerBoolean
  ? `${lowerName.toLowerCase()}-container`
  : lowerName.toLowerCase();

const craftedUpperName = isContainerBoolean
  ? `${upperName}Container`
  : upperName;
const craftedNameDirectory = `${__dirname}/${craftedLowerName}`;

//Create a copy of templates in a directory using crafted name
const fse = require("fs-extra");
fse.copySync(`${__dirname}/templates`, craftedNameDirectory);

//Replace the upper and lower name using crafted name
const replace = require("replace-in-file");

const files = [
  `${craftedNameDirectory}/javascript.js`,
  `${craftedNameDirectory}/index.js`
];

const upperOptions = {
  files,
  from: /UPPER_NAME/g,
  to: craftedUpperName
};

const lowerOptions = {
  files,
  from: /LOWER_NAME/g,
  to: craftedLowerName
};

try {
  replace.sync(upperOptions);
  replace.sync(lowerOptions);
  console.log("Files have been replace");
} catch (error) {
  console.error("Error occurred:", error);
}

//Rename the JS and SCSS files

//Move folder and files to containers or components
