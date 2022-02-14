/*1.	Para el departamento de facturación:
A.	Ingresar tres precios de productos y mostrar la suma de los mismos.
B.	Ingresar tres precios de productos y mostrar el promedio de los mismos.
C.	ingresar tres precios de productos  y mostrar precio final (más IVA 21%).
*/
function Sumar () 
{
	var precioUno;
    var precioDos;
    var precioTres;
    var precioUnoParseado;
    var precioDosParseado;
    var precioTresParseado;
    var suma;

    precioUno = txtIdPrecioUno.value;
    precioDos = txtIdPrecioDos.value;
    precioTres = txtIdPrecioTres.value;

    precioUnoParseado = parseInt(precioUno);
    precioDosParseado = parseInt(precioDos);
    precioTresParseado = parseInt(precioTres);

    // Cálculo
    suma = precioUnoParseado + precioDosParseado + precioTresParseado;

    alert("La suma del valor de los productos es: " + suma);
}
function Promedio () 
{
    var precioUno;
    var precioDos;
    var precioTres;
    var precioUnoParseado;
    var precioDosParseado;
    var precioTresParseado;
    var suma;
    var promedio;

    precioUno =  txtIdPrecioUno.value;
    precioDos = txtIdPrecioDos.value;
    precioTres = txtIdPrecioTres.value;

    precioUnoParseado = parseInt(precioUno);
    precioDosParseado = parseInt(precioDos);
    precioTresParseado = parseInt(precioTres);

    // Cálculo
    suma = precioUnoParseado + precioDosParseado + precioTresParseado;
    promedio = suma/3

    alert("El promedio del valor de los productos es: " + promedio);
}
function PrecioFinal () 
{
    var precioUno;
    var precioDos;
    var precioTres;
    var precioUnoParseado;
    var precioDosParseado;
    var precioTresParseado;
    var suma;
    var iva
    var valorTotal

    precioUno = txtIdPrecioUno.value;
    precioDos = txtIdPrecioDos.value;
    precioTres = txtIdPrecioTres.value;

    precioUnoParseado = parseInt(precioUno);
    precioDosParseado = parseInt(precioDos);
    precioTresParseado = parseInt(precioTres);

    // Cálculo
    suma = precioUnoParseado + precioDosParseado + precioTresParseado;
    iva = 0.21
    valorTotal = suma + ( suma*iva);

    alert("El precio total de la compra incluyendo el IVA es: " + valorTotal);
}