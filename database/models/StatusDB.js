module.exports = function(sequelize, dataTypes){
    let alias = "Status"

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
        tableName: "Status",
        timestamps: false
    }

    let Status = sequelize.define(alias, cols, config);

    Status.associate = function(models){
        Status.hasMany(models.shoppingCart, {
            as: "ShoopintCarts",
            foreignKey: "idStatus"
        })
    };
    
   
    return Status;        

}