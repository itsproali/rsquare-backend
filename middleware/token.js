const jwt = require("jsonwebtoken");
const { promisify } = require("util");

// Generate a token
exports.getToken = (data, expire) => {
  return jwt.sign(data, process.env.TOKEN_SECRET, {
    expiresIn: expire || "7d",
  });
};


// Verify A Token
exports.verifyToken = async (req, res, next) => {
  try {
    const token = req.headers.authorization.split(" ")[1];
    if (!token) {
      return res
        .status(401)
        .send({ success: false, message: "Unauthorized Access ..!" });
    }
    const decoded = await promisify(jwt.verify)(
      token,
      process.env.TOKEN_SECRET
    );
    req.user = decoded;
    next();
  } catch (error) {
    res.status(403).send({ success: false, message: "Forbidden Access ..!" });
  }
};
