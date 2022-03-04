/*
En el ingreso a un viaje en avión nos solicitan nombre, nacionalidad , edad, sexo("f" o "m") y estado civil("soltero", "casado" o "viudo")y temperatura corporal.
a) la Nacionalidad de la persona con mas temperatura.
b) Cuantos mayores de edad( más de 17) estan solteros
c) La cantidad de Mujeres que hay solteras o viudas.
d) cuantas personas de la tercera edad( mas de 60 años) , tienen mas de 38 de temperatura
e) El promedio de edad entre las mujeres casadas.*/
function mostrar()
{
	var nombre;
	var nacionalidad;
	var edad;
	var sexo;
	var estadoCivil;
	var temperaturaCorporal;
	var bandera;
	var banderaTemperatura;
	var mayorNacionaildad;
	var mayorTemperatura;
	var contadroMayorEdad;
	var contadorMuejeresSyV;
	var contadorTerceraEdad;
	var contadorMujeresCasadas;
	var acumuladorMujeresCasadas;
	var promedioMujeresCasadas;

	contadroMayorEdad=0;
	bandera=true;
	banderaTemperatura=true;
	contadorMuejeresSyV=0;
	contadorTerceraEdad=0;
	contadorMujeresCasadas=0;
	acumuladorMujeresCasadas=0;


	while(bandera==true)
	{
		nombre = prompt("Ingrese el nombre del pasajero: ");
		while(nombre == "")// validacion de un igreso de string sin restricciones
		{
			nombre = prompt("Error!!! Debe ingresar un nombre, no puede ser vacío: ");
		}
		console.log(nombre);
		nacionalidad = prompt("Ingrese la nacionalidad del pasajero: ");
		while(nacionalidad == "")// validacion de un igreso de string sin restricciones
		{
			nacionalidad = prompt("Error!!! Debe ingresar un nacionalidad, no puede ser vacío: ");
		}
		console.log(nacionalidad);
		edad = prompt("Ingrese la edad del pasajero: ");
		edad = parseInt(edad);
		while(isNaN(edad) || edad < 0) //comprobación de numeros entre tal y tal
		{
			edad = prompt("Error!!! Ingrese la edad del pasajero: ");
			edad = parseInt(edad);
		}
		console.log(edad);
		sexo=prompt("Ingrese el sexo (f o m): ");
		sexo = sexo.toLowerCase();
		while(sexo!= "f" && sexo != "m") //comprobación de datos dijos en string
		{
			sexo=prompt("Error!!! Ingrese el sexo (f o m): ");
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

		if(banderaTemperatura==true || mayorTemperatura < temperaturaCorporal)
		{
			mayorTemperatura = temperaturaCorporal;
			mayorNacionaildad = nacionalidad;
			banderaTemperatura=false;
		}

		switch(estadoCivil)
		{
			case "soltero":
				if(edad>17)
				{
					contadroMayorEdad++;
				}
				if(sexo =="f")
				{
					contadorMuejeresSyV++;
				}
				break;
			case "casado":
				if(sexo=="f")
				{
					acumuladorMujeresCasadas += edad;
					contadorMujeresCasadas++;
				}
				break;
			case "viudo":
				if(sexo=="f")
				{
					contadorMuejeresSyV++;
				}
				break;
			case "divorciado":
				break;
			default:
				break;
			
		}
		if(edad>59 && temperaturaCorporal>38)
		{
			contadorTerceraEdad++;
		}



		bandera = confirm("Desea seguir ingresando pasajeros?");
	}
	
	
	promedioMujeresCasadas = acumuladorMujeresCasadas/contadorMujeresCasadas;
	if(isNaN(promedioMujeresCasadas)){
		promedioMujeresCasadas="No hay mujeres casadas.";
	}
	
	
	
	alert("A) La naionaildad con mayor temperatura es: " + mayorNacionaildad + ".\nB) Los adultos solteros son: "+contadroMayorEdad+".\nC) La cantidad de mujeres solteras o viudas es: "+contadorMuejeresSyV+ ".\nD) Las personas de tercera edad con temperatura elevada son: "+contadorTerceraEdad +".\nE) La edad promedio de mujeres casadas es: "+ promedioMujeresCasadas);
}
