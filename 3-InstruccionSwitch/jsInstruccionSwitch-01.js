function mostrar()
{
	//tomo el mes
	var mesDelAño;
	
	mesDelAño =document.getElementById("txtIdMes").value;
	
	switch(mesDelAño)
	{
		case "Enero":
		{
			alert("Que comiences bien el año");
			break;
		}
		case "Marzo":
		{
			alert("a clases!!!");
			break;
		}
		case "Julio":
		{
			alert("se vienen las vacaciones!!!");
			break;
		}
		case "Diciembre":
		{
			alert("Felices fiestas!!!");
			break;
		}
		default:
		{
			alert("Elija otro mes");
			break;
		}
	}
}//FIN DE LA FUNCIÓN