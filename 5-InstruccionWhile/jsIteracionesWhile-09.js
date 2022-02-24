/*
Al presionar el botón pedir  números  hasta que el usuario quiera,
mostrar el número máximo y el número mínimo ingresado.*/
function mostrar()
{	// declarar variables
	var banderaDelPrimero;
	var numeroIngresado;
	var numeroMaximo;
	var numeroMinimo;
	var respuesta;
	//iniciar variables
	banderaDelPrimero="es el primero";
	respuesta='si';

	//Acá hago una primer ingreso antes del while para poder asignarle un valor numerico a maximo y minimo y que no tire error en las condiciones de los if.
	numeroIngresado=prompt("Ingrese un número");
	numeroIngresado = parseInt(numeroIngresado);
	console.log(numeroIngresado);
	numeroMaximo=numeroIngresado;
	numeroMinimo=numeroIngresado;
	respuesta=prompt("desea continuar? (si/no)");

	//comienzo el while
	while(respuesta=="si")
	{
		numeroIngresado=prompt("Ingrese un número");
		numeroIngresado = parseInt(numeroIngresado);
		console.log(numeroIngresado);
		if(numeroIngresado > numeroMaximo)
		{
			numeroMaximo = numeroIngresado;
			console.log(numeroMaximo);
		}
		if(numeroIngresado< numeroMinimo)
		{
			numeroMinimo = numeroIngresado;
			console.log(numeroMinimo);
		}
		
		respuesta=prompt("desea continuar? (si/no)");
	}
	//muestro los resultados
	document.getElementById("txtIdMaximo").value=numeroMaximo;
	document.getElementById("txtIdMinimo").value=numeroMinimo;
}//FIN DE LA FUNCIÓN