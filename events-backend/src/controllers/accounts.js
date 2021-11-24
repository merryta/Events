const knex = require("../../db/knex");
const bcrypt = require("bcrypt");
const crypto = require("crypto");
const jwt = require("jsonwebtoken");

const checkRegistrationField = require("../validation/register");
const validateLoginInput = require("../validation/login");
const secretKey = process.env.SECRET;

const createAccount = (req, res) => {
  const { errors, isValid } = checkRegistrationField(req.body);

  if (!isValid) {
    return res.status(400).json(errors);
  }

  let token;
  crypto.randomBytes(48, (err, buf) => {
    if (err) throw err;
    token = buf.toString("base64").replace(/\//g, "").replace(/\+/g, "-");
    return token;
  });

  bcrypt.genSalt(12, (err, salt) => {
    if (err) throw err;
    bcrypt.hash(req.body.password, salt, (err, hash) => {
      if (err) throw err;
      knex("accounts")
        .returning(["id", "name", "email", "account_type", "token"])
        .insert({
          name: req.body.name,
          email: req.body.email,
          password: hash,
          account_type: req.body.account_type,
          token: token,
        })
        .then((results) => {
          res.json(results[0]);
        })
        .catch((error) => {
          errors.account = "Account is already registered";
          res.status(400).json(error);
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
      .select("id", "name", "email", "password")
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
            jwt.sign(payload, secretKey, { expiresIn: 3600 }, (err, token) => {
              res.status(200).json("Bearer " + token);
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
  getAllUsers,
};
