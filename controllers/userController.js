const bcrypt = require("bcrypt");
const User = require("../models/User");
const { getToken } = require("../middleware/token");

// Create a New User
exports.signup = async (req, res, next) => {
  try {
    let data = req.body;
    console.log(data);
    const password = bcrypt.hashSync(data.password, 10);
    data.password = password;

    const result = await User.create(data);
    const token = getToken({ id: result._id, email: data.email });
    res.status(200).send({ success: true, token });
  } catch (error) {
    next(error);
  }
};

// Login a existing User
exports.login = async (req, res, next) => {
  try {
    let { email, password } = req.body;

    const user = await User.findOne({ email });
    if (!user) {
      return res.status(400).send({ success: true, message: "No User Found" });
    }

    const isVerified = bcrypt.compareSync(password, user.password);
    if (!isVerified) {
      return res
        .status(400)
        .send({ success: true, message: "Invalid Password" });
    }

    const token = getToken({ id: user._id, email });

    res
      .status(200)
      .send({ success: true, token, message: "Successfully Logged In" });
  } catch (error) {
    next(error);
  }
};
