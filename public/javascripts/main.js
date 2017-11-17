$(document).ready(function () {

})

function previewImage(input) {
 if (input.files && input.files[0]) {
  var reader = new FileReader();

  reader.onload = function (e) {
   $('#preview').attr('src', e.target.result);
   $('#preview').attr('class', 'thumb-image');
  }

  reader.readAsDataURL(input.files[0]);
 }
};
