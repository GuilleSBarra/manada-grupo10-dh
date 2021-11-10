module.exports = function(sequelize, dataTypes){
    let alias = "ProductCategory"

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
        image:  {
            type: dataTypes.STRING,
        },
        description:  {
            type: dataTypes.TEXT,
            allowNull: false
        },
    };

    let config = {
        tableName: "ProductCategories",
        timestamps: false
    }

    let ProductCategory = sequelize.define(alias, cols, config);

    ProductCategory.associate = function(models){
        ProductCategory.hasMany(models.Product, {
            as: "Products",
            foreignKey: "idProductsCategory"
        })
    };
    
   
    return User;        

}