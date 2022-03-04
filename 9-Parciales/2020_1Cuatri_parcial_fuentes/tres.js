
/*
En el ingreso a un viaje en avion nos solicitan nombre , edad, sexo("f" o "m") y estado civil("soltero", "casado" o "viudo")y temperatura corporal.
a) El nombre de la persona con mas temperatura.
b) Cuantos mayores de edad estan viudos
c) La cantidad de hombres que hay solteros o viudos.
d) cuantas personas de la tercera edad( mas de 60 años) , tienen mas de 38 de temperatura
e) El promedio de edad entre los hombres solteros.
*/
function mostrar()
{
	var nombre;
	var edad;
	var sexo; //'f' o 'm'
	var estadoCivil; //'soltero' 'casado' 'viudo'
	var temperaturaCorporal;
	var bandera; //ingresos
	var banderaTemperatura;
	var mayorTemperatura;
	var mayorTempNombre;
	var contadorViudos;
	var contadorSolteros;
	var cantidadSolterosYViudos;
	var contadorViejosFiebre;
	var acumuladorEdadSolteros;
	var promedio;

	var mensaje;

	bandera=true;
	banderaTemperatura =true;
	contadorViudos = 0;
	contadorSolteros =0;
	contadorViejosFiebre =0;
	acumuladorEdadSolteros=0;

	while(bandera == true)
	{
		nombre = prompt("Ingrese el nombre de la persona: ");
		while(nombre == "")// validacion de un igreso de string sin restricciones
		{
			nombre = prompt("Debe ingresar un nombre válido, no puede ser vacío: ");
		}
		console.log(nombre);

		edad = prompt("Ingrese la edad del pasajero: ");
		edad = parseInt(edad);
		while(isNaN(edad) || edad < 0 ) //comprobación de numeros entre tal y tal
		{
			edad = prompt("Error!!! Ingrese la edad del pasajero: ");
			edad = parseInt(edad);
		}
		console.log(edad);

		sexo = prompt("Ingrese el sexo del pasajero ('f' o 'm')");
		sexo = sexo.toLowerCase();
		while(sexo != "f" && sexo != "m")
		{
		sexo = prompt("ERROR!!! Ingrese el sexo del pasajero ('f' o 'm')");
		sexo = sexo.toLowerCase();  
		}
		console.log(sexo);

		estadoCivil = prompt("Ingrese el estado civil (soltero / casado / viudo)");
		estadoCivil = estadoCivil.toLowerCase();
		while(estadoCivil != "casado" && estadoCivil != "soltero" && estadoCivil!= "viudo")
		{
			estadoCivil = prompt("ERROR!!! Ingrese el estado civil (soltero / casado / viudo)");
			estadoCivil = estadoCivil.toLowerCase();  
		}
		console.log(estadoCivil);

		temperaturaCorporal = prompt("Ingrese la temperatura corporal del pasajero: ");
		temperaturaCorporal = parseInt(temperaturaCorporal);
		while(isNaN(temperaturaCorporal)) //comprobación de numeros entre tal y tal
		{
			temperaturaCorporal = prompt("Error!!! Ingrese la temperatura corporal del pasajero: ");
			temperaturaCorporal = parseInt(temperaturaCorporal);
		}
		console.log(temperaturaCorporal);

		if(banderaTemperatura==true || mayorTemperatura < temperaturaCorporal){
			mayorTemperatura=temperaturaCorporal;
			mayorTempNombre = nombre;
			banderaTemperatura = false;
		}

		switch(estadoCivil)
		{
			case "viudo":
				if(edad >= 18)
				{
					contadorViudos++;
				}
				break;
			case "soltero":
				contadorSolteros++;
				acumuladorEdadSolteros += edad;
				break;
			case "casado":
				break;
			default:
				break;
		}

		if(edad >= 60 && temperaturaCorporal > 38)
		{
			contadorViejosFiebre++;
		}

	
		bandera = confirm("Desea seguir ingresando pasajeros?");
	}

	cantidadSolterosYViudos = contadorSolteros + contadorViudos;
	promedio = acumuladorEdadSolteros / contadorSolteros;

	mensaje = "A)\n El nombre de la persona con más temperatura fue: " + mayorTempNombre +". \n B)\n La cantidad de viudos que son mayores de edad son: "+ contadorViudos + ". \n C)\n El total de solteros y viudos es: " + cantidadSolterosYViudos + ". \n D)\n La cantidad de personas con más de 60 años y con más de 38°C es: " + contadorViejosFiebre + "\n E)\n El promedio de edad de los solteros es de: " + promedio;

	alert(mensaje);
}
