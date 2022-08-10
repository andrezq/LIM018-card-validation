const tarjeta = document.querySelector('#tarjeta');
btnAbrirFormulario = document.querySelector('#btn-abrir-formulario')
formulario = document.querySelector('#tformulario-tarjeta');

Document.getElementById(tarjeta);
tarjeta.addEventListener('click', () => {
    tarjeta.classList.toggle('active');
});

btnAbrirFormulario.addEventListener('click', () => {
    tarjeta.classList.toggle('active');
    formulario.classList.toggle('active');
});

for(let i=1; i <= 12; i++){
    let opcion = document.createElement('option');
    opcion.value = i;
    opcion.innerText = i;
    formulario.selectMes.appendChild(opcion)
} 