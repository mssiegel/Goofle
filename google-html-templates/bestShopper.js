const cssGoogleStyleSheet = require('./cssGoogleStyleSheet.js');


exports.bestShopper = function (inputImage, inputName) {
 return `
          <!DOCTYPE html>
          <html lang="en">
          <head>
            <meta charset="utf-8">
            ${cssGoogleStyleSheet.cssGoogleStyleSheet()}
          </head>

          <body>
            <div id="grey-header1">
              <div id="google-logo">
                <svg xmlns="http://www.w3.org/2000/svg" version="1.1" viewbox="0 0 1000 328.56"><path d="m246.11 116.18h-116.57v34.591h82.673c-4.0842 48.506-44.44 69.192-82.533 69.192-48.736 0-91.264-38.346-91.264-92.092 0-52.357 40.54-92.679 91.371-92.679 39.217 0 62.326 25 62.326 25l24.22-25.081s-31.087-34.608-87.784-34.608c-72.197-1e-3 -128.05 60.933-128.05 126.75 0 64.493 52.539 127.38 129.89 127.38 68.031 0 117.83-46.604 117.83-115.52 0-14.539-2.1109-22.942-2.1109-22.942z" fill="#4285f4"></path><path d="m341.6 91.129c-47.832 0-82.111 37.395-82.111 81.008 0 44.258 33.249 82.348 82.673 82.348 44.742 0 81.397-34.197 81.397-81.397 0-54.098-42.638-81.959-81.959-81.959zm0.47563 32.083c23.522 0 45.812 19.017 45.812 49.66 0 29.993-22.195 49.552-45.92 49.552-26.068 0-46.633-20.878-46.633-49.79 0-28.292 20.31-49.422 46.741-49.422z" fill="#ea4335"></path><path d="m520.18 91.129c-47.832 0-82.111 37.395-82.111 81.008 0 44.258 33.249 82.348 82.673 82.348 44.742 0 81.397-34.197 81.397-81.397 0-54.098-42.638-81.959-81.959-81.959zm0.47562 32.083c23.522 0 45.812 19.017 45.812 49.66 0 29.993-22.195 49.552-45.92 49.552-26.068 0-46.633-20.878-46.633-49.79 0-28.292 20.31-49.422 46.741-49.422z" fill="#fbbc05"></path><path d="m695.34 91.215c-43.904 0-78.414 38.453-78.414 81.613 0 49.163 40.009 81.765 77.657 81.765 23.279 0 35.657-9.2405 44.796-19.847v16.106c0 28.18-17.11 45.055-42.936 45.055-24.949 0-37.463-18.551-41.812-29.078l-31.391 13.123c11.136 23.547 33.554 48.103 73.463 48.103 43.652 0 76.922-27.495 76.922-85.159v-146.77h-34.245v13.836c-10.53-11.347-24.93-18.745-44.04-18.745zm3.178 32.018c21.525 0 43.628 18.38 43.628 49.768 0 31.904-22.056 49.487-44.104 49.487-23.406 0-45.185-19.005-45.185-49.184 0-31.358 22.619-50.071 45.66-50.071z" fill="#4285f4"></path><path d="m925.89 91.02c-41.414 0-76.187 32.95-76.187 81.57 0 51.447 38.759 81.959 80.165 81.959 34.558 0 55.768-18.906 68.426-35.845l-28.235-18.787c-7.3268 11.371-19.576 22.484-40.018 22.484-22.962 0-33.52-12.574-40.061-24.754l109.52-45.444-5.6859-13.318c-10.58-26.08-35.26-47.86-67.92-47.86zm1.4268 31.413c14.923 0 25.663 7.9342 30.224 17.447l-73.139 30.57c-3.1532-23.667 19.269-48.017 42.915-48.017z" fill="#ea4335"></path><path d="m797.49 249.7h35.975v-240.75h-35.975z" fill="#34a853"></path></svg>
              </div>
              <input id="search-form" type="text" value="who is the world's best shopper?">
              <div id="search-icon">
                <svg focusable="false" xmlns="http://www.w3.org/2000/svg" viewbox="0 0 24 24"><path d="M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z" fill="#4285f4"></path></svg>
              </div>
              <svg width="21" height="21" id="nine-dots">
                <rect x="0" y="0" width="4" height="4" style="fill:#555;" />
                <rect x="6" y="0" width="4" height="4" style="fill:#555;" />
                <rect x="12" y="0" width="4" height="4" style="fill:#555;" />
                <rect x="0" y="6" width="4" height="4" style="fill:#555;" />
                <rect x="0" y="12" width="4" height="4" style="fill:#555;" />
                <rect x="6" y="6" width="4" height="4" style="fill:#555;" />
                <rect x="12" y="12" width="4" height="4" style="fill:#555;" />
                <rect x="6" y="12" width="4" height="4" style="fill:#555;" />
                <rect x="12" y="6" width="4" height="4" style="fill:#555;" />
              </svg>
              <button id="sign-in">Sign in</button>
            </div>
            <div id="grey-header2">
              <p id="all-link">All</p>
              <p class="regular-link1">Images</p>
              <p class="regular-link1">Shopping</p>
              <p class="regular-link1">Maps</p>
              <p class="regular-link1">Videos</p>
              <p class="regular-link1">More</p>
              <p class="regular-link2">Settings</p>
              <p class="regular-link1">Tools</p>
            </div>
            <p id="number-of-results">About 10,420,000 results (0.34 seconds)</p>


            <p class="purple-title">${inputName} - International Shopping Champion</p>
            <p class="green-link">https://www.shopping.com/someone-fell-in-love</p>
            <img src="${inputImage}" class="small-image">
            <p class="summary-text">Wowie Zowies!!! The international shopping champion of 2018 has been declared. Congratulations to our winner ${inputName}!! His winnings include...</p>

            <p class="title"> Holy Smokies Jeepers Creepers</p>
            <p class="green-link">https://www.whitehouse.gov/shopping-holiday-declared</p>
            <p class="summary-text">We hereby declare one individual in charge of shopping for the White House. And that lucky person is ${inputName}... Using Twitter, Donald Trump had this to say, "When I want good deals on certain unnamed clothing, I ALWAYS turn to ${inputName}. ${inputName} can teach my wife a thing or two..."</p>

            <p class="title"> When shopping meets LOVE</p>
            <p class="green-link">https://www.nytimes.com/shoppers-anonymous</p>
            <p class="summary-text">Shoppers Anonymous has declared their ultimate leader to be ${inputName}.  "When I look at low sales prices, I get all queasy inside," said ${inputName} as tears dripped down his face. "My favorite childhood memory is when I was one-years-old and going diaper shopping at Babies R Us..."</p>

            <p class="title">A Better Shopper than My Momma?</p>
            <p class="green-link">www.shoppingforgoodstuff.com/goodness-gracious</p>
            <p class="summary-text">Goodness gracious!!! As in zoinks! Like howdy duty! Yowzies! Um, oh my gawwwwd! Those are like da only words to describe ${inputName}...</p>

          </body>
          </html>
        `
};
