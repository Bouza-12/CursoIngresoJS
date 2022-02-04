/*
Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt),realizar la operación correcta y 
mostrar el resulto por medio de "ALERT"
ej.: "la Resta es 750"*/ 
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

	alert("El resultado de la suma es: "+resultado);	
}

function restar()
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

	resultado = numeroUnoParseado - numeroDosParseado;

	alert("El resultado de la resta: "+resultado);
}

function multiplicar()
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

	resultado = numeroUnoParseado * numeroDosParseado;

	alert("El resultado de la multiplicación es: "+resultado);
}

function dividir()
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

	resultado = numeroUnoParseado / numeroDosParseado;

	alert("El resultado de la división es: "+resultado);
}

