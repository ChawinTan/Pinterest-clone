var express = require("express");
var passport = require("passport")
var facebookStrategy = require("passport-facebook").Strategy;
var connection = require("../sql");
var config = require("../config");
var router = express.Router();

let userId = '';

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
            process.nextTick(() => {
            let queryUser = `SELECT * FROM User WHERE secret = ?`;
            let insertUser = `INSERT INTO User (name, secret) VALUES (?, ?)`;
            connection.query(queryUser, profile.id,  (err, data) => {
                if (data.length === 0) {
                    connection.query(insertUser, [profile.displayName, profile.id], (err, data) => {
                        if (err) {
                            throw(err);
                        } else {
                            userId = profile.id;
                        }
                    });
                } else {
                    userId = profile.id;
                } 
            });
            return done(null, profile);
        })
    }
))

router.get('/user', (req, res) => {
    let getUser = `SELECT * FROM User WHERE secret = ?`;
    connection.query(getUser, userId, (err, data) => {
        if (err) {
            throw err;
        } else {
            res.status(200).json(data);
        }
    });
});

router.get('/logout',  (req, res) => {
    if (userId) {
        userId = '';
        res.status(200).json({ logout: true });
    } else if (err) {
        throw (err);
    }
})

router.get('/facebook/login', passport.authenticate('facebook'));

router.get('/callback', passport.authenticate('facebook', {successRedirect: '/', failureRedirect: '/failure'}), (req, res)  => {
    res.redirect('/');
})

module.exports = router;