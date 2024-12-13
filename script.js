document.addEventListener("DOMContentLoaded", () => {
    // Atualizar número de visitantes dinamicamente
    const visitorCount = 144162938; // Simulação de valor
    document.getElementById("visitor-count").textContent = visitorCount.toLocaleString('pt-BR');

    // Rolagem suave ao clicar nos links
    document.querySelectorAll('nav a').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            target.scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

    // Efeito de aparição para a seção "Sobre"
    const sobreSection = document.getElementById("sobre");

    const verificarVisibilidade = () => {
        const posicaoTop = sobreSection.getBoundingClientRect().top;
        const alturaTela = window.innerHeight;

        if (posicaoTop < alturaTela - 100) {
            sobreSection.classList.add("aparece");
        }
    };

    // Adicionar evento de rolagem
    window.addEventListener("scroll", verificarVisibilidade);
});
