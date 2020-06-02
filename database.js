//mongo "mongodb+srv://whatsstack-dpcwj.mongodb.net/test" --username WhatStack;

const mongoose = require("mongoose");
const connection =
  "mongodb+srv://WhatStack:faye15cool@whatsstack-dpcwj.mongodb.net/test";
mongoose
  .connect(connection, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
  })
  .then(() => console.log("Database Connected Successfully"))
  .catch((err) => console.log(err));
