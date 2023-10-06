
import {getArea} from './plugins/get-areas.plugin';


const areaTriangulo  = getArea.triangulo(10, 5);
const areaCuadrado   = getArea.cuadrado(10);
const areaRectangulo = getArea.rectangulo(10, 5);
const areaCirculo    = getArea.circulo(10);

console.log({
    areaTriangulo,
    areaCuadrado,
    areaRectangulo,
    areaCirculo,
})

