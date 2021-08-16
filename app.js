const express = require("express");
const app = express();
const path = require("path");


app.use(express.static(path.join(__dirname, "./public")));
const publicFolderPath = path.resolve(__dirname,"./public");

app.use(express.static(publicFolderPath))

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "./view/index.html"));
});
app.get("/sections", (req, res) => {
    res.sendFile(path.join(__dirname, "./view/sections.html"));
  });
app.listen(3000,()=>{console.log('Server is runnig in the Port 3000');
  });