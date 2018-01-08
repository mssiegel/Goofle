exports.cssGoogleStyleSheet = function() {
 return `
          <style>

            #grey-header1 {
              background-color: #fafafa;
              height: 81px;
              padding: 11px 0 0 11px;
              margin: -10px;
            }

            #search-form {
              font-family: arial, sans-serif;
              float: left;
              margin: 10px 0 0 17px;
              height: 42px;
              border-radius: 3px;
              width: 615px;
              border: 1px solid #dcdcdc;
              box-shadow: 0px 1px #cccccc;
              /* Adds padding and size to search form text */
              padding-left: 16px;
              font-size: 16.5px;
              /* adds Microphone Logo followed by white background to search input */
              background: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAACrElEQVR42u2Xz2sTQRSAX8VSb1K8iNqKooJH2Ux6Ksn+iPQqxZMIehJB0do/IMhmQWsvHr2KSEGk0tSLIoWIYNUKij20F2/N7iaUZnYT0kYzzhMKs0HDJiTdLcwHDwKZSd63781LBiQSSW9JZdkhzfKm1Rz9mjZp/W9YdEU3vXv4HsQZ40FtNG36q5rls//Ej4tmbSS2T15Mvp3ExOPmEMQNbBtMMEyoljcFcQN7PqyAlqNfIG7gYQ0tYNIaxA1MrJPY3wImbUqBKAXSFv0tBSIVMOkvKRDtGKWN/T6FdqRAxFNoWwpEPIXqUqBT6ALU/UVgu8GW4GD3f6f9TRDYNJTDrk7YbtiqUumHwIYoUJuHERDAS0r4CvgFECgbY+cFAR7KT+g1POmCKFDNw6WggHc3fBtVb4CAoyauBgXIG+g1Xh5mRAGah6cggBd11fK/h7lOprIs0H6uRl6KAo5O7kOv4QmPiwJ4Jqqv4FiwCtXjvD2+tRmfK6kZ/ygI2HritK0rDVGgrClJ6DWMwYC/AGuCBMYcIC2V0CzvjmbRz3j3xUjn6CfeYreUJ2wQkGD75INPX1mFfsEFrrcIYCvdhC4paWQakxajpJMr0C9YFg54i7AsClRmh9/xnr0NHcInzZStk2aLwAcGMAD9pPIazvFKVDD5rdnhJeHLX5RTyRPQHpz5o66emMc9wdlPtvA8wF7Aq2BUHh1525qEo5JtR1WeOXpickO9cJIpyuD6xJmhYiZ5ytWSl3mlnuOaf+2zDaLDXmJrSgZ/MYVEugo+gSh+FkSBa4yd5Ul87DZ5XpFl/AyIEjzYjkau8WqshU2cr13HPbgX4gJOD97n465GZlyVvC9mSKloKI2iTnbwNT+gBX54H+IaXAtxJzE3ycSAFqSAFJACUkAikXD+AHj5/wx2o5osAAAAAElFTkSuQmCC) no-repeat;
              background-position: 91%;
              background-size: 24px;
              background-color: white;
            }

            #sign-in {
              color:white;
              font-weight: bold;
              background-color: #4285f4;
              border: none;
              border-radius: 2px;
              padding: 0 13px;
              height: 30px;
              position: absolute;
              top: 28px;
              left: 910px;
              line-height: 28px
            }

            #grey-header2 {
              background-color: #fafafa;
              border-bottom: 1px solid #ebebeb;
              margin: 0 -10px;
            }

            /*Actual Google page uses Roboto font. Have not yet found a way to import Roboto. Font defaults to Arial. */

            #all-link {
              padding: 0 16px 12px;
              margin-left: 144px;
              border-bottom: 3px solid #4285f4;
              color: #4285f4;
              font-weight: bold;
              font-size: small;
              display: inline-block;
              font-family: 'Roboto', arial, sans-serif;
              margin-after: 0;
              -webkit-margin-after: 0em;
            }

            .regular-link1 {
              color: #777;
              display: inline-block;
              margin: 0 7px;
              padding: 0 7px;
              font-family: 'Roboto',arial,sans-serif;
              font-size: small;
            }

            .regular-link2 {
              color: #777;
              display: inline-block;
              margin: 0 7px 0 84px;
              padding: 0 7px;
              font-family: 'Roboto',arial,sans-serif;
              font-size: small;
            }

            #number-of-results {
              color: #808080;
              margin-left: 144px;
              font-family: 'Roboto',arial,sans-serif;
              font-size: small;
            }

            .small-image {
              width: 150px;
              margin-left: 144px;
            }

            .title {
              color: #1a0dab;
              font-size: 19px;
              line-height: 1.2;
              margin-left: 144px;
              font-family: 'Roboto',arial,sans-serif;
              -webkit-margin-before: 1.3em;
              -webkit-margin-after: 0;
            }

            .purple-title {
              color: #609;
              font-size: 19px;
              line-height: 1.2;
              margin-left: 144px;
              font-family: 'Roboto',arial,sans-serif;
              -webkit-margin-before: 1.3em;
              -webkit-margin-after: 0;
            }

            .green-link {
              color: #006621;
              font-size: 15px;
              height: 18px;
              line-height: 16px;
              margin-left: 144px;
              font-family: 'Roboto',arial,sans-serif;
              -webkit-margin-before: 0;
              -webkit-margin-after: 0;
            }

            .summary-text {
              line-height: 1.4;
              font-size: 14px;
              width: 642px;
              margin-left: 144px;
              font-family: 'Roboto',arial,sans-serif;
              -webkit-margin-before: 0;
              -webkit-margin-after: 0;
            }



            /* SVG Vector Graphics */

            #google-logo {
              width: 120px;
              float: left;
              margin: 15px 0 0 4px;
            }

            #search-icon {
              color: #4285f4;
              height: 24px;
              width: 24px;
              position: absolute;
              top: 30px;
              left: 742px;
            }

            #nine-dots {
              position: absolute;
              top: 35px;
              left: 872px;
            }

          </style>
        `
};
