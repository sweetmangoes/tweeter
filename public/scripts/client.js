$(document).ready(function () {
  /* 
  loadTweets is a function responsible for fetching tweets from the 
  "/tweets" page. 
  */
  loadTweets = () => {
    newTweet = $.get(
      "http://localhost:8080/tweets",
      function (response, textStatus) {
        console.log(response); 
        renderTweets(response); 
      }
    );
  };

  /*
  RenderTweets takes array of tweet objects and then appends each one to the #tweet-container.
  */

  renderTweets = (arrayTweetObj) => {
    // loops through tweets
    for (const element of arrayTweetObj) {
      console.log(element); 
      // calls createTweetElement for each tweet
      let $tweet = createTweetElement(element);
      // takes return value and appends it to the tweets container
      $("#tweet-timeline").append($tweet);
    }
  };

  /*
  createTweetElement takes in a tweet object returns a tweet <article> element 
  containing the entire HTML structure of the tweet.
  */

  createTweetElement = (tweetObj) => {
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
        <p>${tweetObj.content.text}</p>
      </article>
      <footer class="date-icons">
        <div class="date">
        <p>${tweetObj.created_at}</p>
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
  loadTweets()
});
