const express = require("express");
const router = express.Router();
const publicController = require("../src/Controllers/publicController");
const auth = require("../src/Middleware/auth");

router
    .route("/")
    .get(publicController.getAllPublications)
    .post(auth, publicController.createPublication);

router
    .route("/:id")
    .get(auth, publicController.getOnePublication)
    .delete(auth, publicController.deletePublication)
    .put(auth, publicController.updatePublication);

module.exports = router;
