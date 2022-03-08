const express = require("express");
const app = express();
const { IPinfoWrapper, LruCache } = require("node-ipinfo");
const cors = require("cors");
require("dotenv").config();

const token = process.env.TOKEN;

const serviceRoutes = require("./routes/services");
const accountRoutes = require("./routes/accounts");
const serviceCategoryRoutes = require('./routes/serviceCategory');
const serviceSubCategoryRoutes = require('./routes/serviceSubCategory');
const profileRoutes = require('./routes/profile');

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

const cacheOptions = {
  max: 5000,
  maxAge: 1000 * 60 * 60 * 24,
};

const cache = new LruCache(cacheOptions);
const ipinfo = new IPinfoWrapper(token, cache, 1000);
// console.log(ipinfo);

// console.log(process.env.TOKEN);

// ipinfo.lookupIp("1.1.1.1", (err, res) => {
//   if (err) {
//     console.log(err);
//   } else {
//     console.log(res);
//   }
// });
// ipinfo.lookupIp("1.1.1.1").then((res) => {console.log(res)}).catch((err) => {console.error(err)});
// ipinfo.lookupASN("AS7922").then((res) => {console.log(res)}).catch((err) => {console.error(err)});

// console.log("ip", ipinfo().getIpInfoMiddleware());


// routes
app.use(serviceRoutes);
app.use(accountRoutes);
app.use(serviceCategoryRoutes);
app.use(serviceSubCategoryRoutes);
app.use(profileRoutes);

app.get("/", (req, res) => {
  res.send("Server is working!");
  // res.send(req.ipinfo);
});

const port = process.env.PORT || 5001;

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
