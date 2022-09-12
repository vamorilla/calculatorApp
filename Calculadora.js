class Calculadora {
    sumar(num1, num2) {
        return num1 + num2;
    }

    restar(num1, num2) {
        return num1 - num2;
    }

    dividir(num1, num2) {
        if(num2 > 1){
            return num1 / num2;
        }else{
            alert('No se puede dividir por 0.');
        }
    }

    multiplicar(num1, num2) {
        return num1 * num2;
    }
}