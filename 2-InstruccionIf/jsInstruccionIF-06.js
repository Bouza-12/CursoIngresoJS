function mostrar()
{ 
	//tomo la edad  
	var edad;
	var edadParseada;

	edad = document.getElementById("txtIdEdad").value;
	edadParseada = parseInt(edad);

	if(edadParseada >= 18){
		alert("La persona es mayor de edad.");
	}
	else {
		if(edadParseada >=13){
			alert("La persona es adolecente.");
		}
		else{
			alert("la persona es un niño o niña." );
		}
	}



}//FIN DE LA FUNCIÓN