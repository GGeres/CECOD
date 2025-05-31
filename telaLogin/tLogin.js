function fazerLogin() {
    const cpf = document.getElementById('cpf').value;
    const senha = document.getElementById('senha').value;
    const erro = document.getElementById('erro');

    if (cpf === "12345678900" && senha === "1230") {
        window.location.href = "../TelaPrincipal/telaPrincipal.html";
    } else {
        erro.textContent = "CPF ou senha incorretos!";
    }
}
