function varificar() {
    var letra = document.getElementById("letra").value.toLowerCase();

    if (letra === 'a' || letra === 'e' || letra === 'i' || letra === 'o' || letra === 'u') {
        document.getElementById("resultado").innerText = "É vogal";
    } else {
        document.getElementById("resultado").innerText = "É consoante";
    }
}