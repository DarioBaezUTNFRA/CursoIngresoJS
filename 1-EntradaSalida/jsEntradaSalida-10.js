/*
Dario Baez

Debemos lograr tomar el importe por ID.
Transformarlo a entero (parseInt), luego
mostrar el importe con un Descuento del 25 %
en el cuadro de texto "RESULTADO"*/

/* Ejercicio 10 */
function mostrarAumento()
{
	//declarar variables 
	var importe;
	var descuento;
	var resultado;

	//tomar el importe por ID
	importe = document.getElementById("txtIdImporte").value;

	//transformarlo a entero (parseInt)
	importe = parseInt(importe);
	
	//calcular descuento del 25 %
	descuento = importe * 0.25;

	//importe con un Descuento del 25 %
	resultado = importe - descuento;
	
	//mostrar el importe con un Descuento del 25 % en el cuadro de texto "RESULTADO
    document.getElementById("txtIdResultado").value = resultado;
}
