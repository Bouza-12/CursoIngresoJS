/*
1. Se ingresan 5 importes, marca del producto y pías de origen (China, Uruguay o Paraguay).
Calcular y mostrar:
a. Mínimo importe con su pías
b. Máximo importe con su marca
c. Promedio importe
d. Cantidad de productos de China
e. Sobre el máximo encontrado aplicar un descuento del 10% a dicho importe.
.*/
function mostrar()
{
	//Declaro Variables:
	var contadorIngresos;
	var importeIngresado;
	var marcaIngresada;
	var paisOrigenIngresado;
	var minimoImporte;
	var maximoImporte;
	var minimoPais;
	var maximoMarca;
	var contadorChina;
	var acumuladorImportes;
	var promedioImportes;
	var porcentajeDescuento;
	var importeMaximoConDescuento;
	var flag;
	var precioADescontar;

	flag = true;
	contadorChina = 0;
	contadorIngresos = 0;
	acumuladorImportes = 0;

	while(contadorIngresos < 5)
	{
		//---Ingreso Datos
		importeIngresado = prompt("Ingrese el importe del Producto: ");
		importeIngresado = parseInt(importeIngresado);
		//Verificacion de si ingresó un número
		while( isNaN(importeIngresado) == true)
		{
			console.log(importeIngresado);
			importeIngresado = prompt("Error!!! no ingresó un número, por favor ingrese el importe del Producto: ");
			importeIngresado = parseInt(importeIngresado);
		}
		console.log(importeIngresado);

		marcaIngresada = prompt("Ingrese la marca del producto: ");
		console.log(marcaIngresada);
		//no lleva comprobación

		paisOrigenIngresado= prompt("Ingrese el país de orrigen del producto (China, Uruguay o Paraguay):");
		while(paisOrigenIngresado != "China" && paisOrigenIngresado != "Uruguay" && paisOrigenIngresado != "Paraguay")
		{
			paisOrigenIngresado = prompt("Error!!! Por favor ingrese un país válido (China, Uruguay o Paraguay): ");
			console.log(paisOrigenIngresado);
		}
		console.log(paisOrigenIngresado);
		//termino el ingreso de datos
		//Maximos y Mínimos
		if( flag == true)
		{
			minimoImporte = importeIngresado;
			minimoPais = paisOrigenIngresado;
			maximoImporte = importeIngresado;
			maximoMarca = marcaIngresada;
			flag = false;
		}
		else
		{
			if( importeIngresado < minimoImporte)
			{
				minimoImporte = importeIngresado;
				minimoPais = paisOrigenIngresado;
			}
			if ( importeIngresado > maximoImporte)
			{
				maximoImporte = importeIngresado;
				maximoMarca = marcaIngresada;
			}
		}

		acumuladorImportes = acumuladorImportes + importeIngresado;

		switch( paisOrigenIngresado)
		{
			case "China":
				contadorChina++;
				break;
			default:
				break;
		}
		contadorIngresos++;
	}//Fin del while
	console.log(contadorIngresos);
	//calculo promedio del total de importes
	promedioImportes = acumuladorImportes / contadorIngresos;
	console.log(promedioImportes);
	//calculo del descuento al mayor
	porcentajeDescuento = 0.9; //10% de descuento
	importeMaximoConDescuento = maximoImporte * porcentajeDescuento;


	document.write("Minimo importe = " + minimoImporte + " y el país de origen es: " + minimoPais + "<br>Maximo importe = " + maximoImporte + ". Marca de ese producto: " + maximoMarca + ".<br> El promedio de los importes son: " + promedioImportes + ". <br>La cantidad de productos de origen 'China' es: "+ contadorChina + "<br> El precio final del más caro incluyendo el descuento del 10% es: " + importeMaximoConDescuento );
		
}//FIN DE LA FUNCIÓN