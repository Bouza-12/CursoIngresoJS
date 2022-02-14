function mostrar() {
	var destinoIngresado;
	destinoIngresado = document.getElementById("txtIdDestino").value;
	switch (destinoIngresado) {
		case "Bariloche":
		case "Ushuaia":
			alert("Hace FRÍO.");
			break;
		case "Cataratas":
		case "Mar del plata":
			alert("Hace CALOR.");
			break;
		default:
			break;
	}
}//FIN DE LA FUNCIÓN