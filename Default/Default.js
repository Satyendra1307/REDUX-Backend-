const products = require("../Model/model.js");
const Data = require("../api.js");

const data = async () => {
  try {
    await products.deleteMany({});
    console.log("Old products removed");

    await products.insertMany(Data);
    console.log("New products inserted");
  } catch (error) {
    console.log("Default Data Error:", error.message);
  }
};

module.exports = data;
