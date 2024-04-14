const UserModel = require("../models/UserModel.js");
const express = require("express");
const router = express.Router();
const bcrypt = require('bcrypt');


router.post("/register", async (req, res) => {
  try {
    const { username, email, password } = req.body;
    const hashedPassword = await bcrypt.hash(password, 10); 
    const newUser = new UserModel({
      username,
      email,
      password: hashedPassword,
    });
    await newUser.save();
    res.status(200).json("Item added.");
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

module.exports = router;


   