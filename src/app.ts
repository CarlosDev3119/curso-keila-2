//callbacks 

import { getResta, getSuma } from "./plugins/calculador.plugin";

// interface User{
//     name: string;
//     carrer: string;
//     birthdate: string;
//     [key: string]: any;
// }

// const user: User = {
//     name: 'keila',
//     carrer: 'Ing. Sistemas computacionales',
//     birthdate: '2003-11-19'
// }

// const generateIdUser = (userFn: User, callback: (user: User) => void) => {

//     const id = 12352134214432;
//     userFn.id = id;

//     callback(userFn);
// }

// const callbackUser = ( user: User) => {
//     console.log(`
//         name: ${user.name}
//         id: ${user.id}
//     `)
// }

// generateIdUser(user, callbackUser)
const mostrarResultado = (resultado: number) => {
    console.log('El resultado de la operacio es: ' + resultado);
}

getSuma({
    a: 10,
    b: 19,
    callback: mostrarResultado
});

getResta({
    a: 10,
    b: 19,
    callback: mostrarResultado
});

setTimeout(()=>{
    console.log('hola')
}, 5000);




