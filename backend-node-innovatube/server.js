const express = require('express');
const cors = require('cors');

require("dotenv").config();
const connectToDb = require("./src/config/connectToDB");
const port = process.env.PORT;
const app = express();
const router = require("./src/router");

connectToDb();

app.use(express.json());
app.use(cors());

app.use("/api/v1", router);

app.listen(port);
// app.listen(port, () => {
//   console.log(`Backend now is running in http://localhost:${port}`);
// });
