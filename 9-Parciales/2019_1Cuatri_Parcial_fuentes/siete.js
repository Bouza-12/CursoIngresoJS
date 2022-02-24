function mostrar()
{
    //Declaro Variables
    var alturaIngresada;
    var sexo;
    var promedio;
    var cantidadMujeresAltas;
    var contadorGeneral;
    var alturaAcumulada;
    var alturaMasBaja;
    var sexoMasBajo;

    contadorGeneral =0;
    cantidadMujeresAltas=0;
    alturaAcumulada=0;

    while(contadorGeneral<5)
    {
        //ingreso de datos
        alturaIngresada=prompt("Ingrese la altura se la persona en cm");
        alturaIngresada=parseInt(alturaIngresada);

        //Validación de si lo ingresado es un número
		while(isNaN(alturaIngresada))
		{
			alturaIngresada = prompt("Error! Vuelva a intentar, i||ngrese un número: ");
			alturaIngresada = parseInt(alturaIngresada);
		}

        sexo = prompt("Indique el sexo de la persona con una 'f' para femenino o 'm' para masculino: ");

        //sumo las alturas
        alturaAcumulada += alturaIngresada;

        if(contadorGeneral== 0)
        {
            alturaMasBaja = alturaIngresada;
            sexoMasBajo = sexo
        }
        else
        {        
            if(alturaIngresada< alturaMasBaja)
            {
                sexoMasBajo=sexo;
            }
        }

        //cuento las mujeres por encima de 190cm
        switch(sexo)
        {
            case 'f':
                if(alturaIngresada >190)
                {
                    cantidadMujeresAltas++;
                    break;
                }
                default:
                    break;
        }     
        contadorGeneral++; //aumento del contador
    }
    //cálculo del promedio
    promedio=alturaAcumulada/5

    //a
    alert("El promedio de las alturas totales son: "+promedio);
    //b
    alert("La persona más baja mide: "+ alturaMasBaja+ "cms, y su sexo es: "+sexoMasBajo);
    //c
    alert("La cantidad de mujeres que superan los 190cm son: "+cantidadMujeresAltas);
}
