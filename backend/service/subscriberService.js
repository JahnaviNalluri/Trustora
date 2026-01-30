const Subscriber = require("../models/Subscriber");

const createSubscriber = async (subscriberData) => {
  const subscriber = new Subscriber(subscriberData);
  return await subscriber.save();
};

const getAllSubscribers = async () => {
  return await Subscriber.find();
};

module.exports = {
  createSubscriber,
  getAllSubscribers,
};
