const router = require("express").Router();

router.get("/", (req, res) => {
    res.send("user route 안녕하세요 하하하 aaa");
});

module.exports = router;
