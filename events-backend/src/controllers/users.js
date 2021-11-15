const bcrypt = require("bcrypt");
const knex = require("../../db/knex");

const getAllUsers = (req, res) => {
  knex("users").then((users) => {
    res.json(users);
  });
};

const createUser = (req, res, next) => {
  bcrypt.hash(req.body.password, 10).then((hashedPassword) => {
    return knex("users")
      .insert({
        name: req.body.name,
        email: req.body.email,
        password: hashedPassword,
        role: req.body.role,
      })
      .returning(["id", "name", "email", "role"])
      .then((users) => {
        res.json(users[0]);
      })
      .catch((error) => next(error));
  });
};

module.exports = {
  getAllUsers,
  createUser
};
