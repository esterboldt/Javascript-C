function calcularConceito() {
    var id = parseInt(document.getElementById("id").value);
    var n1 = parseFloat(document.getElementById("nota1").value);
    var n2 = parseFloat(document.getElementById("nota2").value);
    var n3 = parseFloat(document.getElementById("nota3").value);

    var media = (n1 + n2 + n3) / 3;
    var conceito;

    if (media >= 90) {
        conceito = 'A';
    } else if (media >= 75) {
        conceito = 'B';
    } else if (media >= 60) {
        conceito = 'C';
    } else if (media >= 40) {
        conceito = 'D';
    } else {
        conceito = 'E';
    }

    var status = (conceito === 'A' || conceito === 'B' || conceito === 'C') ? 'APROVADO' : 'REPROVADO';

    var resultadoText = status + "\n" + "COM O ID: " + id + "\n" + "COM AS NOTAS: " + n1.toFixed(2) + " " + n2.toFixed(2) + " " + n3.toFixed(2) + "\n" + "COM A MÉDIA: " + media.toFixed(2) + "\n" + "CONCEITO: " + conceito;

    document.getElementById("resultado").innerText = resultadoText;
}