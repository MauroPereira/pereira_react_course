// DESESTRUCTURACIÓN

let usuario = {
    nombre: "John",
    apellido: "Doe",
    ch_t_x: "ReactJS",
    tel: {
        casa: 1234,
        mobile: 5678
    }
}

// const nombre = usuario.nombre
// const apellido = usuario.apellido

// const { prop1, prop2 } = obj

const { ch_t_x: curso, apellido, tel: { mobile: cel } } = usuario

// console.log(curso)
// console.log(apellido)
// console.log( cel )

// DESESTRUCTURACIÓN DE ARRAYS

const gente = ["Rodrigo", "Santiago", "Carolina", "Claudia"]
// console.log( gente[2] )

const [,,hola, mundo] = gente

console.log(hola)
console.log(mundo)


