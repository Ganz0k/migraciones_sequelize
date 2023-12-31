const { ProductoVenta } = require("../models");

class ProductoVentaDAO {
    
    constructor() {

    }

    async crearProductoVenta(id_venta, id_producto, cantidad_vendida, subtotal, precio_venta) {
        try {
            const productoVenta = await ProductoVenta.create({ id_venta, id_producto, cantidad_vendida, subtotal, precio_venta });

            return productoVenta;
        } catch (error) {
            throw error;
        }
    }

    async obtenerProductosVenta() {
        try {
            const productosVentas = await ProductoVenta.findAll();

            return productosVentas;
        } catch (error) {
            throw error;
        }
    }

    async obtenerProductoVentaPorId(id) {
        try {
            const productoVenta = await ProductoVenta.findByPk(id);

            return productoVenta;
        } catch (error) {
            throw error;
        }
    }

    async actualizarProductoVenta(id, id_venta, id_producto, cantidad_vendida, subtotal, precio_venta) {
        try {
            await ProductoVenta.update({ id_venta, id_producto, cantidad_vendida, subtotal, precio_venta }, { where: { id } });
            const productoVentaActualizada = await ProductoVenta.findByPk(id);
            
            return productoVentaActualizada;
        } catch (error) {
            throw error;
        }
    }

    async eliminarProductoVenta(id) {
        try {
            const productoVenta = await ProductoVenta.findByPk(id);

            if (!productoVenta) {
                throw new Error("ProductoVenta no encontrado");
            }

            await productoVenta.destroy();
            
            return "ProductoVenta eliminado con éxito";
        } catch (error) {
            throw error;
        }
    }
}

module.exports = new ProductoVentaDAO();