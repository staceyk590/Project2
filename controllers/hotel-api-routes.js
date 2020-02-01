const db = require("../models");

module.exports = function(app) {
  app.get("/api/Hotel", function(req, res) {
    // Here we add an "include" property to our options in our findAll query
    // We set the value to an array of the models we want to include in a left outer join
    // In this case, just db.Post
    db.Hotel.findAll({
      // include: [db.Author]
    }).then(function(dbHotel) {
      res.json(dbHotel);
    });
  });

  // app.get("/api/Hotel/:hotelName", function(req, res) {

  //   var hotelName = req.params.hotelName;
  //   var city = req.params.hotelCity;

  //   // if(hotelName == null || city == null){
  //   //   res.send("Please provide both city and hotel name");
  //   //   res.end();
  //   // }
  //   // Here we add an "include" property to our options in our findOne query
  //   // We set the value to an array of the models we want to include in a left outer join
  //   // In this case, just db.Post
  //   db.Hotel.findOne({
  //     where: {
  //       // city: req.params.city,
  //       hotelName: req.params.hotelName,
  //       // hotelCity: req.params.hotelCity
  //       }
  //     // include: [db.Post]
  //   }).then(function(dbHotel) {
  //     res.json(dbHotel);
  //     console.log(dbHotel);
  //   });
  // });
  
  app.get("/api/Hotel/:hotelName/:hotelCity", function(req, res) {

    var hotelName = req.params.hotelName;
    var city = req.params.hotelCity;

    if(hotelName == null || city == null){
      res.send("Please provide both city and hotel name");
      res.end();
    }
    // Here we add an "include" property to our options in our findOne query
    // We set the value to an array of the models we want to include in a left outer join
    // In this case, just db.Post
    db.Hotel.findOne({
      where: {
        // city: req.params.city,
        hotelName: req.params.hotelName,
        hotelCity: req.params.hotelCity
        }
      // include: [db.Post]
    }).then(function(dbHotel) {
      res.json(dbHotel);
      console.log(dbHotel);
    });
  });

  app.post("/api/Hotel", function(req, res) {
    db.Hotel.create(req.body).then(function(dbHotel) {
      res.json(dbHotel);
    });
  });

  app.delete("/api/Hotel/:id", function(req, res) {
    db.Hotel.destroy({
      where: {
        id: req.params.id
      }
    }).then(function(dbHotel) {
      res.json(dbHotel);
    });
  });

};
