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
        setResultado(`Peso invalido`, false)
        return;
    }

      if(!altura) {
          setResultado(`Altura invalida`, false)
          return;
      }

      

      
   })

   function criaP () {
    const p = document.createElement('p');
    return p;
    
   }

   function setResultado (msg, isValid) {
    const resultado = document.querySelector('.resultado');
    resultado.innerHTML = '';
    const p = criaP();
    p.innerHTML = msg
    resultado.appendChild(p);
   }
   






}
main();
