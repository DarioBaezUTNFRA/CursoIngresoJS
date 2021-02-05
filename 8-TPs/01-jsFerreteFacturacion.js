
/* Dario Baez */

/*1.	Para el departamento de facturación:
A.	Ingresar tres precios de productos y mostrar la suma de los mismos.
B.	Ingresar tres precios de productos y mostrar el promedio de los mismos.
C.	ingresar tres precios de productos y mostrar precio final (más IVA 21%).
*/

/* TP 1 FerreteFacturacion */
function Sumar () 
{   
    //declaracion de variables
    var precioUno;
    var precioDos;
    var precioTres;
    var resultado;
    var mensaje;

    //Ingresar tres precios de productos
    precioUno  = document.getElementById('txtIdPrecioUno').value;
    precioDos  = document.getElementById('txtIdPrecioDos').value;
    precioTres = document.getElementById('txtIdPrecioTres').value;

    //parseInt
    precioUno  = parseFloat(precioUno);
    precioDos  = parseFloat(precioDos);
    precioTres = parseFloat(precioTres);

    //la suma de los mismos
	resultado = precioUno + precioDos + precioTres;
    
    //mostrar la suma de los mismos
    mensaje = "La Suma es : " + resultado;
    alert(mensaje);

}

function Promedio () 
{
	//declaracion de variables
    var precioUno;
    var precioDos;
    var precioTres;
    var resultado;
    var mensaje;

    //Ingresar tres precios de productos
    precioUno  = document.getElementById('txtIdPrecioUno').value;
    precioDos  = document.getElementById('txtIdPrecioDos').value;
    precioTres = document.getElementById('txtIdPrecioTres').value;

    //parseInt
    precioUno  = parseFloat(precioUno);
    precioDos  = parseFloat(precioDos);
    precioTres = parseFloat(precioTres);

    //el promedio de los mismos
	resultado = (precioUno + precioDos + precioTres) / 3;
    
    //mostrar el promedio de los mismos
    mensaje = "El promedio es : " + resultado;
    alert(mensaje);
}

function PrecioFinal () 
{
	//declaracion de variables
    var precioUno;
    var precioDos;
    var precioTres;
    var precioTotal;
    var iva;
    var porcentajeIva;
    var precioFinal;
    var mensaje;

    //Ingresar tres precios de productos
    precioUno  = document.getElementById('txtIdPrecioUno').value;
    precioDos  = document.getElementById('txtIdPrecioDos').value;
    precioTres = document.getElementById('txtIdPrecioTres').value;
    iva        = 25.00;

    //parseInt
    precioUno  = parseFloat(precioUno);
    precioDos  = parseFloat(precioDos);
    precioTres = parseFloat(precioTres);
    iva        = parseFloat(iva);

    //precio final (más IVA 21%)
    precioTotal    = (precioUno + precioDos + precioTres);
    porcentajeIva  = (precioTotal * iva) /100;
    precioFinal    = precioTotal + porcentajeIva;

    //mostrar la suma de los mismos
    mensaje = "El precio final (más IVA 21%) es : " + precioFinal;
    alert(mensaje);

}