//Selecciono todas las cajas excepto las que tienen la clase pantalla y resultado
let cajas = document.querySelectorAll("div.caja:not(div.pantalla)");
let pantalla = document.querySelector("div.pantalla");

cajas.forEach((element) => {
  element.addEventListener("click", () => {
    if (element.innerHTML === "C") {
      pantalla.innerHTML = "";
    } else if (element.innerHTML === "=") {
      calcular();
    } else {
      pantalla.innerHTML += event.target.innerHTML;
    }
  });
});

function calcular() {
  let cadena = pantalla.innerHTML;
  //Separo los números de los operadores
  let numerosYOperadores = separarNumerosOperadores(cadena);
  let [a, b, operacion] = numerosYOperadores;
  let resultado = 0;

  switch (operacion) {
    case "+":
      resultado = Number(a) + Number(b);
      break;
    case "-":
      resultado = a - b;
      break;
    case "*":
      resultado = a * b;
      break;
    case "/":
      resultado = a / b;
      break;
  }

  pantalla.innerHTML += " = " + resultado;
}

function separarNumerosOperadores(cadena) {
  let numerosYOperadores = [];

  //Primero me fijo que sea una operación válida
  const operacionRegex = /^([-]?[0-9]+)[\+\*-\/]([-]?[0-9]+)$/g;

  if (operacionRegex.test(cadena)) {
    //Regex para separar los números de las operaciones, busco un número seguido de un operador, lo que implica que es la división
    const separador = /[0-9][\+\*-\/]/g;
    //Busco esto en la cadena
    const match = separador.exec(cadena);

    //Separo los números de la operación teniendo en cuenta el index del operador
    numerosYOperadores.push(cadena.slice(0, match.index + 1));
    numerosYOperadores.push(cadena.slice(match.index + 2));

    //Tomo la operación
    let operacion = match[0].charAt(1);
    numerosYOperadores.push(operacion);

    //Retorno el array con los 3 elementos de la operación
    return numerosYOperadores;
  } else {
    pantalla.innerHTML = "Formato de cálculo erróneo";
    return;
  }
}
