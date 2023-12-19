// -Crea una semplice Promise che si risolve dopo un ritardo di 2 secondi. -Utilizzare setTimeout per simulare un'operazione asincrona.



const provaPromise = new Promise((resolve, reject) => {

    setTimeout(() => {
        if(true === false){
            resolve("ok")
        }
        else{
            reject("not ok")
        }
    }, 2000)

})