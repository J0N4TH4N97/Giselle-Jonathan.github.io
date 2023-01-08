window.onload=function () {
    var timeStart = new Date("Tues Nov 08 2022");
    var timeEnd = new Date();
    var actualDate = new Date();
    if (timeEnd > timeStart)
    {
        var diff = timeEnd.getTime() - timeStart.getTime();
        document.getElementById("DivCuenta").innerHTML = '<h3 class="f-w-300">89</h3>'+Math.round(diff / (1000 * 60 * 60 * 24))+'<span class="d-block text-uppercase">DÍAS DE ESTA BONITA HISTORIA.</span>';
    }
    else if (timeEnd != null && timeEnd < timeStart) {
        alert("La fecha final de la promoción debe ser mayor a la fecha inicial");
        document.getElementById("DivCuenta").innerHTML = '<h3 class="f-w-300">89</h3>'+0+'<span class="d-block text-uppercase">nO SE PUEDO CONTABILIZAR LOS DÍAS</span>';
    }
}