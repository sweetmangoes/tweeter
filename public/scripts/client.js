$(document).ready(function () {
  /* 
  loadTweets is a function responsible for fetching tweets from the 
  "/tweets" page. 
  */
  loadTweets = () => {
    newTweet = $.get(
      "http://localhost:8080/tweets",
      function (response, textStatus) {
        renderTweets(response);
      }
    );
  };

  /*
  RenderTweets takes array of tweet objects and then appends each one to the #tweet-container.
  */

  renderTweets = (arrayTweetObj) => {
    // clears out container when user submits new tweet!
    $("#tweet-timeline").empty();
    // loops through tweets
    for (const element of arrayTweetObj) {
      // calls createTweetElement for each tweet
      let $tweet = createTweetElement(element);
      // takes return value and appends it to the tweets timeline (i.e) container
      $("#tweet-timeline").prepend($tweet);
    }
  };

  // to prevent xss attacks
  const escape = function (str) {
    let div = document.createElement("div");
    div.appendChild(document.createTextNode(str));
    return div.innerHTML;
  };

  /*
  createTweetElement takes in a tweet object returns a tweet <article> element 
  containing the entire HTML structure of the tweet.
  */

  createTweetElement = (tweetObj) => {
    /*
    Created a variable to use timeago.format 
    */
    let timeFormat = timeago.format(tweetObj.created_at);

    let $tweet = `
    <article class="tweet-container" id="tweet-container">
      <header class="avatar-name-handle">
          <div class="pic-name">
            <img src=${tweetObj.user.avatars} alt="prof pic">
            <p> ${tweetObj.user.name} </p>
          </div>
          <div class="user-handle">
            <p>${tweetObj.user.handle}</p>
          </div>
      </header> 
      <article class="tweet">
        <p>${escape(tweetObj.content.text)}</p>
      </article>
      <footer class="date-icons">
        <div class="date">
        <p>${timeFormat}</p>
        </div>
        <div class="icon-flag-retweet-like">
          <div class="icon-flag" id="icon-flag">
            <i class="fa-solid fa-flag"></i>
          </div>
          <div class="icon-retweet" id="icon-retweet">
            <i class="fa-solid fa-retweet"></i>
          </div>
          <div class="icon-like" id="icon-like">
            <i class="fa-solid fa-heart"></i>
          </div>
        </div>
      </footer>
    </article>
  <br>
`;
    return $tweet;
  };

  // To load tweet containers
  loadTweets();

  // When user is submits a new tweet
  $("form").submit(function (event) {
    event.preventDefault();
    let $data = $(this).serialize();

    // Error handling and preventing empty || tweet > 140 chars
    if ($data === "text=" || $data.length > 145) {
      console.log($data);
      $("#error-tweet").slideDown(100);
    } else {
      $("#error-tweet").slideUp(100);
      $.post("http://localhost:8080/tweets", $data, function (response) {
        $(".tweetbox").val("");
        $(".counter").val(140);
        loadTweets();
      });
    }
  });
});
