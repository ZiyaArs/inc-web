const express = require('express');
const router = express.Router();
const Article = require('./../models/article');
var http = require('http');


router.get("/", (req, res) => {
    Article.find({}, (err, data) => {
        res.json(data);
    })
});


router.get('/:articleId', async (req, res) => {
    const requestedPostId = req.params.articleId;

    await Article.findOne({
        _id: requestedPostId
    }, function (err, article) {
        res.json(article);
    });
})

function paginatedResults(model) {
    return async (req, res, next) => {
        const page = parseInt(req.query.page);
        const limit = 3;

        const startIndex = (page - 1) * limit;
        const endIndex = page * limit;

        const results = {};
        results.page = page;
        if (endIndex < model.length) {
            results.next = {
                page: page + 1,
                limit: limit
            }
        } else {
            results.next = {
                page: 0
            };
        }
        if (startIndex > 0) {
            results.previous = {
                page: page - 1,
                limit: limit
            }
        } else {
            results.previous = {
                page: 0
            };
        }

        try {
            results.results = await model.find().limit(limit).sort({
                createdAt: 'desc'
            }).skip(startIndex).exec();
            res.paginatedResults = results;
            next();
        } catch (err) {
            console.log(err);
        }
    }
}
module.exports = router;