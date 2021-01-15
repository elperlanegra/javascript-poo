// Clases

  class Usuario {
    constructor( nombres, apellidos, correo, activo ){
      this.nombre = nombres,
      this.apellido = apellidos,
      this.correo = correo,
      this.activo = activo 
    }
  }
  
  const manuel = new Usuario("Manuel", "Duarte", "manuel@manuel.com", true) // Instanciar un objeto
  const carlos = new Usuario("Carlos", "López", "carlos@carlos.com", true)

// manuel y carlos son instancias de la clase usuario
console.log(manuel)
console.log(carlos)