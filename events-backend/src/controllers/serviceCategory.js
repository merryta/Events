const knex = require('../../db/knex');

const createNewServiceCategory = (req, res) => {
  knex("service_categories").insert({
    name: req.body.name,
    description: req.body.description,
    photo: req.body.photo
  })
  .then(() => {
    res.json('New service has been added!')
  })
  .catch(() => {
    res.json("Something went wrong.")
  })
};

const getAllServiceCategories = (req, res) => {
  knex("service_categories")
    .then((data) => {
      res.json(data);
    })
    .catch(() => {
      res.json('Something went wrong.')
    })
}

module.exports = {
  createNewServiceCategory,
  getAllServiceCategories
}