const express = require("express");
const path = require("path");

const app = express();
const PORT = process.env.PORT || 3000;
const router = require("./routes/index");

app.use(express.static(path.join(__dirname, "../", "client")));
app.use(router);

app.listen(PORT, err => {
  if (err) throw err;
  console.log("listening on port ", PORT);
});
