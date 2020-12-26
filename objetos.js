//Métodos & Atributos

const alumno = {
  // Atributos del objeto
  nombre: "Manuel",
  apellidos: "Duarte",
  edad: 19,

  // Anindando objetos
  padre: {
    nombreCompleto: "Manuel",
    edad: 65,
  },

  // Métodos
  presentarse() {
    console.log(
      "Hola, mi nombre es: " +
        this.nombre +
        " " +
        this.apellidos +
        " y tengo" +
        this.edad +
        " años."
    );
  },
  father() {
    console.log("Mi padre es: " + this.padre.nombreCompleto);
  },
};

alumno.presentarse();
alumno.father();
