const deepCopyObject = objToCopy => {
  if (objToCopy === undefined) {
    throw new TypeError(`Error: Object Type is required and found ${objToCopy}`);
  }
  if (typeof objToCopy !== 'object' || objToCopy === null) return objToCopy;

  const propertyNames = Object.getOwnPropertyNames(objToCopy);
  const propertySymbol = Object.getOwnPropertySymbols(objToCopy);
  const deepCopy = {};

  for (const key of propertyNames) {
    const value = objToCopy[key];
    if (typeof value === 'object') {
      deepCopy[key] = deepCopyObject(value);
      const propDescriptors = Object.getOwnPropertyDescriptors(objToCopy, key);
      Object.defineProperty(deepCopy, key, propDescriptors);
    }
    else deepCopy[key] = value;
  }

  for (const key of propertySymbol) {
    const value = objToCopy[key];
    if (typeof value === 'object') {
      deepCopy[key] = deepCopyObject(value);
      const propDescriptors = Object.getOwnPropertyDescriptors(objToCopy, key);
      Object.defineProperty(deepCopy, key, propDescriptors);
    }
    else deepCopy[key] = value;
  }

  return deepCopy;
};

export { deepCopyObject };
