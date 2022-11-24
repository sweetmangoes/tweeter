// Fake data taken from initial-tweets.json
const data = [
  {
    user: {
      name: "Newton",
      avatars: "https://i.imgur.com/73hZDYK.png",
      handle: "@SirIsaac",
    },
    content: {
      text: "If I have seen further it is by standing on the shoulders of giants",
    },
    created_at: 1461116232227,
  },
  {
    user: {
      name: "Descartes",
      avatars: "https://i.imgur.com/nlhLi3I.png",
      handle: "@rd",
    },
    content: {
      text: "Je pense , donc je suis",
    },
    created_at: 1461113959088,
  },
];

/*
RenderTweets takes array of tweet objects and then appends each one to the #tweet-container.
*/

$(document).ready(function () {
  renderTweets = (arrayTweetObj) => {
    // loops through tweets
    for (const element of arrayTweetObj) {
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

  renderTweets(data);
});
