const scales = [
    [],
    [],
    [],
    [],
    [],
    [],
    []
];

const databaseURLs = [
  "https://scalesdb-76ec1-default-rtdb.firebaseio.com/scalaDomingo.json",
  "https://scalesdb-76ec1-default-rtdb.firebaseio.com/scalaSegunda.json",
  "https://scalesdb-76ec1-default-rtdb.firebaseio.com/scalaTerca.json",
  "https://scalesdb-76ec1-default-rtdb.firebaseio.com/scalaQuarta.json",
  "https://scalesdb-76ec1-default-rtdb.firebaseio.com/scalaQuinta.json",
  "https://scalesdb-76ec1-default-rtdb.firebaseio.com/scalaSexta.json",
  "https://scalesdb-76ec1-default-rtdb.firebaseio.com/scalaSabado.json"
];

for (let i = 0; i < databaseURLs.length; i++) {
    fetchAndProcessData(i);
  }
  
  function fetchAndProcessData(index) {
    fetch(databaseURLs[index])
        .then(response => {
          if (!response.ok) {
            throw new Error('Erro ao recuperar os dados.');
          }
          return response.json();
        })
        .then(data => {
          for (let e = 0; e < data.length; e++) {
            scales[index].push(data[e]);
          }
        })
        .catch(error => {
          console.error('Erro:', error);
        });
  }
  

  setTimeout(() => {
    location.reload();
  },900000);
  

