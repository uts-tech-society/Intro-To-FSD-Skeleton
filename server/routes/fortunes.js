const router = require("express").Router();
const fortuneController = require("../controllers/fortuneControllers");

router.get("/all", fortuneController.getAllFortunes);
router.get("/random", fortuneController.getRandomFortune);
router.post("/", fortuneController.createNewFortune);
router.put("/:id", fortuneController.updateExistingFortune);
router.delete("/:id", fortuneController.deleteExistingFortune);

module.exports = router;
