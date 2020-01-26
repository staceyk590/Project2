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
