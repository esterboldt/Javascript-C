function calcularDesconto() {
    var tempo = parseInt(document.getElementById("tempo").value);
    var valor = parseFloat(document.getElementById("valor").value);

    if (tempo >= 5) {
        if (valor > 5000) {
            document.getElementById("resultado").innerText = "Desconto de 20%";
        } else {
            if (valor > 1000) {
                document.getElementById("resultado").innerText = "Desconto de 10%";
            } else {
                document.getElementById("resultado").innerText = "Sem Desconto";
            }
        }
    } else {
        document.getElementById("resultado").innerText = "Sem Desconto";
    }
}