// Code here handles queries for specific characters in the database
// In this case, the user submits a character's name... we then pass that character's name as a
// URL parameter. Our server then performs the search to grab that character from the Database.

$(document).ready(function(){
// when user hits the search-btn
$("#search-btn").on("click", function() {
  // save the character they typed into the character-search input
  var searchedHotel = $("#hotel-search")
    .val()
    .trim();  
  // authorId = "/?author_id=" + authorId;
  // Using a RegEx Pattern to remove spaces from searchedCharacter
  // You can read more about RegEx Patterns later https://www.regexbuddy.com/regex.html
  searchedHotel = searchedHotel.replace(/\s+/g, "").toLowerCase();

  // run an AJAX GET-request for our servers api,
  // including the user's character in the url
  $.get("/api/Hotel/" + searchedHotel, function(data) {
    // log the data to our console
    console.log(data);
    // empty to well-section before adding new content
    $("#well-section").empty();
    // if the data is not there, then return an error message
    if (!data) {
      $("#well-section").append("<h2> No Review was found </h2>");
    }
    else {
      // otherwise
      // append the Review name
      $("#well-section").append("<h2>" + data.hotelCity + "</h2>");
      // the hotel
      $("#well-section").append("<h3>Hotel: " + data.hotelName + "</h3>");
      // the rating
      $("#well-section").append("<h3>Ratings: " + data.hotelRatings + "</h3>");
      // and the comments
      $("#well-section").append("<h3>Comments: " + data.reviewText + "</h3>");
    }
  });
});
});




