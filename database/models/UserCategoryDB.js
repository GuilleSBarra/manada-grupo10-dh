module.exports = function(sequelize, dataTypes){
    let alias = "UserCategory"

    let cols = {
        id: {
            type: dataTypes.INTERGER,
            primarykey: true,
            autoIncremet: true
        },
        name:  {
            type: dataTypes.STRING,
            allowNull: false
        },
    };

    let config = {
        tableName: "UserCategories",
        timestamps: false
    }

    let Size = sequelize.define(alias, cols, config);

    UserCategory.associate = function(models){
        UserCategory.hasMany(models.User, {
            as: "Users",
            foreignKey: "idUserCategory"
        })
    };
    
   
    return UserCategory;        

}