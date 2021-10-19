class ValidaFormulario {
    constructor() {
        this.formulario = document.querySelector('.formulario');

        this.eventos();
    }

    eventos() {
        this.formulario.addEventListener('submit', e => {
            this.handleSubmit(e)
        });
    }

    handleSubmit(e) {
        e.preventDefault();
        const isValidFields = this.isValidFields();
        const validPassword = this.isValidPassword();

        const usuario = this.formulario.querySelector('.nome');

        if(isValidFields && validPassword) {
            alert(`Parabens ${usuario} seus dados foram enviados`);
            this.formulario.submit();
        }
    }

    isValidPassword() {
        let valid = true;

        const senha = this.formulario.querySelector('.senha');
        const repetirSenha = this.formulario.querySelector('.repetir-senha');

        if(senha.value !== repetirSenha.value) {
            valid = false;
            this.createError(senha, 'As senhas precisam ser iguais');
            this.createError(repetirSenha, 'As senhas precisam ser iguais');
        }

        if(senha.value.length < 6 || senha.value.length > 12) {
            valid = false;
            this.createError(senha, 'As senhas precisam ter entre 6 e 12 caracteres');
        }

        return valid;
    }

    isValidFields() {
        let valid = true;

        for(let errorText of this.formulario.querySelectorAll('.error-text')) {
            errorText.remove();
        }

        for(let fields of this.formulario.querySelectorAll('.validate')) {
            const label = fields.previousElementSibling.innerHTML; // captura o elemento anterio da tag
            if(!fields.value) {
                this.createError(fields, `Campo "${label}" nao pode estar vazio`);
                valid = false;
            }

            if(fields.classList.contains('cpf')) {
                if(!this.validCPF(fields)) valid = false;
            }

            if(fields.classList.contains('usuario')) {
                if(!this.validUsuario(fields)) valid = false;
            }
        }

        return valid;
    }

    validCPF(fields) {
        const cpf = new ValidaCpf(fields.value) 

        if(!cpf.valida()) {
            this.createError(fields, 'CPF INVALIDO')
        }
        return true;
    }

    validUsuario(fields) {
        const usuario = fields.value;
        let valid = true;
        if(usuario.length < 3 || usuario.length > 12) {
            this.createError(fields, 'Usuario Precisa ter entre 3 e 12 caracteres.');
            valid = false;
        }

        if(!usuario.match(/[a-zA-Z0-9]+/g)) {
            this.createError(fields, 'Usuario Precisa ter apenas letras e/ou numeros.');
            valid = false;
        }

        return valid;
    }

    createError(field, msg) {
        const div = document.createElement('div');
        div.innerHTML = msg;
        div.classList.add('error-text');
        field.insertAdjacentElement('afterEnd', div); //beforeBegin', 'afterBegin', 'beforeEnd', or 'afterEnd'
    }


}

const valida = new ValidaFormulario();