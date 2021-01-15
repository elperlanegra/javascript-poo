// Herencia

class Usuario {
  constructor(nombres, apellidos, correo, activo) {
    (this.nombres = nombres),
      (this.apellidos = apellidos),
      (this.correo = correo),
      (this.activo = activo);
  }

  presentarse() {
    return "Hola soy ", this.nombres + " y mi correo es: " + this.correo;
  }

  // Métodos getters y setters
  // GET -> Obteber
  // SET -> Dar

  // Se usan como buenas practicas de programación

  getNombres() {
    return this.nombres;
  }

  getApellidos() {
    return this.apellidos;
  }

  getCorreo() {
    return this.correo;
  }

  getActivo() {
    return this.activo;
  }

  setApellidos(newApellidos) {
    this.apellidos = newApellidos;
  }
}

// HERENCIA

class Profesor extends Usuario {
  constructor(nombres, apellidos, correo, activo, cursosImpartidos, skils) {
    super(nombres, apellidos, correo, activo);
    (this.cursosImpartidos = cursosImpartidos), (this.skils = skils);
  }
}

class Alumno extends Usuario {
  constructor(nombres, apellidos, correo, activo, cursosTomados) {
    super(nombres, apellidos, correo, activo);
    this.cursosTomados = cursosTomados;
  }
}

//
const manuel = new Alumno("Manuel", "Duarte", "manuel@manuel.com", true, [
  "HTML5",
  "WordPress",
  "PHP",
]);
const carlos = new Profesor(
  "Carlos",
  "López",
  "carlos@carlos.com",
  true,
  ["HTML5", "CCS3", "JavaScript"],
  ["FrontEnd", "Wordpres Developer"]
);

console.log(manuel.presentarse());
// console.log(carlos)
