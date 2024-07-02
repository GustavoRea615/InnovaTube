const express = require('express');
const cors = require('cors');

require("dotenv").config();
const port = process.env.PORT;
const app = express();
const router = require("./src/router");
const connectToDb = require("./src/config/connectToDB");

connectToDb();
app.use(express.json());
app.use(cors());

app.use("/api/v1", router);

app.listen(port, () => {
  console.log(`Backend now is running in http://localhost:${port}`);
});
