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
    const add_photo = `INSERT INTO Photo (user_id, link, description) VALUES (?, ?, null)`;

    connection.query(add_photo, [req.params.user_id, req.body.link], (err, data) => {
        if (err) {
            throw err;
        } else {
            res.status(200).json({status: 'added'});
        }
    });
});

router.post('/update/:id', (req, res) => {
    const updatePhoto = `UPDATE Photo SET description = ? WHERE id = ?`;

    connection.query(updatePhoto, [req.body.description, req.params.id], (err, data) => {
        if (err) {
            throw err;
        } else {
            res.status(200).json({status: 'updated'});
        }
    });
})

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

router.get('/map_details/:user_id', (req, res) => {
    let mapDetails = [];
    let mapPhotos = [];
    const getMap = `SELECT * FROM Photo_map where user_id = ?`;
    const getMappedPhotos = `SELECT Photo.id, Photo.user_id, Photo.link, Photo.description from Photo JOIN Photo_map on Photo.id = Photo_map.photo_id AND Photo_map.user_id = ?`;

    connection.query(getMap, [req.params.user_id], (err, data) => {
        if (err) {
            throw err;
        } else {
            mapDetails = data;
            connection.query(getMappedPhotos, [req.params.user_id], (err, data) => {
                if (err) {
                    throw err;
                } else {
                    mapPhotos = data;

                    const mapped = {
                        details: mapDetails,
                        photos: mapPhotos
                    };
        
                    res.status(200).json(mapped);
                }
            });
        }
    });
})

module.exports = router;
