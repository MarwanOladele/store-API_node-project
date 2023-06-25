require("dotenv").config();
require("express-async-errors");

const getProductRoute = require("./routes/products");

const express = require("express");
const app = express();

// asysc errors
const errorHandlerMiddleware = require("./middleware/error-handler");
const notFoundMiddleware = require("./middleware/not-found");
 
// connect DB
const connectDB = require("./db/connect");
app.use("/api/v1/products", getProductRoute);

// middleware
app.use(express.json());

// routes
app.get("/", (req, res) => {
  res.send('<h1>Store API</h1><a href="/api/v1/products">Products</a>');
});

app.use(errorHandlerMiddleware);
app.use(notFoundMiddleware);

const port = process.env.PORT || 5000;

const start = async () => {
  try {
    await connectDB(process.env.MONGO_URI);
    app.listen(port, console.log(`Connecting to port ${port}...`));
  } catch (error) {
    console.log(error);
  }
};

start();
