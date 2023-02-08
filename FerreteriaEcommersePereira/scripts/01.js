
// FUNCIONES

let miEdad = 20

// escribir una funcion que aumente mi edad en 1

// function cumplirAnios() {
//     // miEdad = miEdad + 1
//     // miEdad += 1
//     miEdad++
// }

// ARROW FUNCTION

// const cumplirAnios = () => {
//     return miEdad++
// }
                 //     (return)
const cumplirAnios = () => miEdad++

cumplirAnios()
cumplirAnios()
cumplirAnios()

// console.log(miEdad)


let vida = 100

// escribir una funcion recibirGolpe() que reciba un parámetro y se reste al total vida

const recibirGolpe = (danio) => {
    // if (danio >= vida) {
    //     vida = 0
    // } else {
    //     vida -= danio
    // }

    vida -= danio

    if (vida < 0) {
        vida = 0
    }
}

recibirGolpe(80)


// escribir una función curar() que regenere la vida en 50, hasta un máx de 100

const curar = () => {
    vida += 50

    if (vida > 100) vida = 100
}

curar()
curar()

console.log(vida)
