// Métodos

class Usuario {
  constructor( nombres, apellidos, correo, activo ){
    this.nombres = nombres,
    this.apellidos = apellidos,
    this.correo = correo,
    this.activo = activo 
  }

  presentarse() {
    return "Hola soy", this.nombres + " y mi correo es: " + this.correo
  }

  // Métodos getters y setters
  // GET -> Obteber
  // SET -> Dar

  // Se usan como buenas practicas de programación

  getNombres() {
    return this.nombres
  }

  getApellidos() {
    return this.apellidos
  }

  getCorreo() {
    return this.correo
  }

  getActivo() {
    return this.activo
  } 

  setApellidos (newApellidos) {
    this.apellidos = newApellidos
  }

}

// 
const manuel = new Usuario( "Manuel", "Duarte", "manuel@manuel.com", true ) // Instanciar un objeto
const carlos = new Usuario( "Carlos", "López", "carlos@carlos.com", true )

manuel.setApellidos( "Manuelito" )

console.log( manuel.getNombres() + " " + manuel.getApellidos() )
