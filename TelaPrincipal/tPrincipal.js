function sair() {
    // Redireciona para a tela de login, subindo uma pasta
    window.location.href = "../telaLogin/telaLogin.html";
}
const buttons = document.querySelectorAll('.disciplina-btn');

  buttons.forEach(btn => {
    btn.addEventListener('click', () => {
      const conteudo = btn.nextElementSibling;

      // Fecha todas as outras
      document.querySelectorAll('.conteudo').forEach(c => c.classList.remove('ativo'));

      // Abre ou fecha o clicado
      conteudo.classList.toggle('ativo');
    });
  });

  // Evento sair
  document.querySelector('.sair').addEventListener('click', () => {
    alert('Você saiu do sistema.');
    // window.location.href = 'login.html';
  });

  const buttons = document.querySelectorAll('.disciplina-btn');
    buttons.forEach(btn => {
      btn.addEventListener('click', () => {
        btn.classList.toggle('ativo');
        const conteudo = btn.nextElementSibling;
        if (conteudo) {
          conteudo.style.display = conteudo.style.display === 'block' ? 'none' : 'block';
        }
      });
    });