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
const myScale = document.querySelector('.myScale');
const diasDaSemana = ['Domingo', 'Segunda-feira', 'Terça-feira', 'Quarta-feira', 'Quinta-feira', 'Sexta-feira', 'Sábado'];
const mesesDoAno = ['Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho', 'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro'];;
const modalChave = document.querySelector('.modalChave');
const modalBtn = document.querySelector('.editBtn');
let modalOn = false;
const confirmBtn  = document.querySelector('.confirmBtn');
const options = document.querySelectorAll('.dropdown-content a');
const closeBtn = document.querySelector('.closeBtn');
const nameBtn = document.querySelector('.dropBtn');
let optionsOn = false;
const resumeBtn = document.querySelector('.resumeBtn');
const modalResume = document.querySelector('.resumo');
let resumeOn = false;

document.addEventListener('keydown', (event) => {
  if (event.key === 'Escape') {
    if (resumeOn) {
      modalResume.style.display = 'none';
      resumeOn = false;
    }
  }
})

resumeBtn.addEventListener('click', () => {
  if (resumeOn) {
    modalResume.style.display = 'none';
    resumeOn = false;
  } else {
    modalResume.style.display = 'block';
    modalResume.style.backgroundColor = 'rgb(0, 0, 0, 0.6)';
    resumeOn = true;
  }
})


function contarPLantao(escalaAtual) {

  //EXTRAIR OS NOTURNOS DA ESCALA
  const namesNight = [];
  for (let i = 3; i < escalaAtual.length; i += 4) {
    namesNight.push(escalaAtual[i]);
  }
  
  let escalaSomada = escalaAtual.concat(namesNight);

  // Objeto para armazenar a contagem de cada nome
  const nameCount = {};

  // Iterar sobre o array e contar as ocorrências de cada nome
  escalaSomada.forEach(name => {
    // Se o nome já estiver no objeto, incrementar o contador
    if (nameCount[name]) {
      nameCount[name]++;
    } else {
      // Se não, inicializar o contador para 1
      nameCount[name] = 1;
    }
  });

  for (const chave in nameCount) {
    if (nameCount.hasOwnProperty(chave)) {
        nameCount[chave] *= 6;
    }
}

    console.log(nameCount);

  // Exibir o resultado
  return nameCount;
}

nameBtn.addEventListener('click', () => {
  if (optionsOn) {
    document.querySelector('.dropdown-content').style.visibility = 'hidden';
    optionsOn = false;
  } else {
    document.querySelector('.dropdown-content').style.visibility = 'visible';
    optionsOn = true;
  }
 
})

closeBtn.addEventListener('click', () => {
  modalChave.style.display = 'none'; 
    modalOn = false;
})

modalBtn.addEventListener('click', () => {
  if (modalOn) {
    modalChave.style.display = 'none'; 
    modalOn = false;
  } else {
    modalChave.style.display = 'block';
    modalOn = true;
  }
})

document.querySelector('.chave').addEventListener('keydown', (event) => {
  if (event.key === 'Enter') {
    confirmBtn.click();
  }
})

confirmBtn.addEventListener('click', () => {
  let chave = document.querySelector('.chave').value;

  if (chave === '4024') {
    includeScript();
    modalChave.style.display = 'none'; 
    modalOn = false;
    plantoes.forEach(cell => {
      cell.style.backgroundColor = 'white';
    })
  } else {
    alert('Chave Incorreta!');
    document.querySelector('.chave').value = '';
  }
  
})

function includeScript() {
  var script = document.createElement('script');
  script.src = 'changes.js'; // Substitua pelo caminho do seu script
  script.type = 'text/javascript';
  script.id = 'changes'; // Atribui um ID ao script
  document.head.appendChild(script);
}

function definirCoresNaTabela() {
  const tabela = document.querySelector('.tabela');
  const linhas = document.querySelectorAll('#tabela tr');

  // Array com as classes de cor
  const classesDeCor = ['cor1', 'cor2', 'cor3', 'cor4', 'cor5', 'cor6', 'cor7'];

  // Loop para atribuir classes de cor às linhas
  linhas.forEach((linha, indice) => {
    const classeDeCor = classesDeCor[indice % classesDeCor.length];
    linha.classList.add(classeDeCor);
  });
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

function hideDays(dia) {
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
    //passando o ultimo dia do mes como parametro para a função que oculta o dia 29, 30 e/ou 31
    hideDays(ultimoDiaDoMes)
  
    // Obter o nome do dia da semana
    const nomeDoDiaDaSemana = diasDaSemana[diaDaSemanaProximoMes];
  
    // Obter o dia da semana para cada dia do mês
    for (let i = 0; i < 31; i++) {
      const diaDaSemanaAtual = (diaDaSemanaProximoMes + i) % 7; // Lidando com os dias além do índice 6
      weekdays[i].textContent = diasDaSemana[diaDaSemanaAtual];
    }
  
    saveScale();
  
    // Atualizar o titulo da pagina com o primeiro dia do mes
    document.querySelector('.title').innerHTML =('Escala ATUAL do o mês de ' + mesSeguinte +'/'+ anoAtual + '.');
  
 }
 
 function saveScale() {
 
  const databaseURL = "https://scalesdb-76ec1-default-rtdb.firebaseio.com/scaleThis.json";

  fetch(databaseURL)
    .then(response => {
      if (!response.ok) {
        throw new Error('Erro ao recuperar os dados.');
      }
      return response.json();
    })
    .then(data => {
      for (let i = 0; i < plantoes.length; i++) {
        plantoes[i].innerHTML = data[i];
      }
      
      
      contarPLantao(data);
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
          plantoes[i].style.color = 'black';
        }
      }
     } else {
       console.log('Os dados não são um array ou estão vazios.');
     }
   })
   .catch(error => console.error('Ocorreu um erro ao obter os dados:', error));

   

  }

options.forEach(option => {
  option.addEventListener('click', () => {
    const selectedOption = option.textContent;
    document.querySelector('.dropdown-content').style.visibility = 'hidden';
    optionsOn = false;

    if (selectedOption === 'NENHUM') {
      window.location.reload();
    } else {
      buscarCelulas(selectedOption);
    }
    
  })
})

function buscarCelulas(option) {
  
  plantoes.forEach(function(celula) {
    if (celula.textContent.trim() === option) {
      // Realiza a ação desejada para as células com o nome selecionado
       
      celula.style.backgroundColor = "black";
      celula.style.color = "white";  
      // Exemplo: Altera a cor de fundo
    } else {
      // Reverte as alterações em células que não contêm o nome selecionado
      celula.style.backgroundColor = ""; // Exemplo: Remove a cor de fundo
      celula.style.color = "black";
    }
  });
}

  window.onload = () => {
    updateColors();
    createMyScale();
    definirCoresNaTabela();
    setDayNum();
    setWeekNum();
  }



