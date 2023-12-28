const express = require("express");
const router = express.Router();
const {
  getAboutStats,
  editAboutStats,
  setAboutStats,
} = require("../controllers/aboutController");
const authenticateUser = require("../middleware/authentication");

router.route("/").post(authenticateUser,setAboutStats).get(getAboutStats);
router.route("/:id").patch(authenticateUser,editAboutStats);

module.exports = router;

