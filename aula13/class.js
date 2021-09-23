const nome = prompt('Digite o seu nome completo:');

document.body.innerHTML += `O seu NOME E: <strong>${nome}</strong><br />`;
document.body.innerHTML += `O seu nome TEM: <strong>${nome.length}</strong> LETRAS <br />`;
document.body.innerHTML += `A SEGUNDA LETRA do seu nome e: <strong>${nome.charAt(1)}</strong> <br />`;
document.body.innerHTML += `Qual o PRIMEIRO indice da LETRA A no seu nome ? <strong>${nome.indexOf('a')}</strong> <br/ >`;
document.body.innerHTML += `Qual o ULTIMO indice da LETRA A no seu nome ? <strong>${nome.lastIndexOf('a')}</strong> <br/ >`;
document.body.innerHTML += `As ULTIMAS 3 LETRAS do seu nome sao: <strong>${nome.slice(-3)}</strong> <br/ >`;
document.body.innerHTML += `As PALVRAS do seu nome sao: <strong>${nome.split(' ')}</strong> <br/ >`;
document.body.innerHTML += `Seu nome com letra MAIUSCULA: <strong>${nome.toUpperCase(nome)}</strong> <br/ >`;
document.body.innerHTML += `Seu nome co letra MINUSCULA: <strong>${nome.toLowerCase(nome)}</strong> <br/ >`;