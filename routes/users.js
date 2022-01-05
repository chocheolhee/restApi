const router = require("express").Router();

router.get("/", (req, res) => {
    res.send("user route 안녕하세요");
});

module.exports = router;
