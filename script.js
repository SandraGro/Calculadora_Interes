function calculaInteres(cantidadInicial, interes, tiempo) {
    var arr = [];
    for (let i = 0; i <= tiempo; i++) {
        tiempoInicial = i;
        var capitalFinal = (cantidadInicial * Math.pow((1 + (interes / 100)), i)).toFixed(2);
        arr.push(capitalFinal)
    }
    return arr;
    console.log(arr);
}

calculaInteres(10000, 7, 10);

function procesaFuncion() {
    var cantidad = document.getElementById("cantidad").value;
    var porcentajeInteres = document.getElementById("interes").value;
    var tiempo2 = document.getElementById("tiempo").value;
  document.getElementById("resultado").innerHTML = calculaInteres(cantidad, porcentajeInteres, tiempo2);
    
  };