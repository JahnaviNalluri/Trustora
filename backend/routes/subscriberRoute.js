const express = require("express");
const {
  subscribeUser,
  getAllSubscribers,
} = require("../controller/subscriberController");

const router = express.Router();

// SUBSCRIBE USER
router.post("/", subscribeUser);

// GET ALL SUBSCRIBERS (Admin)
router.get("/", getAllSubscribers);

module.exports = router;
