const CategoryModel = require("../models/CategoryModel.js");
const express = require("express");
const router = express.Router();

router.get("/get-all" , async(req,res) => {
  try {
    const getAllCategories = await CategoryModel.find()
    res.send(getAllCategories)
  } catch (error) {
    res.status(400).json(error);
  }
})

router.post("/add-category", async (req, res) => {
  try {
    const newCategory = new CategoryModel(req.body);
    await newCategory.save();
    res.status(200).json("Item added.");
  } catch (error) {
    res.status(400).json(error);
  }
});

router.put("/update-category", async (req,res) => {
  try {
    await CategoryModel.findOneAndUpdate({ _id:req.body.id},req.body)
    res.status(200).json("Item updated.");
  } catch (error) {
    res.status(400).json(error)
  }
})

router.delete("/delete-category" , async (req,res) => {
  try {
    await CategoryModel.findOneAndDelete({ _id:req.body.id},)
    res.status(200).json("Item deleted.");
  } catch (error) {
    res.status(400).json(error)
  }
})

module.exports = router;