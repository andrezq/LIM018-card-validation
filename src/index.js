const tarjeta = document.querySelector('#tarjeta');
btnAbrirFormulario = document.querySelector('#btn-abrir-formulario');
formulario = document.querySelector('#tformulario-tarjeta');

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
const yearActual = new Date().getFullYear();
for(let i = yearActual; i <= yearActual + 8; i++){
    let opcion = document.createElement('option');
    opcion.value = i;
    opcion.innerText = i;
    formulario.selectYear.appendChild(opcion);
}
formulario.inputNumero.addEventListener('keyup', (e) => {
    let valorInput = e.target.value;

    formulario.inputNumero.value = valorinput
    // Eliminamos espacios en blanco
    .replace(/\s/g, '');
    .replace(/\D/g, '')
})
