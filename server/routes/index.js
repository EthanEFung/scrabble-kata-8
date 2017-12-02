const router = require("express").Router();
const controller = require("../controllers/index");

router.get("/", (req, res) => {
  res.sendStatus(200);
});

router.get("/:term", controller.getTermSearchResults);

module.exports = router;
