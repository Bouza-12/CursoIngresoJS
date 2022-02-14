function mostrar()
{
	var destinoIngresado;
	destinoIngresado = document.getElementById("txtIdDestino").value;
	switch(destinoIngresado)
	{
		case "Bariloche":
			alert("Queda en el Oeste.");
			break;
		case "Ushuaia":
			alert("Queda en el Sur.");
			break;
		case "Cataratas":
			alert("Queda en el Norte.");
			break;
		case "Mar del plata":
			alert("Queda en el Este.");
			break;
	}
}//FIN DE LA FUNCIÓN