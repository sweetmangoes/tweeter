$(document).ready(function () {
  console.log(`Jquery hover active!`);
  $("#tweet-container").hover(
    function () {
      $(this).css("box-shadow", "15px 15px  #4057a16f");
    },
    function () {
      $(this).css("box-shadow", "");
    }
  );
  $("#icon-flag").hover(
    function () {
      $(this).css("color", "gold");
    },
    function () {
      $(this).css("color", "");
    }
  );
  $("#icon-retweet").hover(
    function () {
      $(this).css("color", "gold");
    },
    function () {
      $(this).css("color", "");
    }
  );
  $("#icon-like").hover(
    function () {
      $(this).css("color", "gold");
    },
    function () {
      $(this).css("color", "");
    }
  );
});
