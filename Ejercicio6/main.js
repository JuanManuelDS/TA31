let horas = document.querySelector("span#horas");
let minutos = document.querySelector("span#minutos");
let segundos = document.querySelector("span#segundos");

setInterval(() => {
  let fecha = new Date();
  horas.innerHTML = fecha.getHours();
  minutos.innerHTML = fecha.getMinutes();
  segundos.innerHTML = fecha.getSeconds();
}, 1000);
