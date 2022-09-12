class Display {
    constructor(lastInput, currentInput){
        this.lastInput = lastInput;
        this.currentInput = currentInput;
        this.calculator = new Calculadora();
        this.opType = undefined;
        this.currentValue = '';
        this.lastValue = '';
        this.signs = {
            sumar : '+',
            dividir: '/',
            restar: '-',
            multiplicar: '*'
        }
    }

    delete(){
        this.currentValue = '';
        this.lastValue = '';
        this.printValues();
        this.opType = undefined;
        this.printValues();
    }

    addNum(num){
        if(num === '.' && this.currentValue.includes('.')) return

        this.currentValue = this.currentValue.toString() + num.toString();
        this.printValues();
    }

    printValues(){
        this.currentInput.textContent = `${this.currentValue} ${this.signs[this.opType] || ''}`;
        this.lastInput.textContent = this.lastValue;
    }

    calculateResult(){
        const lastValue = parseFloat(this.lastValue);
        const currentValue = parseFloat(this.currentValue);

        if(isNaN(currentValue) || isNaN(lastValue)) return

        this.currentValue = this.calculator[this.opType](lastValue, currentValue);
    }

    compute(opType){
        this.opType !== 'igual' && this.calculateResult();
        this.opType = opType;
        this.lastValue = this.currentValue || this.lastValue;
        this.currentValue = '';
        this.printValues();
    }
}