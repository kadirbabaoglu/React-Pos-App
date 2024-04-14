const ProductModel = require("../models/ProductModel.js");
const express = require("express");
const router = express.Router();

router.get("/get-all" , async(req,res) => {
  try {
    const getAllProducts = await ProductModel.find()
    res.send(getAllProducts)
  } catch (error) {
    res.status(400).json(error);
  }
})

router.post("/add-product", async (req, res) => {
  try {
    const newProduct = new ProductModel(req.body);
    await newProduct.save();
    res.status(200).json("Item added.");
  } catch (error) {
    res.status(400).json(error);
  }
});

router.put("/update-product", async (req,res) => {
  try {
    await ProductModel.findOneAndUpdate({ _id:req.body.id},req.body)
    res.status(200).json("Item updated.");
  } catch (error) {
    res.status(400).json(error)
  }
})

router.delete("/delete-product" , async (req,res) => {
  try {
    await ProductModel.findOneAndDelete({ _id:req.body.id},)
    res.status(200).json("Item deleted.");
  } catch (error) {
    res.status(400).json(error)
  }
})

module.exports = router;