/* Dario Baez

Debemos lograr tomar el importe por ID ,
transformarlo a entero (parseInt), luego
mostrar el importe con un aumento del 10 %
en el cuadro de texto "RESULTADO".*/

/* Ejercicio 9 */
function mostrarAumento()
{
    //declaracion de variables
	var sueldo;
	var aumento;
	var resultado;

	//tomar el importe por ID
	sueldo = document.getElementById("txtIdSueldo").value;
	
	//transformarlo a entero (parseInt)
	sueldo = parseInt(sueldo);

	//calcular aumento del 10%
	aumento =  sueldo * 0.1;

	//importe con un aumento del 10%
	resultado = sueldo + aumento;
	
	//mostrar el importe con un aumento del 10% en el cuadro de texto "RESULTADO"
	document.getElementById("txtIdResultado").value = resultado;

}
