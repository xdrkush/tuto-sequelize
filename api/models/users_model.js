/*
 * Model User
 * ********** */

/*
C'est ici que l'on définit notre model avec ce qu'il va comporté avec le type de data
ce référé à la doc de sequelize pour les types
https://sequelize.org/v5/variable/index.html#static-variable-DataTypes
*/

// Afin de pouvoir exporter plus facilement notre model
module.exports = (sequelize, DataTypes) => {
    // on définit notre model
    const User = sequelize.define("user", {
        name: {
            type: DataTypes.STRING
        },
        email: {
            type: DataTypes.STRING
        },
        mobile: {
            type: DataTypes.STRING
        }
    });

    return User;
};
