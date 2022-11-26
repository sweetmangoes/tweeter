$(document).ready(function () {
  console.log(`user-tweet.js is active`);

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
 
    if (!tweet || tweet.length > 140) {
      $("#error-tweet").slideDown(100)
    } else {
      $("#error-tweet").slideUp(100)
    }

    // Conditional statement to check if tweet is empty or over 140 chars
    if (!tweet || tweet.length > 140) {
      // console.log(`Error: please submit characters between 1 and 140 characters`);
    } else {
      $.post(
        "http://localhost:8080/",
        safeHTML,
        function (response, textStatus) {
          $(".tweetbox").val("");
          $(".counter").val(140);
          $("#tweet-timeline").prepend(userPost);
        }
      );
    }

    // Markup of user post
    let userPost = `
    <article class="tweet-container" id="tweet-container">
      <header class="avatar-name-handle">
        <div class="pic-name">
          <img src="https://i.imgur.com/73hZDYK.png" alt="prof pic">
            <p> Chris </p>
          </div>
          <div class="user-handle">
             <p>@Generic</p>
          </div>
        </header> 
        <article class="tweet">
          <p>${safeHTML}</p>
        </article>
          <footer class="date-icons">
          <div class="date">
          <p>Today</p>
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
  });
});
