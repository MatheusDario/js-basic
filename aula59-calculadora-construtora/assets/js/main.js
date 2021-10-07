function Calculadora() {

    this.display = document.querySelector('.display');

    this.capturaCliques = () => {
        document.addEventListener('click', (event) => {
            const element = event.target;
            if(element.classList.contains('btn-num')) this.addNumDisplay(element);
            if(element.classList.contains('btn-clear')) this.clearDisplay();
            if(element.classList.contains('btn-del')) this.delOne();
            if(element.classList.contains('btn-eq')) this.doAccount();
        });
    };

    this.inicia = () => {
        this.capturaCliques();
    };

    this.addNumDisplay = (element) => {
        this.display.value += element.innerText;
    };

    this.clearDisplay = () => {
        this.display.value = '';
    };

    this.delOne = () => {
        this.display.value = this.display.value.slice(0, -1);
    }
    
    this.doAccount = () => {
        let conta = this.display.value;
        
    }


}

const calculadora = new Calculadora();
calculadora.inicia();

