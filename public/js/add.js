// Code here handles what happens when a user submits a new character on the form.
// Effectively it takes the form inputs then sends it to the server to save in the DB.

// when user clicks add-btn
$("#add-btn").on("click", function(event) {
  event.preventDefault();

  // make a newReview obj
  var newReview = {
    //username from usernam input
    Username: $("#username").val().trim(),
    // city from city input
    City: $("#city").val().trim(),
    // hotel from hotel input
    Hotel: $("#hotel").val().trim(),
    // ratings from ratings input
    Ratings: $("#rating").val().trim(),
    // comments from comments input
    Comments: $("#comments").val().trim()
  };

  function createNewRow(newReview) {
    //define card main container
    var newReviewCard = $("<div>");
    newReviewCard.addClass("card");

    //define card header
    var newReviewCardHeading = $("<div>");
    newReviewCardHeading.addClass("card-header");
    var newReviewAuthor = $("<h3>");
    newReviewAuthor.text("Written by:" + newReview.Username);
    newReviewAuthor.css({
      float: "right",
      color: "blue",
      "margin-top":
      "-10px"
    });
    var newReviewHotel = $("<h3>");
    newReviewHotel.text("Written by:" + newReview.Hotel);
    newReviewHotel.css({
      float: "right",
      color: "blue",
      "margin-top":
      "-10px"
    });
    var newReviewRatings = $("<h5>");

    //define card body
    var newReviewCardBody = $("<div>");
    newReviewCardBody.addClass("card-body");
    
    //define card content body

    var newReviewBody = $("<p>");
    newReviewHotel.text(newReview.Hotel + "");
    newReviewBody.text(newReview.Comments);
    newReviewRatings.text(newReview.Ratings);
    //append items to card body
    newReviewCardHeading.append(newReviewAuthor);
    newReviewCardHeading.append(newReviewHotel);
    newReviewCardBody.append(newReviewBody);
    newReviewCard.append(newReviewCardHeading);
    newReviewCard.append(newReviewCardBody);
    
    return newReviewCard;
  }

  // send an AJAX POST-request with jQuery
  // $.post("localhost:7777/api/new", newReview)
    // on success, run this callback
    $.post("/api/posts", newReview)
    .then(function(data) {
      // log the data we found
      console.log(data);
      // tell the user we're adding a review with an alert window
      alert("Adding review...");
    });

  // empty each input box by replacing the value with an empty string
  $("#city").val("");
  $("#hotel").val("");
  $("#ratings").val("");
  $("#comments").val("");

});
