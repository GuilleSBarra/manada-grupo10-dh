/* Multer Middleware wich allows upload Users Images */

const path = require("path")
const multer = require('multer')

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, path.join(__dirname, "../public/img/users"));
    },
    filename: function (req, file, cb) {
        const fileName = "user_" + Date.now() + file.originalname;
        cb(null, fileName);
    },
});

const upload = multer({ storage });

module.exports = upload;