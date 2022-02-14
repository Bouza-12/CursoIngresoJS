
function mostrar()
{
    //Declaro varaibles
    var ladoTriangulo;
    var perimetroTriangulo;
    var ladoTrianguloParseado;

    //Ingreso dato
    ladoTriangulo = prompt("ingrese el valor de in lado de un triángulo equilatero")

    // paso el dato a numero
    ladoTrianguloParseado = parseInt(ladoTriangulo);

    //calculo el perímetro
    perimetroTriangulo = ladoTrianguloParseado * 3;

    //Muestro
    alert("El perímetro del triangulo rectángulo es: " + perimetroTriangulo);
}
