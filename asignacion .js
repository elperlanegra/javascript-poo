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

console.log(alumno)

alumno.genero = "Masulino"

alumno.edad = 21

console.log(alumno)

alumno.padre.correro = "manuelc18cd@gmail.com"

console.log(alumno.padre)