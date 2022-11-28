let resultados = [];

function lanzarDados() {
  //Math random retorna un número>=0 y <1
  //Math floor redondea hacia abajo. Le sumo 1 al resultado para que el resultado sea entre 1 y 6, y no 0 y 5
  let dado1 = Math.floor(Math.random() * 6) + 1;
  let dado2 = Math.floor(Math.random() * 6) + 1;
  let sumaDados = dado1 + dado2;
  resultados.push(sumaDados);
}

let contador = 0;
while (contador < 36000) {
  lanzarDados();
  contador++;
}
