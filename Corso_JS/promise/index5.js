// Convertire la seguente funzione basata su callback in una funzione basata su Promise.



function callback_BasedFunction(arg1, arg2, callback) {
    setTimeout(() => {
        const result = arg1 + arg2;
        if (result % 2 !== 0) {
            callback(null, result);
        } else {
            callback(new Error('Result is not odd!'), null);
        }
    }, 1000);
}


function promise_BasedFunction(arg1, arg2) {
    const result = arg1 + arg2;
    const calculatePromise = new Promise((resolve, reject) => {
        setTimeout(() => {
            
            if (result % 2 !== 0) {

                resolve()
            }
            else {
                reject();
            }
        }, 1000);
    })

    calculatePromise.then(() => {
        console.log(result)
    }).catch(() => {
        console.log("Result is not odd")
    })

}



promise_BasedFunction(2, 3)