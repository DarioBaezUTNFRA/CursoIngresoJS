/* Dario Baez

Debemos lograr tomar el importe por ID.
se pide al usuario el porcentaje
Transformarlo a entero (parseInt), luego
mostrar el importe con un Descuento del x %
en el cuadro de texto "RESULTADO"*/

/* Ejercicio 10 bis */
function mostrarAumento()
{
	//declarar variables 
	var importe;
	var descuento;
    var porcentaje;
	var resultado;

	//tomar el importe por ID
	importe = document.getElementById("txtIdImporte").value;
	
    //se pide al usuario el porcentaje x
    porcentaje = prompt("Ingrese el porcentaje de descuento","porcentaje");

	//transformarlo a entero (parseInt)
	importe    = parseInt(importe);
    porcentaje = parseInt(porcentaje);
	
	//calcular descuento del x %
	descuento = (importe * porcentaje) / 100;

	//importe con un Descuento del x %
	resultado = importe - descuento;
	
	//mostrar el importe con un Descuento del x % en el cuadro de texto "RESULTADO
    document.getElementById("txtIdResultado").value = resultado;
}
