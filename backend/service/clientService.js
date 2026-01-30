const Client = require("../models/Client");

const createClient = async (clientData) => {
  const client = new Client(clientData);
  return await client.save();
};

const getAllClients = async () => {
  return await Client.find();
};

module.exports = {
  createClient,
  getAllClients,
};
