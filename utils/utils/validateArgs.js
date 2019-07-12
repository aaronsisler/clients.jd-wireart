exports.validateArgs = ({ isContainer, name }) => {
  if (isContainer == undefined || name == undefined) {
    console.log("'isContainer' and 'name' are required");
    process.exit(1);
  }

  if (name.length == 0) {
    console.log("'name' must be populated");
    console.log("name: ", name);
    process.exit(1);
  }

  if (name.includes("container")) {
    console.log("'name' does not need 'container' added");
    console.log("name: ", name);
    process.exit(1);
  }

  if (name.substr(-1) === "-") {
    console.log("'name' should not end with a hyphen");
    console.log("name: ", name);
    process.exit(1);
  }

  if (isContainer !== "true" && isContainer !== "false") {
    console.log("'isContainer' must be true or false");
    console.log("isContainer: ", isContainer);
    console.log("isContainer type: ", typeof isContainer);
    process.exit(1);
  }
};
