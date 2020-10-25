const express = require('express');
const router = express.Router();
const User = require('../models/user');

router.get("/", function (req, res) {
    res.render("register");
});


router.post("/", function (req, res) {

    User.register({
        username: req.body.username
    }, req.body.password, function (err, user) {
        if (err) {
            console.log(err);
            res.redirect("/");
        } else {
            passport.authenticate('local')(req, res, function () {
                res.redirect("/admin");
            });
        }
    });

});

module.exports = router;