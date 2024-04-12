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
const modalChaveFixo = document.querySelector('.modalChaveFixo');
const modalChaveTroca = document.querySelector('.modalChaveTroca');
const trocasBtn = document.querySelector('.editBtn');
const fixosBtn = document.querySelector('.goToFixos');
let modalOn = false;
const closeBtnFixo = document.querySelector('.closeBtnFixo');
const closeBtnTroca = document.querySelector('.closeBtnTroca');
const menuBtn = document.querySelector('.menuBtn');
const menu = document.querySelector('.menu');
const closeMenuBtn = document.querySelector('.closeMenu'); 
const diasDaSemana = ['Dom.', 'Seg.', 'Ter.', 'Qua.', 'Qui.', 'Sex.', 'Sáb.'];
const mesesDoAno = ['Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho', 'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro'];;

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

closeBtnFixo.addEventListener('click', () => {
  modalChaveFixo.style.display = 'none'; 
    overlay.style.display = 'none';
    modalOn = false;
})

closeBtnTroca.addEventListener('click', () => {
  modalChaveTroca.style.display = 'none'; 
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

confirmBtnTroca.addEventListener('click', () => {
  let chave = document.querySelector('.chaveTroca').value;

  if (chave === '4024') {
    includeScript();
    modalChaveTroca.style.display = 'none'; 
    modalOn = false;
    plantoes.forEach(cell => {
      cell.style.backgroundColor = 'white';
      cell.style.color = 'black';
    })
    overlay.style.display = 'none';
  } else {
    alert('Chave Incorreta!');
    document.querySelector('.chaveTroca').value = '';
  }
  
})

confirmBtnFixo.addEventListener('click', () => {
  let chave = document.querySelector('.chave').value;
   if (chave === '4024') {
    location.href = 'trocaFixos.html';
  } else {
    alert('Chave Incorreta!');
  }
  
})

function includeScript() {
  var script = document.createElement('script');
  script.src = 'changesNext.js'; // Substitua pelo caminho do seu script
  script.type = 'text/javascript';
  script.id = 'changesNext'; // Atribui um ID ao script
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
  const shortTd = document.querySelectorAll('.shortday td');
  const normalTd = document.querySelectorAll('.normalday td');
  const longTd = document.querySelectorAll('.longday td');

  if (dia == 28) {
      shortTd.forEach(td => {
          td.textContent = '';
      })
      normalTd.forEach(td => {
          td.textContent = '';
      })
      longTd.forEach(td => {
          td.textContent = '';
      })
      shortMonth.style.opacity = '0';
      normalMonth.style.opacity = '0';
      longMonth.style.opacity = '0';
  } if (dia == 29) {
      normalTd.forEach(td => {
          td.textContent = '';
      })
      longTd.forEach(td => {
          td.textContent = '';
      })
      shortMonth.style.visibility = 'visible';
      normalMonth.visibility = 'hidden';
      longMonth.visibility = 'hidden';
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
    dataAtual.setMonth(mesAtual+1, 1);
  
    // Obter o nome do mês seguinte
    let mesSeguinte = dataAtual.getMonth();
    mesSeguinte = mesesDoAno[mesSeguinte];
  
    // Obter o dia da semana para o primeiro dia do próximo mês (0 a 6)
    const diaDaSemanaProximoMes = dataAtual.getDay();
    let anoAtual = dataAtual.getFullYear();
  
    //obter o ultimo dia do mes
    const ultimoDiaDoMes = new Date(dataAtual.getFullYear(), dataAtual.getMonth() + 1, 0).getDate()
    //passando o ultimo dia do mes como parametro para a função que oculta o dia 29, 30 e/ou 31
    
    saveScale(ultimoDiaDoMes);
  
    // Obter o nome do dia da semana
    const nomeDoDiaDaSemana = diasDaSemana[diaDaSemanaProximoMes];
  
    // Obter o dia da semana para cada dia do mês
    for (let i = 0; i < 31; i++) {
      const diaDaSemanaAtual = (diaDaSemanaProximoMes + i) % 7; // Lidando com os dias além do índice 6
      weekdays[i].textContent = diasDaSemana[diaDaSemanaAtual];
    }
  
    
  
    // Atualizar o titulo da pagina com o primeiro dia do mes
    document.querySelector('.title').innerHTML =('Escala de ' + mesSeguinte + '/'+ anoAtual + '.');
  
}
 
 function saveScale(lastDay) {
 
  const databaseURL = "https://scalesdb-76ec1-default-rtdb.firebaseio.com/scaleNext.json";

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
        plantoes[i].innerHTML = data[i];
      }
      hiddeDays(lastDay);   
    })
    .catch(error => {
      console.error('Erro:', error);
    });
  
}

 function updateColors() {

  fetch('https://positionsdb-45ad9-default-rtdb.firebaseio.com/positionsNext.json')
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

window.onload = () => {
    updateColors();
    createMyScale();
    setDayNum();
    setWeekNum();
 }