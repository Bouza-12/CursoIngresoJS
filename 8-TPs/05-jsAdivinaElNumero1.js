/*Al comenzar el juego generamos un número 
secreto del 1 al 100, en la pantalla del juego
 dispondremos de un cuadro de texto para ingresar
  un número y un botón “Verificar”, si el número 
  ingresado es el mismo que el número secreto se dará 
  por terminado el juego con un mensaje similar a este: 
“Usted es un ganador!!! y en solo X intentos”.
de no ser igual se debe informar si “falta…”  para llegar al número secreto  o si “se pasó…”  del número secreto.
*/
var numeroSecreto; 
var contadorIntentos;
var numeroIngresado;

contadorIntentos =0;

function comenzar()
{
	//Genero el número RANDOM entre 1 y 100
	 numeroSecreto = Math.floor(Math.random() * 101);
   console.log(numeroSecreto);
}

function verificar()
{
  numeroIngresado = document.getElementById("txtIdNumero").value;
  numeroIngresado = parseInt(numeroIngresado);
  if(numeroIngresado < numeroSecreto)
  {
    console.log("falta...");
    contadorIntentos++;
  }
  else
  {
    if(numeroIngresado > numeroSecreto)
    {
      console.log("se paso...");
      contadorIntentos++;
    }
    else{
      contadorIntentos++;
      alert("Usted es el ganador. y en solo "+ contadorIntentos +" intentos." );
    }
  }
  document.getElementById("txtIdIntentos").value = contadorIntentos;
	
}