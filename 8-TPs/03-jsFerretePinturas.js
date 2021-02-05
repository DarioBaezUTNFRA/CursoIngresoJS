/* Dario Baez */

/*3.	Para el departamento de Pinturas:
A.	Al ingresar una temperatura en Fahrenheit debemos mostrar la temperatura en Centígrados con un mensaje concatenado (ej.: " 32 Fahrenheit son 0 centígrados").
B.	Al ingresar una temperatura en Centígrados debemos mostrar la temperatura en Fahrenheit (ej.: "0  centígrados son 32 Fahrenheit").
*/

/*FerretePinturas*/
function FahrenheitCentigrados () 
{
	//declaracion de variables
    var temperatura;
    var puntoCongelacionAguaFahrenheit;
    var centigrados;
    var razonDeDiferencias;
    var mensaje;

    //ingresar una temperatura en Fahrenheit
    temperatura = document.getElementById('txtIdTemperatura').value;

    //parseFloat temperatura
    temperatura = parseFloat(temperatura);
    
    //el agua se congela a 32° Fahrenheit
    puntoCongelacionAguaFahrenheit = 32;

    //calcula la Razon de diferencias de temperatura entre las escalas
    razonDeDiferencias = CalcularRazonDifencias();
 
    //Convierte Fahrenheit a Centígrados
    centigrados = (temperatura -  puntoCongelacionAguaFahrenheit) / razonDeDiferencias;
    centigrados = parseFloat(centigrados).toFixed(2);

    //mostrar la temperatura en Centígrados
    mensaje = (temperatura + "° Fahrenheit son " + centigrados + "° Centígrados");
    alert(mensaje);
}

function CentigradosFahrenheit () 
{
	//declaracion de variables
    var temperatura;
    var puntoCongelacionAguaFahrenheit;
    var fahrenheit;
    var razonDeDiferencias;
    var mensaje;

    //ingresar una temperatura en Fahrenheit
    temperatura = document.getElementById('txtIdTemperatura').value;

    //parseFloat temperatura
    temperatura = parseFloat(temperatura);
    
    //el agua se congela a 32° Fahrenheit
    puntoCongelacionAguaFahrenheit = 32;

    //calcula la Razon de diferencias de temperatura entre las escalas
     razonDeDiferencias = CalcularRazonDifencias();
     razonDeDiferencias = parseFloat(razonDeDiferencias);

    //Convierte Centígrados a Fahrenheit
    fahrenheit = (temperatura *  razonDeDiferencias) + puntoCongelacionAguaFahrenheit;
    fahrenheit = parseFloat(fahrenheit).toFixed(2);

    //mostrar la temperatura en Fahrenheit
    mensaje = (temperatura + "° Centígrados son " + fahrenheit + "° Fahrenheit");
    alert(mensaje);

}

//Funcion que calcula la Razon de diferencia de temperaturas
function CalcularRazonDifencias()
{
  
    var puntoEbullicionAguaCentigrados;
    var puntoCongelacionAguaCentigrados;
    var diferenciaCentigrados;

    var puntoEbullicionAguaFahrenheit;
    var puntoCongelacionAguaFahrenheit;
    var diferenciaFahrenheit;
    
    var razonDeDiferencias

    //el agua hierve a 100º Centígrados
    puntoEbullicionAguaCentigrados = 100;

    //el agua se congela a 0º Centígrados
    puntoCongelacionAguaCentigrados = 0;

    //hay una diferencia de 100° Centígrados
    diferenciaCentigrados = puntoEbullicionAguaCentigrados - puntoCongelacionAguaCentigrados;

    //el agua hierve a 212° Fahrenheit
    puntoEbullicionAguaFahrenheit  = 212;

    //el agua se congela a 32° Fahrenheit
    puntoCongelacionAguaFahrenheit = 32;

    //hay una diferencia de 180° Fahrenheit
    diferenciaFahrenheit  = puntoEbullicionAguaFahrenheit  - puntoCongelacionAguaFahrenheit;
     
    //razonDeDiferencias = (180 / 100) = 9/5 = 1.8;
    razonDeDiferencias = (diferenciaFahrenheit / diferenciaCentigrados);
     
    return razonDeDiferencias;

}