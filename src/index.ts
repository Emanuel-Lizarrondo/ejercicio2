//Ejercicio 1

//let paso1: string = "mi paso";

//Ejercicio 2
//let base: number = 5;
//let altura: number = 10;
//let resultado: number = base * altura;

//console.log(resultado);

let dato = document.getElementById("dato2");
let btnEnv = document.getElementById("enviar");

btbEnv.addEventListener("click", () => {
  console.log(dato.value);
  console.log(typeof dato.value);

  let base = Number(dato.value);

  console.log(typeof base);
});
