const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('Product', {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    name: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    description: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    image: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    idProductsCategory: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'productcategories',
        key: 'id'
      }
    },
    idSize: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'sizes',
        key: 'id'
      }
    },
    price: {
      type: DataTypes.DECIMAL(5,0),
      allowNull: true
    },
    inSale: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    discountPrice: {
      type: DataTypes.DECIMAL(5,0),
      allowNull: true
    },
    discount: {
      type: DataTypes.STRING(255),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'products',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "id" },
        ]
      },
      {
        name: "idProductsCategory",
        using: "BTREE",
        fields: [
          { name: "idProductsCategory" },
        ]
      },
      {
        name: "idSize",
        using: "BTREE",
        fields: [
          { name: "idSize" },
        ]
      },
    ]
  });
};
