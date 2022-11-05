const { getTest } = require("../controllers/test.controller");

const router = require("express").Router();

router
  /**
   * @api {get} Get Test
   * @apiDescription Describe About the api
   *
   * @apiBody   Nothing
   * @apiQuery  Nothing
   * @apiParam  Nothing
   * @apiSuccess {Object} {success: true, data: [test]}
   *
   * @apiError {Object} status = 400 {success: false, }
   */

.get("/", getTest);

module.exports = router;
