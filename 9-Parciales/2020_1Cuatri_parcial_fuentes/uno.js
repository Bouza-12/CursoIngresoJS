/*
Debemos realizar la carga de 5(cinco) productos de prevención de contagio,
de cada una debo obtener los siguientes datos:
el tipo (validar "barbijo" , "jabón" o "alcohol") ,
el precio (validar entre 100 y 300),
la cantidad de unidades (no puede ser 0 o negativo y no debe superar las 1000 unidades),
la Marca y el fabricante.
Se debe Informar al usuario lo siguiente:
a) Del más barato de los alcohol, la cantidad de unidades y el fabricante
b) Del tipo con mas unidades, el promedio por compra
c) Cuántas unidades de jabones hay en total		*/
function mostrar()
{
	//Declaro variables
	var productoIngresado;
	var precioIngresado;
	var unidadesIngresadas;
	var marcaIngresada;
	var fabricanteIngresado;
	var contador;

	var unidadesAlcohol;
	var unidadesJabon;
	var unidadesBarbijo;

	var alcoholPrecioBarato;
	var alcoholMasBaratoUnidades;
	var alcoholMasBaratoFabricante;
	var banderaAlcohol;

	var contadorAlcohol;
	var contadorBarbijo;
	var contadorJabon;
	var promedio;
	var maxVendido;

	unidadesAlcohol=0;
	unidadesBarbijo=0;
	unidadesJabon=0;
	contador =0;
	banderaAlcohol=true;

	contadorAlcohol=0;
	contadorBarbijo=0;
	contadorJabon=0;
	

	while(contador <5){
		//Ingreso los datos
		productoIngresado=prompt("Ingrese el producto (jabon / alcohol / barbijo): ");
		productoIngresado = productoIngresado.toLowerCase();
		while(productoIngresado!= "jabon" && productoIngresado != "alcohol" && productoIngresado != "barbijo")
		{
			productoIngresado=prompt("Ingrese el producto (jabon / alcohol / barbijo): ");
			productoIngresado = productoIngresado.toLowerCase();
		}
		console.log(productoIngresado);

		precioIngresado = prompt("Ingrese el preco del producto (entre 100 y 300): ");
		precioIngresado = parseInt(precioIngresado);
		while(isNaN(precioIngresado) || precioIngresado < 100 || precioIngresado > 300)
		{
			precioIngresado = prompt("Ingrese el preco del producto (entre 100 y 300): ");
			precioIngresado = parseInt(precioIngresado);
		}
		console.log(precioIngresado);

		unidadesIngresadas = prompt("Ingrese la cantidad de unidades: ");
		unidadesIngresadas = parseInt(unidadesIngresadas);
		while(isNaN(unidadesIngresadas) || unidadesIngresadas < 0 || unidadesIngresadas > 1000)
		{
			unidadesIngresadas = prompt("Ingrese la cantidad de unidades: ");
			unidadesIngresadas = parseInt(unidadesIngresadas);
		}
		console.log(unidadesIngresadas);

		marcaIngresada = prompt("Ingrese la marca del producto: ");
		while(marcaIngresada == "")
		{
			marcaIngresada = prompt("Debe ingresar una marca, no puede ser vacío: ");
		}
		console.log(marcaIngresada);

		fabricanteIngresado = prompt("Ingrese la marca del producto: ");
		while(fabricanteIngresado == "")
		{
			fabricanteIngresado = prompt("Debe ingresar un fabricante, no puede ser vacío: ");
		}
		console.log(fabricanteIngresado);

		switch (productoIngresado) {
			case "jabon":
				unidadesJabon+= unidadesIngresadas;
				contadorJabon++;
				break;
			case "alcohol":
				if(banderaAlcohol=true || precioIngresado < alcoholPrecioBarato)
				{
					alcoholPrecioBarato = precioIngresado
					alcoholMasBaratoUnidades = unidadesIngresadas;
					alcoholMasBaratoFabricante = fabricanteIngresado;
					banderaAlcohol = false;
				}
				unidadesAlcohol += unidadesIngresadas;
				contadorAlcohol++;
				break;
			case "barbijo":
				unidadesBarbijo += unidadesIngresadas;
				contadorBarbijo++;
				break;		
			default:
				break;
		}



		contador++;
	} // salgo del while

	//calculo mayor unidades y promedio

	if(unidadesAlcohol>unidadesBarbijo)
	{
		if(unidadesAlcohol>unidadesJabon)
			{
				promedio = unidadesAlcohol / contadorAlcohol;
				maxVendido = "Alcohol"
				
			}
		else
		{
			promedio = unidadesJabon / contadorJabon;
			maxVendido = "jabon"
		}
	}
	else
	{
		if(unidadesBarbijo>unidadesJabon)
		{
			maxVendido= "barbijo"
			promedio = unidadesBarbijo / contadorBarbijo;
		}
		else
		{
			promedio = unidadesJabon / contadorJabon;
			maxVendido = "jabon"
		}
	}
	promedio.toFixed(2);


	//Informo los resultados
	document.write("A) El fabricante de alcohol más barato es: " + alcoholMasBaratoFabricante + " y se vendieron " + alcoholMasBaratoUnidades +" unidades <br>");
	document.write("B) El tipo con más unidades vendidas es " + maxVendido + " y su promedio de unidades por venta es: " +promedio + "<br>");
	document.write("C) Se vendieron un total de " + unidadesJabon + " de jabon en total. <br>");
}//Fin del documento
