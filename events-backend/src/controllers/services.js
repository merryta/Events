const knex = require("../../db/knex");

const createNewService = (req, res, next) => {
  knex("services")
    .insert({
      name: req.body.name,
      description: req.body.description,
      photo_url: req.body.photo_url,
      amount: req.body.amount,
    })
    .returning(["name", "description", "photo_url", "amount"])
    .then((results) => {
      res.json(results[0]);
    })
    .catch((err) => next(err));
};

const getAllServices = (req, res) => {
  knex("services")
  .then(results => {
    res.json(results);
  })
};

module.exports = {
  createNewService,
  getAllServices
}
