
const weekdays = document.querySelectorAll('.weekday');
const diasDaSemana = ['Domingo', 'Segunda-feira', 'Terça-feira', 'Quarta-feira', 'Quinta-feira', 'Sexta-feira', 'Sábado'];
const daynums = document.querySelectorAll('.daynum');
const weeknums = document.querySelectorAll('.weeknum');
const plantoes = document.querySelectorAll('.day');
const scale = [
  /*1 segunda*/

  'ROSA',
  'LILIAN',
  'TELMO',
  'LUCIANE',

  'KARINA',
  'ANA LUISA',
  'ADRIANO',
  'ADRIANO',

  'MARLENE',
  'JEAN',
  'MARIANA',
  'STAVROS',

  'ANA LUISA',
  'TELMO',
  'ANA PETRY',
  'LUCIANE',

  'ROSA',
  'LILIAN',
  'TELMO',
  'GILBERTO',

  'ANA LUISA',
  'JEAN',
  'CRISTIANE',
  'LUZZI',

  'LUCIANE',
  '',
  'CRISTIANE',
  'LUZZI',

  /* 2 segunda*/

  "MARLENE",
  "MARIANA",
  "LILIAN",
  "ESTEVÃO",

  "LILIAN",
  "TELMO",
  "ANA LUISA",
  "ADRIANO",

  "MARLENE",
  "TELMO",
  "JEAN",
  "STAVROS",

  "MARCIA",
  "LEILA",
  "ANA PETRY",
  "GILBERTO",

  "ROSA",
  "MARIANA",
  "LILIAN",
  "COUTINHO",

  "RAQUEL",
  "JEAN",
  "TELMO",
  "ESTEVÃO",

  "GILBERTO",
  '',
  "GILBERTO",
  "ESTEVÃO",

  /* 3 segunda*/

  "LILIAN",
  "TELMO",
  "JEAN",
  "LUCIANE",

  "KARINA",
  "ANA LUISA",
  "ADRIANO",
  "ADRIANO",

  "MARLENE",
  "LEILA",
  "MARIANA",
  "STAVROS",

  "MARLENE",
  "ANA PETRY",
  "ADRIANO",
  "LUCIANE",

  "LILIAN",
  "TELMO",
  "ANA PETRY",
  "LUZZI",

  "GILBERTO",
  "JEAN",
  "GILBERTO",
  "LUCIANE",

  "GILBERTO",
  '',
  "LILIAN",
  "LUZZI",

  /* 4 segunda */

  "MARCIA",
  "ADRIANO",
  "LILIAN",
  "GREICE",

  "ANA PETRY",
  "LILIAN",
  "ANA LUISA",
  "ADRIANO",

  "MARLENE",
  "JEAN",
  "MARIANA",
  "STAVROS",

  "ANA LUISA",
  "ROSA",
  "ANA PETRY",
  "GILBERTO",

  "MARCIA",
  "GUSTAVO",
  "ROSA",
  "JESSICA",

  "JEAN",
  "MARIANA",
  "ADRIANO",
  "ESTEVÃO",

  "ESTEVÃO",
  '',
  "GILBERTO",
  "GILBERTO",

  /* 5 segunda */ 

  "LUCIANE",
  "TELMO",
  "GUSTAVO",
  "CRISTIANE",

  "KARINA",
  "ANA LUISA",
  "ADRIANO",
  "GREICE",

  "MARLENE",
  "JEAN",
  "TELMO",
  "COUTINHO",
  
  "ANA LUISA",
  "ANA PETRY",
  "CRISTIANE",
  "COUTINHO",

  "ROSA",
  "MARIANA",
  "JEAN",
  "GREICE",

  "GILBERTO",
  "GUSTAVO",
  "JEAN",
  "CRISTIANE",

  "GUSTAVO",
  '',
  "GUSTAVO",
  "JESSICA",

];
let indice = 0;
let index = 1;
const btn = document.querySelector('.nextBtn');

btn.addEventListener('click', () => {
  index = index + 1;
  fillScale();
  diaDaSemanaNoProximoMes()
  definirCoresNaTabela()
  setDayNum();
  setWeekNum();

})

function fillScale () {
  for (let i = 0; i < plantoes.length; i++) {
    plantoes[i].innerHTML = scale[indice];
    indice++;
  }
}

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
    dataAtual.setMonth(mesAtual + index, 1);
  
    // Obter o dia da semana para o primeiro dia do próximo mês (0 a 6)
    const diaDaSemanaProximoMes = dataAtual.getDay();

    if (diaDaSemanaProximoMes === 0) {
      indice = 24;
    } if (diaDaSemanaProximoMes === 1) {
      indice = 0;
    } if (diaDaSemanaProximoMes === 2) {
      indice = 4;
    } if (diaDaSemanaProximoMes === 3) {
      indice = 8;
    } if (diaDaSemanaProximoMes === 4) {
      indice = 12;
    } if (diaDaSemanaProximoMes === 5) {
      indice = 16;
    } if (diaDaSemanaProximoMes === 6) {
      indice = 20;
    }
  
    // Array com os nomes dos dias da semana
     
    // Obter o nome do dia da semana
    const nomeDoDiaDaSemana = diasDaSemana[diaDaSemanaProximoMes];

    

    for (let i = 0; i < 31; i++) {
      const diaDaSemanaAtual = (diaDaSemanaProximoMes + i) % 7; // Lidando com os dias além do índice 6
      weekdays[i].textContent = diasDaSemana[diaDaSemanaAtual];
    }
    
    fillScale();

    document.querySelector('.title').innerHTML =("O primeiro dia do próximo mês será um(a) " + nomeDoDiaDaSemana + ".");

    return nomeDoDiaDaSemana;
  }

weekdays[0].innerHTML = diaDaSemanaNoProximoMes();


definirCoresNaTabela()
setDayNum();
setWeekNum();

// Chamando a função e exibindo o resultado
let diaDaSemanaProximoMes = diaDaSemanaNoProximoMes();
