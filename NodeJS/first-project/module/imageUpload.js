const multer = require("multer");
const strage = multer.diskStorage({
    destination: (req,res, cb) => {
        cb(null, file.originalname);
    }
});

const upload = multer({dest: "uploads/"});

module.exports = upload;