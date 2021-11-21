const express = require("express");
const app = express();
const cors = require("cors");
require("dotenv").config();

const serviceRoutes = require("./routes/services");
const accountRoutes = require("./routes/accounts");
const serviceCategoryRoutes = require('./routes/serviceCategory');
const serviceSubCategoryRoutes = require('./routes/serviceSubCategory');

app.use(express.json());
app.use(cors());

// routes
app.use(serviceRoutes);
app.use(accountRoutes);
app.use(serviceCategoryRoutes);
app.use(serviceSubCategoryRoutes);

app.get("/", (req, res) => {
  res.send("Server is working!");
});

const port = process.env.PORT || 5001;

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
