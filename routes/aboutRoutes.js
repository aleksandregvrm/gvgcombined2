const express = require("express");
const router = express.Router();
const {
  getAboutStats,
  editAboutStats,
  setAboutStats,
} = require("../controllers/aboutController");
const authenticateUser = require("../middleware/authentication");

router.route("/").post(setAboutStats).get(getAboutStats);
router.route("/:id").patch(editAboutStats);

module.exports = router;

