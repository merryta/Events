// function accepts value and decides if the value is empty or not

const ifEmpty = (field) => {
  try {
    let result = false;
    if (
      field === undefined ||
      field === null ||
      (typeof field === "string" && field.trim().length === 0) ||
      (typeof field === "object" && Object.keys(field).length === 0)
    )
      result = true;
    return result;
  } catch (error) {
    return error;
  }
};

module.exports = ifEmpty;
