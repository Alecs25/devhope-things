// Crea una funzione chiamata runCallbacks che accetta un array di funzioni di callback come argomento.
// La funzione dovrebbe eseguire ogni callback nell'ordine in cui appaiono nell'array.

function runCallbacks(callbacks) {
    callbacks.forEach((callback) => callback())
  }
  function firstCallback(callback) {
   console.log(1)
  }
  function secondCallback(callback) {
    console.log(2)
  }
  
  function thirdCallback() {
    console.log(3)
  }
  const callbackArray = [firstCallback, secondCallback, thirdCallback];
  runCallbacks(callbackArray);
  