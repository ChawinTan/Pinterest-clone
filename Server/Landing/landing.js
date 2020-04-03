var express = require("express");
var connection = require("../sql");
var router = express.Router();

router.get('/user-details', (req, res) => {
    const getDetails = `SELECT User.name, User.secret, Photo.link FROM User INNER JOIN Photo ON User.secret=Photo.user_id LIMIT 100`;

    connection.query(getDetails, (err, data) => {
        if (err) {
            throw err;
        } else {
            let userMap = {};
            
            data.map(detail => {
                if (!userMap.hasOwnProperty(detail.secret)) {
                    userMap[detail.secret] = { name: detail.name, picNum: 1 };
                } else {
                    userMap[detail.secret]['picNum'] += 1;
                    userMap = { ... userMap }
                }
            });
            res.status(200).json(userMap);
        }
    });
});

module.exports = router;