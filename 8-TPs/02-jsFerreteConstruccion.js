/* Dario Baez */

/*2.	Para el departamento de Construcción:
A.	mostrar la cantidad de alambre a comprar  si se ingresara el largo y el ancho de un terreno rectangular y se debe alambra con tres hilos de alambre.
B.	mostrar la cantidad de alambre a comprar  si se ingresara el radio  de un terreno circular y se debe alambra con tres hilos de alambre.
C.	Para hacer un contrapiso de 1m x 1m se necesitan 2 bolsas de cemento y 3 de cal, debemos mostrar cuantas bolsas se necesitan de cada uno para las medidas que nos ingresen.
*/

/* TP 1 FerreteConstruccion */
function Rectangulo () 
{
    //declaracion de variables
    var largo;
    var ancho;
    var perimetro;
    var hilosDeAlambre;
    var resultado;
    var mensaje;

    //Ingresar datos
    largo = document.getElementById('txtIdLargo').value;
    ancho = document.getElementById('txtIdAncho').value;
    hilosDeAlambre = 3;

    //parseInt
    largo = parseInt(largo);
    ancho = parseInt(ancho);

    //calcular perimetro
    perimetro = (2 * largo) + (2 * ancho);
    
    //la cantidad de alambre a comprar
    resultado = perimetro * hilosDeAlambre;
    
    //mostrar la cantidad de alambre a comprar
    mensaje = "La cantidad de alambre a comprar es : " + resultado + " metros";
    alert(mensaje);
}

function Circulo () 
{
	//declaracion de variables
    var radio;
    var diametro;
    var circunferencia;
    var hilosDeAlambre;
    var resultado;
    var mensaje;

    //Ingresar datos
    radio = document.getElementById('txtIdRadio').value;
    hilosDeAlambre = 3;
     
    //parseInt
    radio = parseInt(radio);
    
    //calcular diametro
    diametro = (2 * radio);
    
    //calcular circunferencia
    circunferencia = diametro * 3.14;

    //la cantidad de alambre a comprar
    resultado = circunferencia * hilosDeAlambre;

    //mostrar la cantidad de alambre a comprar
    mensaje = "La cantidad de alambre a comprar es : " + resultado + " metros";
    alert(mensaje);
}

function Materiales () 
{
	 //declaracion de variables
     var largo;
     var ancho;
     var resultado;
     var bolsaDeCementoPorM2;
     var bolsaDeCalPorM2;
     var totalBolsasDeCemento;
     var totalBolsasDeCal;
     var mensaje;
 
     //Ingresar datos
     largo = document.getElementById('txtIdLargo').value;
     ancho = document.getElementById('txtIdAncho').value;
     
     //parseInt
     largo = parseInt(largo);
     ancho = parseInt(ancho);
 
     //calcular perimetro
     perimetro = (2 * largo) + (2 * ancho);
     
     //calcular cemento
     bolsaDeCementoPorM2  = 2;
     totalBolsasDeCemento = perimetro * bolsaDeCementoPorM2;

     //calcular cal
     bolsaDeCalPorM2  = 3;
     totalBolsasDeCal = perimetro * bolsaDeCalPorM2;

     //mostrar cuantas bolsas se necesitan de cada uno para las medidas que nos ingresen.

     mensaje = "Para un terreno de " + largo + " de Largo x " + ancho + " de Ancho, se necesitan comprar " +  totalBolsasDeCemento + " bolsas de Cemento y " + totalBolsasDeCal + " bolsas de Cal";
     alert(mensaje);
}