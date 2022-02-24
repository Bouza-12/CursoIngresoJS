/*
3. De los 10 empleados de una PYME se ingresan los siguientes datos:
Nombre y apellido
Genero del empleado ("Femenino", "Masculino", "No Binario")
Cantidad de hijos (no puede ser un numero negativo)
El programa deberá mostrar:
a. Porcentaje de empleados por cada genero.
b. El nombre del empleado No Binario con mas cantidad de hijos.
c. Nombre y apellido del primer empleado que no tiene hijos.

Sabiendo que:

*Si no tiene hijos no le corresponde asignación familiar
*Si tiene un hijo le corresponde 5000
*Si tiene dos hijos le corresponde 8000 por sus dos hijos
*Y si tiene más de dos hijos le corresponde 10000

d. Mostrar el total de dinero que deberá pagar la PYME en concepto de asignaciones
*/
function mostrar()
{
	//Declaro las variables
	var nombreIngresado;
	var apellidoIngresado;
	var generoIngresado;
	var hijosIngresados;
	var contadorMasculino;
	var contadorFemenino;
	var contadorNoBinario;
	var porcentajeMasculino;
	var porcentajeFemenino;
	var porcentajeNoBinario;
	var maximoHijosNoBinario;
	var maximoNombreNoBinario;
	var maximoApellidoNoBinario;
	var primerHijoNombre;
	var primerHijoApellido;
	var banderaPrimerHijo;
	var asignacionUnHijo;
	var asignacionDosHijos;
	var asignacionTresOMas;
	var acumuladorAsignaciones;
	var contador;
	var totalEmpleados;
	var banderaNoBinario

	totalEmpleados = 10;
	banderaPrimerHijo = true;
	contador = 0;
	contadorFemenino=0;
	contadorMasculino=0;
	contadorNoBinario=0;
	banderaNoBinario = true;
	asignacionUnHijo = 5000;
	asignacionDosHijos = 8000;
	asignacionTresOMas = 10000;
	acumuladorAsignaciones = 0;

	while(contador < totalEmpleados )
	{
		//Ingreso de datos
		nombreIngresado = prompt("Ingrese el Nombre del empleado: ");
		apellidoIngresado = prompt ("Ingrese el Apellido del empleado: ");
		generoIngresado = prompt(" Ingrese el Género del empleade: (masculino, femenino o no binario)");
		while(generoIngresado != "masculino" && generoIngresado != "femenino" && generoIngresado != "no binario")
		{
			generoIngresado = prompt("Error!!! Ingrese un género válido (masculino, femenino o no binario):");
		}
		hijosIngresados = prompt("Ingrese la cantidad de Hijos del empleado: ");
		hijosIngresados = parseInt(hijosIngresados);
		while(isNaN(hijosIngresados) == true)
		{
			hijosIngresados = prompt("Error!!! Ingrese la cantidad de Hijos del empleado: ");
			hijosIngresados = parseInt(hijosIngresados);
		}
		console.log(nombreIngresado + " "+ apellidoIngresado + " "+ generoIngresado + " y tiene " + hijosIngresados + " hijos.");

		switch(generoIngresado)
		{
			case "masculino":
				contadorMasculino++;
				break;
			case "femenino":
				contadorFemenino++;
				break;
			case "no binario":
				contadorNoBinario++;
				if(banderaNoBinario == true)
				{
					maximoNombreNoBinario = nombreIngresado;
					maximoApellidoNoBinario = apellidoIngresado;
					maximoHijosNoBinario = hijosIngresados;
					banderaNoBinario = false;
				}
				else
				{
					if(maximoHijosNoBinario < hijosIngresados)
					{
						maximoNombreNoBinario = nombreIngresado;
						maximoApellidoNoBinario = apellidoIngresado;
						maximoHijosNoBinario = hijosIngresados;
					}
				}

				break;
			default:
				break;
		}
		if ( banderaPrimerHijo == true)
		{
			if (hijosIngresados >= 1)
			{
				primerHijoNombre = nombreIngresado;
				primerHijoApellido = apellidoIngresado;
				banderaPrimerHijo = false;
			}
		}


		switch(hijosIngresados)
		{
			case 0:
				break;
			case 1:
				acumuladorAsignaciones += asignacionUnHijo;
				console.log("Acumulado en asignaciones: " +acumuladorAsignaciones);
				break;
			case 2:
				acumuladorAsignaciones += asignacionDosHijos;
				console.log("Acumulado en asignaciones: " +acumuladorAsignaciones);
				break;
			default:
				acumuladorAsignaciones += asignacionTresOMas;
				console.log("Acumulado en asignaciones: " +acumuladorAsignaciones);
				break;
		}


		contador++;
	}
	// salgo del while
	console.log(contador);

	porcentajeFemenino = (contadorFemenino / contador)*100;
	porcentajeMasculino = (contadorMasculino / contador)*100;
	porcentajeNoBinario = (contadorNoBinario / contador)*100;

	document.write("El porcentaje de empleados masculinos es: " + porcentajeMasculino + "%<br>");
	document.write("El porcentaje de empleados femeninos es: " + porcentajeFemenino + "%<br>");
	document.write("El porcentaje de empleados no binario es: " + porcentajeNoBinario + "%<br>");
	document.write("---------------------------------------------------<br>");
	document.write("El empleado no binario con más hijos es: " + maximoNombreNoBinario + " " +maximoApellidoNoBinario + " con " + maximoHijosNoBinario + " hijos.<br>");
	document.write("---------------------------------------------------<br>");
	document.write("El empleado con el primer hijo ingresado es: " + primerHijoNombre + " " + primerHijoApellido + ".<br>");
	document.write("---------------------------------------------------<br>");
	document.write("El monto total en concepto de asignaciones familiares es: " + acumuladorAsignaciones + ".<br>");


}//FIN DE LA FUNCIÓN
