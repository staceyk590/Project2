module.exports = function(sequelize, DaTaTypes) {
    const Hotel = sequelize.define("Hotel", {
        hotelName: {
            type: DaTaTypes.STRING,
            allowNull: false,
            validate: {
                len: [1]
            }
        },

        hotelAddress: {
            type: DaTaTypes.STRING,
            allowNull: false,
            validate: {
                len: [1]
            }
        },

        hotelCity: {
            type: DaTaTypes.STRING,
            allowNull: false,
            validate: {
                len: [1]
            }
        },

        reviewText: {
            type: DaTaTypes.TEXT,
            allowNull: false,
            validate: [10]
        },

        hotelRatings: {
            type: DaTaTypes.INTEGER,
            allowNull: false,
            validate: [1]
        }
    });
    return Hotel;
};

