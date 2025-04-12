const senhaCorreta = "DanieleBrenda"; // Defina aqui a senha correta

function verificarSenha() {
    const usuario = document.getElementById("usuario").value;
    const senha = document.getElementById("senha").value;

    if (senha === senhaCorreta) {
        // Redireciona para outra página
        window.location.href = "https://danfenx.github.io/pagina-instadb/"; // Altere para a página que desejar
    } else {
        document.getElementById("mensagem-erro").style.display = 'block';
    }
}
