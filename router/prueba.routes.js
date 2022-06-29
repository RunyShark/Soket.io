const { Router } = require("express");
const { prueva } = require("../controllers");
const router = Router();

router.get("/", prueva);
module.exports = router;
