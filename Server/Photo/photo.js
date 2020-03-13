var express = require("express");
var connection = require("../sql");
var router = express.Router();

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
})

module.exports = router;
