const form = document.querySelector("#form");
const input1 = document.querySelector("#calculo1");
const input2 = document.querySelector("#calculo2");
const btn = document.querySelector("#btncalcular");
const resultado = document.querySelector("#resultado");

// form.addEventListener("submit", sumar);

// function sumar(event) {
//   event.preventDefault();
//   const suma = input1.value + input2.value;
//   resultado.innerText = "Tu resultado de la suma es:" + suma;
// }

btn.addEventListener("click", sumar);

function sumar(event) {
  const suma = input1.value + input2.value;
  resultado.innerText = "Tu resultado de la suma es:" + suma;
}
