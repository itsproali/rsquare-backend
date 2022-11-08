const multer = require("multer");
const path = require("path");

const storage = multer.diskStorage({
  destination: "images/",
  filename: (req, file, cb) => {
    const imageName =
      Date.now() +
      "-" +
      Math.round(Math.random() * 1e9) +
      "-" +
      file.originalname;
    cb(null, imageName);
  },
});

const uploader = multer({
  storage,
  fileFilter: (req, file, cb) => {
    const supportedExtension = /png|jpg|gif|jpeg|jfif /;
    const extension = path.extname(file.originalname);

    if (supportedExtension.test(extension)) {
      cb(null, true);
    } else {
      cb(new Error("Image should be JPG or PNG"));
    }
  }
});

module.exports = uploader;
