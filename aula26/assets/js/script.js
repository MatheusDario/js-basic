// peso / (altura * altura)
// primeiro passo capturar evento do formulario e parar
function main() {
   const form = document.querySelector('.form');
   
   form.addEventListener('submit', function (e) {
       e.preventDefault();
       console.log('Evento previnido')
   })
}
main();
