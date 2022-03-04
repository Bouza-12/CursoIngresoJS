/*
Debemos realizar la carga de una compra de 5(cinco) productos de prevención de contagio,
de cada una debo obtener los siguientes datos:
el tipo de producto (validar "barbijo" , "jabón" o "alcohol"), el precio (validar entre 100 y 300), la cantidad de unidades (no puede ser 0 o negativo y no debe superar las 1000 unidades), la Marca y el fabricante.
Se debe Informar al usuario lo siguiente:
a) Del más caro de los jabones, la cantidad de unidades y el fabricante
b) Del tipo de producto con más unidades en total de la compra, el promedio por compra
c) Cuántas unidades de Barbijos se compraron en total*/
function mostrar()
{
	//Declaro variables
	var producotIngresado;
	var precioIngresado;
	var unidadesIngresadas;
	var marcaIngresada;
	var fabricanteIngresado;
	var jabonMasCaro;
	var jabonUnidadesCaro;
	var jabonFabricanteCaro;
	var acumuladorJabones;
	var acumuladorBarbijos;
	var acumuladorAlcohol;
	var promedio;
	var contador;
	var banderaPrimerJabon;
	var contadorBarbijo;
	var contadorAlcohol;
	var contadorJabon;

	acumuladorAlcohol = 0;
	acumuladorBarbijos = 0;
	acumuladorJabones = 0;
	jabonUnidadesCaro = 0;
	contador = 0;
	banderaPrimerJabon = true;
	contadorAlcohol = 0;
	contadorBarbijo = 0;
	contadorJabon = 0;

	while(contador < 5)
	{
		//Ingreso de datos
		producotIngresado = prompt("Ingrese el tipo de producto (alcohol / jabon / barbijo");
		producotIngresado = producotIngresado.toLowerCase();
		while(producotIngresado != "alcohol" && producotIngresado != "barbijo" && producotIngresado != "jabon"){
			producotIngresado = prompt("ERROR!!! Ingrese el tipo de producto (alcohol / jabon / barbijo");
			producotIngresado = producotIngresado.toLowerCase();
		}
		console.log(producotIngresado);
		precioIngresado = prompt("Ingrese el precio del producto: ");
		precioIngresado = parseInt(precioIngresado);
		while(isNaN(precioIngresado) || precioIngresado < 100 || precioIngresado > 300)
		{
			precioIngresado = prompt("ERROR!!! Ingrese el precio del producto (entre 100 y 300): ");
			precioIngresado = parseInt(precioIngresado);
		}
		console.log(precioIngresado);
		unidadesIngresadas = prompt("Ingrese la cantidad de unidades vendidas del "+ producotIngresado);
		unidadesIngresadas = parseInt(unidadesIngresadas);
		while(isNaN(unidadesIngresadas) || unidadesIngresadas< 1 || unidadesIngresadas > 1000)
		{
			unidadesIngresadas = prompt("ERROR!!! Ingrese la cantidad de unidades vendidas del "+ producotIngresado + "(entre 1 y 1000)");
		unidadesIngresadas = parseInt(unidadesIngresadas);
		}
		console.log(unidadesIngresadas);
		marcaIngresada = prompt("Ingrese la marca del producto");
		marcaIngresada = marcaIngresada.toLowerCase();
		console.log(marcaIngresada);
		fabricanteIngresado = prompt("Ingrese el nombre del fabricante: ");
		console.log(fabricanteIngresado);

		//cominezo la lógica
		switch(producotIngresado)
		{
			case "alcohol":
				acumuladorAlcohol += unidadesIngresadas;
				contadorAlcohol++;
				break;
			case "barbijo":
				acumuladorBarbijos += unidadesIngresadas;
				contadorBarbijo++;
				break;
			case "jabon":
				acumuladorJabones += unidadesIngresadas;
				if(banderaPrimerJabon == true)
				{
					jabonMasCaro = precioIngresado;
					jabonFabricanteCaro = fabricanteIngresado;
					jabonUnidadesCaro = unidadesIngresadas;
					banderaPrimerJabon = false;
				}
				else
				{
					if( precioIngresado >jabonMasCaro)
					{
						jabonMasCaro = precioIngresado;
						jabonFabricanteCaro = fabricanteIngresado;
						jabonUnidadesCaro = unidadesIngresadas;
					}
				}
				contadorJabon++;
				break;
			default:
				break;
		}


		contador++;
	}//fin del while
	alert("Se vendieron "+  jabonUnidadesCaro + " unidades del jabón más caro y su fabricante es: "+ jabonFabricanteCaro);
	if(acumuladorAlcohol > acumuladorBarbijos)
	{
		if( acumuladorAlcohol> acumuladorJabones)
		{
			promedio = acumuladorAlcohol / contadorAlcohol;
			alert("El producto mas vendido es ALCOHOL y el promedio por venta es: " + promedio);
		}
		else
		{
			promedio = acumuladorJabones / contadorJabon;
			alert("El producto más vendido es JABON y el promedio por venta es: " + promedio);
		}
	}
	else{
		if(acumuladorBarbijos > acumuladorJabones)
		{
			promedio = acumuladorBarbijos / contadorBarbijo;
			alert("El producto más vendido es BARBIJO y su promedio por venta es: " + promedio);
		}
		else
		{
			promedio = acumuladorJabones / contadorJabon;
			alert("El producto más vendido es JABON y el promedio por venta es: " + promedio);
		}
	}
	alert("La cantidad total de barbijos vendidos son: " + acumuladorBarbijos);
}
