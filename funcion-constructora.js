// Funcion constructora 

function Usuario (nombres, apellidos, correo, activo) {
  this.nombre = nombres,
  this.apellido = apellidos,
  this.correo = correo,
  this.activo = activo 
}

console.log(new Usuario("Manuel", "Duarte", "manuel@manuel.com", true))