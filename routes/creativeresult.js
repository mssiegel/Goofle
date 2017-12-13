var express = require('express');
var router = express.Router();

/* Multer handles multipart/form-data, allowing form to upload files. */
var multer  = require('multer');

/* Using Multer to convert uploaded image to buffer file and store it in memory. */
var storage = multer.memoryStorage()
var upload = multer({ storage: storage }).single('inputImage');

// Using Jimp to both resize uploaded image and also convert it to a data URI
const jimp = require('jimp');

/* NO longer Used!   Datauri converts stored buffer file to data uri */
// NO Longer Used!   const Datauri = require('datauri');

//Using Puppeteer to insert user uploaded data into google template and then screenshot the result
const puppeteer = require('puppeteer');


router.post('/', upload, function (req, res, next) {

  jimp.read(req.file.buffer, function(err, image) {
    if (err) {
      console.log('Error Occured');
    }
    image.resize(150, jimp.AUTO)
    .getBase64(  image.getMIME() , (err, formImageURI) => {
      if(err) { throw err}

      (async () => {
        const browser = await puppeteer.launch({
          args: ['--no-sandbox', '--disable-setuid-sandbox']
        });
        const page = await browser.newPage();
        var inputName= req.body.inputName;

        await page.setContent(`

          <!DOCTYPE html>
          <html lang="en">

          <head>

          <style>
          body {
            width: 1200px;
            height: 700px;
            font-family: sans-serif;
          }

          #header {
            background-color: #fafafa;
            height: 85px;
            padding: 10px;
          }

          #secondHeader {
            background-color: #fafafa;
            height: 35px;
            border-bottom: 1px #eee solid;
            margin-bottom: 30px;
          }

          #secondHeader p {
            display: inline-block;
            padding: 0 20px;
            font-size: 12px;
            color: #777;
          }

          .all-word {
            margin-left: 145px;
            color: #0000EE !important;
            font-weight: 700;
          }


          .left-padding {
            margin-left: 70px;
          }

          #google {
            float: left;
            width: 132px;
            font-size: 40px;
            font-weight: 500;
            letter-spacing: -1.5px;
          }

          #search-form {
            float: left;
            margin: 10px 0 0 15px;
            height: 44px;
            border-radius: 2px;
            width: 640px;
            border: 1px solid #dAdAdA;
            box-shadow: 0px 1px 0 #CCC;
            /* Adds padding and size to search form text */
            padding-left: 17px;
            font-size: 16.5px;
            /* adds Microphone Logo followed by white background to search input */
            background: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAACrElEQVR42u2Xz2sTQRSAX8VSb1K8iNqKooJH2Ux6Ksn+iPQqxZMIehJB0do/IMhmQWsvHr2KSEGk0tSLIoWIYNUKij20F2/N7iaUZnYT0kYzzhMKs0HDJiTdLcwHDwKZSd63781LBiQSSW9JZdkhzfKm1Rz9mjZp/W9YdEU3vXv4HsQZ40FtNG36q5rls//Ej4tmbSS2T15Mvp3ExOPmEMQNbBtMMEyoljcFcQN7PqyAlqNfIG7gYQ0tYNIaxA1MrJPY3wImbUqBKAXSFv0tBSIVMOkvKRDtGKWN/T6FdqRAxFNoWwpEPIXqUqBT6ALU/UVgu8GW4GD3f6f9TRDYNJTDrk7YbtiqUumHwIYoUJuHERDAS0r4CvgFECgbY+cFAR7KT+g1POmCKFDNw6WggHc3fBtVb4CAoyauBgXIG+g1Xh5mRAGah6cggBd11fK/h7lOprIs0H6uRl6KAo5O7kOv4QmPiwJ4Jqqv4FiwCtXjvD2+tRmfK6kZ/ygI2HritK0rDVGgrClJ6DWMwYC/AGuCBMYcIC2V0CzvjmbRz3j3xUjn6CfeYreUJ2wQkGD75INPX1mFfsEFrrcIYCvdhC4paWQakxajpJMr0C9YFg54i7AsClRmh9/xnr0NHcInzZStk2aLwAcGMAD9pPIazvFKVDD5rdnhJeHLX5RTyRPQHpz5o66emMc9wdlPtvA8wF7Aq2BUHh1525qEo5JtR1WeOXpickO9cJIpyuD6xJmhYiZ5ytWSl3mlnuOaf+2zDaLDXmJrSgZ/MYVEugo+gSh+FkSBa4yd5Ul87DZ5XpFl/AyIEjzYjkau8WqshU2cr13HPbgX4gJOD97n465GZlyVvC9mSKloKI2iTnbwNT+gBX54H+IaXAtxJzE3ycSAFqSAFJACUkAikXD+AHj5/wx2o5osAAAAAElFTkSuQmCC) no-repeat;
            background-position: 92%;
            background-size: 24px;
            background-color: white;
          }

          #main-div {
            margin-left: 160px;
          }

          .title {
            font-size: 20px;
            color: darkblue;
            margin: 0;
            padding: 0;
          }

          .green-link {
            font-size: 15px;
            color: green;
            margin: 0;
            padding: 0;
          }

          .summary-text {
            font-size: 13px;
            margin: 0;
            padding: 0;
            margin-bottom: 20px;
            width: 650px;
            font-family: Arial;
          }

          .no-bottom-margin {
            margin-bottom: 0;
          }

          .small-image {
            width: 150px;
          }


          /* SVG Vector Graphics */

          #google-logo {
            width: 120px;
            float: left;
            margin: 12px 0 0 4px;
          }

          #search-icon {
            color: #4285f4;
            height: 25px;
            width: 25px;
            position: absolute;
            top: 40px;
            left: 778px;
          }

          </style>


          </head>

          <body>
          <div id="header">
          <div id="google-logo"><svg xmlns="http://www.w3.org/2000/svg" version="1.1" viewbox="0 0 1000 328.56"><path d="m246.11 116.18h-116.57v34.591h82.673c-4.0842 48.506-44.44 69.192-82.533 69.192-48.736 0-91.264-38.346-91.264-92.092 0-52.357 40.54-92.679 91.371-92.679 39.217 0 62.326 25 62.326 25l24.22-25.081s-31.087-34.608-87.784-34.608c-72.197-1e-3 -128.05 60.933-128.05 126.75 0 64.493 52.539 127.38 129.89 127.38 68.031 0 117.83-46.604 117.83-115.52 0-14.539-2.1109-22.942-2.1109-22.942z" fill="#4285f4"></path><path d="m341.6 91.129c-47.832 0-82.111 37.395-82.111 81.008 0 44.258 33.249 82.348 82.673 82.348 44.742 0 81.397-34.197 81.397-81.397 0-54.098-42.638-81.959-81.959-81.959zm0.47563 32.083c23.522 0 45.812 19.017 45.812 49.66 0 29.993-22.195 49.552-45.92 49.552-26.068 0-46.633-20.878-46.633-49.79 0-28.292 20.31-49.422 46.741-49.422z" fill="#ea4335"></path><path d="m520.18 91.129c-47.832 0-82.111 37.395-82.111 81.008 0 44.258 33.249 82.348 82.673 82.348 44.742 0 81.397-34.197 81.397-81.397 0-54.098-42.638-81.959-81.959-81.959zm0.47562 32.083c23.522 0 45.812 19.017 45.812 49.66 0 29.993-22.195 49.552-45.92 49.552-26.068 0-46.633-20.878-46.633-49.79 0-28.292 20.31-49.422 46.741-49.422z" fill="#fbbc05"></path><path d="m695.34 91.215c-43.904 0-78.414 38.453-78.414 81.613 0 49.163 40.009 81.765 77.657 81.765 23.279 0 35.657-9.2405 44.796-19.847v16.106c0 28.18-17.11 45.055-42.936 45.055-24.949 0-37.463-18.551-41.812-29.078l-31.391 13.123c11.136 23.547 33.554 48.103 73.463 48.103 43.652 0 76.922-27.495 76.922-85.159v-146.77h-34.245v13.836c-10.53-11.347-24.93-18.745-44.04-18.745zm3.178 32.018c21.525 0 43.628 18.38 43.628 49.768 0 31.904-22.056 49.487-44.104 49.487-23.406 0-45.185-19.005-45.185-49.184 0-31.358 22.619-50.071 45.66-50.071z" fill="#4285f4"></path><path d="m925.89 91.02c-41.414 0-76.187 32.95-76.187 81.57 0 51.447 38.759 81.959 80.165 81.959 34.558 0 55.768-18.906 68.426-35.845l-28.235-18.787c-7.3268 11.371-19.576 22.484-40.018 22.484-22.962 0-33.52-12.574-40.061-24.754l109.52-45.444-5.6859-13.318c-10.58-26.08-35.26-47.86-67.92-47.86zm1.4268 31.413c14.923 0 25.663 7.9342 30.224 17.447l-73.139 30.57c-3.1532-23.667 19.269-48.017 42.915-48.017z" fill="#ea4335"></path><path d="m797.49 249.7h35.975v-240.75h-35.975z" fill="#34a853"></path></svg></div>
          <input
          id="search-form" type="text" value="who is the world's best shopper"></div>
          <div id=secondHeader>
          <p class="all-word">All</p><p>Maps</p><p>Videos</p><p>News</p><p>Shopping</p><p>More</p><p class="left-padding">Settings</p><p>Tools</p>
          </div>
          <div id="search-icon"><svg focusable="false" xmlns="http://www.w3.org/2000/svg" viewbox="0 0 24 24"><path d="M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z" fill="#4285f4"></path></svg></div>
          <div id="main-div">
          <img src="${formImageURI}" id="imageFromForm">

          <p class="title"> ${inputName} rocks at shopping</p>
          <p class="green-link">www.shoppingforsemidummies.com</p>
          <p class="summary-text">"Spent past 5 hours binge watching shopping spree of ${inputName} #happy". That was Mickey Mouse's latest tweet.   </p>

          <p class="title"> Look at that dude shop</p>
          <p class="green-link">www.nytimes.com/shopping-championship</p>
          <p class="summary-text">Deal hunters just found their messiah.  ${inputName} was just declared the ULTIMATE Walmart shopping Champion. Recent news also show that ${inputName} just hit up Amazon like a tornado. Goodness gracious say hooray for ${inputName}!!!</p>


          <p class="title"> Holy Smokies Jeepers Creepers</p>
          <p class="green-link">www.whitehouse.com/holiday-declared</p>
          <p class="summary-text">Oh baby yeah!!! We are so proud of shopping guru ${inputName}!!!  ${inputName} is now in charge of buying all clothes for all employees of The White House.</p>

          <p class="title"> When shopping meets LOVE</p>
          <p class="green-link">www.craziestnewsever.com/i-am-in-love</p>
          <p class="summary-text no-bottom-margin">"When I look at sales, I FEEL Cupid's arrow," says ${inputName}, "Wide supermarket aisles make me feel like I'm ready for a romantic evening!!" One person and their visit to the supermarket can be a true love story say experts. It can make your body feel all tingly inside.  Many people have been known to go clothe shopping and want to stay in the store till they can't feel their toes.</p>
          </div>
          </body>

          </html>`

        );
        await page.screenshot({path: "public/YourGoofleImage.png", fullPage: true});

        //uncomment below to covert final image to a data URI
        //var finalImage = await page.screenshot({path: "public/YourGoofleImage.png", fullPage: true});
        //var finalDataUri = new Datauri();
        //finalDataUri.format('.png', finalImage);
        await browser.close();

        //closes the async funtion for puppeteer
      })();

      res.render('creativeresult', {title: 'Your Creative Result', inputName: req.body.inputName, inputFinalImage: "YourGoofleImage.png"});
      // closes the getBase64 callback from jimp
    });
    // closes the jimp.read
  });
  //closes the Post function
})


module.exports = router;
