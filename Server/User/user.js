var express = require("express");
var connection = require("../sql");
var router = express.Router();

router.get('/user', (req, res) => {
    let getUser = `SELECT * FROM User WHERE id = 1`;
    connection.query(getUser, (err, data) => {
        if (err) {
            throw err;
        } else {
            res.status(200).json(data);
        }
    });
});

module.exports = router;