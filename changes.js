


// Função para adicionar comportamento de edição às células da tabela
 
 plantoes.forEach(cell => {
    cell.addEventListener('click', function() {
        // Guarda o conteúdo atual da célula
        const currentValue = this.textContent;

        // Armazena o conteúdo atual como um atributo da célula
        this.setAttribute('data-original-value', currentValue);

        // Cria um input e define seu valor como o conteúdo atual
        const input = document.createElement('input');
        input.value = currentValue;
        input.classList.add('input-cell');
        
        // Substitui o conteúdo da célula pelo input
        this.innerHTML = '';
        this.appendChild(input);

        // Adiciona um ouvinte de evento para detectar a tecla 'Enter'
        input.addEventListener('keydown', function(e) {
            if (e.key === 'Enter')  {
                // Quando 'Enter' é pressionado, atualiza o conteúdo da célula
                const newValue = input.value;
                cell.textContent = newValue;
                updateScale();

                location.reload();
                alert('Alteração salva com sucesso!');
            }   if (e.key === 'Escape') {
                alert('Nenhuma alteração foi realizada!');
                location.reload(); 
            }
        });

        input.addEventListener('blur', function() {
          // Quando o input perde o foco, recarrega a página
          location.reload();
          alert('Nenhuma alteração foi realizada!');
      });

        // Define o foco no input
        input.focus();
    });
   
});

function updateScale() {
    const newScale = [];
    plantoes.forEach(cell => {
        newScale.push(cell.innerHTML);
    })
      
    updateDatabase(newScale) 
    
}


function updateDatabase(newScale) {
    // URL do seu banco de dados
    const databaseURL = "https://scalesdb-76ec1-default-rtdb.firebaseio.com/scaleThis.json";
  
    // Convertendo o array em JSON
    const jsonData = JSON.stringify(newScale);
  
    // Opções da requisição
    const requestOptions = {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json'
      },
      body: jsonData
    };
  
    // Enviando a requisição para atualizar os dados no Firebase
    fetch(databaseURL, requestOptions)
      .then(response => {
        if (!response.ok) {
          throw new Error('Erro ao atualizar os dados.');
        }
        console.log('Dados atualizados com sucesso.');
      })
      .catch(error => {
        console.error('Erro:', error);
      });
  }
  


