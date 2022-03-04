/*
Debemos lograr tomar un nombre con 'prompt' 
y luego mostrarlo por 'alert' al presionar el botón  'mostrar'*/
function mostrar()
{
	var nombre;	
	nombre = prompt("Ingrese su nombre:");
	alert("Buenos días " + nombre + "!");
}
//while con contador
while(contador <5){
	//Ingreso los datos
	//Datos fijos
	stringIngresado=prompt("Ingrese el string (jabon / alcohol / barbijo): ");
	stringIngresado = stringIngresado.toLowerCase();
	while(stringIngresado!= "jabon" && stringIngresado != "alcohol" && stringIngresado != "barbijo") //comprobación de datos dijos en string
	{
		stringIngresado=prompt("Ingrese el string (jabon / alcohol / barbijo): ");
		stringIngresado = stringIngresado.toLowerCase();
	}
	console.log(stringIngresado);

	numeroIngresado = prompt("Ingrese el preco del producto (entre 100 y 300): ");
	numeroIngresado = parseInt(numeroIngresado);
	while(isNaN(numeroIngresado) || numeroIngresado < 100 || numeroIngresado > 300) //comprobación de numeros entre tal y tal
	{
		numeroIngresado = prompt("Ingrese el preco del producto (entre 100 y 300): ");
		numeroIngresado = parseInt(numeroIngresado);
	}
	console.log(numeroIngresado);

	otroStringIngresada = prompt("Ingrese la otroString del producto: ");
	while(otroStringIngresada == "")// validacion de un igreso de string sin restricciones
	{
		otroStringIngresada = prompt("Debe ingresar una otroString, no puede ser vacío: ");
	}
	console.log(otroStringIngresada);

	//Usamos el switch para ingresos de casas fijas, contadores para promedios y acumuladores para totales
	switch (stringIngresado) {
		case "jabon":
			unidadesJabon+= unidadesIngresadas;
			contadorJabon++;
			break;
		case "alcohol":
			if(banderaAlcohol=true || precioIngresado < alcoholPrecioBarato)
			{
				alcoholPrecioBarato = precioIngresado
				alcoholMasBaratoUnidades = unidadesIngresadas;
				alcoholMasBaratoFabricante = fabricanteIngresado;
				banderaAlcohol = false;
			}
			unidadesAlcohol += unidadesIngresadas;
			contadorAlcohol++;
			break;
		case "barbijo":
			unidadesBarbijo += unidadesIngresadas;
			contadorBarbijo++;
			break;		
		default:
			break;
	}
	contador++;
} // salgo del while

//while con bandera
while(bandera==true)
{
  
	if(banderaPrecio==true || mayorPrecio < precioBolsa){
		mayorPrecio=precioBolsa;
		mayorTipo = producotIngresado;
		banderaPrecio = false;
	}
	bandera = confirm("Desea seguir cargando productos? ");
}//Salgo del while

//calculo mayor unidades y promedio
if(unidadesUno>unidadesDos)
{
	if(unidadesUno>unidadesTres)
		{
			promedio = unidadesUno / contadorUno;
			maxVendido = "Uno"
		}
	else
	{
		promedio = unidadesTres / contadorTres;
		maxVendido = "Tres"
	}
}
else
{
	if(unidadesDos>unidadesTres)
	{
		maxVendido= "Dos"
		promedio = unidadesDos / contadorDos;
	}
	else
	{
		promedio = unidadesTres / contadorTres;
		maxVendido = "Tres"
	}
}
promedio.toFixed(2);


