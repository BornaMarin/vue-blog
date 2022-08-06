const formatOwnerUsername = (value) => {
  const newValue = valueCheckStringFormat(value);
  return "@" + newValue;
};

const getAcronymFromFullName = (value) => {
  return value
    .split(" ")
    .map((n) => n[0])
    .join("");
};

const groupById = (target) => {
  let objToReturn = {};
  for (const item of target) {
    objToReturn[item.id.toString()] = item;
  }
  return objToReturn;
};

const valueCheckStringFormat = (value) => {
  if (!value) return "";
  return value.toString();
};

const isObjectEmpty = (value) => {
  if (isObject(value)) {
    return Object.keys(value).length === 0;
  }
  return false;
};

const isObject = (value) => {
  return typeof value === "object" && value !== null && !Array.isArray(value);
};

export {
  formatOwnerUsername,
  getAcronymFromFullName,
  groupById,
  isObjectEmpty,
};
