function mostrar()
{
	//tomo la edad  
	var edad;
	var edadParseada;
	var estadoCivil;

	edad = document.getElementById("txtIdEdad").value;
	estadoCivil = document.getElementById("estadoCivil").value;

	edadParseada =parseInt(edad);

	//menor distinto de Soltero
	if(edadParseada < 18){
		if(estadoCivil != "Soltero" ){
			alert("Es muy chiquito para NO ser soltero.");
		}
	}else  //evaluo si es soltero y mayor de edad
	{
		if (estadoCivil == "Soltero"){
			alert("Es mayor y es soltero.");
		}
	}

	
	
	


}//FIN DE LA FUNCIÓN