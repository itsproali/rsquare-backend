exports.getTest = async (req, res) => {
  try {
    const test = { name: "Test Data", reason: "Server Testing" };
    res.status(200).send({ success: true, data: test });
  } catch (error) {
    next(error);
  }
};
