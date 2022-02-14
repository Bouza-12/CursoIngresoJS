/*2.	Para el departamento de Construcción:
A.	 mostrar la cantidad de alambre a comprar  si se ingresara el largo y el ancho de un terreno rectangular y se debe alambra con tres hilos de alambre.
B.	mostrar la cantidad de alambre a comprar  si se ingresara el radio  de un terreno circular y se debe alambra con tres hilos de alambre.
C.	Para hacer un contrapiso de 1m x 1m se necesitan 2 bolsas de cemento y 3 de cal, debemos mostrar cuantas bolsas se necesitan de cada uno para las medidas que nos ingresen.
*/

function Rectangulo () 
{
    var largo;
    var ancho;
    var largoParseado;
    var anchoParseado;
    
    var perimetro;
    var alambreTotal;


    largo = txtIdLargo.value;
    ancho = txtIdAncho.value;

    largoParseado = parseInt(largo);
    anchoParseado = parseInt(ancho);

    // Cálculos
    perimetro = (largoParseado + anchoParseado) *2;
    alambreTotal = perimetro*3;

    alert("El alambre para rodear 3 veces el perímetro del terreno es: " + alambreTotal);

}
function Circulo () 
{
	var radioTerreno;
    var radioTerrenoParseado;
    var perimetro;
    var alambreTotal;
    var pi;

    radioTerreno = txtIdRadio.value;
    pi = 3.14

    radioTerrenoParseado = parseInt(radioTerreno);

    // Cálculos
    perimetro = pi * radioTerrenoParseado * 2;
    alambreTotal = perimetro*3;

    alert("El alambre para rodear 3 veces el perímetro del terreno es: " + alambreTotal);
}
function Materiales () 
{
	var largo;
    var ancho;
    var largoParseado;
    var anchoParseado;
    var bolsasCemento;
    var bolsasCal;
    
    var superficie;
    
    largo = txtIdLargo.value;
    ancho = txtIdAncho.value;

    largoParseado = parseInt(largo);
    anchoParseado = parseInt(ancho);

    // Cálculos
    superficie = largoParseado * anchoParseado;

    // Se necesitan 2 bolsas de cemento y 3 de cal por cada 1 metro cuadrado
    bolsasCemento = 2 * superficie;
    bolsasCal = 3 * superficie;

    alert("Se necesitan " + bolsasCemento + " bolsas de cemento y "+ bolsasCal +" bolsas de cal para hacer un contrapiso a un terreno de "+ superficie + " metros cuadrados.");
    
}