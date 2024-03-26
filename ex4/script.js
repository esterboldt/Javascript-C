function calcular() {
    var total = 0;
    var salarioInputs = document.querySelectorAll('input[type="number"]');
    var algumVazio = false;

    salarioInputs.forEach(function(input) {
        if (input.value === '' || isNaN(input.valueAsNumber)) {
            algumVazio = true;
        } else {
            total += parseFloat(input.value);
        }
    });

    if (algumVazio) {
        document.getElementById("resultado").innerText = "Insira todos os números.";
    } else {
        var media = total / salarioInputs.length;

        document.getElementById("resultado").innerHTML = "Total: " + total.toFixed(2) + "<br>" + "Média: " + media.toFixed(2);
    }
}