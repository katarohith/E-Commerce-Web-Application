const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const Product = require("./models/Product");
const User = require("./models/User");
const Order = require("./models/Order");

const app = express();

app.use(cors());
app.use(express.json());

mongoose.connect("mongodb://127.0.0.1:27017/ecommerce")
.then(() => console.log("Database Connected"))
.catch(err => console.log(err));

app.get("/", (req, res) => {
  res.send("Server Running");
});

/* PRODUCTS */

app.post("/add-product", async (req, res) => {

  const product = new Product(req.body);

  await product.save();

  res.send("Product Added");
});

app.get("/products", async (req, res) => {

  const products = await Product.find();

  res.json(products);
});

/* ORDERS */

app.post("/checkout", async (req, res) => {

  const order = new Order(req.body);

  await order.save();

  res.send("Order Placed");
});

app.get("/orders", async (req, res) => {

  const orders = await Order.find();

  res.json(orders);
});

app.listen(5000, () => {
  console.log("Server Started on port 5000");
});
