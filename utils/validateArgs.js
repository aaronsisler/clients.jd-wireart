exports.validateArgs = ({ isContainer, lowerName, upperName }) => {
  if (
    isContainer == undefined ||
    lowerName == undefined ||
    upperName == undefined
  ) {
    console.log("'isContainer','lowerName', and 'upperName' are required");
    process.exit(1);
  }

  if (lowerName.length == 0 || upperName.length == 0) {
    console.log("'lowerName' and 'upperName' must be populated");
    console.log("lowerName: ", lowerName);
    console.log("upperName: ", upperName);
    process.exit(1);
  }

  if (lowerName.includes("container") || upperName.includes("container")) {
    console.log("'lowerName' or 'upperName' does not need 'container' added");
    console.log("lowerName: ", lowerName);
    console.log("upperName: ", upperName);
    process.exit(1);
  }

  if (isContainer !== "true" && isContainer !== "false") {
    console.log("'isContainer' must be true or false");
    console.log("isContainer: ", isContainer);
    console.log("isContainer type: ", typeof isContainer);
    process.exit(1);
  }
};
