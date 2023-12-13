// Dato l'oggetto { name: "John", age: 30 } crea una funzione che simula un'operazione asincrona,
//  come il recupero dei dati da un'API. -Implementare una callback per gestire i dati recuperati. 
//  -Utilizzare setTimeout per simulare il ritardo dell'operazione.




function fetchDataFromAPI(callback) {
    let object = { name: "John", age: 30 };
    callback(object);
 
}

function handleData(data) {
    
    setTimeout(() => {console.log(data)} , 2000);
}

fetchDataFromAPI(handleData);