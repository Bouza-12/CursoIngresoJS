function mostrar()
{
	//tomo la edad  
	var edad;
	var edadParseada;
	var estadoCivil;

	edad = document.getElementById("txtIdEdad").value;
	estadoCivil = document.getElementById("estadoCivil").value;

	edadParseada =parseInt(edad);

	if(edadParseada < 18){
		if(estadoCivil != "Soltero" ){
			alert("Es muy chiquito para NO ser soltero.");
		}
	}
	


}//FIN DE LA FUNCIÓN