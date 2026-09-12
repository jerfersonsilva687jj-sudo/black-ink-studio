// 1. Efeito de rolagem suave nos links do menu
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();

    const targetId = this.getAttribute('href');
    const targetElement = document.querySelector(targetId);

    if (targetElement) {
      targetElement.scrollIntoView({
        behavior: 'smooth'
      });
    }
  });
});

// 2. Animação de entrada dos cards da galeria ao rolar a página
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('show');
    }
  });
}, {
  threshold: 0.2 // Dispara quando 20% do card aparecer na tela
});

// Seleciona todos os cards e aplica o efeito
document.querySelectorAll('.tattoo-card').forEach(card => {
  observer.observe(card);
});