// Crea la tua To-Do List mediante i metodi visti nel video.
// Crea una funzione che ti permette di:

// - Creare una lista aggiungendo il task desiderato mediante il bottone `Aggiungi`.
// - Creare un checkbox per ogni task aggiunto.



const addProduct = () => {
  const list = document.querySelector("ul");
  const task = document.querySelector("input").value;

  const check = document.createElement("input");
  check.setAttribute("type", "checkbox");

  const li = document.createElement("li");

  li.innerText = task;
  li.appendChild(check)
  list.appendChild(li);


};


