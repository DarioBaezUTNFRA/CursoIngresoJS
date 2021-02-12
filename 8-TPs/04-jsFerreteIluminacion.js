/* Dario Baez */

/*4.	Para el departamento de iluminación:
Tomando en cuenta que todas las lámparas están en oferta al mismo precio de $35 pesos final.
A.	Si compra 6 o más  lamparitas bajo consumo tiene un descuento del 50%. 
B.	Si compra 5  lamparitas bajo consumo marca "ArgentinaLuz" se hace un descuento del 40 % y si es de otra marca el descuento es del 30%.
C.	Si compra 4  lamparitas bajo consumo marca "ArgentinaLuz" o “FelipeLamparas” se hace un descuento del 25 % y si es de otra marca el descuento es del 20%.
D.	Si compra 3  lamparitas bajo consumo marca "ArgentinaLuz"  el descuento es del 15%, si es  “FelipeLamparas” se hace un descuento del 10 % y si es de otra marca un 5%.
E.	Si el importe final con descuento suma más de $120  se debe sumar un 10% de ingresos brutos en informar del impuesto con el siguiente mensaje:
 ”Usted pago X de IIBB.”, siendo X el impuesto que se pagó.  */

 /* TP 04  FerreteIluminacion solo SWITCH (la parte des descuento)*/
 function CalcularPrecio () 
 {
     //declaracion de variables
     var cantidadDeLamparas;
     var marca;
     var precioUnitario;
     var precioBruto;
     var porcentajeDescuento;
     var descuento;
     var ingresosBrutos;
     var porcentajeIngresosBrutos;
     var precioFinal;
 
     //todas las lámparas están en oferta al mismo precio de $35 pesos final
     precioUnitario = 35;
    
     //porcentaje Ingresos Brutos es del 10%
     porcentajeIngresosBrutos = 10;

     //tomar datos ingresados por ID
     cantidadDeLamparas = document.getElementById('txtIdCantidad').value; 
     marca              = document.getElementById('Marca').value;
     
     //transformarlos a enteros (parseInt)
     cantidadDeLamparas = parseInt(cantidadDeLamparas);
    
     //Calcular el precioBruto
     precioBruto = precioUnitario * cantidadDeLamparas;
 
    
       switch(cantidadDeLamparas)
       {   
           case 1:
           case 2:
                porcentajeDescuento = 0;
                break;
           case 3:
                switch(marca)
                { 
                    case "ArgentinaLuz":
                        //tiene un descuento del 15%.
                        porcentajeDescuento = 15;
                        break;

                    case "FelipeLamparas":
                         //tiene un descuento del 10%.
                         porcentajeDescuento = 10;
                        break;

                    default:
                        //tiene un descuento del 5%.
                        porcentajeDescuento = 5;
                        break;
                } 
                break;
            case 4:
                switch(marca)
                { 
                    case "ArgentinaLuz":
                    case "FelipeLamparas":
                         //tiene un descuento del 25%.
                         porcentajeDescuento = 25;
                        break;

                    default:
                        //tiene un descuento del 20%.
                        porcentajeDescuento = 20;
                        break;
                } 
                break;
            case 5:
                switch(marca)
                { 
                    case "ArgentinaLuz":
                        //tiene un descuento del 40%.
                        porcentajeDescuento = 40;
                        break;

                    default:
                        //tiene un descuento del 30%.
                        porcentajeDescuento = 30;
                        break;
                } 
                break;

            default:
                 //tiene un descuento del 50%.
                porcentajeDescuento = 50;
                break;
       }

      //calcular descuento del x %
      descuento = (precioBruto * porcentajeDescuento) / 100;
  
      // E. Si el importe final con descuento suma más de $120 se debe sumar un 10% de ingresos brutos 
      if(precioBruto > 120)
      { 
           //calcular 10 % de Ingresos Brutos
           ingresosBrutos = (precioBruto * porcentajeIngresosBrutos) / 100;
           
           //en informar del impuesto con el siguiente mensaje: ”IIBB Usted pago X”
           alert("IIBB Usted pago: $" + ingresosBrutos);
      }
      else
      {
        ingresosBrutos = 0;
      }
     
      //precioFinal con un Descuento del x % + Ingresos Brutos
      precioFinal = (precioBruto - descuento) + ingresosBrutos;
     
      //mostrar el precioFinal
      document.getElementById('txtIdprecioDescuento').value = "Precio con descuento: $" + precioFinal;
  
     
 }

