// peso / (altura * altura)
// primeiro passo capturar evento do formulario e parar
//criar a funcao para add o resultado no html
function main() {
   const form = document.querySelector('.form');
   
   form.addEventListener('submit', function (e) {
       e.preventDefault();
       //Recuperando o input completo
       const inputPeso = e.target.querySelector('#input-peso');
       const inputAltura = e.target.querySelector('#input-altura');

       //Pegar o valor de cada item do input e ja converter para numero
      const peso = Number(inputPeso.value);
      const altura = Number(inputAltura.value);

      if(!peso) {
        setResultado(`Peso invalido, Insira um valor Correto`, false)
        return;
    }

      if(!altura) {
          setResultado(`Altura invalida, Insira um valor Correto`, false)
          return;
      }

      const imc = getImc(peso, altura);
      const classificacaoImc = getClassificacaoImc(imc);

      const msg = `Seu IMC e ${imc} (${classificacaoImc}).`

      setResultado(msg, true);
     
   });

   //Lista de coisas para ser usada e classificar o imc
   function getClassificacaoImc (imc) {
    const classificacao = ['Magreza', 'Normal', 'Sobrepeso GrauI', 'Obesidade Grau II', 'Obesidade Grave Grau III'];

    if(imc >= 39.9) {
        return classificacao[4];
    } 
    
    if(imc >= 30.0 && imc < 39.9) {
        return classificacao[3];
    }
    
    if(imc >= 25.0 && imc <=29.9) {
        return classificacao[2];
    }
    
    if(imc >= 18.5 && imc <= 24.9) {
        return classificacao[1];
    } 
    
    if(imc < 18.5) {
        return classificacao[0];
    }
   }

   //calcula o imc
   function getImc(peso, altura) {
    const imc = peso / altura ** 2;
    return imc.toFixed(2)
   }

   //cria um paragrafo
   function criaP () {
    const p = document.createElement('p');
    return p;
    
   }

   function setResultado (msg, isValid) {
    const resultado = document.querySelector('.resultado');
    resultado.innerHTML = '';
    
    const p = criaP();
    
    if(isValid) {
        p.classList.add('paragrafo-resultado');
    } else {
        p.classList.add('bad')
    }

    p.innerHTML = msg
    resultado.appendChild(p);
   }
}
main();
