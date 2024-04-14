const express = require('express')
const app = express()
const mongoose = require('mongoose')
const dotenv = require("dotenv");
const cors = require("cors")
const port = 5000

dotenv.config(); 

//Routes Area
const categoryRoute = require("./routers/CategoriesRouter");
const productRoute = require("./routers/ProductsRouter");
const invoiceRoute = require("./routers/InvoicesRouter");
const userRoute = require("./routers/UsersRouter");

const connect = async () => {
    try {
      await mongoose.connect(process.env.MONGO_URI);
      console.log("Connected to mongoDB");
    } catch (error) {
      throw error;
    }
  };
  


app.get('/', (req, res) => {
  res.send('Hello World!')
})

//Middleware
app.use(express.json());
app.use(cors());
app.use("/api/category", categoryRoute);
app.use("/api/product", productRoute);
app.use("/api/invoice", invoiceRoute);
app.use("/api/user", userRoute);


app.listen(port, () => {
    connect();
  console.log(`Example app listening on port ${port}`)
})