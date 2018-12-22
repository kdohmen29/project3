const router = require("express").Router();
const bookRoutes = require("./books");
const spotifyRoutes = require("./spotify");

// Book routes
router.use("/books", bookRoutes);
router.use("/spotify", spotifyRoutes);

module.exports = router;
