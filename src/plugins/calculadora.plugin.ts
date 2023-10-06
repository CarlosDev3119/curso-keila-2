

export const calculadora = (num1: number, num2: number, operacion: string): number => {

    let resOperacion: number = 0

    switch(operacion){
        case '+':
            resOperacion = num1 + num2;
            break;
            
        case 'suma':
            resOperacion = num1 + num2;
            break;
        
        case '-':
            resOperacion = num1 - num2;
            break;
        
        case '*':
            resOperacion = num1 * num2;
            break;

        case 'x':
            resOperacion = num1 * num2;
            break;

        case '/': 
            resOperacion = num1 / num2;
            break;

        default:
            console.log('no se encontro el caso de uso')
            break;
    
    }

    return resOperacion;

}