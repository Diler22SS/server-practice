const express = require("express");
const {
  getResults,
  getResult,
  deleteResult,
  addResult,
  updateResult,
} = require("../controllers/result-controllers");

const router = express.Router();

router.get("/results", getResults);
router.get("/results/:id", getResult);
router.delete("/results/:id", deleteResult);
router.post("/results", addResult);
router.patch("/results/:id", updateResult);

module.exports = router;
