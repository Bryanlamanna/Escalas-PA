const URL = 'https://escala-62ed5-default-rtdb.firebaseio.com/escalas.json';
const domingos = document.querySelectorAll(".domingo td");
const segundas = document.querySelectorAll(".segunda td");
const tercas = document.querySelectorAll(".terca td");
const quartas = document.querySelectorAll(".quarta td");
const quintas = document.querySelectorAll(".quinta td");
const sextas = document.querySelectorAll(".sexta td");
const sabados = document.querySelectorAll(".sabado td");


fetch(URL)
    .then(response => response.json())
    .then(escalas => {

        fillTable(escalas);
        
        // BLOCO PARA CRIAR AS ESCALAS PARA CADA MÊS
        {
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
        }
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

fetch('https://escala-62ed5-default-rtdb.firebaseio.com/escalas/quartas/quartaQuarta.json')
    .then(response => response.json())
    .then(data => console.log(data))

// Seleciona todas as células <td> da página
const cells = document.querySelectorAll('td');

// Adiciona um event listener para cada célula
cells.forEach(cell => {
    cell.addEventListener('click', function() {
        // Cria um novo elemento input
        const input = document.createElement('input');
        input.type = 'text';
        input.style.width = '6em';
        input.style.fontWeight = 'bold';
        
        // Define o valor do input como o conteúdo atual da célula
        input.value = this.textContent.trim();

        //exibe no console o indice da celula
        
        // Substitui a célula pelo input
        this.textContent = '';
        this.appendChild(input);
        
        // Define o foco no input
        input.focus();
        
        // Adiciona um event listener para o evento 'blur' (perda de foco) do input
        input.addEventListener('blur', function() {

                const diaDaSemana = cell.closest('table').classList[0];
                console.log(diaDaSemana);
            // Quando o input perder o foco, atualiza o conteúdo da célula com o valor do input
            cell.textContent = this.value;
        });
    });
});