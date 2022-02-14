function mostrar()
{
	//tomo la edad  
	var edad;

	edad = document.getElementById("txtIdEdad").value;
	edad = parseInt(edad);

	if(edad < 13){
		alert("La persona no es adolecente.");
		
	}
	if (edad > 17){
		alert("La persona no es adolecente.");
	}

}//FIN DE LA FUNCIÓN