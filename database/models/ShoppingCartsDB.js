module.exports = function(sequelize, dataTypes){
    let alias = "shoppingCart"

    let cols = {
        id: {
            type: dataTypes.INTERGER,
            primarykey: true,
            autoIncremet: true
        },
        totalPrice:  {
            type: dataTypes.DECIMAL,
            allowNull: false
        },
        quantityOfItems:  {
            type: dataTypes.INTERGER,
            allowNull: false
        },
        idUser:  {
            type: dataTypes.INTERGER,
        },
        idStatus:  {
            type: dataTypes.INTERGER,
        }
    };

    let config = {
        tableName: "ShoppingCarts",
        timestamps: false
    }

    let Product = sequelize.define(alias, cols, config);

    shoppingCart.associate = function(models){
        shoppingCart.belondToMany(models.ProductCart, {
            as: "productCart",
            through: "CartProduct",
            foreignKey: "idShoppingCart",
            otherKey: "idProduct",
            timestamps: false
        })};
   
    shoppingCart.associate = function(models){
        shoppingCart.belondTo(models.User, {
            as: "User",
            foreignKey: "idUser",
        })};
    
    shoppingCart.associate = function(models){
        shoppingCart.belondTo(models.Status, {
            as: "Status",
            foreignKey: "idStatus",
        });
    }
   
    return Product        

}