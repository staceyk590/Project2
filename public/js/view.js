// Code here handles queries for specific characters in the database
// In this case, the user submits a character's name... we then pass that character's name as a
// URL parameter. Our server then performs the search to grab that character from the Database.

$(document).ready(function(){

  
// when user hits the search-btn
$("#search-btn").on("click", function() {
  var searchedCity = $("#city-search")
  .val()
  .trim();
  
  var searchedHotel = $("#hotel-search")
    .val()
    .trim();  
  
  if(!searchedCity){
    searchedCity = null;
  } else {
    searchedCity = searchedCity.replace(/\s+/g, "").toLowerCase();
  }
  if(!searchedHotel){
    searchedHotel = null;
  }else{
    // save the character they typed into the character-search input
    // authorId = "/?author_id=" + authorId;
    // Using a RegEx Pattern to remove spaces from searchedCharacter
    // You can read more about RegEx Patterns later https://www.regexbuddy.com/regex.html
    searchedHotel = searchedHotel.replace(/\s+/g, "").toLowerCase();
  }

  // run an AJAX GET-request for our servers api,
  // including the user's character in the url
  $.get("/api/Hotel/" + searchedHotel+"/"+searchedCity, function(data) {
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

      // the hotel
    
      $("#well-section").append("<h3>Hotel: " + data[0].hotelName + "</h3>");

      // // the address
      $("#well-section").append("<h4>Address: " + data[0].hotelAddress + "</h3>");

      //the city

      $("#well-section").append("<h4>" +"City:" +" " + data[0].hotelCity + "</h2>");

      // the rating
      $("#well-section").append("<h4>Ratings: " + data[0].hotelRatings + "</h3>");

      // and the comments
      $("#well-section").append("<h5>Comments: " + data[0].reviewText + "</h5>");
      // review author
      
      $("#well-section").append("<h5>Written By: " + data[0].authorReview + "</h5>");

    }

  
  });
});
});