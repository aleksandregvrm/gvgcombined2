const express = require("express");
const router = express.Router();
const {
  changeUserPassword,
  updateUser,
  subscribeUserEmail,
  getAllSubscribedEmails,
  sendUserMessage,
  deleteSubscribedEmail,
} = require("../controllers/userController");
const authenticateUser = require("../middleware/authentication");
const { createUserLimiter } = require("../utils");

const fifteenMinutes = 1000 * 60 * 15;

router.post("/change-password", authenticateUser, changeUserPassword);
router.post(
  "/subscribe-email",
  createUserLimiter(fifteenMinutes, 2),
  subscribeUserEmail
);
router.get("/subscribed-emails",authenticateUser,getAllSubscribedEmails);
router.delete("/subscribed-emails/:email",authenticateUser,deleteSubscribedEmail);
router.post("/user-message", createUserLimiter(fifteenMinutes, 2), sendUserMessage);

module.exports = router;
