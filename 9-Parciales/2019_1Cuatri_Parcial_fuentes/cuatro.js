function mostrar()
{
    //Declaro variables
    var numeroUno;
    var numeroDos;
    var resultado;
    var numeroUnoParseado;
    var numeroDosParseado;
    var mayorDiez;

    //asigno
    numeroUno = prompt("Ingrese el primer número: ");
    numeroDos = prompt("Ingrese el segundo número: ");
    mayorDiez = "";

    //Parseo
    numeroUnoParseado = parseFloat(numeroUno);
    numeroDosParseado = parseFloat(numeroDos);

    if(numeroUnoParseado == numeroDosParseado)
    {
        alert(numeroUno + numeroDos); //uso las variables string para mostrarlos concatenados
    }
    else
    {
        if(numeroUnoParseado>numeroDosParseado)
        {
            resultado = numeroUnoParseado - numeroDosParseado;
            if(resultado > 10)
            {
                mayorDiez =" y superó el 10.";
            }
            alert("La resta es: " + resultado + mayorDiez);
        }
        else
        {
            resultado = numeroUnoParseado + numeroDosParseado;
            alert("La suma es: "+ resultado);
        }
    }

}
