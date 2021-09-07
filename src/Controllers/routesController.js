const path = require('path');

let home = (req, res) => {
  res.sendFile(path.join(__dirname, '../views/index.html'))
};

module.exports = { home }
