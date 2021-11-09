module.exports = function(sequelize, dataTypes){
    let alias = "Product"

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
        description:  {
            type: dataTypes.STRING,
            allowNull: false
        },
        image:  {
            type: dataTypes.STRING,
        },
        idProductsCategory:  {
            type: dataTypes.INTERGER,
        },
        idSize:  {
            type: dataTypes.INTERGER,
        },
        price:  {
            type: dataTypes.DECIMAL,
            allowNull: false
        },
        inSale:  {
            type: dataTypes.BOOLEAN,
        },
        discountPrice:  {
            type: dataTypes.DECIMAL
        },
        discount:  {
            type: dataTypes.STRING,
        }
    };

    let config = {
        tableName: "Products",
        timestamps: false
    }

    let Product = sequelize.define(alias, cols, config);

    Product.associate = function(models){
        Product.belondToMany(models.shoppingCart, {
            as: "ShoppingCarts",
            through: "CartProduct",
            foreignKey: "idProductt",
            otherKey: "idShoppingCart",
            timestamps: false
        })};
   
    Product.associate = function(models){
        Product.belondTo(models.productCategory, {
            as: "Category",
            foreignKey: "idProductsCategory",
        })};
    
    Product.associate = function(models){
        Product.belondTo(models.Size, {
            as: "Size",
            foreignKey: "idSize",
        });
    }
   
    return Product        

}