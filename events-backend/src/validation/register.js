const validator = require("validator");
const ifEmpty = require("./checkForEmpty");

// the function checks all the data entered by user while registering are valid
const checkRegistrationField = (data) => {
  let errors = {};

  data.name = !ifEmpty(data.name) ? data.name : "";
  data.email = !ifEmpty(data.email) ? data.email : "";
  data.password = !ifEmpty(data.password) ? data.password : "";

  if (validator.isEmpty(data.name)) {
    errors.name = "Name is required";
  }

  if (validator.isEmpty(data.email)) {
    errors.email = "Email is required";
  }

  if (!validator.isEmail(data.email)) {
    errors.email = "Email address is invalid";
  }

  if (validator.isEmpty(data.password)) {
    errors.password = "Password is required";
  }

  if (!validator.isLength(data.password, { min: 6, max: 50 })) {
    errors.password = "Password must be greater than 6 characters";
  }

  if (!validator.isIn(data.account_type, ["normal_user", "company"])) {
    errors.account_type = "Please choose the correct account type"
  }

  return {
    errors,
    isValid: ifEmpty(errors),
  };
};

module.exports = checkRegistrationField;
