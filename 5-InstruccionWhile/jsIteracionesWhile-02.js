/*
2. La empresa SILKEY necesita liquidar las comisiones de sus 3 vendedores para la zona sur de GBA.
Se cargan las planillas de ventas que poseen los siguientes datos (No sabemos cuantas planillas hay):
*Nombre de vendedor (Juan, Pedro o María)
*Importe de la venta (numero positivo NO mayor que 10000)
Al terminar de cargar las planillas se debe calcular el total de la comisión por vendedor:
Si el vendedor logro recaudar en sus ventas un importe mayor o igual a $500000 obtendrá una
comisión del 10% sobre ese total.
De no alcanzar esta cifra, su comisión será del 5%.
Mostrar:
a. Importe total de ventas, cantidad de ventas y comisión. (Por cada vendedor)
b. El nombre del vendedor que mas dinero recaudo en comisiones
*/
function mostrar()
{
	var bandera;
	var vendedorIngresado;
	var importeVenta;    //no negativo, no mayor a 10000
	var acumuladorPedro;
	var acumuladorMaria;
	var acumuladorJuan;
	var vendedorMaximoRecaudado;
	var continuarIngresando;
	var objetivoComision;
	var comisionMinima;
	var comisionMaximia;
	var comisionJuan;
	var comisionPedro;
	var comisionMaria;
	var contadorJuan;
	var contadorPedro;
	var contadorMaria;

	bandera= true; 
	acumuladorPedro = 0;
	acumuladorMaria = 0;
	acumuladorJuan = 0;
	objetivoComision = 500000;
	comisionMinima = 0.05;
	comisionMaximia = 0.1;
	comisionJuan = 0;
	contadorPedro = 0;
	contadorMaria = 0;
	contadorJuan = 0;
	continuarIngresando = true;

	

	while(bandera == true)
	{
		//Ingreso de datos
		vendedorIngresado = prompt("Ingrese el nombre del Vendedor (Juan/ Pedro/ María): ");
		while(vendedorIngresado != "Juan" && vendedorIngresado != "María" && vendedorIngresado != "Pedro")
		{
			vendedorIngresado = prompt("Error!!! Ingrese el nombre del Vendedor (Juan/ Pedro/ María): ");
		}
		console.log(vendedorIngresado);
		importeVenta = prompt("Ingrese el valor de la venta (entre 0 y 10000): ");
		importeVenta = parseInt(importeVenta);
		while(importeVenta<1 || importeVenta >10000)
		{
			importeVenta = prompt("ERROR!!! Ingrese el valor de la venta (entre 0 y 10000): ");
			importeVenta = parseInt(importeVenta);
		}
		console.log(importeVenta);

		switch(vendedorIngresado)
		{
			case "Juan":
				acumuladorJuan = acumuladorJuan + importeVenta;
				contadorJuan++;
				break;
			case "María":
				acumuladorMaria = acumuladorMaria + importeVenta;
				contadorMaria++;
				break;
			case "Pedro":
				acumuladorPedro = acumuladorPedro + importeVenta;
				contadorPedro++;
				break;
		}


		bandera = confirm("Desea seguir vargando planillas?");
		
	}//salgo del while

	console.log(acumuladorJuan);
	console.log(acumuladorPedro);
	console.log(acumuladorMaria);

	if ( acumuladorJuan >= objetivoComision)
	{
		comisionJuan = acumuladorJuan * comisionMaximia;
	}
	else
	{
		comisionJuan = acumuladorJuan * comisionMinima;
	}
	if ( acumuladorPedro >= objetivoComision)
	{
		comisionPedro = acumuladorPedro * comisionMaximia;
	}
	else
	{
		comisionPedro = acumuladorPedro * comisionMinima;
	}
	if ( acumuladorMaria >= objetivoComision)
	{
		comisionMaria = acumuladorMaria * comisionMaximia;
	}
	else
	{
		comisionMaria = acumuladorMaria * comisionMinima;
	}
	console.log(comisionJuan);
	console.log(comisionPedro);
	console.log(comisionMaria);

	if (comisionJuan > comisionPedro)
	{
		if (comisionJuan > comisionMaria)
		{
			vendedorMaximoRecaudado = "Juan";
		}
		else
		{
			vendedorMaximoRecaudado = "María";
		}
	}
	else
	{
		if (comisionPedro > comisionMaria)
		{
			vendedorMaximoRecaudado = "Pedro";
		}
		else
		{
			vendedorMaximoRecaudado = "María";
		}
	}

	document.write("Vendedor: Pedro - Importe total de Ventas: " + acumuladorPedro + " - Cantidad de Ventas: " + contadorPedro + " - Comisión: " + comisionPedro + "<br>" );
	document.write("Vendedor: Juan - Importe total de Ventas: " + acumuladorJuan + " - Cantidad de Ventas: " + contadorJuan + " - Comisión: " + comisionJuan + "<br>" );
	document.write("Vendedor: María - Importe total de Ventas: " + acumuladorMaria + " - Cantidad de Ventas: " + contadorMaria + " - Comisión: " + comisionMaria + "<br>" );
	document.write("El vendedor que más recaudó en comisiones es: " + vendedorMaximoRecaudado + "<br>" );
}//FIN DE LA FUNCIÓN