/*
Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt) y Sumarlos.
mostrar el resulto por medio de "ALERT"*/
function sumar()
{
	var numeroUno;
	var numeroDos;
	var resultado;
	var numeroUnoParseado;
	var numeroDosParseado;

	numeroUno = txtIdNumeroUno.value;
	numeroDos = txtIdNumeroDos.value;

	numeroUnoParseado = parseInt(numeroUno);
	numeroDosParseado = parseInt(numeroDos);

	resultado = numeroUnoParseado + numeroDosParseado;
	
	alert("El resultado es: "+resultado);
}

