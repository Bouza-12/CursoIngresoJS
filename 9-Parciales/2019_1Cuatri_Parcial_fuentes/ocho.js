function mostrar()
{
    //declaro variables
    var numeroIngresado;
    var numeroParseado;
    var letraIngresada;
    var cantidadPares;
    var cantidadImpares;
    var cantidadCeros;
    var sumaPositivos;
    var sumaNegativos;
    var promedioPositivos;
    var letraMinimo;
    var letraMaximo;
    var numeroMinimo;
    var numeroMaximo;
    var flag;
    var respuesta;
    var modulo;
    var cantidadPositivos;
    var flagRespuesta;

    cantidadCeros=0;
    cantidadPares=0;
    cantidadImpares=0;
    sumaPositivos=0;
    sumaNegativos=0;
    flag="verdadero";
    respuesta="si";
    cantidadPositivos=0;
    flagRespuesta="verdadero";

    while(respuesta=="si")
    {
        letraIngresada=prompt("Ingrese una letra: ");

        while(letraIngresada.length != 1)
        {
            letraIngresada=prompt("Ingreso más de un caracter. Por favor ingrese SÓLO una letra: ");
        }

        numeroIngresado=prompt("Ingrese el número correspondiente entre -100 y 100: ");
        numeroParseado=parseInt(numeroIngresado);

        while(isNaN(numeroParseado))
        {
            numeroIngresado=prompt("Error!!! Debe ingresar un NÚMERO entre -100 y 100: ");
            numeroParseado=parseInt(numeroIngresado);
        }
        while(numeroParseado<-100 || numeroParseado>100)
        {
            numeroIngresado=prompt("Error!!! Debe ingresar un número ENTRE -100 y 100: ");
            numeroParseado=parseInt(numeroIngresado);
        }

        modulo=numeroParseado%2;

        if(flag == "verdadero")
        {
            letraMaximo = letraIngresada;
            numeroMaximo = numeroParseado;
            letraMinimo = letraIngresada;
            numeroMinimo = numeroParseado;
            flag = "falso";
        }
        else
        {
           if(numeroParseado>numeroMaximo)
           {
               numeroMaximo=numeroParseado;
               letraMaximo=letraIngresada;
           }
           if(numeroParseado<numeroMinimo)
           {
               numeroMinimo=numeroParseado;
               letraMinimo=letraIngresada;
           }
        }

        if(numeroParseado == 0)
        {
            cantidadCeros++;
        }
        else
        {
            if(modulo == 0)
            {
                cantidadPares++;
            }
            else
            {
                cantidadImpares++;
            }
        }
        if(numeroIngresado>0)
        {
            sumaPositivos += numeroParseado;
            cantidadPositivos++;
        }
        else
        {
            sumaNegativos += numeroParseado;
        }
        //pregunta para volver a ingresar al while o salir
        while(flagRespuesta == "verdadero")
        {
            respuesta=prompt("Desea seguir ingresando números (si/no)");
            if(respuesta == "si" || respuesta =="no")
            {
                flagRespuesta = "falso";
            }
        }
        flagRespuesta="verdadero";
    }
    //calculo el promedio
    promedioPositivos =sumaPositivos/cantidadPositivos;
    //Muestro los resultados
    document.write("La cantidad de numero PARES ingresados son: "+cantidadPares+ " <br>");
    document.write("La cantidad de numeros IMPARES ingresados son: "+cantidadImpares+" <br>");
    document.write("La cantidad de CEROS ingresados son: "+cantidadCeros+" <br>");
    document.write("El promedio de números positivos es: "+promedioPositivos+" <br>");
    document.write("La suma de los núemro negativos es: "+sumaNegativos+" <br>");
    document.write("El numero más alto ingresado fue: "+numeroMaximo+" y su letra correspondiente es: "+letraMaximo+" <br>");
    document.write("El numero más bajo ingresado fue: "+numeroMinimo+" y su letra correspondiente es: "+letraMinimo+" <br>");
}
