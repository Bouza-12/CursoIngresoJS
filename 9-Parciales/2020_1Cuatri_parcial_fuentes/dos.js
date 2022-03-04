/*
Realizar el algoritmo que permita ingresar los datos de una compra productos de la construccion, hasta que el cliente quiera:
Tipo validad("arena";"cal";"cemento")
Cantidad de bolsas,
Precio por bolsa (más de cero ),

Si compro más de 10 bolsas en total tenes 15% de descuento sobre el total a pagar.
Si compro más de 30 bolsas en total tenes 25% de descuento sobre el total a pagar.
a) El importe total a pagar , bruto sin descuento y...
b) el importe total a pagar con descuento(solo si corresponde)
d) Informar el tipo con mas cantidad de bolsas.
f) El tipo mas caro*/
function mostrar()
{
  var bandera;
  var producotIngresado;
  var cantidadBolsas;
  var precioBolsa;

  var descuentoDiezBolsas;
  var descuentoTreintaBolsas;
  var descuento;

  var totalAPagarBruto;
  var totalAPagarConDescuento;

  var acumuladorBolsasArena;
  var acumuladorBolsasCal;
  var acumuladorBolsasCemento;
  var acumuladorTotalBolsas;

  var banderaPrecio;
  var mayorPrecio;
  var mayorTipo;

  banderaPrecio= true;
  bandera = true;
  totalAPagarBruto =0;

  acumuladorBolsasArena=0;
  acumuladorBolsasCal=0;
  acumuladorBolsasCemento=0;
  acumuladorTotalBolsas=0;

  descuentoDiezBolsas=0.15;
  descuentoTreintaBolsas=0.25;

  while(bandera==true)
  {
    //Ingreso de datos
    producotIngresado = prompt("Ingrese el producto (arena / cal / cemento)");
    producotIngresado = producotIngresado.toLowerCase();
    while(producotIngresado != "arena" && producotIngresado != "cal" && producotIngresado!= "cemento")
    {
      producotIngresado = prompt("ERROR!!! Ingrese el producto (arena / cal / cemento)");
      producotIngresado = producotIngresado.toLowerCase();  
    }
    console.log(producotIngresado);

    cantidadBolsas= prompt("Ingrese la cantidad de bolsas: ");
    cantidadBolsas = parseInt(cantidadBolsas);
    while(isNaN(cantidadBolsas) || cantidadBolsas < 1)
    {
      cantidadBolsas= prompt("ERROR!!! Ingrese la cantidad de bolsas: ");
      cantidadBolsas = parseInt(cantidadBolsas);
    }
    console.log(cantidadBolsas);

    precioBolsa = prompt("Ingrese el precio de la bosa por unidad: ");
    precioBolsa = parseInt(precioBolsa);
    while(isNaN(precioBolsa) || precioBolsa < 1)
    {
      precioBolsa = prompt("ERROR!!! Ingrese el precio de la bosa por unidad: ");
      precioBolsa = parseInt(precioBolsa);
    }
    console.log(precioBolsa);

    switch(producotIngresado)
    {
      case "arena":
        acumuladorBolsasArena+= cantidadBolsas;
        break;
      case "cal":
        acumuladorBolsasCal+= cantidadBolsas;
        break;
      case "cemento":
        acumuladorBolsasCemento += cantidadBolsas;
        break;
      default:
        break;
    }

    totalAPagarBruto += (precioBolsa*cantidadBolsas);

    if(banderaPrecio==true || mayorPrecio < precioBolsa){
      mayorPrecio=precioBolsa;
      mayorTipo = producotIngresado;
      banderaPrecio = false;
    }




    bandera = confirm("Desea seguir cargando productos? ");
  }


  var mensaje;
  mensaje = "A)\n El total Bruto a pagar es " + totalAPagarBruto +".\n";


  acumuladorTotalBolsas = acumuladorBolsasArena + acumuladorBolsasCal + acumuladorBolsasCemento;
  if(acumuladorTotalBolsas>30)
  {
    descuento = totalAPagarBruto * descuentoTreintaBolsas;
    totalAPagarConDescuento = totalAPagarBruto - descuento;
    mensaje += "B)\n El total a pagar con el descuento aplicado es de: " + totalAPagarConDescuento +"\n";
  }
  else
  {
    if(acumuladorTotalBolsas>10){
      descuento = totalAPagarBruto * descuentoDiezBolsas;
      totalAPagarConDescuento = totalAPagarBruto - descuento;
      mensaje += "B)\n El total a pagar con el descuento aplicado es de: " + totalAPagarConDescuento +"\n";
    }
    else
    {
    totalAPagarConDescuento = totalAPagarBruto;
    mensaje += "B)\n El total a pagar no tiene descuento.\n";
    }
  }


  if(acumuladorBolsasArena>acumuladorBolsasCal)
  {
    if( acumuladorBolsasArena > acumuladorBolsasCemento)
    {
      mensaje += "D) \n La myora cantidad de bolsas que se lleva son de ARENA.\n";
    }
    else
    {
      mensaje += "D) \n La myora cantidad de bolsas que se lleva son de CEMENTO.\n";
    }
  }
  else
  {
    if(acumuladorBolsasCal> acumuladorBolsasCemento)
    {
      mensaje += "D) \n La myora cantidad de bolsas que se lleva son de CAL.\n";
    }
    else
    {
      mensaje += "D) \n La myora cantidad de bolsas que se lleva son de ARENA.\n";
    }
  }

  mensaje += "D) \n El tipo más caro de bolsa es: " + mayorTipo +".";
 
  alert(mensaje);



}
