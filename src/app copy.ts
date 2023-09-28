
//funcion simple
function saludoTradicional(){
    console.log("Saludo Tradicional");
}

//arrow functions 
const saludoArrowFunction = () => {
    console.log("Saludo En funcion de flecha");
}

// saludoTradicional();
// saludoArrowFunction();

//argumentos y parametros 
const nombre: string = 'Carlos';

// const saludoPersonalizado = (nombre: string) => {
    
//     console.log(`Hola ${nombre}`);
// }

//llamando a la funcion 
// saludoPersonalizado( nombre );
// saludoPersonalizado('Keila');

//funcion con return y parametros
const saludoPersonalizado = (nombre: string): string => {
    return `Hola ${nombre}`;
}


let saludo: string = saludoPersonalizado(nombre);

console.log(saludo);






