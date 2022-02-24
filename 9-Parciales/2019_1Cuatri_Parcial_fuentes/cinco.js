function mostrar()
{
    //Declaro variables
    var continenteIngresado;
    var cantidadDias;
    var cantidadDiasParseado;
    var descuento;
    var porcentaje;
    var precioSinDescuento;
    var precioFinal;
    var medioDePago;
    

    //asigno variables
    continenteIngresado = document.getElementById("Marca").value;
    cantidadDias = prompt("Ingrese la cantidad de días: ");

    cantidadDiasParseado = parseInt(cantidadDias);

    precioSinDescuento = cantidadDiasParseado * 100;
    medioDePago = prompt("Aceptamos todos los medios de pago. Por favor ingrese el que desea usar (efectivo");

    switch (continenteIngresado)
    {
        case "América":
            porcentaje = -0.5; //Descuento de 50%
            switch(medioDePago)
            {
                case "debito":
                    porcentaje = porcentaje - 0.1; //Descuento del 60% 
                    break;
                    default:
                        break;
            }
            break;
        case "África":
            porcentaje = -0.6; // Descuento de 60%
            switch(medioDePago)
            {
                case "efectivo":
                case "mercadoPago":
                    porcentaje = porcentaje - 0.15;
                    break;
                default:
                    break;
            }
            break;
        case "Europa":
            porcentaje = -0.2; //Descuento del 20%
            switch(medioDePago)
            {
                case "debito":
                    porcentaje = porcentaje - 0.15;
                    break;
                case "mercadoPago":
                    porcentaje = porcentaje -0.1;
                    break;
                default:
                    porcentaje = porcentaje -0.05;
            }
            break;
        default:
            porcentaje = 0.2;
            break;
    }

}
