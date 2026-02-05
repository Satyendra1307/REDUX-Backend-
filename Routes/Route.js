const express = require('express');
const products = require('../Model/model.js');

const router = express.Router();
const {
  saveUser,
  loginUser,
} = require("../controllers/userController.js");
// SIGNUP
router.post("/signup", saveUser);

// LOGIN
router.post("/login", loginUser);

// Get all products
router.get('/getProducts', async (req, res) => {
    try {
        const data = await products.find();
        res.json(data);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

module.exports = router;







