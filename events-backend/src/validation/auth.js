const jwt = require('jsonwebtoken');
const secretKey = process.env.SECRET;
const knex = require('../../db/knex');

// const authMiddleWare = async (req, res, next) => {
//   try {
//     const authorization = req.header('Authorization');
//     if(!authorization) {
//       return res.status(401).json({
//         message: "Not authorized to do this action"
//       })
//     }
//     const token = authorization.replace("Bearer ", "");
//     const data = jwt.verify(token, secretKey);

//     const user = await knex("accounts").where({ id: data.id })
//     console.log(user);
//     if(!user) {
//       return res.status(401).json({
//         message: "Not authorized to do this action"
//       })
//     }

//     req.id = data.id;
//     next();
//   } catch (error) {
//     return res.status(500).json({
//       message: `${JSON.stringify(error)}`
//     })
//   }
// }

// const userVerification = (req, res, next) => {
//   const token = req.headers.authorization.split(" ")[1];
//   jwt.verify(token, secretKey, (error, decodedToken) => {
//     if(error) {
//       res.status(401).json({
//         message: "Unauthorized Access!"
//       })
//     }
//     req.user = decodedToken;
//     console.log('req.user', decodedToken.id);
//     return next();
//   })
// }

const userVerification = async(req, res, next) => {
  try {
    const token = req.headers.authorization.split(' ')[1];
    jwt.verify(token, secretKey, (error, decodedToken) => {
      if(error) {
        res.status(401).json({
          message: "Unauthorized Access!"
        })
      }
      req.user = decodedToken.id;
      console.log('req.user', decodedToken.id);

      return next();
    })
  } catch (error) {
    console.log(error)
  }
};

module.exports = userVerification;
