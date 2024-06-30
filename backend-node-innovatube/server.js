const express = require('express');
const cors = require('cors');

require("dotenv").config();
const connectToDb = require("./src/config/connectToDB");
const port = process.env.PORT;
const app = express();
const usersController = require("./src/controllers/usersController");

connectToDb();

app.use(express.json());
app.use(cors());

app.post('/createUser', usersController.createUser)

app.listen(port);
// app.listen(port, () => {
//   console.log(`Backend now is running in http://localhost:${port}`);
// });
