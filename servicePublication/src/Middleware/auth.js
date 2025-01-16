const jwt = require("jsonwebtoken");

module.exports = (req, res, next) => {
    const authhead = req.headers["authorization"];
    const token = authhead.split(" ")[1];
    if (!token) return res.status(401).json({ message: "Token manquant" });
    try {
        const decoded = jwt.verify(token, "secretkey");
        req.user = decoded;
        next();
    } catch (err) {
        res.status(403).json({ message: "Token invalide" });
    }
};
