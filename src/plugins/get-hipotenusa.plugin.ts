export const calcularHipotenusa = (catetoA: number, catetoB: number, limitDecimales: number = 2): number => {
    const base = 2;
    let resultado = Math.sqrt(Math.pow(catetoA, base) + Math.pow(catetoB, base));
  
    return Number( resultado.toFixed(limitDecimales) );
}
