const express = require("express");
const path = require("path");
const app = express();

app.use(express.json({ extended: false }));
app.use(express.static('public')) 

app.use("/api", require("./api/routes"));

app.get('*', function (request, response) {
  response.sendFile(path.resolve(__dirname, '../public/index.html'))
})

const port = process.env.PORT || 9999;

app.listen(port, () => {
  console.log("listening on port", port)
})