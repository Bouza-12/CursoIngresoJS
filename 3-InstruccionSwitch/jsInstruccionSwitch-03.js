function mostrar()
{
	//tomo el mes
	var mesDelAño;
	
	mesDelAño =document.getElementById("txtIdMes").value;
	
	switch(mesDelAño)
	{
		case "Febrero":
			alert("Este mes no tiene más de 29 días");
			break;
		default:
			alert("Este mes tiene 30 días o más");
			break;
	}
}//FIN DE LA FUNCIÓN