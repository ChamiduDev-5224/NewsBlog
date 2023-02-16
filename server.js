const express = require("express");
const helmet = require("helmet");
require("dotenv").config();

const adminRouter = require("./api/admin/admin.router");

const app = express();

app.use(express.json());
app.use(helmet());

app.use("/v1/admin", adminRouter);

app.listen(process.env.PORT, () => {
  console.log(`App run on the port ${process.env.PORT}`);
});
