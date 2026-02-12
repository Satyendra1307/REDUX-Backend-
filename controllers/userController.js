const User = require("../Model/Usermodel");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

exports.saveUser = async (req, res) => {
  try {
    const { name, email, password } = req.body;

    const userExist = await User.findOne({ email });
    if (userExist) {
      return res.json({ success: false, message: "User already exists" });
    }

    const hashPass = await bcrypt.hash(password, 10);

    const newUser = await User.create({ name, email, password: hashPass });

    res.json({ success: true, message: "Signup successful", user: newUser });
  } catch (err) {
    res.json({ success: false, message: err.message });
  }
};

exports.loginUser = async (req, res) => {
  try {
    const { email, password } = req.body;

    const user = await User.findOne({ email });
    if (!user) return res.json({ success: false, message: "User not found" });

    const match = await bcrypt.compare(password, user.password);
    if (!match) return res.json({ success: false, message: "Wrong password" });

    const token = jwt.sign({ id: user._id }, "SECRET123", {
      expiresIn: "1d",
    });

    res.json({
      success: true,
      message: "Login successful",
      token,
      user,
    });
  } catch (err) {
    res.json({ success: false, message: err.message });
  }
};
