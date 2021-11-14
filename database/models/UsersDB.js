module.exports = function(sequelize, dataTypes){
    let alias = "User"

    let cols = {
        id: {
            type: dataTypes.INTERGER,
            primarykey: true,
            autoIncremet: true
        },
        user:  {
            type: dataTypes.STRING,
            allowNull: false
        },
        name:  {
            type: dataTypes.STRING,
            allowNull: false
        },
        surname:  {
            type: dataTypes.STRING,
            allowNull: false
        },
        email:  {
            type: dataTypes.STRING,
            allowNull: false
        },
        image:  {
            type: dataTypes.STRING,
        },
        password:  {
            type: dataTypes.STRING,
            allowNull: false
        },
        terms:  {
            type: dataTypes.BOOLEAN,
        },
        idUserCategory:  {
            type: dataTypes.INTERGER,
            defaultValue: "user"
        }
    };

    let config = {
        tableName: "Users",
        timestamps: false
    }

    let User = sequelize.define(alias, cols, config);

    User.associate = function(models){
        User.hasMany(models.ShoppingCart, {
            as: "ShoppingCarts",
            foreignKey: "idShoppingCart"
        })};
   
        User.associate = function(models){
            User.belondTo(models.UserCategory, {
            as: "Category",
            foreignKey: "idUserCategory",
        })
    } 
    
   
    return User;        

}