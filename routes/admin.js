const express = require('express');
const router = express.Router();
const Article = require('./../models/article');

router.get("/", paginatedResults(Article), (req, res) => {
    if (req.isAuthenticated()) {
        var page = JSON.stringify(res.paginatedResults.page);
        var previousPage = JSON.stringify(res.paginatedResults.previous.page);
        var nextPage = JSON.stringify(res.paginatedResults.next.page);
        var articles = res.paginatedResults.results;
        res.render("admin", {
            articles: articles,
            page: page,
            previous: previousPage,
            next: nextPage
        });
    } else {
        res.redirect("/login");
    }

});


function paginatedResults(model) {
    return async (req, res, next) => {
        const page = parseInt(req.query.page);
        const limit = 10;

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
            }
        }
        if (startIndex > 0) {
            results.previous = {
                page: page - 1,
                limit: limit
            }
        } else {
            results.previous = {
                page: 0
            }
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