var express = require("express");
var passport = require("passport")
var facebookStrategy = require("passport-facebook").Strategy;
var connection = require("../sql");
var config = require("../config");
var router = express.Router();

passport.serializeUser((user, done) => {
    done(null, user);
});

passport.deserializeUser((obj, done) => {
    done(null, obj);
});

passport.use(new facebookStrategy({
    clientID: config.facebookApiKey,
    clientSecret: config.facebookApiSecret
},
    (accessToken, refreshToken, profile, done) => {
        process.nextTick(() => {
            console.log(profile);
        })
    }
))

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

router.get('/facebook/login', passport.authenticate('facebook', {scope: 'email'}));

router.get('/callback', (req, res) => {
    res.status(200).json({login: 'success'});
});

module.exports = router;