const express = require('express');
const app = express();
const cors = require('cors');
const cookieParser = require('cookie-parser');
const mongoose = require('mongoose');
const PORT = process.env.PORT || 3002;
require("dotenv").config();

app.use(cookieParser());
app.use(express.json());
app.use(cors());

mongoose.connect(process.env.ATLAS_URI || "mongodb://localhost/chodechores", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify : false
});

mongoose.connection.on("connected", () => {
    console.log("mongoose is connected");
});

const userRouter = require('./routes/User');
app.use('/user', userRouter);

app.use(express.urlencoded({ extended: true }));

if (process.env.NODE_ENV === "production") {
    app.use(express.static("client/build"));
  }


app.get("*", (req, res) => {
res.sendFile(path.join(__dirname, "./client/build/index.html"));
});

app.listen(PORT, () => {
console.log(`🌎 ==> API server now on port ${PORT}!`);
});


