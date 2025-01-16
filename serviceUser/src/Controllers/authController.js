const jwt = require("jsonwebtoken");
const User = require("../Models/userModel");

exports.login = async (req, res) => {
    const { email, password } = req.body;
    const user = await User.findOne({ email });
    if (!user || user.password !== password) {
        return res.status(401).json({ message: "Identifiants invalides" });
    }
    const token = jwt.sign({ userId: user._id }, "secretkey", {
        expiresIn: "3h",
    });
    console.log(token);
    res.json({ token });
};
