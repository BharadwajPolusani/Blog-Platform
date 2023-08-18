const express = require("express");
const app = express();
require('dotenv').config()
const mongoConfig= require("./config/mongoConfig")


const port = process.env.port||8080;
app.listen(port,()=>console.log(`listening on ${port}`))