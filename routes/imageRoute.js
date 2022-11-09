const {
  uploadImage,
  deleteImage,
  getImage,
} = require("../controllers/imageController");
const { verifyToken } = require("../middleware/token");
const router = require("express").Router();
const uploader = require("../middleware/uploader");

router.patch("/upload", verifyToken, uploader.array("images"), uploadImage);
router.patch("/delete", verifyToken, deleteImage);
router.get("/get-all", verifyToken, getImage);

module.exports = router;
