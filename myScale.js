plantoes.forEach(cell => {
    cell.addEventListener("click", function() {
        const currentValue = this.textContent;
        this.innerHTML = `<input type="text" value="${currentValue}" onblur="updateCellValue(this)">`;
        const input = this.querySelector("input");
        input.focus();
    });
  });       
  
  function updateCellValue(input) {
    const newValue = input.value;
    input.parentElement.innerHTML = newValue;
    updateMyScale();
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
    console.log(ultimoDiaDoMes)
    //passando o ultimo dia do mes como parametro para a função que oculta o dia 29, 30 e/ou 31
    hideDays(ultimoDiaDoMes)
  
    // Obter o nome do dia da semana
    const nomeDoDiaDaSemana = diasDaSemana[diaDaSemanaProximoMes];
  
    // Obter o dia da semana para cada dia do mês
    for (let i = 0; i < 31; i++) {
      const diaDaSemanaAtual = (diaDaSemanaProximoMes + i) % 7; // Lidando com os dias além do índice 6
      weekdays[i].textContent = diasDaSemana[diaDaSemanaAtual];
    }
  
    saveScale(diaDaSemanaProximoMes);
  
    // Atualizar o titulo da pagina com o primeiro dia do mes
    document.querySelector('.title').innerHTML =('Escala editável para o mês de ' + mesSeguinte +'/'+ anoAtual + '.');
  
 }
 
 function saveScale(dia) {
 
   var escalaExistente = localStorage.getItem('scales');
   var minhaEscala = [];
   if (escalaExistente) {
      minhaEscala = JSON.parse(escalaExistente);
   } else {
     var escalaString = JSON.stringify(scales[dia]);
     localStorage.setItem('scales', escalaString);
     minhaEscala = scales[dia];
   }
 
   for (let i = 0; i < plantoes.length; i++) {
     plantoes[i].innerHTML = minhaEscala[i];
   }
   
 }

function updateMyScale() {
  var myCurrentScale = [];
  for (let i = 0; i < plantoes.length; i++) {
    myCurrentScale[i] = plantoes[i].textContent;
  }
  localStorage.setItem('scales', JSON.stringify(myCurrentScale));

  var escalaExistente = localStorage.getItem('scales');
  var minhaEscala = [];
   
   minhaEscala = JSON.parse(escalaExistente);

   for (let i = 0; i < plantoes.length; i++) {
    plantoes[i].innerHTML = minhaEscala[i];
  }
}


createMyScale();
definirCoresNaTabela();
setDayNum();
setWeekNum();
updateMyScale();