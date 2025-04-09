const senhaCorreta = "DanieleBrenda"; // Senha correta

// Função para verificar a senha e exibir o questionário
function verificarSenha() {
    const usuario = document.getElementById("usuario").value; 
    const senha = document.getElementById("senha").value;

    if (senha === senhaCorreta) { // Verifica se a senha é correta
        // Exibe o nome do usuário na página e mostra o questionário
        document.getElementById("nome-usuario").innerText = usuario; 
        document.querySelector(".caixa-instalogo").style.display = 'none'; // Esconde o formulário de login
        document.getElementById("questionario-container").style.display = 'block'; // Exibe o questionário
    } else {
        alert("Senha incorreta. Tente novamente.");
    }
}

function calcularPontuacao(tipo) {
    // Respostas corretas
const respostasCorretas = {
    "noivo": {
        "pergunta1": "Azul",
        "bebida_noivo": "cha",
        "animal": "Cachorro",
        "atividade_noivo": "esportes",
        "filme_noivo": "Ação",
        "Local_noiva": "Ilha deserta"
    },
    "noiva": {
        "pergunta1_noiva": "Lilás",
        "bebida_noiva": "cha",
        "animal_noiva": "Gato",
        "atividade_noiva": "Assistir TV",
        "filme_noiva": "Românce",
        "Local_noiva": "Shopping"
    }
};

// Função para calcular a pontuação
function calcularPontuacao(tipo) {
    const form = document.getElementById(`form-${tipo}`);
    let pontuacao = 0;

    for (let pergunta in respostasCorretas[tipo]) {
        const respostaCorreta = respostasCorretas[tipo][pergunta];
        const elemento = form.querySelector(`[name="${pergunta}"]`);

        if (elemento.type === "radio") {
            const respostaUsuario = form.querySelector(`[name="${pergunta}"]:checked`);
            if (respostaUsuario && respostaUsuario.value === respostaCorreta) {
                pontuacao++;
            }
        } else if (elemento.value === respostaCorreta) {
            pontuacao++;
        }
    }

    // Exibe a pontuação
    const resultadoDiv = document.getElementById("resultado");
    resultadoDiv.innerHTML = `Sua pontuação para ${tipo} foi: ${pontuacao} de ${Object.keys(respostasCorretas[tipo]).length}`;
}

// Adiciona event listeners aos formulários
document.addEventListener("DOMContentLoaded", () => {
    document.getElementById("form-noivo").addEventListener("submit", (event) => {
        event.preventDefault(); // Impede o envio padrão do formulário
        calcularPontuacao("noivo");
    });

    document.getElementById("form-noiva").addEventListener("submit", (event) => {
        event.preventDefault(); // Impede o envio padrão do formulário
        calcularPontuacao("noiva");
    });
});
}
