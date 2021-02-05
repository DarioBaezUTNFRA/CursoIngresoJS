/* Dario Baez

Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt),realizar la operación correcta y 
mostrar el resto entre el dividendo y el divisor.
ej.: "El resto es 0 ."*/
/* Ejercicio 8 */
function SacarResto()
{
	//declaracion de variables
	var numeroDividendo;
	var numeroDivisor;
	var resultado;
	var mensaje;

	//tomar Los numeros por ID
	numeroDividendo = document.getElementById('txtIdNumeroDividendo').value;
	numeroDivisor   = document.getElementById('txtIdNumeroDivisor').value;
	
	//transformarlos a enteros (parseInt)
	numeroDividendo = parseInt(numeroDividendo);
	numeroDivisor   = parseInt(numeroDivisor);
	
	//realizar la operación correcta
	resultado = numeroDividendo % numeroDivisor;
	mensaje   = "El Resto de la division es : " + resultado;

	//mostrar el resto entre el dividendo y el divisor
	alert(mensaje);	
}
