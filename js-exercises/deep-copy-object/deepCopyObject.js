const CopyValuesAndDescriptors = (PropNames, objToCopy, deepCopy) => {
  for (const key of PropNames) {
    const value = objToCopy[key];
    if (typeof value === 'object') {
      deepCopy[key] = deepCopyObject(value);
      const propDescriptors = Object.getOwnPropertyDescriptors(objToCopy, key);
      Object.defineProperty(deepCopy, key, propDescriptors);
    }
    else deepCopy[key] = value;
  }
};

const deepCopyObject = objToCopy => {
  if (objToCopy === undefined) {
    throw new TypeError(`Error: Object Type is required but found ${objToCopy}`);
  }
  if (typeof objToCopy !== 'object' || objToCopy === null) return objToCopy;

  const propertyNames = Object.getOwnPropertyNames(objToCopy);
  const propertySymbol = Object.getOwnPropertySymbols(objToCopy);
  const deepCopy = {};

  CopyValuesAndDescriptors(propertyNames, objToCopy, deepCopy);
  CopyValuesAndDescriptors(propertySymbol, objToCopy, deepCopy);

  return deepCopy;
};

export { deepCopyObject };
