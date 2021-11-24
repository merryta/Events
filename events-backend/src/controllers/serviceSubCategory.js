const knex = require("../../db/knex");

const createServiceSubCategory = (req, res) => {
  knex("service_sub_categories")
    .insert({
      name: req.body.name,
      description: req.body.description,
      photo: req.body.photo,
      service_categories_id: req.body.service_categories_id,
    })
    .then(() => {
      res.json("Successfully created a service sub-category");
    })
    .catch(() => {
      res.json("Something went wrong!");
    });
};

const getAllServiceSubCategories = async(req, res) => {
  try {
    const data = await knex("service_sub_categories");
    res.status(200).json(data);
  } catch (error) {
    res.status(500).json({message: "An error occurred while fetching the data"})
  }
}

module.exports = {
  createServiceSubCategory,
  getAllServiceSubCategories
};
