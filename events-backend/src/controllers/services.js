const knex = require("../../db/knex");
const checkServiceRegistrationField = require("../validation/service");

const createNewService = async (req, res) => {
  const { errors, isValid } = checkServiceRegistrationField(req.body);

  if (!isValid) {
    res.status(400).json(errors);
  } else {
    try {
      const service = await knex("services").insert({
        name: req.body.name,
        description: req.body.description,
        photo: req.body.photo,
        delivery_point: req.body.delivery_point,
        consumer_count: req.body.consumer_count,
        service_readiness: req.body.service_readiness,
        support_team: req.body.support_team,
        support_language: req.body.support_language,
        service_duration: req.body.service_duration,
        price: req.body.price,
        account_id: req.body.account_id,
        service_sub_categories_id: req.body.service_sub_categories_id,
      });
      res.status(200).json({ service: service });
    } catch (error) {
      errors.name = "Name must be unique";
      res.status(500).json({
        message: "Unable to create a new service",
      });
    }
  }
};

const getAllServices = async (req, res) => {
  try {
    const data = await knex("services");
    res.status(200).json(data);
  } catch (error) {
    res.status(500).json({ message: "Unable to retrieve the data" });
  }
};

module.exports = {
  createNewService,
  getAllServices,
};
