const subscriberService = require("../service/subscriberService");

// SUBSCRIBE USER
const subscribeUser = async (req, res) => {
  try {
    await subscriberService.createSubscriber(req.body);
    res.status(201).json({ message: "Subscribed successfully" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// GET ALL SUBSCRIBERS
const getAllSubscribers = async (req, res) => {
  try {
    const subscribers = await subscriberService.getAllSubscribers();
    res.json(subscribers);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = {
  subscribeUser,
  getAllSubscribers,
};
