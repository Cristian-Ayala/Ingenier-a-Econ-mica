document.getElementById("boton2").addEventListener("click", function(e) {
    e.preventDefault();
    if (check_required_inputs()) {
        var interes = document.getElementById("txtInteres").value;
        var tiempo = document.getElementById("txtTiempo").value;
        var E = document.getElementById("txtE").value;
        var resultado = efectuar(interes, tiempo, E);
        document.getElementById("lista").innerHTML = "El factor resultante es: " + resultado + " cuando (Pe/D, " + E + ", " + interes + "%, " + tiempo + ")";
        document.getElementById('reset').removeAttribute('hidden');
        document.getElementById("boton2").setAttribute("hidden", true);
    }

});

//checkea que no hayan campos en blanco
function check_required_inputs() {
    var bool = false;
    if (document.getElementById("txtInteres").value.length > 0 && document.getElementById("txtTiempo").value.length > 0 && document.getElementById("txtE").value.length > 0) {
        bool = true;
    } else {
        alert("Llene todos los campos");
    }
    return bool;
};

function efectuar(i, n, E) {
    var res;
    let A = Math.pow(1 + E, n);
    let B = Math.pow(1 + i, n);
    res = ((A / B) - 1) / (E - i);
    return res;
}


// ----------------------------------------------------------------Reset Button----------------------------------------------------------


function resetear() {
    document.getElementById('reset').setAttribute('hidden', true);
    document.getElementById("boton2").removeAttribute("hidden");
    document.getElementById("lista").innerHTML = "";
}