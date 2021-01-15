//Redundancia de datos & Funciones constructoras

const alumno = {
  // Atributos del objeto
  nombre: "Manuel",
  apellidos: "Duarte",
  edad: 19,
  correo: "manuel@gmail.com",
  activo: true,

  // Métodos
  presentarse() {
    console.log("Hola, mi nombre es: ", this.nombre,   this.apellidos,  " y tengo", this.edad, " años.");
  },


};

const alumno1 = {
  // Atributos del objeto
  nombre: "carlos",
  apellidos: "Duarte",
  edad: 19,
  correo: "carlos@gmail.com",
  activo: true,

  // Métodos
  presentarse() {
    console.log("Hola, mi nombre es: ", this.nombre,   this.apellidos,  " y tengo", this.edad, " años.");
  },


};

console.log(alumno)
console.log(alumno1)