var express = require('express');
var router = express.Router();

// Multer handles multipart/form-data, allowing form to upload files
const multer = require('multer');

// Using Multer to convert uploaded image to buffer file and store it in memory
var storage = multer.memoryStorage()
var upload = multer({ storage: storage }).single('inputImage');

// Using Jimp to both resize uploaded image and also convert it to a data URI
const jimp = require('jimp');

// Using Datauri to convert buffer file into a data URI
const Datauri = require('datauri');

// Using Puppeteer to insert user uploaded data into google template and then screenshot the result
const puppeteer = require('puppeteer');


const friendliestSmile = require('../google-html-templates/friendliestSmile.js');
const smelliestFarter = require('../google-html-templates/smelliestFarter.js');
const cutestBaby = require('../google-html-templates/cutestBaby.js');

router.post('/', upload, function (req, res, next) {

  jimp.read(req.file.buffer, function(err, image) {

    if (err) {
      console.log('Error Occured');
    }
    image.resize(150, jimp.AUTO)
    .exifRotate()
    .getBase64(  image.getMIME() , (err, formImageURI) => {
      if(err) { throw err}

      (async () => {

        const browser = await puppeteer.launch({
          args: ['--no-sandbox', '--disable-setuid-sandbox']
        });
        const page = await browser.newPage();
        const width1 = 1000;
        const height1 = 650;

        await page.setViewport({width: width1, height: height1});
        var inputName = req.body.inputName;

        if (req.body.categorySelected === "random") {
          const choices = ["friendliest-smile", "smelliest-farter", "cutest-baby"];
          const randomChoice = await choices[Math.floor(Math.random() * choices.length)];
          req.body.categorySelected = randomChoice;
        };

        switch(req.body.categorySelected) {
          case "friendliest-smile":
              await page.setContent(friendliestSmile.friendliestSmile(formImageURI, inputName));
              break;
          case "smelliest-farter":
              await page.setContent(smelliestFarter.smelliestFarter(formImageURI, inputName));
              break;
          case "cutest-baby":
              await page.setContent(cutestBaby.cutestBaby(formImageURI, inputName));;
              break;
        }

        // await page.screenshot({path: "public/YourGoofleImage.png", clip: {x:0, y:0, width:width1, height:height1} });

        // grabs screenshot as a buffer
        var capturedScreenshot = await page.screenshot({clip: {x:0, y:0, width:width1, height:height1} });
        await browser.close();
        //converts screenshot buffer into a data URI
        var datauri = new Datauri();
        datauri.format('.png', capturedScreenshot);

        await res.render('creativeresult', {title: 'Your Creative Result', inputName: req.body.inputName, inputFinalImage: datauri.content});

        // closes the async funtion for puppeteer
      })();

      // closes the getBase64 callback from jimp
    });
    // closes the jimp.read
  });
  //closes the Post function
})

module.exports = router;
