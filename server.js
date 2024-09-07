const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.send("Hello World");
});

const PORT = 4000;

app.listen(PORT, () => {
  console.log(`Server is working on http://localhost:${PORT}`);
});
