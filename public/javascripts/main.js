const imageRequiredHTML= '<p class="warning">Image is REQUIRED</p>';

$(document).ready(function () {
  $('#formInfo').on('submit', (e) => {
    if(!$('#inputImage').val()){
      $('#preview').html(imageRequiredHTML);
      return false;
    }

    $('#creating-result').attr('class', 'absolute-center');
    document.getElementById("creating-result").innerHTML='<img src="smileyGif.gif" class="center-image" /> <h3 class="text-center">Creating Awesome Stuff</h3>';
  });
});


function previewImage(input) {
  const maxFileSize = 5e+6; //very large files will take too long to process
  const file = input.files[0];

  if (!file) {
    $('#preview').html(imageRequiredHTML);
    return;
  }
  else if(file.size > maxFileSize){
    $('#preview').html('<p class="warning">Images cannot be larger than 5 megabytes, choose another image</p>');
    input.value = "";
    return;
  }

  document.getElementById("preview").innerHTML='<div class="loader"></div> <h2>Image Loading...</h2>';
    getDataUrl(input.files[0], function (imgBase64) {
      if (imgBase64) {
        document.getElementById("preview").innerHTML='<img src=' + imgBase64 + ' class="thumb-image margin-top"/>';
      }
      else {document.getElementById("preview").innerHTML='<p class="margin-top warning">Image did not load. Choose another image. </p>';}
    });
}

// function getDataUrl automatically corrects orientation of images from smartphone cameras
// this function lets previewImage function work properly
// src: https://stackoverflow.com/questions/20600800/js-client-side-exif-orientation-rotate-and-mirror-jpeg-images/20600801#20600801
function getDataUrl(file, callback2) {
        var callback = function (srcOrientation) {
            var reader2 = new FileReader();
            reader2.onload = function (e) {
                var srcBase64 = e.target.result;
                var img = new Image();

                img.onload = function () {
                  var count = 1,
                      width1 = img.width;
                  // resizes image down to a width of less than 165px
                  while (width1 > 165) {
                    width1 *= .90;
                    count *= .90;
                  }

                    var width = img.width * count,
                        height = img.height * count,
                        canvas = document.createElement('canvas'),
                        ctx = canvas.getContext("2d");

                    // set proper canvas dimensions before transform & export
                    if (4 < srcOrientation && srcOrientation < 9) {
                        canvas.width = height;
                        canvas.height = width;
                    } else {
                        canvas.width = width;
                        canvas.height = height;
                    }

                    // transform context before drawing image
                    switch (srcOrientation) {
                        case 2: ctx.transform(-1, 0, 0, 1, width, 0); break;
                        case 3: ctx.transform(-1, 0, 0, -1, width, height); break;
                        case 4: ctx.transform(1, 0, 0, -1, 0, height); break;
                        case 5: ctx.transform(0, 1, 1, 0, 0, 0); break;
                        case 6: ctx.transform(0, 1, -1, 0, height, 0); break;
                        case 7: ctx.transform(0, -1, -1, 0, height, width); break;
                        case 8: ctx.transform(0, -1, 1, 0, 0, width); break;
                        default: break;
                    }

                    // draw image
                    ctx.drawImage(img, 0, 0, width, height);

                    // export base64
                    callback2(canvas.toDataURL());
                };

                img.src = srcBase64;
            }

            reader2.readAsDataURL(file);
        }

        var reader = new FileReader();
        reader.onload = function (e) {

            var view = new DataView(e.target.result);
            if (view.getUint16(0, false) != 0xFFD8) return callback(-2);
            var length = view.byteLength, offset = 2;
            while (offset < length) {
                var marker = view.getUint16(offset, false);
                offset += 2;
                if (marker == 0xFFE1) {
                    if (view.getUint32(offset += 2, false) != 0x45786966) return callback(-1);
                    var little = view.getUint16(offset += 6, false) == 0x4949;
                    offset += view.getUint32(offset + 4, little);
                    var tags = view.getUint16(offset, little);
                    offset += 2;
                    for (var i = 0; i < tags; i++)
                        if (view.getUint16(offset + (i * 12), little) == 0x0112)
                            return callback(view.getUint16(offset + (i * 12) + 8, little));
                }
                else if ((marker & 0xFF00) != 0xFF00) break;
                else offset += view.getUint16(offset, false);
            }
            return callback(-1);
        };
        reader.readAsArrayBuffer(file);
    }
