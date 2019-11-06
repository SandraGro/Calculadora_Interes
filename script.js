function calculaInteres(cantidadInicial, interes, tiempo) {
    var arr = [];
    for (let i = 0; i <= tiempo; i++) {
        let tiempoInicial = i;
        let capitalFinal = cantidadInicial * Math.pow((1 + (interes / 100)), tiempoInicial);
        arr.push(capitalFinal)
    }
    
    if(cantidadInicial && interes && tiempo){
        return arr[arr.length-1];
    }else{
        return 'Completa todos los datos';
    }
    //console.log(arr);
}

function calculaInteresSimple(cantidadInicial, interes, tiempo) {
    var arr2 = [];
    for (let i = 1; i <= tiempo; i++) {
        let tiempoInicial = i;
        let interesSimple = (cantidadInicial * interes * tiempoInicial) / 100;
        let capitalFinalSimple = cantidadInicial + interesSimple;
        arr2.push(capitalFinalSimple);
    }
    console.log(arr2);
    if(cantidadInicial && interes && tiempo){
        return arr2[arr2.length-1];
    }else{
        return 'Completa todos los datos';
    }
}

function procesaFuncion() {
    var cantidad = parseInt(document.getElementById("cantidad").value);
    var porcentajeInteres = parseInt(document.getElementById("interes").value);
    var tiempo2 = parseInt(document.getElementById("tiempo").value);
    document.getElementById("resultado").innerHTML = calculaInteres(cantidad, porcentajeInteres, tiempo2);
    document.getElementById("resultado2").innerHTML = calculaInteresSimple(cantidad, porcentajeInteres, tiempo2);
    drawChart(cantidad, porcentajeInteres, tiempo);
};


google.charts.load('current', { 'packages': ['corechart'] });
google.charts.setOnLoadCallback(drawChart);



function drawChart(cantidad, porcentajeInteres, tiempo) {
    var arreglo = [['Tiempo', 'interes simple', 'interes compuesto']];
    var cantidad = parseInt(document.getElementById("cantidad").value);
    var porcentajeInteres = parseInt(document.getElementById("interes").value);
    var tiempo = parseInt(document.getElementById("tiempo").value);
    for (let i = 1; i <= tiempo; i++) {
        var valor = calculaInteres(cantidad, porcentajeInteres, i);
        var valor2 = calculaInteresSimple(cantidad, porcentajeInteres, i);
        console.log(valor)
        arreglo.push([i, valor2, valor])
    }
    console.log(arreglo);

    var data = google.visualization.arrayToDataTable(arreglo);

    var options = {
        title: 'Company Performance',
        curveType: 'function',
        legend: { position: 'bottom' }
    };

    var chart = new google.visualization.LineChart(document.getElementById('curve_chart'));

    chart.draw(data, options);
}
