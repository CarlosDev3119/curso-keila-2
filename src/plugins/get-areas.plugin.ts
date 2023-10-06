
interface Areas {
    circulo:   (radio: number) => number;
    cuadrado:  ( lado: number ) => number;
    triangulo: ( altura: number, base: number ) => number;
    rectangulo:(base: number, altura: number) => number;
}


export const getArea: Areas = {
    circulo: (radio: number) => (Math.PI * radio**2),
    cuadrado: ( lado: number ) => (lado * lado),
    rectangulo: ( base: number, altura: number ) => (base*altura),
    triangulo: ( altura: number, base: number ) => (altura * base)/2,
}


// export const getArea: Areas = {
//     circulo: (radio: number) => {
//         return (Math.PI * radio**2)
//     },
//     cuadrado: ( lado: number ) => {
//         return lado * lado
//     },
//     rectangulo: ( base: number, altura: number ) => {
//         return base*altura
//     },
//     triangulo: ( altura: number, base: number ) =>{
//         return (altura * base)/2
//     }

// }


