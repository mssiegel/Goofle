var express = require('express');
var router = express.Router();

/* Multer handles multipart/form-data, allowing form to upload files. */
var multer  = require('multer');

/* Using Multer to convert uploaded image to buffer file and store it in memory. */
var storage = multer.memoryStorage()
var upload = multer({ storage: storage }).single('inputImage');

/* Datauri converts stored buffer file to data uri */
const Datauri = require('datauri');


/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Goofle' });
});

/* POST from Home page that redirects to Result page. */
router.post('/result', upload, function(req, res, next) {
  
  var datauri = new Datauri();
  datauri.format('.png', req.file.buffer);
 
  res.render('result', {title: 'Your Goofle result', inputName: req.body.inputName, inputImage: datauri.content});
});



module.exports = router;
