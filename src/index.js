const tarjeta = document.querySelector('#tarjeta'),
      btnAbrirFormulario = document.querySelector('#btn-abrir-formulario'),
      formulario = document.querySelector('#formulario-tarjeta'),
      numeroTarjeta = document.querySelector('#tarjeta .numero'),
      nombreTarjeta = document.querySelector('#tarjeta .nombre'),
      mesExpiracion = document.querySelector('#tarjeta .mes'),
      yearExpiracion = document.querySelector('#tarjeta .year'),
      ccv = document.querySelector('#tarjeta .ccv');

const mostrarFrente = () =>{
  if(tarjeta.classList.contains('active'))
  tarjeta.classList.remove('active');
}

tarjeta.addEventListener('click', () => {
  tarjeta.classList.toggle ('active');
});

btnAbrirFormulario.addEventListener('click', () => {
  btnAbrirFormulario.classList.toggle('active');
  formulario.classList.toggle('active');
});

formulario.inputNumero.addEventListener('keyup', (e) => {
  let valorInput = e.target.value;

  formulario.inputNumero.value = valorInput
  .replace(/\s/g, '') 
  .replace(/\D/g, '') 
  .replace(/([0-9]{4})/g, '$1 ')
  .trim();

  numeroTarjeta.textContent = valorInput;

  mostrarFrente();
});

formulario.inputNombre.addEventListener('keyup', (e) => {
  let valorInput = e.target.value;

  formulario.inputNombre.value = valorInput.replace(/([0-9]{4})/g, '');
  nombreTarjeta.textContent = valorInput;
  mostrarFrente();
})

formulario.selectMes.addEventListener('change', (e) => {
  mesExpiracion.textContent = e.target.value;
  mostrarFrente();
})

formulario.selectYear.addEventListener('change', (e) => {
  yearExpiracion.textContent = e.target.value.slice(2);
  mostrarFrente();
});

formulario.inputCCV.addEventListener('keyup', () => {
  if(!tarjeta.classList.contains('active')){
tarjeta.classList.toggle('active');
  }

  formulario.inputCCV.value = formulario.inputCCV.value
  .replace(/\s/g, '') 
  .replace(/\D/g, '') ;

  ccv.textContent = formulario.inputCCV.value
});
