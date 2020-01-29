const express = require("express");
const jsonParser = express.json();
const router = express.Router();

//middleware
router.use(function timeLog(req, res, next) {
    next();
});

router.get("/", jsonParser, function (req, res) {
    userName = "";
    for (i = 0; i < 3; ++i)
      userName += `${(~~(Math.random()*1e8)).toString(16)}`;

    res.send({user_id: userName});
});


module.exports = router;
