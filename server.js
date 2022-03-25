const express = require("express");

const gameRouter = require("./routes/gameRoutes");

const app = express();

const PORT = 5000;

app.listen(PORT, echoPortNumber);

app.use("/api", gameRouter);

function echoPortNumber() {
  console.log(`Listening on port ${PORT}`);
}
