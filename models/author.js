module.exports = function(sequelize, DataTypes) {
    const Author = sequelize.define("Author", {
        authorName: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                len: [1]
            }
        }
    });
    return Author;
};
