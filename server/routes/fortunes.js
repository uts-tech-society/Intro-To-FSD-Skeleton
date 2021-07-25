const router = require("express").Router;
const fortuneController = require("../controllers/fortuneController");

router.get("/all", fortuneController.getAllFortune);
router.get("/random", fortuneController.getRandomFortune);
router.post("/", fortuneController.createNewFortune);
router.put("/:id", fortuneController.updateExistingFortune);
router.delete("/:id", fortuneController.deleteExistingFortune);
