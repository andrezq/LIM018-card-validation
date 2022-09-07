function Corroboración (){

       const anumeroTarjeta = document.querySelector('#tarjeta .numero').value;
          anombreTarjeta = document.querySelector('#tarjeta .nombre').value;
          amesExpiracion = document.querySelector('#tarjeta .mes').value;
          ayearExpiracion = document.querySelector('#tarjeta .year').value;
          accv = document.querySelector('#tarjeta .ccv').value;
  
      const request = {
      cardNumber : anumeroTarjeta,
      cardName : anombreTarjeta,
      cardMonth : amesExpiracion,
      cardYear : ayearExpiracion,
      cardCcv : accv,
     }
    localStorage.setItem('request',JSON.stringfy(request));      
  }