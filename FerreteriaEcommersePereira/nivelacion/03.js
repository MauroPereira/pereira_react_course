

// operador ternario

const persona1 = {
    nombre: "Juan",
    edad: 11
}
const persona2 = {
    nombre: "Carlitos",
    edad: 19
}

const pelicula = {
    titulo: "1917",
    edadMinima: 18
}

// escribir un condicional para saber si Juan puede ver 1917

// if (persona.edad >= pelicula.edadMinima) {
//     console.log("Sí, puede ver la película")
// } else {
//     console.log("No puede ver la peli")
// }

// op ternario
// condicion ? caso1 : caso2

// persona.edad >= pelicula.edadMinima ? console.log("Sí, puede ver") : console.log("No, no puede ver")

// const mensaje = persona.edad >= pelicula.edadMinima ? "Sí, puede ver" : "No, no puede ver"

// let mensaje 

// if (persona.edad >= pelicula.edadMinima) {
//     mensaje = "Sí, ..."
// } else {
//     mensaje = "No..."
// }

// console.log(mensaje)


// =====================

const validarEdad = (usuario, pelicula) => {
    return usuario.edad >= pelicula.edadMinima ? "Sí, puede" : "No, no puede"
}

// console.log( validarEdad(persona1, pelicula) )

// LOGICO OR || , LOGICO AND &&

// spread