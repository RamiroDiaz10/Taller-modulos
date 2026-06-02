import { Usuario } from "./usuario.js";
import { UsuarioVIP } from "./usuario.js";

import { Producto, ProductoDigital } from "./producto.js";

let usuario1 = new Usuario ("Lolo", "jojo@.com",);
let usuario2 = new Usuario ("lili", "ajaja.gmail.co", "admin");

console.log(usuario1.saludo());
console.log(usuario1.resumen());
console.log(usuario1.desactivar());
console.log(usuario1.resumen());
console.log(usuario1.desactivar());
console.log(usuario2.resumen());

let user1 = new UsuarioVIP ("tata", "lkjsajs", "gold");
let user2 = new UsuarioVIP ("totola", "monphos.com", "premium");

console.log(user1.saludo());
console.log(user1.beneficios());
console.log(user1.resumen());
console.log(user2.saludo());
console.log(user2.beneficios());


let producto1 = new Producto( "Mouse Gamer", 80000, "Tecnologia" ); 
let producto2 = new Producto( "Silla Oficina", 300000, "Muebles" ); 
let digital1 = new ProductoDigital( "Curso JavaScript", 150000, "de por vida" ); 

console.log(producto1.tarjeta()); 
console.log(producto2.tarjeta()); 
console.log(digital1.tarjeta()); 
console.log(producto1.calcularTotal());
console.log(digital1.calcularTotal()); 
console.log(producto1.aplicarDescuento(20) );
console.log(producto1.resumen() );










