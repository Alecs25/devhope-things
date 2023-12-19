// -Crea una Promise che simula il recupero dei dati da un'API. 
//  A volte la richiesta avrà successo, a volte fallirà con un messaggio di errore.
//  -Crea una variabile chiamata success con un valore numerico random da 0 a 0.5 
//  -La chiamata avrà successo con il messaggio Data retrieved successfully se il valore random è inferiore a 0.5 altrimenti fallisce con il messaggio 
//  Error: Failed to fetch data

function fetchDataFromAPI() {
    const success = Math.random(0, 0.5)
    const data = new Promise((resolve, reject) => {
        if (success < 0.5) {
            resolve();
        }
        else {

            reject();
        }
    })

    data.then(() => {
        console.log("Data retrieved successfully")
    }).catch(() => { console.log("Error: Failed to fetch data") })

}

fetchDataFromAPI()
