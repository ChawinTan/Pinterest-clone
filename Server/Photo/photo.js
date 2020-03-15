var express = require("express");
var connection = require("../sql");
var router = express.Router();

router.get('/get/:user_id', (req, res) => {
    const get_photo = `SELECT * FROM Photo WHERE user_id = ?`;

    connection.query(get_photo, req.params.user_id, (err, data) => {
        if (err) {
            throw err;
        } else {
            res.status(200).json(data);
        }
    });
})

router.post('/add/:user_id', (req, res) => {
    const add_photo = `INSERT INTO Photo (user_id, link) VALUES (? ,?)`;

    connection.query(add_photo, [req.params.user_id, req.body.link], (err, data) => {
        if (err) {
            throw err;
        } else {
            res.status(200).json({status: 'added'});
        }
    });
});

router.get('/delete/:id', (req, res) => {
    const delete_photo = `DELETE FROM Photo WHERE id = ?`;

    connection.query(delete_photo, req.params.id, (err, data) => {
        if (err) {
            throw err;
        } else {
            res.status(200).json({status: 'deleted'});
        }
    });
});

module.exports = router;
