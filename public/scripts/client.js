/*
 * Client-side JS logic goes here
 * jQuery is already loaded
 * Reminder: Use (and do all your DOM work in) jQuery's document ready function
 */

// createTweetElement takes in a tweet object and is responsible for returning a tweet <article> element containing the entire HTML structure of the tweet.

createTweetElement = (tweetObj) => {
  const tweetElement = `
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
`;
  return tweetElement;
};
