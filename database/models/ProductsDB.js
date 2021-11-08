module.exports = function(sequelize, dataTypes){
    let alias = "Product"

    let cols = {
        id: {
            type: dataTypes.INTERGER,
            primarykey: true,
            autoIncremet: true
        },
        name:  {
            
        },
        description:  {
            
        },
        image:  {
            
        },
        category:  {
            
        },
        size:  {
            
        },
        price:  {
            
        },
        keywords:  {
            
        },
        inSale:  {
            
        },
        discountPrice:  {
            
        },
        discount:  {
            
        }
    };

    let config = {
        tableName: "Products",
        timestamps: false
    }

    let Product = sequelize.define(alias, cols, config);

    Product.associate = function(models){
        Product.belond
    }
   
    return Product        

}