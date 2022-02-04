const knex = require("../../db/knex");
const checkServiceRegistrationField = require("../validation/service");
const { cloudinary } = require("../util/cloudinaryConfig");

const createNewService = async (req, res) => {
  const { errors, isValid } = checkServiceRegistrationField(req.body);
  if(!isValid && !req.file) {
    res.status(400).json(errors);
  } else {
    knex("services").insert({
      name: req.body.name,
      description: req.body.description,
      photo: req.file.path,
      delivery_point: req.body.delivery_point,
      consumer_count: req.body.consumer_count,
      service_readiness: req.body.service_readiness,
      support_team: req.body.support_team,
      support_language: req.body.support_language,
      service_duration: req.body.service_duration,
      price: req.body.price,
      account_id: req.body.account_id,
      service_sub_categories_id: req.body.service_sub_categories_id,
    })
    .returning("*")
    .then((data) => {
      console.log(data);
      res.status(200).json({
        message: "Service created successfully",
        status: true,
        service: data,
      })
    })
    .catch((error) => {
      console.log(error);
      errors.name = "Name must be unique";
      res.status(500).json({
        message: "Unable to create a new service",
      });
    });
  }
};

// const uploadService = async (req, res) => {
//   try {
//     const { errors, isValid } = checkServiceRegistrationField(req.body);
//     if(!isValid) {
//       res.status(400).json(errors);
//     };
//     const fileStr = req.body.photo;
//     const uploadResult = await cloudinary.uploader.upload(fileStr, {
//       upload_preset: "service_photo",
//     });
//     knex("services").insert({
//       name: req.body.name,
//       description: req.body.description,
//       photo: req.body.photo,
//       delivery_point: req.body.delivery_point,
//       consumer_count: req.body.consumer_count,
//       service_readiness: req.body.service_readiness,
//       support_team: req.body.support_team,
//       support_language: req.body.support_language,
//       service_duration: req.body.service_duration,
//       price: req.body.price,
//       account_id: req.body.account_id,
//       service_sub_categories_id: req.body.service_sub_categories_id,
//     })
//     .returning("*")
//   .then((data) => {
//     res.status(200).json({
//       message: "Service created successfully",
//       status: true,
//       service: data,
//     });
//   })
//   } catch (error) {
//     console.log(error);
//     res.status(500).json({
//       message: "Unable to create a new service",
//     });
//   }
// }


const getAllServices = async (req, res) => {
  try {
    const data = await knex("services");
    res.status(200).json(data);
  } catch (error) {
    res.status(500).json({ message: "An error occurred while fetching the data" });
  }
}

const getSingleService = async (req, res) => {
  const { id } = req.params;
  try {
    const data = await knex("services").where({ id: id });
    res.status(200).json(data);
  } catch (error) {
    res.status(500).json({ message: `Service with an id of ${id} is not found` });
  }
};

const getServicesBySubCategories = async (req, res) => {
  const { id } = req.params;
  try {
    const data = await knex("services")
      .join("service_sub_categories", "service_sub_categories.id", "services.service_sub_categories_id")
      .select(
        "services.id",
        "services.name",
        "services.description",
        "services.photo",
        "services.delivery_point",
        "services.consumer_count",
        "services.service_readiness",
        "services.support_team",
        "services.support_language",
        "services.service_duration",
        "services.price"
      )
      .where({ service_sub_categories_id: id });
    res.status(200).json(data);
  } catch (error) {
    res.status(500).json({ message: `Sub category with an id of ${id} is not found` });
  }
};

const getServicesByAccountId = async (req, res) => {
  const { id } = req.params;
  try {
    const data = await knex("services")
      .join("accounts", "accounts.id", "services.account_id")
      .select(
        "services.id",
        "services.name",
        "services.description",
        "services.photo",
        "services.delivery_point",
        "services.consumer_count",
        "services.service_readiness",
        "services.support_team",
        "services.support_language",
        "services.service_duration",
        "services.price"
      )
      .where({ account_id: id });
    res.status(200).json(data);
  } catch (error) {
    res.status(500).json({ message: `Account with an id of ${id} is not found` });
  }
}

const deleteService = async (req, res) => {
  const { id } = req.params;
  try {
    const data = await knex("services").where({ id: id }).del();
    res.status(200).json({
      message: `Successfully delete service with an id of ${id}`,
    });
  } catch (error) {
    res.status(500).json({
      message: `Service with an id of ${id} is not found`,
    });
  }
};

module.exports = {
  createNewService,
  // uploadService,
  getAllServices,
  getSingleService,
  getServicesBySubCategories,
  deleteService,
  getServicesByAccountId
};
