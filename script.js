const overlay = document.getElementById('pageOverlay'); 
const weekdays = document.querySelectorAll('.weekday');
const daynums = document.querySelectorAll('.daynum');
const weeknums = document.querySelectorAll('.weeknum');
const plantoes = document.querySelectorAll('.day');
let index = 0;
let indice = 0;
const shortMonth = document.querySelector('.shortday');
const normalMonth = document.querySelector('.normalday');
const longMonth = document.querySelector('.longday');
const tabela = document.querySelector('#tabela');
const nextBtn = document.querySelector('.nextBtn');
const currentBtn = document.querySelector('.currentBtn');
const previousBtn = document.querySelector('.previousBtn');
const confirmBtn  = document.querySelector('.confirmBtn');
const fixosBtn = document.querySelector('.goToFixos');
const myScale = document.querySelector('.myScale');
const diasDaSemana = ['Dom.', 'Seg.', 'Ter.', 'Qua.', 'Qui.', 'Sex.', 'Sáb.'];
const mesesDoAno = ['Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho', 'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro'];;
var scales = [
  [],
  [],
  [],
  [],
  [],
  [],
  []
];
let modalOn = false;
const closeBtnFixo = document.querySelector('.closeBtnFixo');
const menuBtn = document.querySelector('.menuBtn');
const menu = document.querySelector('.menu');
const closeMenuBtn = document.querySelector('.closeMenu'); 
const confirmBtnFixo = document.querySelector('.confirmBtnFixo');
const modalChaveFixo = document.querySelector('.modalChaveFixo');

overlay.addEventListener('click', () => {
  overlay.style.display = 'none';
  modalOn = false;
  menu.style.right = '-100%';
  setTimeout(() => {
    menu.style.display = 'none';
  })
  modalChaveTroca.style.display = 'none';
})


fetch('https://escala-62ed5-default-rtdb.firebaseio.com/escalas.json')
    .then(response => response.json())
    .then(escalas => {
        
        // BLOCO PARA CRIAR AS ESCALAS PARA CADA MÊS
        
        const escalaDom = []
        .concat(escalas.domingos.primeiroDomingo,
                escalas.segundas.primeiraSegunda,
                escalas.tercas.primeiraTerca,
                escalas.quartas.primeiraQuarta,
                escalas.quintas.primeiraQuinta,
                escalas.sextas.primeiraSexta,
                escalas.sabados.primeiroSabado,
                escalas.domingos.segundoDomingo,
                escalas.segundas.segundaSegunda,
                escalas.tercas.segundaTerca,
                escalas.quartas.segundaQuarta,
                escalas.quintas.segundaQuinta,
                escalas.sextas.segundaSexta,
                escalas.sabados.segundoSabado,
                escalas.domingos.terceiroDomingo,
                escalas.segundas.terceiraSegunda,
                escalas.tercas.terceiraTerca,
                escalas.quartas.terceiraQuarta,
                escalas.quintas.terceiraQuinta,
                escalas.sextas.terceiraSexta,
                escalas.sabados.terceiroSabado,
                escalas.domingos.quartoDomingo,
                escalas.segundas.quartaSegunda,
                escalas.tercas.quartaTerca,
                escalas.quartas.quartaQuarta,
                escalas.quintas.quartaQuinta,
                escalas.sextas.quartaSexta,
                escalas.sabados.quartoSabado,
                escalas.domingos.quintoDomingo,
                escalas.segundas.quintaSegunda,
                escalas.tercas.quintaTerca,
                escalas.quartas.quintaQuarta,
                escalas.quintas.quintaQuinta,
                escalas.sextas.quintaSexta,
                escalas.sabados.quintoSabado);
        
        const escalaSeg = []
        .concat(escalas.segundas.primeiraSegunda,
                escalas.tercas.primeiraTerca,
                escalas.quartas.primeiraQuarta,
                escalas.quintas.primeiraQuinta,
                escalas.sextas.primeiraSexta,
                escalas.sabados.primeiroSabado,
                escalas.domingos.primeiroDomingo,
                escalas.segundas.segundaSegunda,
                escalas.tercas.segundaTerca,
                escalas.quartas.segundaQuarta,
                escalas.quintas.segundaQuinta,
                escalas.sextas.segundaSexta,
                escalas.sabados.segundoSabado,
                escalas.domingos.segundoDomingo,
                escalas.segundas.terceiraSegunda,
                escalas.tercas.terceiraTerca,
                escalas.quartas.terceiraQuarta,
                escalas.quintas.terceiraQuinta,
                escalas.sextas.terceiraSexta,
                escalas.sabados.terceiroSabado,
                escalas.domingos.terceiroDomingo,
                escalas.segundas.quartaSegunda,
                escalas.tercas.quartaTerca,
                escalas.quartas.quartaQuarta,
                escalas.quintas.quartaQuinta,
                escalas.sextas.quartaSexta,
                escalas.sabados.quartoSabado,
                escalas.domingos.quartoDomingo,
                escalas.segundas.quintaSegunda,
                escalas.tercas.quintaTerca,
                escalas.quartas.quintaQuarta,
                escalas.quintas.quintaQuinta,
                escalas.sextas.quintaSexta,
                escalas.sabados.quintoSabado,
                escalas.domingos.quintoDomingo);

        const escalaTer = []
        .concat(escalas.tercas.primeiraTerca,
                escalas.quartas.primeiraQuarta,
                escalas.quintas.primeiraQuinta,
                escalas.sextas.primeiraSexta,
                escalas.sabados.primeiroSabado,
                escalas.domingos.primeiroDomingo,
                escalas.segundas.primeiraSegunda,
                escalas.tercas.segundaTerca,
                escalas.quartas.segundaQuarta,
                escalas.quintas.segundaQuinta,
                escalas.sextas.segundaSexta,
                escalas.sabados.segundoSabado,
                escalas.domingos.segundoDomingo,
                escalas.segundas.segundaSegunda,
                escalas.tercas.terceiraTerca,
                escalas.quartas.terceiraQuarta,
                escalas.quintas.terceiraQuinta,
                escalas.sextas.terceiraSexta,
                escalas.sabados.terceiroSabado,
                escalas.domingos.terceiroDomingo,
                escalas.segundas.terceiraSegunda,
                escalas.tercas.quartaTerca,
                escalas.quartas.quartaQuarta,
                escalas.quintas.quartaQuinta,
                escalas.sextas.quartaSexta,
                escalas.sabados.quartoSabado,
                escalas.domingos.quartoDomingo,
                escalas.segundas.quartaSegunda,
                escalas.tercas.quintaTerca,
                escalas.quartas.quintaQuarta,
                escalas.quintas.quintaQuinta,
                escalas.sextas.quintaSexta,
                escalas.sabados.quintoSabado,
                escalas.domingos.quintoDomingo,
                escalas.segundas.quintaSegunda);

        const escalaQua = []
        .concat(escalas.quartas.primeiraQuarta,
                escalas.quintas.primeiraQuinta,
                escalas.sextas.primeiraSexta,
                escalas.sabados.primeiroSabado,
                escalas.domingos.primeiroDomingo,
                escalas.segundas.primeiraSegunda,
                escalas.tercas.primeiraTerca,
                escalas.quartas.segundaQuarta,
                escalas.quintas.segundaQuinta,
                escalas.sextas.segundaSexta,
                escalas.sabados.segundoSabado,
                escalas.domingos.segundoDomingo,
                escalas.segundas.segundaSegunda,
                escalas.tercas.segundaTerca,
                escalas.quartas.terceiraQuarta,
                escalas.quintas.terceiraQuinta,
                escalas.sextas.terceiraSexta,
                escalas.sabados.terceiroSabado,
                escalas.domingos.terceiroDomingo,
                escalas.segundas.terceiraSegunda,
                escalas.tercas.terceiraTerca,
                escalas.quartas.quartaQuarta,
                escalas.quintas.quartaQuinta,
                escalas.sextas.quartaSexta,
                escalas.sabados.quartoSabado,
                escalas.domingos.quartoDomingo,
                escalas.segundas.quartaSegunda,
                escalas.tercas.quartaTerca,
                escalas.quartas.quintaQuarta,
                escalas.quintas.quintaQuinta,
                escalas.sextas.quintaSexta,
                escalas.sabados.quintoSabado,
                escalas.domingos.quintoDomingo,
                escalas.segundas.quintaSegunda,
                escalas.tercas.quintaTerca);

        const escalaQui = []
        .concat(escalas.quintas.primeiraQuinta,
                escalas.sextas.primeiraSexta,
                escalas.sabados.primeiroSabado,
                escalas.domingos.primeiroDomingo,
                escalas.segundas.primeiraSegunda,
                escalas.tercas.primeiraTerca,
                escalas.quartas.primeiraQuarta,
                escalas.quintas.segundaQuinta,
                escalas.sextas.segundaSexta,
                escalas.sabados.segundoSabado,
                escalas.domingos.segundoDomingo,
                escalas.segundas.segundaSegunda,
                escalas.tercas.segundaTerca,
                escalas.quartas.segundaQuarta,
                escalas.quintas.terceiraQuinta,
                escalas.sextas.terceiraSexta,
                escalas.sabados.terceiroSabado,
                escalas.domingos.terceiroDomingo,
                escalas.segundas.terceiraSegunda,
                escalas.tercas.terceiraTerca,
                escalas.quartas.terceiraQuarta,
                escalas.quintas.quartaQuinta,
                escalas.sextas.quartaSexta,
                escalas.sabados.quartoSabado,
                escalas.domingos.quartoDomingo,
                escalas.segundas.quartaSegunda,
                escalas.tercas.quartaTerca,
                escalas.quartas.quartaQuarta,
                escalas.quintas.quintaQuinta,
                escalas.sextas.quintaSexta,
                escalas.sabados.quintoSabado,
                escalas.domingos.quintoDomingo,
                escalas.segundas.quintaSegunda,
                escalas.tercas.quintaTerca,
                escalas.quartas.quintaQuarta,);

        const escalaSex = []
        .concat(escalas.sextas.primeiraSexta,
                escalas.sabados.primeiroSabado,
                escalas.domingos.primeiroDomingo,
                escalas.segundas.primeiraSegunda,
                escalas.tercas.primeiraTerca,
                escalas.quartas.primeiraQuarta,
                escalas.quintas.primeiraQuinta,
                escalas.sextas.segundaSexta,
                escalas.sabados.segundoSabado,
                escalas.domingos.segundoDomingo,
                escalas.segundas.segundaSegunda,
                escalas.tercas.segundaTerca,
                escalas.quartas.segundaQuarta,
                escalas.quintas.segundaQuinta,
                escalas.sextas.terceiraSexta,
                escalas.sabados.terceiroSabado,
                escalas.domingos.terceiroDomingo,
                escalas.segundas.terceiraSegunda,
                escalas.tercas.terceiraTerca,
                escalas.quartas.terceiraQuarta,
                escalas.quintas.terceiraQuinta,
                escalas.sextas.quartaSexta,
                escalas.sabados.quartoSabado,
                escalas.domingos.quartoDomingo,
                escalas.segundas.quartaSegunda,
                escalas.tercas.quartaTerca,
                escalas.quartas.quartaQuarta,
                escalas.quintas.quartaQuinta,
                escalas.sextas.quintaSexta,
                escalas.sabados.quintoSabado,
                escalas.domingos.quintoDomingo,
                escalas.segundas.quintaSegunda,
                escalas.tercas.quintaTerca,
                escalas.quartas.quintaQuarta,
                escalas.quintas.quintaQuinta,);

        const escalaSab = []
        .concat(escalas.sabados.primeiroSabado,
                escalas.domingos.primeiroDomingo,
                escalas.segundas.primeiraSegunda,
                escalas.tercas.primeiraTerca,
                escalas.quartas.primeiraQuarta,
                escalas.quintas.primeiraQuinta,
                escalas.sextas.primeiraSexta,
                escalas.sabados.segundoSabado,
                escalas.domingos.segundoDomingo,
                escalas.segundas.segundaSegunda,
                escalas.tercas.segundaTerca,
                escalas.quartas.segundaQuarta,
                escalas.quintas.segundaQuinta,
                escalas.sextas.segundaSexta,
                escalas.sabados.terceiroSabado,
                escalas.domingos.terceiroDomingo,
                escalas.segundas.terceiraSegunda,
                escalas.tercas.terceiraTerca,
                escalas.quartas.terceiraQuarta,
                escalas.quintas.terceiraQuinta,
                escalas.sextas.terceiraSexta,
                escalas.sabados.quartoSabado,
                escalas.domingos.quartoDomingo,
                escalas.segundas.quartaSegunda,
                escalas.tercas.quartaTerca,
                escalas.quartas.quartaQuarta,
                escalas.quintas.quartaQuinta,
                escalas.sextas.quartaSexta,
                escalas.sabados.quintoSabado,
                escalas.domingos.quintoDomingo,
                escalas.segundas.quintaSegunda,
                escalas.tercas.quintaTerca,
                escalas.quartas.quintaQuarta,
                escalas.quintas.quintaQuinta,
                escalas.sextas.quintaSexta);
        

        scales = [escalaDom, escalaSeg, escalaTer, escalaQua, escalaQui, escalaSex, escalaSab];
    })
    .catch(error => console.error(error));

closeBtnFixo.addEventListener('click', () => {
  modalChaveFixo.style.display = 'none'; 
  overlay.style.display = 'none';
    modalOn = false;
})

confirmBtnFixo.addEventListener('click', () => {
  let chave = document.querySelector('.chave').value;

  if (chave === '4024') {
    location.href = 'trocaFixos.html';
  } else {
    alert('Chave Incorreta!');
    document.querySelector('.chave').value = '';
  }
})

 fixosBtn.addEventListener('click', () => {
  if (modalOn) {
    modalChaveFixo.style.display = 'none'; 
    overlay.style.display = 'none';
    modalOn = false;
  } else {
    menu.style.right = '-100%';
    setTimeout(() => {
      menu.style.display = 'none';
    }, 50);
    modalChaveFixo.style.display = 'flex';
    overlay.style.display = 'block';
    modalOn = true;
  }
 })

menuBtn.addEventListener('click', () => {
  menu.style.display = 'block';
  overlay.style.display = 'block';
  setTimeout(() => {
    menu.style.right = '0px';
  }, 50);
})
 
closeMenuBtn.addEventListener('click', () => {
  menu.style.right = '-100%';
  setTimeout(() => {
    menu.style.display = 'none';
    overlay.style.display = 'none';
  }, 50);
 })

previousBtn.addEventListener('click', () => {
  tabela.style.opacity = .5;
  
  setTimeout(() => {
    index = index - 1;
    nextMonth()
    tabela.style.opacity = 1;
  }, 100)
})

currentBtn.addEventListener('click', () => {
  tabela.style.opacity = .5;
  setTimeout(() => {
    index = 0;
    currentMonth()
    tabela.style.opacity = 1;
  }, 100)

})

nextBtn.addEventListener('click', () => {
  tabela.style.opacity = .5;
  
  setTimeout(() => {
    index = index + 1;
    nextMonth()
    tabela.style.opacity = 1;
  }, 100)

})

function hiddeDays(dia) {
    if (dia == 28) {
        shortMonth.style.opacity = '0';
        normalMonth.style.opacity = '0';
        longMonth.style.opacity = '0';
    } if (dia == 29) {
        shortMonth.style.opacity = '1';
        normalMonth.style.opacity = '0';
        longMonth.style.opacity = '0';
    } if (dia == 30) {
        shortMonth.style.opacity = '1';
        normalMonth.style.opacity = '1';
        longMonth.style.opacity = '0';
    } else if (dia == 31) {
        shortMonth.style.opacity = '1';
        normalMonth.style.opacity = '1';
        longMonth.style.opacity = '1';
    }

}

function nextMonth() {
    // Criar um objeto Date para a data atual
    const dataAtual = new Date();
  
    // Obter o mês atual
    const mesAtual = dataAtual.getMonth();
  
    // Configurar a data para o primeiro dia do próximo mês
    dataAtual.setMonth(mesAtual + index, 1);

    // Obter o nome do mês seguinte
    let mesSeguinte = dataAtual.getMonth();
    mesSeguinte = mesesDoAno[mesSeguinte];
    let anoAtual = dataAtual.getFullYear();
  
    // Obter o dia da semana para o primeiro dia do próximo mês (0 a 6)
    const diaDaSemanaProximoMes = dataAtual.getDay();

    //obter o ultimo dia do mes
    const ultimoDiaDoMes = new Date(dataAtual.getFullYear(), dataAtual.getMonth() + 1, 0).getDate()
    //passando o ultimo dia do mes como parametro para a função que oculta o dia 29, 30 e/ou 31
    hiddeDays(ultimoDiaDoMes)
  
    // Obter o nome do dia da semana
    const nomeDoDiaDaSemana = diasDaSemana[diaDaSemanaProximoMes];

    // Obter o dia da semana para cada dia do mês
    for (let i = 0; i < 31; i++) {
      const diaDaSemanaAtual = (diaDaSemanaProximoMes + i) % 7; // Lidando com os dias além do índice 6
      weekdays[i].textContent = diasDaSemana[diaDaSemanaAtual];
    }

    fillScale(diaDaSemanaProximoMes);

    // Atualizar o titulo da pagina com o primeiro dia do mes
    document.querySelector('.title').innerHTML =('Escala de plantões FIXOS para o mes de ' + mesSeguinte +'/'+ anoAtual + '.');

    
}

function currentMonth() {
  // Criar um objeto Date para a data atual
  const dataAtual = new Date();
  
  // Obter o mês atual
  const mesAtual = dataAtual.getMonth();

  // Configurar a data para o primeiro dia do próximo mês
  dataAtual.setMonth(mesAtual, 1);

  // Obter o nome do mês seguinte
  let mesSeguinte = dataAtual.getMonth();
  mesSeguinte = mesesDoAno[mesSeguinte];

  // Obter o dia da semana para o primeiro dia do próximo mês (0 a 6)
  const diaDaSemanaProximoMes = dataAtual.getDay();
  let anoAtual = dataAtual.getFullYear();

  //obter o ultimo dia do mes
  const ultimoDiaDoMes = new Date(dataAtual.getFullYear(), dataAtual.getMonth() + 1, 0).getDate()
  //passando o ultimo dia do mes como parametro para a função que oculta o dia 29, 30 e/ou 31
  hiddeDays(ultimoDiaDoMes)

  // Obter o nome do dia da semana
  const nomeDoDiaDaSemana = diasDaSemana[diaDaSemanaProximoMes];

  // Obter o dia da semana para cada dia do mês
  for (let i = 0; i < 31; i++) {
    const diaDaSemanaAtual = (diaDaSemanaProximoMes + i) % 7; // Lidando com os dias além do índice 6
    weekdays[i].textContent = diasDaSemana[diaDaSemanaAtual];
  }

  fillScale(diaDaSemanaProximoMes);

  // Atualizar o titulo da pagina com o primeiro dia do mes
  document.querySelector('.title').innerHTML =('Escala de plantões FIXOS para o mes de ' + mesSeguinte +'/'+ anoAtual + '.');
}

function fillScale(dia) {
  for (let i = 0; i < plantoes.length; i++) { 
      plantoes[i].innerHTML = scales[dia][i];
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

window.onload = () => {
  currentMonth();
  setDayNum();
  setWeekNum();
  setTimeout(() => {
    currentBtn.click();
    setTimeout(() => {
      currentBtn.click();
      document.body.style.opacity = '1';
    },200)
  }, 500)
}