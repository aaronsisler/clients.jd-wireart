exports.generateUpperName = (name, isContainer) => {
  const matchIndices = [];
  const nameLength = name.length;

  [...name].forEach((char, index) =>
    char == "-" ? matchIndices.push(index) : undefined
  );

  const upperName = [];
  upperName.push(name[0].toUpperCase());

  for (i = 1; i < nameLength; i++) {
    if (matchIndices.includes(i)) {
      upperName.push(name[i + 1].toUpperCase());
      i++;
    } else {
      upperName.push(name[i]);
    }
  }

  if (isContainer) {
    return upperName.join("") + "Container";
  } else {
    return upperName.join("");
  }
};
