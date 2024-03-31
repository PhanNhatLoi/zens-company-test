const router = require("express").Router();
const controllers = require("../controllers");

router.get("/jokers", controllers.getAll);
router.put("/vote/:id/:vote", controllers.postVote);

module.exports = router;
