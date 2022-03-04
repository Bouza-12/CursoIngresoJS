/*Debemos mostrar dos números Random  del 1 al 10 
y una de las cuatro operaciones básicas (suma, resta,
 división o multiplicación) para realizar entre estos
 dos números, estas operaciones también serán Random.
 En el cuadro de texto resultado el jugador debe ingresar
 el resultado de la operación y presionar el botón Aceptar.
se debe informar si el resultado es el correcto o no.
*/
var respuesta;
var numeroUno;
var numeroDos;
var OperadorMatemático;
var respuestaIngresada;

function comenzar()
{
    numeroUno = Math.floor(Math.random()*11);
    numeroDos = Math.floor(Math.random()*11);
    OperadorMatemático = Math.floor(Math.random()*4);
    console.log(OperadorMatemático);
    console.log(numeroDos);
    console.log(numeroUno);
    /*
    0 => +
    1 => -
    2 => *
    3 => /
    */
    document.getElementById("txtIdPrimerNumero").value = numeroUno;
    
    switch(OperadorMatemático)
    {
        case 0:
            document.getElementById("txtIdOperador").value = "+";
            respuesta = numeroUno + numeroDos;
            break; 
        case 1:
            document.getElementById("txtIdOperador").value = "-";
            respuesta = numeroUno - numeroDos;
            break;
        case 2:
            document.getElementById("txtIdOperador").value = "*";
            respuesta = numeroUno * numeroDos;
            break;
        case 3:
            document.getElementById("txtIdOperador").value = "/";
            respuesta = numeroUno / numeroDos;
            break;
        default:
            break;
    }
    document.getElementById("txtIdSegundoNumero").value = numeroDos;

	

}//FIN DE LA FUNCIÓN
function Responder()
{
	respuestaIngresada = document.getElementById("txtIdRespuesta").value;
    respuestaIngresada =parseInt(respuestaIngresada);


    if(respuestaIngresada == respuesta)
    {
        alert("La respuesta es correcta");
    }
    else
    {
        alert("La respuesta es incorrecta");
    }

}//FIN DE LA FUNCIÓN
