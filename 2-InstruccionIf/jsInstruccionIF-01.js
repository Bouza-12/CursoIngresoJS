function mostrar()
{
	var edad;

	//tomo la edad  
	
	edad = document.getElementById("txtIdEdad").value;
	edadParseada = parseInt(edad);

	numeroCondicion = 15

	//condicion
	if(edadParseada == numeroCondicion){
		alert("niña bonita");
	}

	

}//FIN DE LA FUNCIÓN