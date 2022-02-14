function mostrar()
{
	//Genero el número RANDOM entre 1 y 10 
	//Lo busque en W3school para la fórmula de los numeros random enteros 
	var numero;

	numero = Math.floor(Math.random() * 11);

	if (numero >= 9){
		alert("La nota fue " + numero + ". EXCELLENTE!");
	}
	else{
		if(numero>=4){
			alert("APROBÓ con un: "+ numero);
		}
		else{
			alert("Vamos, la próxima se puede.")
		}
	}


}//FIN DE LA FUNCIÓN