var express = require('express');
var router = express.Router();
var articleModel = require('../models/article');
var Article = articleModel.Article;
// GET - show main aritcles page
router.get('/', function (req, res, next) {
    // use the Article model to query the Articles collection
    Article.find(function (error, articles) {
        if (error) {
            console.log(error);
            res.end(error);
        }
        else {
            // no error, we found a list of articles
            res.render('articles/index', {
                title: 'Articles',
                articles: articles
            });
        }
    });
});
// GET add page - show the blank form
router.get('/add', function (req, res, next) {
    res.render('articles/add', {
        title: 'Add a New Article'
    });
});
// POST add page - save the new article
router.post('/add', function (req, res, next) {
    Article.create({
        title: req.body.title,
        content: req.body.content
    }, function (error, Article) {
        // did we get back an error or valid Article object?
        if (error) {
            console.log(error);
            res.end(error);
        }
        else {
            res.redirect('/articles');
        }
    });
});
// GET edit page - show the current article in the form
router.get('/:id', function (req, res, next) {
    var id = req.params.id;
    Article.findById(id, function (error, Article) {
        if (error) {
            console.log(error);
            res.end(error);
        }
        else {
            //show the edit view
            res.render('articles/edit', {
                title: 'Article Details',
                article: Article
            });
        }
    });
});
// POST edit page - update the selected article
router.post('/:id', function (req, res, next) {
    // grab the id from the url parameter
    var id = req.params.id;
    // create and populate an article object
    var article = new Article({
        _id: id,
        title: req.body.title,
        content: req.body.content
    });
    // run the update using mongoose and our model
    Article.update({ _id: id }, article, function (error) {
        if (error) {
            console.log(error);
            res.end(error);
        }
        else {
            res.redirect('/articles');
        }
    });
});
// GET delete article
router.get('/delete/:id', function (req, res, next) {
    // get the id from the url
    var id = req.params.id;
    // use the model and delete this record
    Article.remove({ _id: id }, function (error) {
        if (error) {
            console.log(error);
            res.end(error);
        }
        else {
            res.redirect('/articles');
        }
    });
});
// make this public
module.exports = router;

//# sourceMappingURL=articles.js.map
