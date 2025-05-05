document.addEventListener('DOMContentLoaded', () => {
    const senhaInput = document.getElementById('senha');
    const abrirCartaBtn = document.getElementById('abrirCartaBtn');
    const senhaTela = document.getElementById('senhaTela');
    const carta = document.getElementById('carta');
    const musicaInicialElement = document.getElementById('musicaInicial');
    const musicaCartaElement = document.getElementById('musicaCarta');

    function verificarSenha() {
        const senhaDigitada = senhaInput.value;
        if (senhaDigitada === "27052021") {
            senhaTela.style.display = "none";
            carta.style.display = "block";
            musicaInicialElement.pause();
            musicaCartaElement.play();
        } else {
            alert("Senha incorreta. Tente novamente 💔");
        }
    }

    abrirCartaBtn.addEventListener('click', verificarSenha);

    senhaInput.addEventListener('keypress', (event) => {
        if (event.key === 'Enter') {
            verificarSenha();
        }
    });
});