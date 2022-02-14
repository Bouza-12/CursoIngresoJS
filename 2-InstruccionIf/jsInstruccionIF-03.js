function mostrar()
{
	//tomo la edad  
	var edad;
	var edadParseada;

	edad = document.getElementById("txtIdEdad").value;
	edadParseada = parseInt(edad);

	if (edadParseada >= 18){
		alert("La persona es mayor de edad.");
	}
	if(edadParseada <18){
		alert("La persona es menor de edad.");
	}

}//FIN DE LA FUNCIÓN