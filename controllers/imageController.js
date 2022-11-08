const User = require("../models/User");

exports.uploadImage = async (req, res, next) => {
  try {
    const userId = req.user.id;
    const inputted_image = req.files;
    let images = [];
    for (const img of inputted_image) {
      images.push({ filename: img.filename, size: img.size });
    }
    
    const result = await User.updateOne({ _id: userId }, {images}, {
      runValidators: false,
    });

    if (!result) {
      return res
        .status(500)
        .send({ success: true, message: "Image Upload failed"});
    }
    res
      .status(200)
      .send({ success: true, message: "Image Uploaded successfully", data:images });
  } catch (error) {
    next(error);
  }
};
