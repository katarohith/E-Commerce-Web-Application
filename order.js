const mongoose = require("mongoose");

const OrderSchema = new mongoose.Schema({

  user: String,

  products: Array,

  total: Number,

  status: {
    type: String,
    default: "Pending"
  }

});

module.exports = mongoose.model(
  "Order",
  OrderSchema
);
