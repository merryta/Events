const validator = require("validator");
const ifEmpty = require("./checkForEmpty.js");

const checkServiceRegistrationField = (data) => {
  let errors = {};

  data.name = !ifEmpty(data.name) ? data.name : "";
  data.description = !ifEmpty(data.description) ? data.description : "";
  data.photo = !ifEmpty(data.photo) ? data.photo : "";
  data.delivery_point = !ifEmpty(data.delivery_point) ? data.delivery_point : "";
  data.consumer_count = !ifEmpty(data.consumer_count) ? data.consumer_count : "";
  data.service_readiness = !ifEmpty(data.service_readiness) ? data.service_readiness : "";
  data.support_team = !ifEmpty(data.support_team) ? data.support_team : "";
  data.support_language = !ifEmpty(data.support_language) ? data.support_language : "";
  data.service_duration = !ifEmpty(data.service_duration) ? data.service_duration : "";
  data.price = !ifEmpty(data.price) ? data.price : "";
  data.account_id = !ifEmpty(data.account_id) ? data.account_id : "";
  data.service_sub_categories_id = !ifEmpty(data.service_sub_categories_id) ? data.service_sub_categories_id : "";

  if(validator.isEmpty(data.name)) {
    errors.name = "Name is required";
  }

  if(validator.isEmpty(data.description)) {
    errors.description = "Description is required";
  };

  if(validator.isEmpty(data.photo)) {
    errors.photo = "Photo is required";
  };

  if(validator.isEmpty(data.delivery_point)) {
    errors.delivery_point = "A delivery  point is required";
  }

  if(!validator.isIn(data.delivery_point, ['physical', 'online'])) {
    errors.delivery_point = "Please select the correct delivery point";
  }

  if(validator.isEmpty(data.consumer_count)) {
    errors.consumer_count = "Consumer count is required";
  }

  if (!validator.isNumeric(data.consumer_count)) {
    errors.consumer_count = "Service duration must be a number";
  }

  if(validator.isEmpty(data.service_readiness)) {
    errors.service_readiness  = "Service readiness field must have a value"
  }

  if(!validator.isIn(data.service_readiness, ['book', 'readilyAvailable'])) {
    errors.service_readiness = "Please select the correct service readiness type"
  }

  if(validator.isEmpty(data.support_team)) {
    errors.support_team = "Support team field is required";
  }

  if(!validator.isIn(data.support_team, ['yes', 'no'])) {
    errors.support_team = "Please select either yes or no";
  }

  if(validator.isEmpty(data.support_language)) {
    errors.support_language = "Support language field is not supposed to be empty"
  }

  if(!validator.isIn(data.support_language, ["English", "Kiswahili", "Amharic"])) {
    errors.support_language = "Please select the languages supported"
  }

  if(validator.isEmpty(data.service_duration)) {
    errors.service_duration = "Service duration is required";
  }

  if(!validator.isIn(data.service_duration, ['24hrs', '48hrs', '72hrs', '96hrs', '120hrs'])) {
    errors.service_duration = "Please select the correct service duration";
  }

  if(validator.isEmpty(data.price)) {
    errors.price = "Price must be specified";
  }

  if(!validator.isNumeric(data.price)) {
    errors.price = "Price must be a number";
  }

  if(validator.isEmpty(data.account_id)) {
    errors.account_id = "Account id should not be empty";
  }

  if(validator.isEmpty(data.service_sub_categories_id)) {
    errors.service_sub_categories_id = "Service sub-categories should not be empty";
  }

  return {
    errors,
    isValid: ifEmpty(errors)
  }
};

module.exports = checkServiceRegistrationField;
