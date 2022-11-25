$(document).ready(function () {
  console.log(`user-tweet.js is active`);

  // When user is submits a new tweet
  $("form").submit(function (event) {
    event.preventDefault();
    let $data = $(this).serializeArray();

    // tweet variable is storing the writing value
    const tweet = $data[0].value;

    // Conditional statement to check if tweet is empty or over 140 chars
    if (!tweet || tweet.length > 140) {
      alert(`Error: please submit characters between 1 and 140 characters`);
    } else {
      $.post("http://localhost:8080/", tweet, function (response, textStatus) {
        console.log(response);
        console.log(textStatus);
      });
    }
  });


});
