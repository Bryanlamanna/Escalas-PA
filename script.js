function diaDaSemanaNoProximoMes() {
    // Criar um objeto Date para a data atual
    const dataAtual = new Date();
  
    // Obter o mês atual
    const mesAtual = dataAtual.getMonth();
  
    // Configurar a data para o primeiro dia do próximo mês
    dataAtual.setMonth(mesAtual + 1, 1);
  
    // Obter o dia da semana para o primeiro dia do próximo mês (0 a 6)
    const diaDaSemanaProximoMes = dataAtual.getDay();
  
    // Array com os nomes dos dias da semana
    const diasDaSemana = ['Domingo', 'Segunda-feira', 'Terça-feira', 'Quarta-feira', 'Quinta-feira', 'Sexta-feira', 'Sábado'];
  
    // Obter o nome do dia da semana
    const nomeDoDiaDaSemana = diasDaSemana[diaDaSemanaProximoMes];
  
    return nomeDoDiaDaSemana;
  }
  
  // Chamando a função e exibindo o resultado
  const diaDaSemanaProximoMes = diaDaSemanaNoProximoMes();
  document.querySelector('.title').innerHTML =("O primeiro dia do próximo mês será um(a) " + diaDaSemanaProximoMes + ".");