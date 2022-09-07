//{const anumeroTarjeta  = [],
anombreTarjeta = [],
amesExpiracion = [],
ayearExpiracion = [],
accv = [];

const elementoBotonRegistrar = document.querySelector('#btn-enviar');

elementoBotonRegistrar.addEventListener('click', 'registrarTarjeta');

function resgistrarTarjeta(){

const bnumeroTarjeta = document.querySelector('#tarjeta .numero').value,
    snombreTarjeta = document.querySelector('#tarjeta .nombre').value,
    smesExpiracion = document.querySelector('#tarjeta .mes').value,
    syearEspiracion = document.querySelector('#tarjeta .year').value,
    bccv = document.querySelector('#tarjeta .ccv').value;

anumeroTarjeta.push(bnumeroTarjeta);
anombreTarjeta.push(snombreTarjeta);
amesExpiracion.push(smesExpiracion);
ayearExpiracion.push(syearEspiracion);
accv.push(bccv);

localStorage.setItem('',JSON.stringify(anumeroTarjeta));
localStorage.setItem('',JSON.stringify(anombreTarjeta));
localStorage.setItem('',JSON.stringify(amesExpiracion));
localStorage.setItem('',JSON.stringify(ayearExpiracion));
localStorage.setItem('',JSON.stringify(accv));
    
}

document.querySelector('#btn-enviar').addEventListener('click', registrar);

function registrar(){

    const anumeroTarjeta  = '',
          anombreTarjeta = '',
          amesExpiracion = '',
          ayearExpiracion = '',
          accv = '';

    anumeroTarjeta = document.querySelector('#tarjeta .numero').value;
    anombreTarjeta = document.querySelector('#tarjeta .nombre').value;
    amesExpiracion = document.querySelector('#tarjeta .mes').value;
    ayearExpiracion = document.querySelector('#tarjeta .year').value;
    accv = document.querySelector('#tarjeta .ccv').value;

    
}