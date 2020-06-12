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

router.post('/select', (req, res) => {
    const select = `SELECT * FROM Photo WHERE user_id = ?`;

    connection.query(select, [req.body.user],  (err, data) => {
        if (err) {
            throw err;
        } else {
            res.status(200).json(data);
        }
    })
})

router.post('/like', (req, res) => {
    const map = `INSERT INTO Photo_map (user_id, photo_id, counter_party_id) VALUES (?, ?, ?)`;

    connection.query(map, [req.body.userId, req.body.photoId, req.body.counterParty], (err, data) => {
        if (err) {
            throw err;
        } else {
            res.status(200).json({status: 'success'});
        }
    })
})

module.exports = router;