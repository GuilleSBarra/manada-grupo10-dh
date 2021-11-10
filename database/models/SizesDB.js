module.exports = function(sequelize, dataTypes){
    let alias = "Size"

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
        tableName: "Sizes",
        timestamps: false
    }

    let Size = sequelize.define(alias, cols, config);

    Size.associate = function(models){
        Size.hasMany(models.Product, {
            as: "Products",
            foreignKey: "idSize"
        })
    };
    
   
    return Size;        

}