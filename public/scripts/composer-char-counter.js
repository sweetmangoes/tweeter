$(document).ready(function () {
  //Counts the characters
  $("#tweet-text").keyup(function (event) {
    let charCount = $(this).val().length;
    let countCharElement = $("#count-char");
    countCharElement.text(140 - charCount);
    if (charCount > 140) {
      countCharElement.css("color", "red");
    } else {
      countCharElement.css("color", "");
    }
  });
});
