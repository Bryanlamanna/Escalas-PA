window.addEventListener('load', () => {
    let deferredPrompt;
  
    window.addEventListener('beforeinstallprompt', (e) => {
      // Impedir que o navegador exiba o prompt de instalação padrão
      e.preventDefault();
      // Salvar o evento para usar posteriormente
      deferredPrompt = e;
    });
  
    // Adicionar evento de clique ao botão de instalação
    document.querySelector('.installButton').addEventListener('click', () => {
      // Verificar se o prompt de instalação está disponível
      if (deferredPrompt) {
        // Mostrar o prompt de instalação
        deferredPrompt.prompt();
        // Aguarde o usuário responder ao prompt
        deferredPrompt.userChoice.then((choiceResult) => {
          // Se o usuário aceitar a instalação, faça algo (opcional)
          if (choiceResult.outcome === 'accepted') {
            console.log('Usuário aceitou a instalação');
          }
          // Limpar a variável do prompt para que não possamos usá-la novamente
          deferredPrompt = null;
        });
      }
    });
  });