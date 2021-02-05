/* Dario Baez

Debemos lograr tomar el importe por ID ,
se pide al usuario el porcentaje,
transformarlo a entero (parseInt), luego
mostrar el importe con un aumento 
en el cuadro de texto "RESULTADO".*/

/* Ejercicio 9  bis*/
function mostrarAumento()
{
    //declaracion de variables
	var sueldo;
	var aumento;
	var porcentaje;
	var resultado;

	//tomar el importe por ID
	sueldo = document.getElementById("txtIdSueldo").value;
	
	//se pide al usuario el porcentaje x
    porcentaje = prompt("Ingrese el porcentaje de aumento","porcentaje");

	//transformarlo a entero (parseInt)
	sueldo     = parseInt(sueldo);
    porcentaje = parseInt(porcentaje);

	//calcular aumento 
	aumento =  (sueldo * porcentaje) / 100;

	//importe con un aumento del x %
	resultado = sueldo + aumento;
	
	//mostrar el importe con un  x %  de aumento en el cuadro de texto "RESULTADO"
	document.getElementById("txtIdResultado").value = resultado;

}
