const router = require("express").Router();
const spotifyController = require("../../controllers/spotifyController");

// Matches with "/api/spotify"
router.route("/")
  .get(spotifyController.authenticate)

module.exports = router;
