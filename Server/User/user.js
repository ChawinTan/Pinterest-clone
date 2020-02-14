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
    clientSecret: config.facebookApiSecret,
    callbackURL: config.callbackUrl
},
    (accessToken, refreshToken, profile, done) => {
        console.log(profile);
        done(null, profile);
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

router.get('/facebook/login', passport.authenticate('facebook'));

router.get('/callback', passport.authenticate('facebook', {successRedirect: '/', failureRedirect: '/failure'}), (req, res)  => {
    res.redirect('/');
})

module.exports = router;