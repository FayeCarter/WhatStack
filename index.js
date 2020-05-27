const express = require("express");

const cors = require("cors");

const app = express();
app.get("/api/", cors(), async (req, res, next) => {
  try {
    const message = "Hello World!";
    res.json({ message });
  } catch (err) {
    next(err);
  }
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Listening on ${PORT}`);
});
