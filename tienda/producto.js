
class Producto {
    constructor(nombre, precio, categoria){
        this.nombre = nombre;
        this.precio = precio;
        this.categoria = categoria;
    }

    calcularTotal(){
        return this.precio * 1.19;
    }

    aplicarDescuento(porcentaje){
        return this.precio - (this.precio * porcentaje / 100);
    }

    resumen(){
        return `Nombre: ${this.nombre}
                Categoria: ${this.categoria}
                Precio base: $${this.precio}`;
    }

    tarjeta(){
        return `Producto: ${this.nombre}
                Categoria: ${this.categoria}
                Precio con IVA: $${this.calcularTotal()}`;
    }
}

class ProductoDigital extends Producto{

    constructor(nombre, precio, licencia){
        super(nombre, precio, "Producto Digital");
        this.licencia = licencia;
    }

    calcularTotal(){
        return this.precio;
    }

    tarjeta(){
        return `${super.tarjeta()}
        Licencia: ${this.licencia}`;
    }
}

export{
    Producto,
    ProductoDigital
}

