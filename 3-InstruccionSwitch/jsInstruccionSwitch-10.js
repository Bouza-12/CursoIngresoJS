function mostrar()
{
	//Declaro variables
	var estacionIngresada;
	var destino;
	var seViaja;
	//Asigno variables
	estacionIngresada = document.getElementById("txtIdEstacion").value;
	destino = document.getElementById("txtIdDestino").value;
	seViaja = false;
	//Consulto el switch
	switch(estacionIngresada)
	{
		case "Invierno":
			switch(destino)
			{
				case "Bariloche":
					seViaja =true;
					break;
				default:
					break;
			}
			break;
		case "Verano":
			switch(destino)
			{
				case "Mar del plata":
				case "Cataratas":
					seViaja = true;
					break;
				default:
					break;
			}
			break;
		case "Otoño":
			seViaja = true;
			break;
		case "Primavera":
			switch(destino)
			{
				case "Bariloche":
					break;
				default:
					seViaja = true;
					break;
			}
			break;
		default:
			break;
	}
	//Verifico si se viaja o no y muestro al usuario
	if(seViaja == true)
	{
		alert("En la temporada de " + estacionIngresada + " se viaja a " + destino +".");
	}
	else
	{
		alert("En la temporada de " + estacionIngresada + " NO se viaja a " + destino +".");
	}
}//FIN DE LA FUNCIÓN