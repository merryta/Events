const knex = require('../../db/knex');


const checkRole = (req, res) => {
  try {
    let serviceProvider = req.body.account_type;
    if(serviceProvider !== 'company') {
      return res.status(401).json({
        message: "Not authorized"
      })
    }
  } catch (error) {
    return res.status(500).json({
      message: `${JSON.stringify(error)}`
    })
  }
};

module.exports = checkRole;