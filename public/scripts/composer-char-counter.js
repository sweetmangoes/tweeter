$(document).ready(function () {
  console.log(`Jquery works!`);
  $("#tweet-text").keyup(function (event) {
    console.log(`typing works!`);
    let charCount = $(this).val().length;
    let countCharElement = $("#count-char");
    countCharElement.text(140 - charCount);
    if (charCount > 140) {
      console.log(`counting limit works`);
      countCharElement.css("color", "red");
    } else {
      countCharElement.css("color", "");
    }
  });
});
