/* Dario Baez

Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt) y Sumarlos.
mostrar el resulto por medio de "ALERT"*/
/* ejercicio 6 */

function sumar()
{
	//declaracion de variables
	var numeroUno;
	var numeroDos;
	var resultado;
	var mensaje;

	//tomar Los numeros por ID
	numeroUno = document.getElementById('txtIdNumeroUno').value;
	numeroDos = document.getElementById('txtIdNumeroDos').value;
	
	//transformarlos a enteros (parseInt)
	numeroDos = parseInt(numeroDos);
	numeroUno = parseInt(numeroUno);
	
	//Sumarlos
	resultado = numeroDos + numeroUno;
	
    //mostrar el resulto por medio de "ALERT
	mensaje = "La Suma es : " + resultado;
	alert(mensaje);
}

