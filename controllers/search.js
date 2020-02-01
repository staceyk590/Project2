var db = require("../models");

//Routes

module.exports = function(app){
    
    //GET route for retrieving search result
    app.get("api/Hotel/:hotelName", function(req,res){
        db.Hotel.findOne({
            where: {
                hotelName: req.params.hotelName
            }
            // include: [db.Hotel]
        }).then(function(dbHotel){
            res.json(dbHotel);
        });
    });
}



