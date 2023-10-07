interface Operation {
    a: number;
    b: number;
    callback: ( res: number ) => void;
}

export const getSuma = ({a, b, callback}: Operation) => {
    const resultado = a + b;
    callback(resultado)
}

export const getResta = ({a, b, callback}: Operation) => {
    const resultado = a - b;
    callback(resultado)
}