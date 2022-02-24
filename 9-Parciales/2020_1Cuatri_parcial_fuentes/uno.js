
function mostrar()
{
	//Declaro variables
	var productoIngresado;
	var precioIngresado;
	var unidadesIngresadas;
	var marcaIngresada;
	var fabricanteIngresado;
	var precioMasBaratoAlcohol;
	var unidadesDeAlcohol;
	var fabricanteAlcoholBarato;
	var productoMayorCantidad;
	var promedio;
	var contador;
	var flagProducto;
	var precioParseado;
	var unidadesParseadas;
	var contadorUnidadesAlcohol
	var contadorUnidadesJabon


	unidadesDeAlcohol=0;
	unidadesJabonTotales=0;
	contador=0;
	flagProducto ="correcto";
	unidadesDeAlcohol=0;
	precioMasBaratoAlcohol=0;

	while(contador<5)
	{
		//ingreso de datos
		productoIngresado =prompt("Ingrese el tipo de producto (barbijo/jabon/alcohol):");
		while(flagProducto == "correcto")
		{
			while(productoIngresado!="barbijo" && productoIngresado!="jabon" && productoIngresado!="alcohol")
			{
				productoIngresado=prompt("Ingreso un producto erroneo, ingresar barbijo, jabon o alcohol: ");
			}
		}

		precioIngresado=prompt("Ingrese el precio del producto (entre 100 y 300): ");
		precioParseado=parseInt(precioIngresado);
		while(precioParseado<100 || precioParseado>300)
		{
			precioIngresado=prompt("Error!!! Ingrese el precio del producto (entre 100 y 300): ");
			precioParseado=parseInt(precioIngresado);
		}
		console.log(precioParseado);

		unidadesIngresadas = prompt("Ingrese las unidades del producto: ")
		unidadesParseadas= parseInt(unidadesIngresadas);
		while(unidadesParseadas<=0 || unidadesParseadas>1000)
		{
			unidadesIngresadas = prompt("Error!!! Ingrese las unidades del producto (entre 1 y 999): ");
			unidadesParseadas= parseInt(unidadesIngresadas);
		}
		console.log(unidadesParseadas);
		
		marcaIngresada= prompt("Ingrese la marca del producto: ");
		fabricanteIngresado= prompt("Ingrese el fabricante del producto: ");

		//calculos

		/* REEMPLAZAR POR SWITCH
		if(productoIngresado == "alcohol")
		{
			if(precioMasBaratoAlcohol==0) // cambiar esta condicion por un flag
			{
				unidadesDeAlcohol= unidadesParseadas;
				fabricanteAlcoholBarato= fabricanteIngresado;
				precioMasBaratoAlcohol = precioParseado;
			}
			else
			{
				if(precioParseado<precioMasBaratoAlcohol)
				{
					unidadesDeAlcohol = unidadesParseadas;
					fabricanteAlcoholBarato = fabricanteIngresado;
					precioMasBaratoAlcohol = precioParseado;
				}
			}
			contadorUnidadesAlcohol = contadorUnidadesAlcohol + unidadesParseadas;
		}
		else
		{
			if(productoIngresado =="jabon")
			{
				contadorUnidadesJabon = contadorUnidadesJabon + unidadesParseadas;
			}
			else
			{
				contadorUnidadesBarbijos = contadorUnidadesBarbijos + unidadesParseadas;
			}
		}
		*/

		
		contador++;
		console.log(contador);
		flagProducto ="correcto";
	}

	console.log("Salí del while");

	if(contadorUnidadesAlcohol>contadorUnidadesJabon)
	{
		if(contadorUnidadesAlcohol>contadorUnidadesBarbijos)
		{
			productoMayorCantidad = "ALCOHOL";
		}
		else
		{
			productoMayorCantidad = "BARBIJOS";
		}
	}
	else
	{
		if(contadorUnidadesJabon>contadorUnidadesBarbijos)
		{
			productoMayorCantidad ="JABON";
		}
		else
		{
			productoMayorCantidad = "BARBIJOS";
		}
	}

	if(unidadesDeAlcohol ==0)
	{
		console.log("A) No se vendió alcohol");
	}
	else
	{
		console.log("A) Del alcohol más barato se compraron "+unidadesDeAlcohol+" unidades, su precio fue de $"+precioMasBaratoAlcohol+ " y lo fabrica: "+fabricanteAlcoholBarato+".");
	}

	console.log("B) El tipo de producto con mayor unidades vendidas es "+productoMayorCantidad+". y el promedio por compra fue: "+promedio);

	console.log("C) La cantidad total de unidades de jabón son: "+contadorUnidadesJabon);

}
