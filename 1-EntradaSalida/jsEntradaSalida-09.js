/*
Debemos lograr tomar el importe por ID ,
transformarlo a entero (parseInt), luego
mostrar el importe con un aumento del 10 %
en el cuadro de texto "RESULTADO".*/
function mostrarAumento()
{
	var sueldo;
	var sueldoParseado;
	var aumento;
	var resultado;

	sueldo = txtIdSueldo.value;

	sueldoParseado = parseInt(sueldo);

	aumento = sueldoParseado * 0.1;

	resultado = sueldoParseado + aumento;

	txtIdResultado.value = resultado;
}
