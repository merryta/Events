const validator = require("validator");
const checkForEmpty = require("./checkForEmpty");

const checkProfileValidity = (data) => {
  let errors = {};

  data.phone = !checkForEmpty(data.phone) ? data.phone : "";
  data.location = !checkForEmpty(data.location) ? data.location : "";

  if(!validator.isPhone(data.phone)) {
    errors.phone = "Invalid phone number"
  };

  if(validator.isEmpty(data.phone)) {
    errors.phone = "Phone number is required"
  }

  if(validator.isEmpty(data.location)) { 
    errors.location = "Location is required"
  }

  return {
    errors,
    isValid: checkForEmpty(errors)
  }
};

module.exports = checkProfileValidity;
