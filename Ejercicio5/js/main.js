let imagenes = document.querySelectorAll("div#img-min img");
const imagenGrande = document.querySelector("div#img-max img");

console.log(imagenGrande.src);

imagenes.forEach((img) => {
  img.addEventListener("click", () => {
    imagenGrande.src = img.src;
  });
});
