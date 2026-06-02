class Usuario {
    constructor(nombre, email, rol = "cliente"){
        this.nombre = nombre;
        this.email = email;
        this.rol = rol;
        this.activo = true;
    }
    saludo() {
        return `Hola ${this.nombre}, ${this.rol}`
    }

    desactivar(){
        if(this.activo === true){
                this.activo = false;
            return "Usuario desactivado";
        }else {
                this.activo = true;
            return "Usuario activado";

        }
    } 

    resumen(){
        if(this.activo === true){
            return `Nombre: ${this.nombre}, \n Email: ${this.email}, \n Rol: ${this.rol} `;
        }else {      
            return "Usuario inactivo";

        }
    }
}

class UsuarioVIP extends Usuario{
    constructor(nombre, email, membresia) {
        super(nombre, email, "cliente VIP",);
        this.membresia = membresia;

    }

    saludo() {
        return `${super.saludo()}, \n Membresia: ${this.membresia}`
    }

    beneficios(){
        if(this.membresia === "gold"){
            return `Hola ${this.nombre}, \n tus beneficios son mas descuentos por tu membresia ${this.membresia}`;
        }else {      
            return `${this.membresia}: te da beneficios como dulces gratis`;

        }
    }
}

export{
    Usuario,
    UsuarioVIP
}