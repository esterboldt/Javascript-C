var vetorDados = [];

function informar() {
    document.getElementById('show_text').style.display = "flex"

    const codigo = parseInt(document.getElementById('codigo').value)
    const idade = parseInt(document.getElementById('idade').value)
    const altura = parseFloat(document.getElementById('altura').value)
    const peso = parseFloat(document.getElementById('peso').value)

    const mensagem = `O competidor ${codigo}, tem ${idade} anos, pesa ${peso.toFixed(2)}KG e tem ${altura.toFixed(2)} metros de altura.`

    document.getElementById('show_text').textContent = mensagem;
}