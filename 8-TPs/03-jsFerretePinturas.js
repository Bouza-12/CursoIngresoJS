/*3.	Para el departamento de Pinturas:
A.	Al ingresar una temperatura en Fahrenheit debemos mostrar la temperatura en Centígrados con un mensaje concatenado (ej.: " 32 Fahrenheit son 0 centígrados").
B.	Al ingresar una temperatura en Centígrados debemos mostrar la temperatura en Fahrenheit (ej.: "0  centígrados son 32 Fahrenheit ").
*/
function FahrenheitCentigrados () 
{
	var temperaturaIngresada;
    var temperaturaIngresadaParseada;
    var temperaturaEnCentigrados;

    temperaturaIngresada = txtIdTemperatura.value;

    temperaturaIngresadaParseada = parseFloat(temperaturaIngresada);

    //calculo de la conversión de temperatura Farenheit a centígrados
    temperaturaEnCentigrados = (((temperaturaIngresadaParseada - 32) * 5) / 9);

    alert( temperaturaIngresadaParseada + " Farenheit son " + temperaturaEnCentigrados + " centígrados.");
}

function CentigradosFahrenheit () 
{
	var temperaturaIngresada;
    var temperaturaIngresadaParseada;
    var temperaturaEnFarenheit;

    temperaturaIngresada = txtIdTemperatura.value;

    temperaturaIngresadaParseada = parseFloat(temperaturaIngresada);

    //calculo de la conversión de temperatura centígrados a Farenheit
    temperaturaEnFarenheit = (((temperaturaIngresadaParseada * 9) / 5) + 32);

    alert(temperaturaIngresadaParseada + " centígrados son " + temperaturaEnFarenheit + " Farenheit.");

}
