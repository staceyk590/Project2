module.exports = function(sequelize, DataTypes) {
    const Hotel = sequelize.define("Hotel", {
        hotelName: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                len: [1]
            }
        },

        hotelAddress: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                len: [1]
            }
        },

        hotelCity: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                len: [1]
            }
        },

        reviewText: {
            type: DataTypes.TEXT,
            allowNull: false,
            // validate: [10]
        },

        hotelRatings: {
            type: DataTypes.INTEGER,
            allowNull: false,
            // validate: [1]
        }
    });
    return Hotel;
};

