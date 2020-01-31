const db = require("../models");

module.exports = function(app) {
  app.get("/api/Hotel", function(req, res) {
    // Here we add an "include" property to our options in our findAll query
    // We set the value to an array of the models we want to include in a left outer join
    // In this case, just db.Post
    db.Hotel.findAll({
      include: [db.Author]
    }).then(function(dbHotel) {
      res.json(dbHotel);
    });
  });

  app.get("/api/Hotel/:id", function(req, res) {
    // Here we add an "include" property to our options in our findOne query
    // We set the value to an array of the models we want to include in a left outer join
    // In this case, just db.Post
    db.Hotel.findOne({
      where: {
        id: req.params.id
      },
      include: [db.Post]
    }).then(function(dbHotel) {
      res.json(dbHotel);
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
