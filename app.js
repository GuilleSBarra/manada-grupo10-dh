const express = require("express");
const app = express();
const path = require("path");
const port = process.env.PORT || 3000

app.use(express.static(path.join(__dirname, "./public")));
const publicFolderPath = path.resolve(__dirname,"./public");

app.use(express.static(publicFolderPath))

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "./view/index.html"));
});
app.get("/sections", (req, res) => {
    res.sendFile(path.join(__dirname, "./view/sections.html"));
  });
app.listen(port,()=>{console.log(`bServer is runnig in the Port ${port}`);
  });