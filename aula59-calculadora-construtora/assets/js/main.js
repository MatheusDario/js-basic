function Calculadora() {

    this.display = document.querySelector('.display');

    this.inicia = () => {
        this.capturaCliques();
        this.keyPressEnter();
    };

    this.capturaCliques = () => {
        document.addEventListener('click', (event) => {
            const element = event.target;
            if(element.classList.contains('btn-num')) this.addNumDisplay(element);
            if(element.classList.contains('btn-clear')) this.clearDisplay();
            if(element.classList.contains('btn-del')) this.delOne();
            if(element.classList.contains('btn-eq')) this.doAccount();
        });
    };

    this.keyPressEnter = () => {
        this.display.addEventListener('keyup', (e) => {
            if(e.keyCode === 13) {
                this.doAccount();
            }
        });

        this.display.focus();
    }

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

        try {
            conta = eval(conta);
            if(!conta){
                alert('Conta Invalida!');
                return;
            }
            this.display.value = String(conta);

        } catch(e) {
            alert('Conta Invalida!');
            return;
        }
    }
}
const calculadora = new Calculadora();
calculadora.inicia();

