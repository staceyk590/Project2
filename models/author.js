module.exports = function(sequelize, DaTaTypes) {
    const Author = sequelize.define("Author", {
        authorName: {
            type: DaTaTypes.STRING,
            allowNull: false,
            validate: {
                len: [1]
            }
        }
    });
    return Author;
};
