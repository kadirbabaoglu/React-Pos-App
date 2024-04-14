const InvoiceModel = require("../models/InvoiceModel.js");
const express = require("express");
const router = express.Router();

router.get("/get-all" , async(req,res) => {
  try {
    const getAllInvoices = await InvoiceModel.find()
    res.send(getAllInvoices)
  } catch (error) {
    res.status(400).json(error);
  }
})

router.post("/add-invoice", async (req, res) => {
  try {
    const newInvoice = new InvoiceModel(req.body);
    await newInvoice.save();
    res.status(200).json("Item added.");
  } catch (error) {
    res.status(400).json(error);
  }
});

router.put("/update-invoice", async (req,res) => {
  try {
    await InvoiceModel.findOneAndUpdate({ _id:req.body.id},req.body)
    res.status(200).json("Item updated.");
  } catch (error) {
    res.status(400).json(error)
  }
})

router.delete("/delete-invoice" , async (req,res) => {
  try {
    await InvoiceModel.findOneAndDelete({ _id:req.body.id},)
    res.status(200).json("Item deleted.");
  } catch (error) {
    res.status(400).json(error)
  }
})

module.exports = router;