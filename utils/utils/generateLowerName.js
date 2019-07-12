exports.generateLowerName = (name, isContainer) => {
  return isContainer ? `${name.toLowerCase()}-container` : name.toLowerCase();
};
