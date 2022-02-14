function mostrar()
{
	var estacionIngresada =txtIdEstacion.value;
	var destino;
	var porcentaje;
	var estadiaBase;
	var estadiaFinal;
	var modificadorDeEstadia;

	//Asigno variables
	destino = document.getElementById("txtIdDestino").value;
	porcentaje = 0;
	estadiaBase = 35000;
	//Consulto el switch
	switch(estacionIngresada)
	{
		case "Invierno":
			switch(destino)
			{
				case "Bariloche":
					porcentaje = 20/100; // incremento 20 porciento
					break;
				case "Cordoba":
					porcentaje = -20/100; // descuento 20 pociento
					break;
				case "Mar del plata":
					porcentaje = -10/100;	// descuento 10 porciento
					break;
				default:
					break;
			}
			break;
		case "Verano":
			switch(destino)
			{
				case "Bariloche":
					porcentaje = -20/100; // descuento 20 porciento
					break;
				case "Cordoba":
				case "Cataratas":
					porcentaje = 10/100; // aumento 10 pociento
					break;
				case "Mar del plata":
					porcentaje = 20/100;	// aumento 20 porciento
					break;
				default:
					break;
			}
			break;
		case "Otoño":
		case "Primavera":
			switch(destino)
			{
				case "Bariloche":
				case "Cataratas":
				case "Mar del plata":
					porcentaje = 10/100;	// aumento 10 porciento
					break;
				default:
					break;				
			}
			break;
		default:
			break;
	}
	//Realizo los cálculos para tener el valor de la estadía
	modificadorDeEstadia = estadiaBase * porcentaje;
	estadiaFinal = estadiaBase + modificadorDeEstadia;
	//Muestro el valor al usuario
	alert("El valor de la estadía para la temporada de " + estacionIngresada + " en " + destino + " es: $" + estadiaFinal);
}//FIN DE LA FUNCIÓN