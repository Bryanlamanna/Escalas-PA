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
const adrianoTD = document.querySelectorAll('.adriano td');
 const anaLuisaTD = document.querySelectorAll('.anaLuisa td');
 const anaPetryTD = document.querySelectorAll('.anaPetry td');
 const luzziTD = document.querySelectorAll('.carlos td');
 const crisTD = document.querySelectorAll('.cristiane td');
 const estevaoTD = document.querySelectorAll('.estevao td');
 const gilbertoTD = document.querySelectorAll('.gilberto td');
 const greiceTD = document.querySelectorAll('.greice td');
 const gustavoTD = document.querySelectorAll('.gustavo td');
 const jeanTD = document.querySelectorAll('.jean td');
 const jessicaTD = document.querySelectorAll('.jessica td');
 const juvenalTD = document.querySelectorAll('.juvenal td');
 const karinaTD = document.querySelectorAll('.karina td');
 const leilaTD = document.querySelectorAll('.leila td');
 const lucianeTD = document.querySelectorAll('.luciane td');
 const marciaTD = document.querySelectorAll('.marcia td');
 const marianaTD = document.querySelectorAll('.mariana td');
 const marleneTD = document.querySelectorAll('.marlene td');
 const pauloTD = document.querySelectorAll('.paulo td');
 const raquelTD = document.querySelectorAll('.raquel td');
 const rasquinTD = document.querySelectorAll('.rasquin td');
 const rosaTD = document.querySelectorAll('.rosa td');
 const stavrosTD = document.querySelectorAll('.stavros td');
 const telmoTD = document.querySelectorAll('.telmo td');
 const closeResume = document.querySelector('.closeResume');

 closeResume.addEventListener('click', () => {
   modalResume.style.display = 'none';
   resumeOn = false;
 })

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
    modalResume.style.display = 'flex';
    modalResume.style.backgroundColor = 'rgb(0, 0, 0, 0.6)';
    resumeOn = true;
  }
})

function prencherDiurnos(nameCount) {
    adrianoTD[2].innerHTML = nameCount['ADRIANO'] || '0';
    anaLuisaTD[2].innerHTML = nameCount['ANA LUISA']  || '0';
    anaPetryTD[2].innerHTML = nameCount['ANA PETRY'] || '0';
    luzziTD[2].innerHTML = nameCount['LUZZI'] || '0';
    crisTD[2].innerHTML = nameCount['CRISTIANE']  || '0';
    estevaoTD[2].innerHTML = nameCount['ESTEVÃO'] || '0';
    gilbertoTD[2].innerHTML = nameCount['GILBERTO'] || '0';
    greiceTD[2].innerHTML = nameCount['GREICE'] || '0';
    gustavoTD[2].innerHTML = nameCount['GUSTAVO'] || '0';
    jeanTD[2].innerHTML = nameCount['JEAN'] || '0';
    jessicaTD[2].innerHTML = nameCount['JESSICA'] || '0';
    juvenalTD[2].innerHTML = nameCount['JUVENAL'] || '0';
    karinaTD[2].innerHTML = nameCount['KARINA'] || '0';
    leilaTD[2].innerHTML = nameCount['LEILA'] || '0';
    lucianeTD[2].innerHTML = nameCount['LUCIANE'] || '0';
    marciaTD[2].innerHTML = nameCount['MARCIA'] || '0';
    marianaTD[2].innerHTML = nameCount['MARIANA'] || '0';
    marleneTD[2].innerHTML = nameCount['MARLENE'] || '0';
    pauloTD[2].innerHTML = nameCount['COUTINHO'] || '0';
    raquelTD[2].innerHTML = nameCount['RAQUEL'] || '0';
    rasquinTD[2].innerHTML = nameCount['RASQUIN'] || '0';
    rosaTD[2].innerHTML = nameCount['ROSA'] || '0';
    stavrosTD[2].innerHTML = nameCount['STAVROS'] || '0';
    telmoTD[2].innerHTML = nameCount['TELMO']   || '0';
    

}

function prencherNoturnos(nameCount) {
  adrianoTD[3].innerHTML = nameCount['ADRIANO'] || '0';  
  anaLuisaTD[3].innerHTML = nameCount['ANA LUISA'] || '0';
  anaPetryTD[3].innerHTML = nameCount['ANA PETRY'] || '0';
  luzziTD[3].innerHTML = nameCount['LUZZI'] || '0';
  crisTD[3].innerHTML = nameCount['CRISTIANE'] || '0';
  estevaoTD[3].innerHTML = nameCount['ESTEVÃO'] || '0';
  gilbertoTD[3].innerHTML = nameCount['GILBERTO'] || '0';
  greiceTD[3].innerHTML = nameCount['GREICE'] || '0';
  gustavoTD[3].innerHTML = nameCount['GUSTAVO'] || '0';
  jeanTD[3].innerHTML = nameCount['JEAN'] || '0';
  jessicaTD[3].innerHTML = nameCount['JESSICA'] || '0';
  juvenalTD[3].innerHTML = nameCount['JUVENAL'] || '0';
  karinaTD[3].innerHTML = nameCount['KARINA'] || '0';
  leilaTD[3].innerHTML = nameCount['LEILA'] || '0';
  lucianeTD[3].innerHTML = nameCount['LUCIANE'] || '0';
  marciaTD[3].innerHTML = nameCount['MARCIA'] || '0';
  marianaTD[3].innerHTML = nameCount['MARIANA'] || '0';
  marleneTD[3].innerHTML = nameCount['MARLENE'] || '0';
  pauloTD[3].innerHTML = nameCount['COUTINHO'] || '0';
  raquelTD[3].innerHTML = nameCount['RAQUEL'] || '0';
  rasquinTD[3].innerHTML = nameCount['RASQUIN'] || '0';
  rosaTD[3].innerHTML = nameCount['ROSA'] || '0';
  stavrosTD[3].innerHTML = nameCount['STAVROS'] || '0';
  telmoTD[3].innerHTML = nameCount['TELMO'] || '0';


}

function contarHoras(escalaAtual) {

  let noturnos = [];

  for (let i = 3; i < escalaAtual.length; i += 4) {
    noturnos.push(escalaAtual[i]);
  }

  let escalaSomada = escalaAtual.concat(noturnos);


  //CRIAR OBJETO COM A QUANTIDADE DE HORAS POR NOME

  let nameCount = {};

  escalaSomada.forEach(name => {
    if (nameCount[name]) {
      nameCount[name] += 1;
    } else {
      nameCount[name] = 1;
    }
  })

  for (const chave in nameCount) {
    if (nameCount.hasOwnProperty(chave)) {
        nameCount[chave] *= 6;
    }
}

  prencherHoras(nameCount);
}

function prencherHoras(nameCount) {
  adrianoTD[4].innerHTML = nameCount['ADRIANO'] || '0';
  anaLuisaTD[4].innerHTML = nameCount['ANA LUISA'] || '0';
  anaPetryTD[4].innerHTML = nameCount['ANA PETRY'] || '0';
  luzziTD[4].innerHTML = nameCount['LUZZI'] || '0';
  crisTD[4].innerHTML = nameCount['CRISTIANE']  || '0';
  estevaoTD[4].innerHTML = nameCount['ESTEVÃO'] || '0';
  gilbertoTD[4].innerHTML = nameCount['GILBERTO'] || '0';
  greiceTD[4].innerHTML = nameCount['GREICE'] || '0';
  gustavoTD[4].innerHTML = nameCount['GUSTAVO'] || '0';
  jeanTD[4].innerHTML = nameCount['JEAN'] || '0';
  jessicaTD[4].innerHTML = nameCount['JESSICA'] || '0';
  juvenalTD[4].innerHTML = nameCount['JUVENAL'] || '0';
  karinaTD[4].innerHTML = nameCount['KARINA'] || '0';
  leilaTD[4].innerHTML = nameCount['LEILA'] || '0';
  lucianeTD[4].innerHTML = nameCount['LUCIANE'] || '0';
  marciaTD[4].innerHTML = nameCount['MARCIA'] || '0';
  marianaTD[4].innerHTML = nameCount['MARIANA'] || '0';
  marleneTD[4].innerHTML = nameCount['MARLENE'] || '0';
  pauloTD[4].innerHTML = nameCount['COUTINHO'] || '0';
  raquelTD[4].innerHTML = nameCount['RAQUEL'] || '0';
  rasquinTD[4].innerHTML = nameCount['RASQUIN'] || '0';
  rosaTD[4].innerHTML = nameCount['ROSA'] || '0';
  stavrosTD[4].innerHTML = nameCount['STAVROS'] || '0';
  telmoTD[4].innerHTML = nameCount['TELMO'] || '0';

}

function contarPLantaoDiurno(escalaAtual) {

  
  //EXTRAIR OS NOTURNOS DA ESCALA
  
  for (let i = 3; i < escalaAtual.length; i += 3  ) {
    escalaAtual.splice(i, 1);
  }

  //CRIAR UM OBJETO COM A QUANTIDADE DE PLANTOES POR NOME

  let nameCount = {};

  escalaAtual.forEach(name => {
    if (nameCount[name]) {
      nameCount[name] += 1;
    } else {
      nameCount[name] = 1;
    }
  });


  prencherDiurnos(nameCount);

  }
  
function contarPLantaoNoturno(escalaAtual) {

    //EXTRAIR OS NOTURNOS DA ESCALA
       
    let namesNight = [];

    for (let i = 3; i < escalaAtual.length; i += 4) {
      namesNight.push(escalaAtual[i]);      
    }

    
    //CRIAR UM OBJETO COM A QUANTIDADE DE PLANTOES POR NOME

    let nameCount = {};

    namesNight.forEach(name => {
      if (nameCount[name]) {
        nameCount[name] += 1;
      } else {
        nameCount[name] = 1;
      }
    })

    prencherNoturnos(nameCount);

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
  script.src = 'changesNext.js'; // Substitua pelo caminho do seu script
  script.type = 'text/javascript';
  script.id = 'changesNext'; // Atribui um ID ao script
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
      shortMonth.style.opacity = '1';
      normalMonth.style.opacity = '0';
      longMonth.style.opacity = '0';
  } if (dia == 30) {
      longTd.forEach(td => {
          console.log(td);
      })
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
    document.querySelector('.title').innerHTML =('Escala ATUAL do o mês de ' + mesSeguinte + ' de '+ anoAtual + '.');
  
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

      hideDays(lastDay);
      contarHoras(data);
      contarPLantaoNoturno(data);
      contarPLantaoDiurno(data);
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



