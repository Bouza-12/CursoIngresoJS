function mostrar()
{
    //Declaro varaiables
    var pesoPersonaUno;
    var pesoPersonaDos;
    var pesoPersonaDosParseado;
    var pesoPersonaUnoParseado;
    var nombrePersonaUno;
    var nombrePersonaDos;
    var sumaPesos;
    var sumaPesosParseada;
    var promedio;

    //Ingreso de datos
    nombrePersonaUno = prompt("Ingrese el nombre de la primera persona: ");
    pesoPersonaUno = prompt("Ahora ingrese el peso de la persona uno: ");
    nombrePersonaDos = prompt("Ingrese el nombre de la segunda persona: ");
    pesoPersonaDos = prompt("Ahora ingrese el peso de la persona dos: ");

    //parseo los pesos de las personas
    pesoPersonaUnoParseado = parseFloat(pesoPersonaUno);
    pesoPersonaDosParseado = parseFloat(pesoPersonaDos);

    //calculos
    sumaPesos = pesoPersonaUnoParseado + pesoPersonaDosParseado;
    sumaPesosParseada = parseFloat(sumaPesos);

    promedio = sumaPesosParseada/2;

    //Muestro el mensaje
    alert("Ustedes se llaman " + nombrePersonaUno + " y " +nombrePersonaDos + ", pesan " + pesoPersonaUnoParseado + " y " + pesoPersonaDosParseado + " kilos, que sumados son " + sumaPesos + " kilos y el promedio de peso es " + promedio);
  
}
