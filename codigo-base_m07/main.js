const form =document.getElementById('form-deposito');
const nomebeneficiario = document.getElementById('nome-beneficiario');

function validanome(nomecompleto){
    const nomecomoarray = nomecompleto.split(' ');
    return nomecomoarray.length >= 2;
}

form.addEventListener('submit', function(e){
    let formevalido =false;
    e.preventDefault();

    const numerocontabeneficiario =document.getElementById('numero-conta');
    const valordeposito =document.getElementById('valor-deposito');
    const mensagemsucesso = `valor do deposito de: <b>${valordeposito.value}<b> depositado para o cliente <b>${nomebeneficiario.value}<b> - conta <b>${numerocontabeneficiario.value}<b>`;

    formevalido = validanome(nomebeneficiario.value)
    if(formevalido){
        const containermensagemsucesso = document.querySelector('.sucess-message')
        containermensagemsucesso.innerHTML = mensagemsucesso;
        containermensagemsucesso.style.display ='block';

        nomebeneficiario.value ='';
        valordeposito.value ='';
        numerocontabeneficiario.value ='';

    } else{
        nomebeneficiario.style.border ='1px solid red';
        document.querySelector('.error-message').style.display ='block';
    }
})

nomebeneficiario.addEventListener('keyup',function(e){
    console.log(e.target.value);
    formevalido = validanome(e.target.value);

    if(!formevalido){

        nomebeneficiario.classList.add('error');
        document.querySelector('.error-message').style.display ='block';
    } else{
        nomebeneficiario.classList.remove('error');
        document.querySelector('.error-message').style.display ='none';
    }
})

