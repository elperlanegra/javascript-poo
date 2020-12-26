// Objetos literales


// const name = "Manuel Duarte"
// const age = 19

// console.log(typeof(name))
// console.log(typeof(age))


/**
 * Asi se declaran los objetos literales
 */
const alumno = {
  nombre: "Manuel",
  apellidos: "Duarte",
  edad: 19,

  // Anindando objetos
  padre: {
    nombreCompleto: "Manuel", 
    edad: 65
  }
}


// accediendo a los objetos por la notación punto
console.log(alumno.padre)
// accediendo a los objetos por la notación corchete
console.log(alumno["edad"])