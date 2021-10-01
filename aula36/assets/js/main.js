
    //Colocar a cor de fundo nos paragrafos da mesma cor de fundo do background
    //Colocar a cor do texto do paragrafo em branco 
    const paragrafos = document.querySelector('.paragrafos');
    const container = document.querySelector('.container')
    const ps = paragrafos.querySelectorAll('p');
    
    const estilosBody = getComputedStyle(document.body);
    const backGroundColorBody = estilosBody.backgroundColor;

   for (let p of ps) {
       p.style.backgroundColor = backGroundColorBody;
       p.style.color = 'white';
   }

   container.innerHTML += `<p>reiciendis quaerat sed numquam totam perferendis, natus repellat ipsam, fugiat</p>`;

   
