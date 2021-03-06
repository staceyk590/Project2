// Code here handles what happens when a user submits a new character on the form.
// Effectively it takes the form inputs then sends it to the server to save in the DB.

// when user clicks add-btn
$("#add-btn").on("click", function(event) {
  event.preventDefault();

  // make a newReview obj
  var newReview = {
    //username from usernam input
    authorReview: $("#username").val().trim(),
    // hotel from hotel input
    hotelName: $("#hotel-name").val().trim(),
    //hotel address
    hotelAddress: $("#hotel-address").val().trim(),
    // city from city input
    hotelCity: $("#city").val().trim(),
    // ratings from ratings input
    hotelRatings: parseInt($("#rating").val().trim()),
    // comments from comments input
    reviewText: $("#comments").val().trim()
  };


  // send an AJAX POST-request with jQuery
    // on success, run this callback
    $.post("/api/posts", newReview)
    .then(function(data) {
      // log the data we found
      console.log(data);
      // tell the user we're adding a review with an alert window
      
      $("#well-section").append("<h3>Message: " + "Your review has been successfully submitted" + "</h3>");

      // the hotel
      $("#well-section").append("<h3>Hotel: " + data.hotelName + "</h3>");

      // // the address
      $("#well-section").append("<h4>Address: " + data.hotelAddress + "</h3>");

      //the city

      $("#well-section").append("<h4>" +"City:" +" " + data.hotelCity + "</h2>");

      // the rating
      $("#well-section").append("<h4>Ratings: " + data.hotelRatings + "</h3>");

      // and the comments
      $("#well-section").append("<h5>Comments: " + data.reviewText + "</h5>");
      // review author
      
      $("#well-section").append("<h5>Written By: " + data.authorReview + "</h5>");

      //the time
      $("#well-section").append("<h5>Submitted Time: " + data.createdAt + "</h5>");

    });
  
  // empty each input box by replacing the value with an empty string
  $("#city").val("");
  $("#hotel-name").val("");
  $("#hotel-address").val("");
  $("#ratings").val("");
  $("#comments").val("");

});