const express = require("express");
const { createProxyMiddleware } = require("http-proxy-middleware");
require("dotenv").config();
const app = express();
const cors = require("cors");

app.use(
    cors({
        origin: ["http://localhost:3000"],
        methods: ["GET", "POST", "PUT", "DELETE"],
        allowedHeaders: ["Content-Type", "Authorization"],
        credentials: true,
    })
);

// Redirection vers le User Service
app.use(
    "/api/users",
    createProxyMiddleware({
        target: "http://localhost:8080/api/users",
        changeOrigin: true,
    })
);

// Redirection vers le Product Service
app.use(
    "/api/publications",
    createProxyMiddleware({
        target: "http://localhost:8081/api/publication",
        changeOrigin: true,
    })
);

const PORT = process.env.GATEWAY_PORT;
app.listen(PORT, () => {
    console.log(`API Gateway démarrée sur le port ${PORT}`);
});
