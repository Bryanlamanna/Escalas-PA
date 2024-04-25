const overlay = document.getElementById('pageOverlay'); 
const weekdays = document.querySelectorAll('.weekday');
const daynums = document.querySelectorAll('.daynum');
const weeknums = document.querySelectorAll('.weeknum');
const plantoes = document.querySelectorAll('.day');
const shortMonth = document.querySelector('.shortday');
const normalMonth = document.querySelector('.normalday');
const longMonth = document.querySelector('.longday');
const tabela = document.querySelector('#tabela');
const nextBtn = document.querySelector('.nextBtn');
const currentBtn = document.querySelector('.currentBtn');
const previousBtn = document.querySelector('.previousBtn');
const confirmBtnTroca  = document.querySelector('.confirmBtnTroca');
const confirmBtnFixo = document.querySelector('.confirmBtnFixo');
const confirmBtnMes = document.querySelector('.confirmBtnMes');
const modalChaveFixo = document.querySelector('.modalChaveFixo');
const modalChaveTroca = document.querySelector('.modalChaveTroca');
const modalNextMonth = document.querySelector('.modalTrocaMes');
const trocasBtn = document.querySelector('.editBtn');
const fixosBtn = document.querySelector('.goToFixos');
const nextScaleBtn = document.querySelector('.goToNext');
let modalOn = false;
const closeBtnFixo = document.querySelector('.closeBtnFixo');
const closeBtnTroca = document.querySelector('.closeBtnTroca');
const closeBtnMes = document.querySelector('.closeBtnMes');
const menuBtn = document.querySelector('.menuBtn');
const menu = document.querySelector('.menu');
const closeMenuBtn = document.querySelector('.closeMenu'); 
const diasDaSemana = ['Dom.', 'Seg.', 'Ter.', 'Qua.', 'Qui.', 'Sex.', 'Sáb.'];
const mesesDoAno = ['Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho', 'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro'];

overlay.addEventListener('click', () => {
  overlay.style.display = 'none';
  modalOn = false;
  menu.style.right = '-100%';
  setTimeout(() => {
    menu.style.display = 'none';
  })
  modalChaveFixo.style.display = 'none';
  modalChaveTroca.style.display = 'none';
  modalNextMonth.style.display = 'none';
})

/*
nextScaleBtn.addEventListener('click', () => {
  if (modalOn) {
    modalNextMonth.style.display = 'none'; 
    modalOn = false;
    overlay.style.display = 'none';
  } else {
    menu.style.right = '-100%';
    setTimeout(() => {
      menu.style.display = 'none';
  }, 50);
    modalNextMonth.style.display = 'flex';
    overlay.style.display = 'block';
    modalOn = true;
}
})*/

fixosBtn.addEventListener('click', () => {
  if (modalOn) {
    modalChaveFixo.style.display = 'none'; 
    modalOn = false;
    overlay.style.display = 'none';
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
  setTimeout(() => {
    menu.style.right = '0px';
    overlay.style.display = 'block';
  }, 50);
})
 
closeMenuBtn.addEventListener('click', () => {
  menu.style.right = '-100%';
  setTimeout(() => {
    menu.style.display = 'none';
    overlay.style.display = 'none';
  }, 50);
})

closeBtnTroca.addEventListener('click', () => {
  modalChaveTroca.style.display = 'none'; 
  overlay.style.display = 'none';
    modalOn = false;
})

closeBtnFixo.addEventListener('click', () => {
  modalChaveFixo.style.display = 'none'; 
  overlay.style.display = 'none';
    modalOn = false;
})

closeBtnMes.addEventListener('click', () => {
  modalNextMonth.style.display = 'none';
  overlay.style.display = 'none';
    modalOn = false;
})

trocasBtn.addEventListener('click', () => {
  if (modalOn) {
    modalChaveTroca.style.display = 'none'; 
    overlay.style.display = 'none';
    modalOn = false;
  } else {
    menu.style.right = '-100%';
    setTimeout(() => {
      menu.style.display = 'none';
    }, 50);
    modalChaveTroca.style.display = 'flex';
    overlay.style.display = 'block';
    modalOn = true;
  }
})

confirmBtnMes.addEventListener('click', () => {
  let chave = document.querySelector('.chaveMes').value;

  if (chave === '4024') {
    if (confirm('Confirma a troca de mês?')) {
      switchMonth()
      } else {
      alert('Operação cancelada');
    }
  } else {
    alert('Chave Incorreta!');
    document.querySelector('.chaveMes').value = '';
  }

})

confirmBtnTroca.addEventListener('click', () => {
  let chave = document.querySelector('.chaveTroca').value;

  if (chave === '4024') {
    includeScript();
    modalChaveTroca.style.display = 'none'; 
    modalOn = false;
    overlay.style.display = 'none';
    plantoes.forEach(cell => {
      cell.style.backgroundColor = 'white';
      cell.style.color = 'black';
    })
  } else {
    alert('Chave Incorreta!');
    document.querySelector('.chaveTroca').value = '';
  }
  
})

confirmBtnFixo.addEventListener('click', () => {
  let chave = document.querySelector('.chaveFixo').value;

  if (chave === '4024') {
    location.href = 'trocaFixos.html';
  } else {
    alert('Chave Incorreta!');
    document.querySelector('.chaveFixo').value = '';
  }
})

function presentDay() {

  const hour =  new Date().getHours();
  const today = new Date();
  const day = today.getDate();
  const tableLines = document.querySelectorAll('#tabela tr');
  const linhaHoje = tableLines[day+1].querySelectorAll('td');
  const linhaOntem = tableLines[day].querySelectorAll('td');  

      if (hour < 8) {
          linhaOntem[2].style.backgroundColor = '#5e5e5e';
          linhaOntem[3].style.backgroundColor = '#5e5e5e';
          linhaOntem[4].style.backgroundColor = '#5e5e5e';
          linhaOntem[5].style.backgroundColor = '#886db9';
          linhaOntem[5].style.color = 'white';
        } else if (hour >= 8 && hour < 12) {
          linhaHoje[2].style.backgroundColor = '#886db9';
          linhaHoje[2].style.color = 'white';
          linhaHoje[3].style.backgroundColor = '#5e5e5e';
          linhaHoje[4].style.backgroundColor = '#5e5e5e';
          linhaHoje[5].style.backgroundColor = '#5e5e5e';
        } else if (hour >= 12 && hour < 14) {
          linhaHoje[2].style.backgroundColor = '#886db9';
          linhaHoje[2].style.color = 'white';
          linhaHoje[3].style.backgroundColor = '#886db9';
          linhaHoje[3].style.color = 'white';
          linhaHoje[4].style.backgroundColor = '#5e5e5e';
          linhaHoje[5].style.backgroundColor = '#5e5e5e';
        } else if (hour >= 14 && hour < 18) {
          linhaHoje[2].style.backgroundColor = '#5e5e5e';
          linhaHoje[3].style.backgroundColor = '#886db9';
          linhaHoje[3].style.color = 'white';
          linhaHoje[4].style.backgroundColor = '#886db9';
          linhaHoje[4].style.color = 'white';
          linhaHoje[5].style.backgroundColor = '#5e5e5e';
        } else if (hour >= 18 && hour < 20) {
          linhaHoje[2].style.backgroundColor = '#5e5e5e';
          linhaHoje[3].style.backgroundColor = '#5e5e5e';
          linhaHoje[4].style.backgroundColor = '#886db9';
          linhaHoje[4].style.color = 'white';
          linhaHoje[5].style.backgroundColor = '#5e5e5e';
        } else if (hour >= 20) {
          linhaHoje[2].style.backgroundColor = '#5e5e5e';
          linhaHoje[3].style.backgroundColor = '#5e5e5e';
          linhaHoje[4].style.backgroundColor = '#5e5e5e';
          linhaHoje[5].style.backgroundColor = '#886db9';
          linhaHoje[5].style.color = 'white';
        }

}

function includeScript() {
  var script = document.createElement('script');
  script.src = 'changes.js'; // Substitua pelo caminho do seu script
  script.type = 'text/javascript';
  script.id = 'changes'; // Atribui um ID ao script
  document.head.appendChild(script);
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

function hiddeDays(dia) {
  if (dia == 28) {
      shortMonth.style.visibility = 'hidden';
      normalMonth.style.visibility = 'hidden';
      longMonth.style.visibility = 'hidden';
  } if (dia == 29) {
      shortMonth.style.visibility = 'visible';
      normalMonth.style.visibility = 'hidden';
      longMonth.style.visibility = 'hidden';
  } if (dia == 30) {
      shortMonth.style.visibility = 'visible';
      normalMonth.style.visibility = 'visible';
      longMonth.style.visibility = 'hidden';
  } else if (dia == 31) {
      shortMonth.style.visibility = 'visible';
      normalMonth.style.visibility = 'visible';
      longMonth.style.visibility = 'visible';
  }

}

function createMyScale() {  
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
  
    // Obter o nome do dia da semana
    const nomeDoDiaDaSemana = diasDaSemana[diaDaSemanaProximoMes];
  
    // Obter o dia da semana para cada dia do mês
    for (let i = 0; i < 31; i++) {
      const diaDaSemanaAtual = (diaDaSemanaProximoMes + i) % 7; // Lidando com os dias além do índice 6
      weekdays[i].textContent = diasDaSemana[diaDaSemanaAtual];
    }
  
    saveScale(ultimoDiaDoMes);
  
    // Atualizar o titulo da pagina com o primeiro dia do mes
    document.querySelector('.title').innerHTML =('Escala de ' + mesSeguinte + '/' + anoAtual);
  
 }
 
function saveScale(lastDay) {
 
  const databaseURL = "https://scalesdb-76ec1-default-rtdb.firebaseio.com/scaleThis.json";

  fetch(databaseURL)
    .then(response => {
      if (!response.ok) {
        throw new Error('Erro ao recuperar os dados.');
      }
      return response.json();
    })
    .then(data => {

      if (lastDay == 30) {
        data.splice(120, 4);
      } else if (lastDay == 29) {
        data.splice(116, 8);
      } else if (lastDay == 28) {
        data.splice(112, 12);
      }

      for (let i = 0; i < plantoes.length; i++) {
        if (data[i]=== '------') {
          plantoes[i].innerHTML = data[i];
          plantoes[i].style.backgroundColor = '#5e5e5e';
        } else {
          plantoes[i].innerHTML = data[i];
        }
        
      }
      hiddeDays(lastDay);

    })
    .catch(error => {
      console.error('Erro:', error);
    });
  
}

function updateColors() {
  fetch('https://positionsdb-45ad9-default-rtdb.firebaseio.com/positionsThis.json')
   .then(response => response.json())
   .then(data => {
     // Verifique se os dados estão presentes e se é um array
     if (data && Array.isArray(data)) {
       // Crie um novo array com os valores booleanos
       const positionsDB = data.map(item => !!item); // Converte para booleano
 
       for (let i = 0; i < plantoes.length; i++) {
        if (positionsDB[i] === true) {
          plantoes[i].style.color = 'red';
        } else {
          plantoes[i].style.color = 'unset';
        }
      }
     } else {
       console.log('Os dados não são um array ou estão vazios.');
     }
   })
   .catch(error => console.error('Ocorreu um erro ao obter os dados:', error));
}

async function makeScale(day) {
  try {
const response = await fetch('https://escala-62ed5-default-rtdb.firebaseio.com/escalas.json');
const escalas = await response.json();
var scales = [
 [],
 [],
 [],
 [],
 [],
 [],
 []
];
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
   escalas.quartas.quintaQuarta);

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
   escalas.quintas.quintaQuinta);

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
return scales[day];
} catch (error) {
return console.error(error);
}
}

function switchMonth() {  
 const escalaProximo = fetch('https://scalesdb-76ec1-default-rtdb.firebaseio.com/scaleNext.json')
                     .then(response => response.json())
                     .then( data => {
                       fetch ('https://scalesdb-76ec1-default-rtdb.firebaseio.com/scaleThis.json', {
                         method: 'PUT',
                         body: JSON.stringify(data),
                         headers: {
                           'Content-Type': 'application/json'
                         }
                       })  
                     });
 
const coresProximo = fetch('https://positionsdb-45ad9-default-rtdb.firebaseio.com/positionsNext.json')
                     .then(response => response.json())
                     .then( data => {
                       fetch ('https://positionsdb-45ad9-default-rtdb.firebaseio.com/positionsThis.json', {
                         method: 'PUT',
                         body: JSON.stringify(data),
                         headers: {
                           'Content-Type': 'application/json'
                         }
                       })
                     });

const today = new Date();
const nextMonth = new Date(today.getFullYear(), today.getMonth() + 1, 1);
const firstDayNextMonth = nextMonth.getDay();
const register = `${mesesDoAno[today.getMonth()]}-${today.getFullYear()}`;                 
const escalaAtual = fetch('https://scalesdb-76ec1-default-rtdb.firebaseio.com/scaleThis.json')
                     .then(response => response.json())
                     .then( data => {
                       fetch (`https://scalesdb-76ec1-default-rtdb.firebaseio.com/escala${register}.json`, {
                         method: 'PUT',
                         body: JSON.stringify(data),
                         headers: {
                           'Content-Type': 'application/json'
                         }
                     })
                     });


makeScale(firstDayNextMonth).then(data => {
       fetch('https://scalesdb-76ec1-default-rtdb.firebaseio.com/scaleNext.json', {
         method: 'PUT',
         body: JSON.stringify(data),
         headers: {
           'Content-Type': 'application/json'
         }
       }).then(() => {
         location.reload();
       })
       .catch(error => console.error(error));
 });    

}

function setBtnText() {
  const today = new Date();
  const month = mesesDoAno[today.getMonth()+1].toUpperCase();
  
  document.querySelector('.currentBtn span').textContent = `${month}/${today.getFullYear()}`;
}

  window.onload = () => {

          createMyScale()
          /*updateColors()*/
          setDayNum();
          setWeekNum();
          presentDay();
          setBtnText()

          document.body.style.opacity = '1';

    
  }