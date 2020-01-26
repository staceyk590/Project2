var db = require("../models");

//Routes

module.exports = function(app){
    
    //GET route for retrieving search result
    app.get("api/:city.:name", function(req,res){
        db.Hotel.findOne({
            where: {
                city: req.param.city,
                name: req.param.name
            },
            include: [db.Hotel]
        }).then(function(dbHotel){
            res.json(dbHotel);
        });
    });
}



