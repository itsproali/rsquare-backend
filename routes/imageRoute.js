const { uploadImage, deleteImage } = require("../controllers/imageController");
const { verifyToken } = require("../middleware/token");
const router = require("express").Router();
const uploader = require("../middleware/uploader");

router.patch("/upload", verifyToken, uploader.array("images"), uploadImage);
router.patch("/delete", verifyToken, deleteImage);

module.exports = router;
