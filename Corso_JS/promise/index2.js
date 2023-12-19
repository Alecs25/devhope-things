// -Crea una catena di Promises per simulare un'operazione asincrona in più fasi. 
// -La prima Promise recupera i dati dell'utente { id: 1, name: 'John' }. 
// -La seconda Promise recupera i post dell'utente ['Post 1', 'Post 2', 'Post 3'].
//  -Infine, chiama le funzioni per recuperare e stampare in console il nome dell'utente e i titoli dei post.

const object = { id: 1, name: 'John', post: ['Post 1', 'Post 2', 'Post 3'] };

function fetchUserData() {

    const userData = new Promise((resolve, reject) => {
        setTimeout(() => {
            if (true === true) {
                resolve("ok");
                
            }
            else {
                reject("not ok");
            }
        }, 1000)
    });

userData.then(() => {fetchUserPosts(object.id, object.name)
}).catch(() => {console.log("failed to fetch data")})


}

function fetchUserPosts(userId, userName) {
    const userPost = new Promise((resolve, reject) => {
        setTimeout(() => {
            if (true === true) {
                resolve("ok");
                
            }
            else {
                reject("not ok");
            }
        }, 1000)
    });

    userPost.then(() => {console.log(`${userId}, ${userName}, ${object.post}`)})
    userPost.catch(() => {console.log( "failed to fetch data")})
}

fetchUserData()