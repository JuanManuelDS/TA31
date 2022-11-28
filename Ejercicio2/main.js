// -------------------------- PARTE 1 ------------------------------------

const fechaRegular =
  /^(0?[1-9]|[12]\d|3[01])[\/](0?[1-9]|1[0-2])[\/](19|20)\d{2}$/;
//MM/DD/YYYY
//^ ==> le digo que sólo tomará la primer línea.
//[] ==> todo lo que está entre corchetes matchea un solo caracter
//() ==> Lo que está entre paréntesis implica un grupo
//(0?[1-9]|1[0-2]) ==> Esto es el primer grupo
//0?[1-9] ==> Matchea los meses 1 al 9
//0?[1-9] ==> 0 es opcional, después matchea un número del 1 al 9 (obligatorio)
// |1[0-2] ==> indica que si no hay match en el primero busca en este, que matchea los meses 10 al 12
// 1[0-2] ==> Sí o sí comienza por un 1 seguido de un 0, un 1 o un 2
//[\/] ==> \ es para escapar el caracter siguiente, el /. Por ende, espera que lo anterior esté seguido de /
//(0?[1-9]|[12]\d|3[01]) ==> para matchear los días
//0?[1-9] ==> Pata matchear los días del 1 al 9, con el 0 por delante opcional
//[12]\d ==> Para matchear los días entre 10 y 29
//[12]\d ==> Le digo que los caracteres tienen que empezar por un 1 o un 2 y estar seguidos de cualquier número (de 1 dígito)
// que es lo que representa el \d
//[12]\d\d ==> buscaría cualquier número de 3 dígitos que comience por un 1 o un 2
//3[01] ==> Tiene que comenzar con tres y terminar con un 0 o un 1
//(19|20) ==> Matcheo los primero dos caracteres, que tienen que ser 19 o 20, para acortar a estos dos siglos
//(19|20)\d{2} ==> le digo que puede estar seguido de cualquier caracter (2 veces {2})
//$ ==> indica el final de la línea
console.log("----------PARTE 1 --------------------");

let cadena = "Nací el 24/01/1997 en Formosa";
let fecha = "28/11/2022";
console.log(fechaRegular.test(cadena)); //Retorna false porque hay más caracteres aparte de la fecha en la línea
console.log(fechaRegular.test(fecha)); //Retorna true porque solo está la fecha en la línea

//--------------------------- PARTE 2 -------------------------------------------
console.log("----------PARTE 2 ------------------");

const emailRegular =
  /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/;

let email = "juanmadesenzi@gmail.com";
console.log(emailRegular.test(email));

//------------------------ PARTE 3 ------------------------------------------
console.log("----------PARTE 3 ---------------------");
function escapeHTML(text) {
  const regexAmp = /&/g,
    regexComillas = /"/g,
    regexMenor = /</g,
    regexMayor = />/g;
  const regexs = [regexAmp, regexComillas, regexMenor, regexMayor];
  const chars = ["&amp;", "&quot;", "&lt;", "&gt;"];

  regexs.forEach((element, index) => {
    text = text.replace(element, chars[index]);
  });
  return text;
}

let prueba =
  'Hola, estoy "probando" a ver si < esto > funciona & si lo hace bien';

console.log(escapeHTML(prueba));

/*-------------------PARTE 4 ----------------------------------*/
console.log("----------PARTE 4 -----------------");

//Chequeo que solo haya letras mayúsculas y minúsculas, con un mínimo de 3 caracteres por palabra, separados por un espacio en blanco
const regexNombre = /^([a-zA-Z]{3,})[\s]([a-zA-Z]{3,})$/;
const regexWS = /\s/;
let nombre = "Juan Manuel";

function ponerComa(name) {
  if (regexNombre.test(name)) {
    name = name.replace(regexWS, ", ");
  }
  return name;
}
console.log(nombre + " => " + ponerComa(nombre));

//----------------PARTE 5 -----------------------------
console.log("----------PARTE 5 ---------------------");
//Le digo que matchee cualquier cosa entre los tags, incluso si hay salto de línea [\s\S]
const securityRegex = /<script>([\s\S]*?)<\/script>/;

function eliminarPeligro(html) {
  html = html.replace(securityRegex, "nada");
  return html;
}

let htmlPrueba = `<p> Hola soy un párrafo con un <script>  let x = 0;</script> dentro</p>`;

console.log(eliminarPeligro(htmlPrueba));
