document.getElementById("boton").addEventListener("click", function(e) {
    e.preventDefault();
    if (check_required_inputs()) {
        var interes = document.getElementById("txtInteres").value;
        var tiempo = document.getElementById("txtTiempo").value;
        var val = getRadioVal(document.getElementById('formulario'), 'factor');
        var resultado = casesFactores(val, interes, tiempo).toFixed(4);
        document.getElementById("lista").innerHTML = "El factor resultante es: " + resultado + " cuando (" + val + ", " + interes + "%, " + tiempo + ")";
        document.getElementById('reset').removeAttribute('hidden');
        document.getElementById("boton").setAttribute("hidden", true);
    }

});

//checkea que no hayan campos en blanco
function check_required_inputs() {
    var bool = false;
    if (document.getElementById("txtInteres").value.length > 0 && document.getElementById("txtTiempo").value.length > 0) {
        if (getRadioVal(document.getElementById('formulario'), 'factor') != undefined) {
            bool = true;
        } else {
            alert("Seleccione un factor");
        }

    } else {
        alert("Llene todos los campos");
    }
    return bool;
};

// Función para obtener que radio button está seleccionado
function getRadioVal(form, name) {
    var val;
    var radios = form.elements[name]; // get list of radio buttons with specified name
    for (var i = 0, len = radios.length; i < len; i++) { // loop through list of radio buttons
        if (radios[i].checked) { // radio checked?
            val = radios[i].nextSibling.innerHTML; // if so, hold its value in val
            break; // and break out of for loop
        }
    }
    return val; // return value of checked radio or undefined if none checked
}

var valor;

function casesFactores(factor, interes, tiempo) {
    interes = interes * 0.01;
    console.log(interes);
    switch (factor) {
        case "F/P":
            // Math.pow(base, exponente)
            valor = (Math.pow((1 + interes), tiempo));
            console.log(valor);
            console.log("caso 1");
            break;
        case "A/P":
            // Math.pow(base, exponente)
            valor = (interes * (Math.pow(1 + interes, tiempo))) / (Math.pow(1 + interes, tiempo) - 1);
            console.log(valor);
            console.log("caso 2");
            break;
        case "A/F":
            // Math.pow(base, exponente)
            valor = (interes) / (Math.pow(1 + interes, tiempo) - 1);
            console.log(valor);
            console.log("caso 3");
            break;
        case "P/F":
            // Math.pow(base, exponente)
            valor = Math.pow(1 + interes, (-1 * tiempo));
            console.log(valor);
            console.log("caso 4");
            break;
        case "P/A":
            // Math.pow(base, exponente)
            valor = (Math.pow(1 + interes, tiempo) - 1) / (interes * Math.pow(1 + interes, tiempo));
            console.log(valor);
            console.log("caso 5");
            break;
        case "F/A":
            // Math.pow(base, exponente)
            valor = ((Math.pow(1 + interes, tiempo) - 1) / interes);
            console.log(valor);
            console.log("caso 6");
            break;
        case "Ag/G":
            // Math.pow(base, exponente)
            valor = (1 / interes) - (tiempo / (Math.pow(1 + interes, tiempo) - 1));
            console.log(valor);
            console.log("caso 7");
            break;
        case "Pg/G":
            // Math.pow(base, exponente)
            valor = (1 / interes) * (((Math.pow(1 + interes, tiempo) - 1) / (interes * Math.pow(1 + interes, tiempo))) - (tiempo / Math.pow(1 + interes, tiempo)));
            console.log("caso 8");
            break;
        default:
            console.log("Seleccione un factor");
    }
    return valor;
}

// ----------------------------------------------------------------Reset Button----------------------------------------------------------


function resetear() {
    document.getElementById('reset').setAttribute('hidden', true);
    document.getElementById("boton").removeAttribute("hidden");
    document.getElementById("lista").innerHTML = "";
}