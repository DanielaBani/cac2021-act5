/*$(function () {
    $('[data-toggle="tooltip"]').tooltip()
  })*/
const cantidadEntradas = document.getElementById('cantidadEntrada')

const botonCalcular = document.getElementById('botonCalcular')

const categoria = document.getElementById('inputState')

//botonCalcular.addEventListener('click',resumen)

function resumen(){
    var valorFinal = (cantidadEntradas.value * 200)
    if(categoria.value == "estudiante"){
      valorFinal = valorFinal - (valorFinal*80/100)
    }
    else if(categoria.value == "trainee"){
      valorFinal = valorFinal - (valorFinal*50/100)
    }
    else{
      valorFinal = valorFinal - (valorFinal*15/100)
    }

    totalCompra.innerHTML=  "Total a Pagar: $" + valorFinal
}

function borrar(){
  totalCompra.innerHTML = "Total a Pagar: $"

}