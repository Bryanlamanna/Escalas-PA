const URL = 'https://escala-62ed5-default-rtdb.firebaseio.com/escalas.json';
const domingos = document.querySelectorAll(".domingo td");
const segundas = document.querySelectorAll(".segunda td");
const tercas = document.querySelectorAll(".terca td");
const quartas = document.querySelectorAll(".quarta td");
const quintas = document.querySelectorAll(".quinta td");
const sextas = document.querySelectorAll(".sexta td");
const sabados = document.querySelectorAll(".sabado td");
const menuBtn = document.querySelector('.menuBtn');
 const menu = document.querySelector('.menu');
 const closeMenuBtn = document.querySelector('.closeMenu'); 


 menuBtn.addEventListener('click', () => {
  menu.style.display = 'block';
  setTimeout(() => {
    menu.style.right = '0px';
  }, 50);
})
 
 closeMenuBtn.addEventListener('click', () => {
  menu.style.right = '-100%';
  setTimeout(() => {
    menu.style.display = 'none';
  }, 50);
 })


fetch(URL)
    .then(response => response.json())
    .then(escalas => {

        fillTable(escalas);
    })
    .catch(error => console.error(error));

function fillTable(escalas) {
        const domingosAll = []
        .concat(escalas.domingos.primeiroDomingo,
                escalas.domingos.segundoDomingo,
                escalas.domingos.terceiroDomingo,
                escalas.domingos.quartoDomingo,
                escalas.domingos.quintoDomingo);
                
        const segundasAll = []
        .concat(escalas.segundas.primeiraSegunda,
                escalas.segundas.segundaSegunda,
                escalas.segundas.terceiraSegunda,
                escalas.segundas.quartaSegunda,
                escalas.segundas.quintaSegunda);
        
        const tercasAll = []
        .concat(escalas.tercas.primeiraTerca,
                escalas.tercas.segundaTerca,
                escalas.tercas.terceiraTerca,
                escalas.tercas.quartaTerca,
                escalas.tercas.quintaTerca);
        
        const quartasAll = []
        .concat(escalas.quartas.primeiraQuarta,
                escalas.quartas.segundaQuarta,
                escalas.quartas.terceiraQuarta,
                escalas.quartas.quartaQuarta,
                escalas.quartas.quintaQuarta);
         
        const quintasAll = []
        .concat(escalas.quintas.primeiraQuinta,
                escalas.quintas.segundaQuinta,
                escalas.quintas.terceiraQuinta,
                escalas.quintas.quartaQuinta,
                escalas.quintas.quintaQuinta);

        const sextasAll = []
        .concat(escalas.sextas.primeiraSexta,
                escalas.sextas.segundaSexta,
                escalas.sextas.terceiraSexta,
                escalas.sextas.quartaSexta,
                escalas.sextas.quintaSexta);

        const sabadosAll = []
        .concat(escalas.sabados.primeiroSabado,
                escalas.sabados.segundoSabado,
                escalas.sabados.terceiroSabado,
                escalas.sabados.quartoSabado,
                escalas.sabados.quintoSabado);

        for (let i = 0; i < 20 ; i++) {
            domingos[i].innerHTML = domingosAll[i];
            segundas[i].innerHTML = segundasAll[i];
            tercas[i].innerHTML = tercasAll[i];
            quartas[i].innerHTML = quartasAll[i];
            quintas[i].innerHTML = quintasAll[i];
            sextas[i].innerHTML = sextasAll[i];
            sabados[i].innerHTML = sabadosAll[i];            
        }   
}

function updateEscala (diaSemana, dia) {

        document.querySelectorAll(`.${diaSemana} td`).forEach((td, index) => {
                td.addEventListener("click", () => {

                    const input = document.createElement("input");
                    input.type = "text";
                    input.style.width = '6em';
                    input.style.fontWeight = 'bold';
                    
                    // Define o valor do input como o conteúdo atual da célula
                    input.value = td.innerHTML.trim();
            
                    //cria o array para o dia 
                    const escalaDia = [];
                    const linhaDia = document.querySelectorAll(`.${diaSemana} td`);
            
                    for (let i = 0; i < linhaDia.length; i++) {
                        escalaDia.push(linhaDia[i].textContent.trim());
                    }
            
                    console.log(escalaDia);
            
                    // Substitui a célula pelo input
                    td.textContent = '';
                    td.appendChild(input);
                    
                    // Define o foco no input
                    input.focus();
                    
                    // Adiciona um event listener para o evento 'keydown' (tecla pressionada)
                    input.addEventListener('keydown', function(event) {
                        if (event.key === 'Enter') {
                            escalaDia[index] = input.value;
                            console.log(`https://escala-62ed5-default-rtdb.firebaseio.com/escalas/${dia}/${diaSemana}.json`);
                            fetch(`https://escala-62ed5-default-rtdb.firebaseio.com/escalas/${dia}/${diaSemana}.json`, {
                                method: 'PUT',
                                body: JSON.stringify(escalaDia),
                                headers: {
                                    'Content-Type': 'application/json'
                                }
                            })
                            .then(response =>
                                 response.json())
                            .then(data => {
                                console.log('Escala atualizada com sucesso: ', data);
                                alert("Escala atualizada com sucesso");
                                location.reload();
                            })
                            .catch(error => console.error('Erro ao atualizar a escala:', error));
                        }
                    })
            
                    // Adiciona um event listener para o evento 'blur' (perda de foco) do input
                    input.addEventListener('blur', function() {
                            location.reload();      
                                  
                    });   
                })
            });

}

const dias = ["domingos", "segundas", "tercas", "quartas", "quintas", "sextas", "sabados"];

updateEscala("primeiroDomingo", dias[0]);
updateEscala("segundoDomingo", dias[0]);
updateEscala("terceiroDomingo", dias[0]);
updateEscala("quartoDomingo" , dias[0]);
updateEscala("quintoDomingo" , dias[0]);
updateEscala("primeiroSabado", dias[6]);
updateEscala("segundoSabado" , dias[6]);
updateEscala("terceiroSabado" , dias[6]);
updateEscala("quartoSabado" , dias[6]);
updateEscala("quintoSabado" , dias[6]);
updateEscala("primeiraQuarta ", dias[3]);
updateEscala("segundaQuarta" , dias[3]);
updateEscala("terceiraQuarta ", dias[3]);
updateEscala("quartaQuarta " , dias[3]);
updateEscala("quintaQuarta " , dias[3]);
updateEscala("primeiraQuinta" , dias[4]);
updateEscala("segundaQuinta" , dias[4]);
updateEscala("terceiraQuinta" , dias[4]);
updateEscala("quartaQuinta" , dias[4]);
updateEscala("quintaQuinta" , dias[4]);
updateEscala("primeiraSexta" , dias[5]);
updateEscala("segundaSexta" , dias[5]);
updateEscala("terceiraSexta" , dias[5]);
updateEscala("quartaSexta" , dias[5]);
updateEscala("quintaSexta" , dias[5]);  
updateEscala("primeiraSegunda" , dias[1]);
updateEscala("segundaSegunda" , dias[1]);
updateEscala("terceiraSegunda" , dias[1]);
updateEscala("quartaSegunda" , dias[1]);
updateEscala("quintaSegunda" , dias[1]);
updateEscala("primeiraTerca" , dias[2]);
updateEscala("segundaTerca" , dias[2]);
updateEscala("terceiraTerca" , dias[2]);
updateEscala("quartaTerca" , dias[2]);
updateEscala("quintaTerca" , dias[2]);




