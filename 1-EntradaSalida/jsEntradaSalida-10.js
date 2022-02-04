/*
Debemos lograr tomar el importe por ID.
Transformarlo a entero (parseInt), luego
mostrar el importe con un Descuento del 25 %
en el cuadro de texto "RESULTADO"*/
function mostrarAumento()
{
	var importe;
	var importeParseado;
	var descuento;
	var importeFinal;

	importe = txtIdImporte.value;

	importeParseado = parseInt(importe);

	descuento =importeParseado * 0.25;

	importeFinal = importeParseado - descuento;
	
	txtIdResultado.value = importeFinal;
}
