var multer = require('multer');
var storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, 'uploads/')
    }, filename: (req, file, cb) => {
        cb(null, Date.now() + '.jpg');
    }
});

var upload = multer({ storage: storage });

const express = require('express');
const router = express.Router();
const Article = require('./../models/article');

router.get('/', (req, res) => {
    if (req.isAuthenticated()) {
        res.render("compose");
    } else {
        res.redirect("/login");
    }
});

router.post("/", upload.single('mainImage'), async (req, res, next) => {


    let article = new Article({
        name: req.body.namebeg,
        postcontent: req.body.beg,
        description: req.body.desk,
        images: req.file
    });

    try {
        article = await article.save();
        res.redirect('/admin?page=1');
    } catch (err) {
        console.log(err);
        res.render("articles/compose", {
            article: article
        });
    }

});

module.exports = router;