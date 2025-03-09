document.addEventListener('DOMContentLoaded', function () {
  // Interação com o formulário de contato
  const contactForm = document.getElementById('contactForm');
  contactForm.addEventListener('submit', function (event) {
      event.preventDefault();
      alert('Mensagem enviada com sucesso!');
      contactForm.reset();
  });

  // Carrossel automático
  const carrossel = document.querySelector('.carrossel');
  let scrollAmount = 0;
  const scrollStep = 300;

  setInterval(() => {
      scrollAmount += scrollStep;
      if (scrollAmount >= carrossel.scrollWidth) {
          scrollAmount = 0;
      }
      carrossel.scrollTo({
          left: scrollAmount,
          behavior: 'smooth'
      });
  }, 3000);
});