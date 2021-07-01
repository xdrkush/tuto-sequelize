module.exports = (sequelize, DataTypes) => {
    const Book = sequelize.define("book", {
        title: {
            type: DataTypes.STRING
        },
        description: {
            type: DataTypes.STRING
        }
    });

    return Book;
};
