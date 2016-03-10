import express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', (req:express.Request, res:express.Response, next:any) => {
  res.render('index', { title: 'Home' });
});

/* GET product page. */
router.get('/products', (req:express.Request, res:express.Response, next:any) => {
  res.render('index', { title: 'Products' });
});

/* GET services page. */
router.get('/services', (req:express.Request, res:express.Response, next:any) => {
  res.render('index', { title: 'Services' });
});

/* GET about page. */
router.get('/about', (req:express.Request, res:express.Response, next:any) => {
  res.render('index', { title: 'About' });
});

/* GET contact page. */
router.get('/contact', (req:express.Request, res:express.Response, next:any) => {
  res.render('contact', { title: 'Contact' });
});

module.exports = router;
