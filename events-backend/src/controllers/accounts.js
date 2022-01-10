const knex = require("../../db/knex");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const checkRegistrationField = require("../validation/register");
const validateLoginInput = require("../validation/login");
const secretKey = process.env.SECRET;

const createAccount = (req, res) => {
  const { errors, isValid } = checkRegistrationField(req.body);

  if (!isValid) {
    return res.status(400).json(errors);
  }

  bcrypt.genSalt(12, (err, salt) => {
    if (err) throw err;
    bcrypt.hash(req.body.password, salt, (err, hashedPassword) => {
      if (err) throw err;
      knex("accounts")
        .insert({
          name: req.body.name,
          email: req.body.email,
          password: hashedPassword,
          account_type: req.body.account_type,
        })
        .returning(["id", "name", "email", "account_type"])
        .then((user) => {
          const userToken = jwt.sign({ id: req.body.id, name: req.body.name, email: req.body.email, account_type: req.body.account_type }, secretKey, {
            expiresIn: "24h",
          });
          res.json({ message: "User successfully registered!", status: true, data: { user, userToken } });
        })
        .catch((error) => {
          errors.account = "Account is already registered";
          res.status(400).json({ status: false, message: error.detail });
        });
    });
  });
};

const login = (req, res) => {
  const { errors, isValid } = validateLoginInput(req.body);

  if (!isValid) {
    return res.status(400).json(errors);
  } else {
    knex
      .select("id", "name", "email", "password", "account_type")
      .where("email", "=", req.body.email)
      .from("accounts")
      .then((data) => {
        bcrypt.compare(req.body.password, data[0].password).then((isMatch) => {
          if (isMatch) {
            const payload = {
              id: data[0].id,
              name: data[0].name,
              email: data[0].email,
              account_type: data[0].account_type,
            };
            console.log(payload);
            jwt.sign(payload, secretKey, { expiresIn: "24h" }, (err, token) => {
              return res.status(200).send({ data: { user: payload, token } });
            });
          } else {
            res.status(400).json("Bad request");
          }
        });
      })
      .catch((err) => {
        res.status(400).json("Bad request");
      });
  }
};

const getAllUsers = async (req, res) => {
  try {
    const data = await knex("accounts");
    res.status(200).json(data);
  } catch (error) {
    res.status(500).json({ msg: "Unable to retrieve the data" });
  }
};

module.exports = {
  createAccount,
  login,
  getAllUsers
};
