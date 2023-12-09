// Scrivi una funzione filterOutOdds che accetta un numero qualsiasi di argomenti e restituisce un array contenente solo i numeri pari.
// Utilizzare il parametro rest per raccogliere gli argomenti.



function filterOutOdds(...numbers){
    return numbers.filter((number) => number % 2 === 0)
}


console.log(filterOutOdds(2, 6, 8, 7, 3))