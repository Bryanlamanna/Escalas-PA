
const weekdays = document.querySelectorAll('.weekday');
const diasDaSemana = ['Domingo', 'Segunda-feira', 'Terça-feira', 'Quarta-feira', 'Quinta-feira', 'Sexta-feira', 'Sábado'];
const daynums = document.querySelectorAll('.daynum');
const weeknums = document.querySelectorAll('.weeknum');
const scales = document.querySelectorAll('.day');

function setDayNum () {
  for (let i = 0; i < daynums.length; i++) {
    daynums[i].innerHTML = i+1;
  }  
}

function setWeekNum () {
  for (let i = 0; i < 7; i++) {
    weeknums[i].innerHTML = '1';
  }
  for (let i = 7; i < 14; i++) {
    weeknums[i].innerHTML = '2';
  }
  for (let i = 14; i < 21; i++) {
    weeknums[i].innerHTML = '3';
  }
  for (let i = 21; i < 28; i++) {
    weeknums[i].innerHTML = '4';
  }
  for (let i = 28; i < weeknums.length; i++) {
    weeknums[i].innerHTML = '5';
  }
}

function definirCoresNaTabela() {
  const tabela = document.querySelector('.tabela');
  const linhas = document.querySelectorAll('tr');

  // Array com as classes de cor
  const classesDeCor = ['cor1', 'cor2', 'cor3', 'cor4', 'cor5', 'cor6', 'cor7'];

  // Loop para atribuir classes de cor às linhas
  linhas.forEach((linha, indice) => {
    const classeDeCor = classesDeCor[indice % classesDeCor.length];
    linha.classList.add(classeDeCor);
  });
}

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
     
    // Obter o nome do dia da semana
    const nomeDoDiaDaSemana = diasDaSemana[diaDaSemanaProximoMes];

    

    for (let i = 1; i < 31; i++) {
      const diaDaSemanaAtual = (diaDaSemanaProximoMes + i) % 7; // Lidando com os dias além do índice 6
      weekdays[i].textContent = diasDaSemana[diaDaSemanaAtual];
    }
    
    

    return nomeDoDiaDaSemana;
  }

weekdays[0].innerHTML = diaDaSemanaNoProximoMes();


definirCoresNaTabela()
setDayNum();
setWeekNum();

// Chamando a função e exibindo o resultado
const diaDaSemanaProximoMes = diaDaSemanaNoProximoMes();
document.querySelector('.title').innerHTML =("O primeiro dia do próximo mês será um(a) " + diaDaSemanaProximoMes + ".");