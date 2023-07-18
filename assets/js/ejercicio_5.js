function calcularDescuento() 
{
   const precio = 9810;
   let autoSeleccionado = document.getElementById('autoSeleccionado').value;
   let descuento = 0;
   let precioFinal = document.getElementById('precioFinal')
   let modelos = document.getElementById('modelos')



   if (autoSeleccionado == 0)
   {
      descuento = precio * 0.05;
      precioFinal.innerHTML = "Se ha aplicado un decuento del 5%," + " su valor a cancelar es: $ " + Number(precio - descuento);
      modelos.innerHTML = "Modelo seleccionado: FORD FIESTA"
   }
   else if (autoSeleccionado == 1)
   {
      descuento = precio * 0.10;
      precioFinal.innerHTML = "Se ha aplicado un decuento del 10%," + " su valor a cancelar es: $ " + Number(precio - descuento);
      modelos.innerHTML = "Modelo seleccionado: FORD FOCUS"
   }
   else
   {
      descuento = precio * 0.20;
      precioFinal.innerHTML = "Se ha aplicado un decuento del 20%," + " su valor a cancelar es: $ " + Number(precio - descuento);
      modelos.innerHTML = "Modelo seleccionado: FORD ESCAPE"
   }

}
