var express = require("express");
var connection = require("../sql");
var router = express.Router();

router.post('/', (req, res) => {
    const term = req.body.searchTerm;
    const search = `SELECT * FROM User WHERE name LIKE '%${term}%'`;

    connection.query(search, (err, data) => {
        if (err) {
            throw err;
        } else {
            if (data.length === 0) {
                res.status(200).json('Your search return an empty result');
            } else {
                res.status(200).json(data);
            }
        }
    })
})

module.exports = router;