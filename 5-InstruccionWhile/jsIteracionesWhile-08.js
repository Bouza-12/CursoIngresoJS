/*
Al presionar el botón pedir  números  hasta que el usuario quiera,
sumar los que son positivos y multiplicar los negativos.*/
function mostrar()
{
	var contador;
	var respuesta;
	var sumaPositivos;
	var multiplicacionNegativos;
	var ingresoNumero; //variable agregada
	contador=0;
	sumaPositivos=0;
	multiplicacionNegativos=1;
	respuesta='si';

	while(respuesta != "no")
	{
		ingresoNumero = prompt("Ingrese un número: ");
		ingresoNumero = parseInt(ingresoNumero);
		console.log(ingresoNumero);
		if(ingresoNumero<0)
		{
			multiplicacionNegativos = multiplicacionNegativos * ingresoNumero;
		}
		else
		{
			sumaPositivos += ingresoNumero;
		}
		contador++;
		respuesta = prompt("Desea seguir ingresando números (si/no): ");
		respuesta = respuesta.toLowerCase();
	}

	document.getElementById("txtIdSuma").value=sumaPositivos;
	document.getElementById("txtIdProducto").value=multiplicacionNegativos;

}//FIN DE LA FUNCIÓN