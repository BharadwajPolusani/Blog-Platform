const mongoose = require("mongoose");
mongoose.connect(process.env.mongo_URI)

const db = mongoose.connection;
db.on('connected', () => {
    console.log("db connected successfully");
})

db.on('error', () => {
    console.log("db connection failed");
})
