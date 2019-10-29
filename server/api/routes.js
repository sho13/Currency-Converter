const router = require("express").Router();

router.use("/rates", require('./routes/rates'));

module.exports = router;
