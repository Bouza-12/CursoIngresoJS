function mostrar()
{
    //Declaro variables
    var precio;
    var precioParseado;
    var descuento;
    var descuentoParseado;
    var porcentajeDescuento;
    var precioDescontado;
    var precioFinal;

    //Ingreso los datos
    precio = prompt("Ingrese el precio del producto: ");
    descuento = prompt("Ingrese el numero de porcentaje de descuento: ");

    //Parseo
    precioParseado = parseFloat(precio);
    descuentoParseado = parseFloat(descuento);
    console.log(descuentoParseado);

    //Operaciones de descuento
    porcentajeDescuento = descuentoParseado/100;
    console.log(porcentajeDescuento)
    porcentajeDescuento = parseFloat(porcentajeDescuento);
    
    console.log(porcentajeDescuento);

    precioDescontado = precioParseado*porcentajeDescuento;
    precioDescontado = parseFloat(precioDescontado);

    console.log(precioDescontado);

    //calculo el precio final
    precioFinal = precioParseado - precioDescontado;

    //muestro en el id

    document.getElementById("elPrecioFinal").value = precioFinal
}   
