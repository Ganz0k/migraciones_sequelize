'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class ProductoVenta extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      ProductoVenta.belongsTo(models.Venta, { foreignKey: "id_venta" });
      ProductoVenta.belongsTo(models.Producto, { foreignKey: "id_producto" });
    }
  }
  ProductoVenta.init({
    id_venta: DataTypes.INTEGER,
    id_producto: DataTypes.INTEGER,
    cantidad_vendida: DataTypes.INTEGER,
    subtotal: DataTypes.DECIMAL,
    precio_venta: DataTypes.DECIMAL
  }, {
    sequelize,
    modelName: 'ProductoVenta',
  });
  return ProductoVenta;
};