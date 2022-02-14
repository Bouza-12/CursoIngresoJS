function mostrar()
{
	//tomo la edad  
	var edad;

	edad = document.getElementById("txtIdEdad").value;
	edad = parseInt(edad);

	if(edad >= 13){
		if (edad <= 17){
			alert("La persona es adolecente.");
		}
	}


}//FIN DE LA FUNCIÓN