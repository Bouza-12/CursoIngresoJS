/*
Al presionar el botón pedir  números  
hasta que el usuario quiera, mostrar:
1-Suma de los negativos.
2-Suma de los positivos.
3-Cantidad de positivos.
4-Cantidad de negativos.
5-Cantidad de ceros.
6-Cantidad de números pares.
7-Promedio de positivos.
8-Promedios de negativos.
9-Diferencia entre positivos y negativos, (positvos-negativos). */
function mostrar()
{
	//declarar contadores y variables 
	var respuesta;
	var numeroIngresado;
	var sumaPositivos;
	var sumaNegativos;
	var contadorPositivos;
	var contadorNegativos;
	var contadorCeros;
	var contadorPares;
	var promedioPositivos;
	var promedioNegativos;
	var RestaPositivosyNegaivos;

	sumaNegativos=0;
	sumaPositivos=0;
	contadorPositivos=0;
	contadorNegativos=0;
	contadorCeros=0;
	contadorPares=0;

	respuesta="si";

	while(respuesta=="si")
	{
		numeroIngresado = prompt("Ingrese un número: ");
		numeroIngresado = parseInt(numeroIngresado);
		console.log(numeroIngresado);
		//Validación de si lo ingresado es un número
		while(isNaN(numeroIngresado))
		{
			numeroIngresado = prompt("Error! Vuelva a intentar, i||ngrese un número: ");
			numeroIngresado = parseInt(numeroIngresado);
		}
		//validar condiciones
		if(numeroIngresado > 0)
		{
			sumaPositivos += numeroIngresado;
			contadorPositivos++;
		}
		else
		{
			if(numeroIngresado<0)
			{
				sumaNegativos += numeroIngresado;
				contadorNegativos++;
			}
			else
			{
				contadorCeros++;
			}
		}
		if(numeroIngresado%2 == 0)
		{
			contadorPares++;
		}

		respuesta=prompt("desea continuar? (si/no)");
		
	}//fin del while

	promedioPositivos= sumaPositivos/contadorPositivos;
	promedioNegativos= sumaNegativos/contadorNegativos;
	RestaPositivosyNegaivos = sumaPositivos + sumaNegativos;

	document.write("La suma de los positivos es: "+sumaPositivos+ ". Ingreso "+ contadorPositivos+ " números positivos y su promedio es: "+promedioPositivos+"<br>");

	document.write("La suma de negativos es: "+sumaNegativos+ ". Ingreso "+ contadorNegativos +" números negativos y su promedio es: "+promedioNegativos+".<br>");
	document.write(" Usted ingreso el número cero: "+contadorCeros+" veces. <br>");
	document.write("Usted ingreso la siguiente cantidad de números pares: "+contadorPares+"<br>");
	document.write(" La diferencia entre los números positivos y negativos es: "+RestaPositivosyNegaivos);

}//FIN DE LA FUNCIÓN