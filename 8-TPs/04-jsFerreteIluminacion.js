/*4.	Para el departamento de iluminación:
Tomando en cuenta que todas las lámparas están en oferta al mismo precio de $35 pesos final.
A.	Si compra 6 o más  lamparitas bajo consumo tiene un descuento del 50%. 
B.	Si compra 5  lamparitas bajo consumo marca "ArgentinaLuz" se hace un descuento del 40 % y si es de otra marca el descuento es del 30%.
C.	Si compra 4  lamparitas bajo consumo marca "ArgentinaLuz" o “FelipeLamparas” se hace un descuento del 25 % y si es de otra marca el descuento es del 20%.
D.	Si compra 3  lamparitas bajo consumo marca "ArgentinaLuz"  el descuento es del 15%, si es  “FelipeLamparas” se hace un descuento del 10 % y si es de otra marca un 5%.
E.	Si el importe final con descuento suma más de $120  se debe sumar un 10% de ingresos brutos en informar del impuesto con el siguiente mensaje:
 ”Usted pago X de IIBB.”, siendo X el impuesto que se pagó. 

 */
function CalcularPrecio () 
{
    //EJERCICIO PLANTEADO DE LA NUEVA MANERA: DESDE LA PERSPECTIVA DE LAS MARCAS

    var cantidadLamparas;
    var candtidadLamparasParseadas;
    var marca;
    var descuento;
    var ingresosBrutos;
    var totalAPagar;
    var precioLampara;
    var totalPrecioLamparas;
    var porcentajeDescuento;

    //Ingreso los datos
    cantidadLamparas = document.getElementById("txtIdCantidad").value;
    marca = document.getElementById("Marca").value;
    precioLampara = 35;
    porcentajeDescuento = 0;

    //Parseo
    candtidadLamparasParseadas = parseInt(cantidadLamparas);

    //precio de lamparas compradas sin descuentos
    totalPrecioLamparas = precioLampara * candtidadLamparasParseadas;

    //Comienza los if
    if(marca == "ArgentinaLuz"){
        if(candtidadLamparasParseadas >= 6)
        {
            porcentajeDescuento = 0.5; //50% descuento
        }
        else
        {
            if(candtidadLamparasParseadas == 5)
            {
                porcentajeDescuento = 0.4; // 40% de descuento
            }
            else
            {
                if(candtidadLamparasParseadas == 4)
                {
                    porcentajeDescuento = 0.25; // 25% de descuento
                }
                else
                {
                    if(candtidadLamparasParseadas == 3)
                    {
                        porcentajeDescuento = 0.15; // 15% de descuento
                    }
                }
            }
        }
    }
    else
    {
        if(marca == "FelipeLamparas")
        {
            if(candtidadLamparasParseadas >= 5)
            {
                porcentajeDescuento = 0.3; // 30% de descuento
            }
            else
            {
                if(candtidadLamparasParseadas == 4)
                {
                    porcentajeDescuento = 0.25; // 25% de descuento
                }
                else
                {
                    if(candtidadLamparasParseadas == 3)
                    {
                        porcentajeDescuento = 0.1; // 10% de descuento
                    }
                }
            }
        }
        else
        {
            if(candtidadLamparasParseadas >= 5)
            {
                porcentajeDescuento = 0.3; // 30% de descuento
            }
            else
            {
                if(candtidadLamparasParseadas == 4)
                {
                    porcentajeDescuento = 0.2; // 20% de descuento
                }
                else
                {
                    if(candtidadLamparasParseadas == 3)
                    {
                        porcentajeDescuento = 0.05; // 5% de descuento
                    }
                }
            }
        }
    }

    descuento = totalPrecioLamparas * porcentajeDescuento;
    totalAPagar= totalPrecioLamparas - descuento;

    if(totalAPagar > 120){
        ingresosBrutos = totalAPagar * 0.1; //10% de IIBB
        totalAPagar = totalAPagar + ingresosBrutos;
        alert("IIBB Usted pagó: "+ ingresosBrutos); //muestro un mensaje cuanto pagó de IIBB
    }


    document.getElementById("txtIdprecioDescuento").value = totalAPagar; // si es mayor a 120 va a mostrar el precio del total de lamparas más el importe de IIBB



    /* EJERCICIO COMO INDICA LA PÁGINA
    
    //Declaro Variables
    var cantidadLamparas;
    var candtidadLamparasParseadas;
    var marca;
    var descuento;
    var ingresosBrutos;
    var totalAPagar;
    var precioLampara;
    var totalPrecioLamparas;
    var porcentajeDescuento;

    //Ingreso los datos
    cantidadLamparas = document.getElementById("txtIdCantidad").value;
    marca = document.getElementById("Marca").value;
    precioLampara = 35;
    descuento = 0;

    //Parseo
    candtidadLamparasParseadas = parseInt(cantidadLamparas);

    //precio de lamparas compradas sin descuentos
    totalPrecioLamparas = precioLampara * candtidadLamparasParseadas;


    //Funcion A
    if(candtidadLamparasParseadas >= 6)
    {
        if(marca =="ArgentinaLuz")
        {
            porcentajeDescuento = 0.5; //50% descuento
        }    
    }
    else
    {
        if(candtidadLamparasParseadas == 5)
        {
            if(marca == "ArgentinaLuz")
            {
                porcentajeDescuento = 0.4; // 40% de descuento      
            }
            else
            {
                porcentajeDescuento = 0.3; // 30% de descuento
            }
        }
        else
        {
            if( candtidadLamparasParseadas == 4)
            {
                if(marca == "ArgentinaLuz" || marca == "FelipeLamparas")
                {
                    porcentajeDescuento = 0.25; // 25% de descuento
                }
                else
                {
                    porcentajeDescuento = 0.2; //20% de descuento
                }
            }
            else
            {
                if( candtidadLamparasParseadas == 3)
                {
                    if(marca == "ArgentinaLuz")
                    {
                        porcentajeDescuento = 0.15; // 15% de descuento
                    }
                    else
                    {
                        if(marca == "FelipeLamparas")
                        {
                            porcentajeDescuento = 0.1; //10% de descuento
                        }
                        else
                        {
                            porcentajeDescuento = 0.05; // 5% de descuento
                        }
                    }
                }
            }
        }
    }

    descuento = totalPrecioLamparas * porcentajeDescuento;
    totalAPagar= totalPrecioLamparas - descuento;

    if(totalAPagar > 120){
        ingresosBrutos = totalAPagar * 0.1; //10% de IIBB
        totalAPagar = totalAPagar + ingresosBrutos;
        alert("IIBB Usted pagó: "+ ingresosBrutos); //muestro un mensaje cuanto pagó de IIBB
    }


    document.getElementById("txtIdprecioDescuento").value = totalAPagar; // si es mayor a 120 va a mostrar el precio del total de lamparas más el importe de IIBB
    */
}
