/*
Al presionar el botón pedir  números  hasta que el USUARIO QUIERA 
e informar la suma acumulada y el promedio.
*/
function mostrar()
{
	var contador;
	var acumulador;
	var respuesta;
	var ingresoNumero;
	contador=0;
	acumulador=0;
	respuesta='si';

	while(respuesta != "no")
	{
		ingresoNumero = prompt("Ingrese un número: ");
		ingresoNumero = parseInt(ingresoNumero);
		console.log(ingresoNumero);
		acumulador += ingresoNumero;
		contador++;
		respuesta = prompt("Desea seguir ingresando números (si/no): ");
		respuesta = respuesta.toLowerCase();
	}

	document.getElementById("txtIdSuma").value=acumulador;
	document.getElementById("txtIdPromedio").value=acumulador/contador;

}//FIN DE LA FUNCIÓN