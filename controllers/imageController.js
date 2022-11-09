const User = require("../models/User");
const path = require("path");
const fs = require("fs");

exports.uploadImage = async (req, res, next) => {
  try {
    const userId = req.user.id;
    const inputted_image = req.files;
    const user = await User.findById(userId);
    const images = user.images;
    for (const img of inputted_image) {
      const temp_name = path.parse(img.originalname).name;
      images.push({
        name: temp_name,
        path: img.filename,
        type: img.mimetype,
        size: img.size,
      });
    }

    const result = await User.updateOne(
      { _id: userId },
      { $set: { images } },
      {
        runValidators: false,
      }
    );

    if (!result) {
      return res
        .status(500)
        .send({ success: false, message: "Image Upload failed" });
    }
    res.status(200).send({
      success: true,
      message: "Image Uploaded successfully",
      data: images,
    });
  } catch (error) {
    next(error);
  }
};

exports.deleteImage = async (req, res, next) => {
  try {
    const checked_image = req.body;
    const userId = req.user.id;

    // const user = await User.findById(userId, {
    //   "images.path": 1,
    //   "images._id": 1,
    // });

    // const userImages = user.images

    // const toRemove = new Set(checked_image);
    // const filter = userImages.filter((item) => toRemove.has(item._id));
    // console.log("User: ", user, "Filter", filter);
    // const files = images.filter(file => file.path === checked_image)
    // Delete from the server
    // images.forEach((item) => console.log(`/images/${item.path}`));
    // fs.existsSync("/images/ " + item.path) && fs.unlinkSync("/images/" + item.path)

    const result = await User.updateOne(
      { _id: userId },
      { $pull: { images: { _id: { $in: checked_image } } } }
    );

    if (!result) {
      return res
        .status(400)
        .send({ success: false, message: "Image couldn't deleted..!" });
    }

    res
      .status(200)
      .send({ success: true, message: "Images deleted successfully" });
  } catch (error) {
    next(error);
  }
};
