
$(document).ready(function () {
  //Require tweet structure

  // When user is submits a new tweet
  $("form").submit(function (event) {
    event.preventDefault();
    let $data = $(this).serializeArray();

    // tweet variable is storing the writing value
    const tweet = $data[0].value;

    // to prevent xss attacks
    const escape = function (str) {
      let div = document.createElement("div");
      div.appendChild(document.createTextNode(str));
      return div.innerHTML;
    };
    const safeHTML = `<p>${escape(tweet)}</p>`;

    // user database
    userDatabase = {
      user: {
        name: "Chris",
        avatars: "https://i.imgur.com/73hZDYK.png",
        handle: "@Generic",
      },
      content: {
        text: safeHTML,
      },
      created_at: "Today",
    };

    // calls createTweetElement for user tweet
    let $tweet = createTweetElement(userDatabase);

    // Error handling and preventing empty || tweet > 140 chars
    if (!tweet || tweet.length > 140) {
      $("#error-tweet").slideDown(100);
    } else {
      $("#error-tweet").slideUp(100);
      $.post(
        "http://localhost:8080/",
        safeHTML,
        function (response, textStatus) {
          $(".tweetbox").val("");
          $(".counter").val(140);
          $("#tweet-timeline").prepend($tweet);
        }
      );
    }
  });
});
