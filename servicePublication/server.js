const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const app = express();
const publicRoutes = require("./routes/publicRoutes");

app.use(
    cors({
        origin: ["http://localhost:3001"],
        methods: ["GET", "POST", "PUT", "DELETE"],
        allowedHeaders: ["Content-Type", "Authorization"],
        credentials: true,
    })
);

app.use(express.json());

const PORT = 8081;

mongoose
    .connect("mongodb://localhost:27017/IndiviArchiNTier", {})
    .then(() => console.log("Connecté à MongoDB !"))
    .catch((err) => console.error("Erreur de connexion à MongoDB :", err));

// Routes
app.use("/api/publication", publicRoutes);

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
