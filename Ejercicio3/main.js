let parrafos = document.querySelectorAll("p");
let body = document.querySelector("body");
let resultado = document.createElement("p");

parrafos.forEach((element) => {
  element.addEventListener("click", (event) => {
    if (event.target.parentElement.id === "tabla2") {
      resultado.innerHTML += `Se presionó un párrafo contenido en la segunda tabla <br />`;
      body.append(resultado);
    } else {
      resultado.innerHTML += `Se presionó un párrafo del documento <br />`;
      body.append(resultado);
    }
  });
});
