// 1. Responde las siguientes preguntas en la sección de comentarios:

//¿Qué es una variable y para qué sirve?

// son espacios en memoria donde podemos guardar información (de los tipos y estruccturas de datos que soporten nuestro lenguaje)

// ¿Cuál es la diferencia entre declarar e inicializar una variable?

// Declarar una variable es cuando le decimos a Javascript que vamos a crear una variable con un nombre.

let nombre;

// Inicializar una variable es cuando le damos un valor a la variable

let apellido = "Rafael";

// var - es un forma muy antigua de declarar variables
// let - nos permmite cambiar el valor de nuestras variables
// const - estas variables no pueden cambiar de valor siempre van hacer el mismo valor

//¿Cuál es la diferencia entre sumar números y concatenar strings?

let = 7 + 10;
let sumarNombres = "rafael" + "lucia" + "renato";

//¿Cuál operador me permite sumar o concatenar?

// el operador que nos permite sumar o concatenar es "+"

// 2.Determina el nombre y tipo de dato para almacenar en variables la siguiente información:

// Nombre: string

let nombre = "Rafael";

// Apellido: string

let apellido = "Reyes";

// Nombre de usuario en Platzi: string

let nombreDeUsuario = "Rafa009";

// Edad: number

let edad = "40";

// Correo electrónico string

let correoElectronico = "rafael_2007@hotmail.es";

// Mayor de edad: boolean

let mayorDeEdad = true;

// Dinero ahorrado number

let dineroAhorrado = 3200;

// Deudas number

let deudas = 200;

// Calcula e imprime las siguientes variables a partir de las variables del ejemplo anterior:

// Nombre completo (nombre y apellido)

let nombreCompleto = nombre + " " + apellido;

//  Dinero real (dinero ahorrado menos deudas)

let dineroAhorrados = dineroAhorrado - deudas;

// ------ FUNCIONES  --------

// Responde las siguientes preguntas en la sección de comentarios:

// ¿Qué es una función?

// Las funciones nos permiten guardar bloques de codigo para reutilizarlos y ejecutarlos en el futuro

function registroHuespedes(nombre, apellido) {
  return nombre + " " + apellido;
}

// ¿Cuándo me sirve usar una función en mi código?

// Nos sirve cuando tenemos variables o bloques de código muy parecidos (con cambios que podrian ser parametros y argumentos ) que podemos encapsular para reutilizar más de una vez en el futuro.

// tambien nos sirve para ordenar y mejorar la legibilidad de nuestro código 

// ¿Cuál es la diferencia entre parámetros y argumentos de una función?

- las funciones reciben parámetros cuando las creamos. y les enviamos argumentos cuando las ejecutamos.

// Convierte el siguiente código en una función, pero, cambiando cuando sea necesario las variables constantes por parámetros y argumentos en una función:

const name = "Rafael";
const lastname = "Reyes Vázquez";
const completeName = name + lastname;
const nickname = "rafa009";

function nombreCompleto(name, lastname) {
  return name + " " + lastname
}

function saludarEstudiantes(name, lastname, nickname) {
  const completeName = nombreCompleto(name, lastname);

  console.log("Mi nombre es " + completeName + ", pero prefiero que me digas " + nickname + ".");
}

// Segundo ejemplo//

function saludo(name, lastname, username) {
  const completeName = name + lastname;
  console.log ("Mi nombre es " + completeName + ",pero prefieron que me digas " + username + ".")
}

// tercer ejemplo // 

function saludo (name, lastname, username) {
  console.log("Mi nombre es " + name + " " +  lastname + ", pero prefieron que me digas " + username + ".")
}

// Condicionales //


    // ¿Qué es un condicional?

    // son la forma en que ejecutamos un bloque de codigo u otro dependen de alguna condicion o validacion 

   //  ¿Qué tipos de condicionales existen en JavaScript y cuáles son sus diferencias?

  if (else y  else if), switch 

    //¿Puedo combinar funciones y condicionales?

    //si las funciones pueden encapsular cualquier bloque de codigo, inlcuyendo condicionales.

    //El condicional if (con el else y else if ) nos permite hacer validaciones completamente distintas (si asi queremos) en cada validacion o condicional. en cambio, en el switch todos los cases se comparan con la misma variable o condición 
    //que definimos en el switch.


const tipoDeSuscripcion = "Basic";

switch (tipoDeSuscripcion) {
   case "Free":
       console.log("Solo puedes tomar los cursos gratis");
       break;
   case "Basic":
       console.log("Puedes tomar casi todos los cursos de Platzi durante un mes");
       break;
   case "Expert":
       console.log("Puedes tomar casi todos los cursos de Platzi durante un año");
       break;
   case "ExpertPlus":
       console.log("Tú y alguien más pueden tomar TODOS los cursos de Platzi durante un año");
       break;
}

const tipoDeSuscripcion = "Basic";

if (tipoDeSuscripcion == "Free"){
  console.log("solo puedes tomar los cursos gratis");
} else if (tipoDeSuscripcion == "Basic"){
  console.log("Puedes tomar casi todos los cursos de Platzi durante un mes");
}else if (tipoDeSuscripcion == "Expert"){
  console.log("Puedes tomar casi todos los cursos de Platzi durante un año");
}else if (tipoDeSuscripcion == "ExpertPlus"){
  console.log("Tú y alguien más pueden tomar TODOS los cursos de Platzi durante un año");
}else{
  console.log("no tienes derecho a ningun tipo de suscripción paga por favor");
}

const membresia = 1;

if (membresia == 1) {
  console.log("tu membresia es basica pagas 500 pesos mensuales");
}else if (membresia == 2){
  console.log("tu membresia es gold pagaras 800 pesos mensuales + mantenimiento de 250 pesos");
}else if (membresia == 3){
  console.log("tu membresia es platinum pagaras 1,200 pesos mensuales + cuota de mantenimiento de 650 anuales");
}else if (membresia == 4){
  console.log("tu membresia es kids pagaras 150 mensuales + cuota de mantenimiento de 100 pesos anuales");
}else{
  console.log("no tienes ningun tipo de membresia favor de registrarte y seleccionar la membresia de tu preferencia gracias.");
};

const membresia = 1;

switch (membresia ) {
  case 1:
    console.log("tu membresia es basica pagas 500 pesos mensuales");
    break;
  case 2:
    console.log("tu membresia es gold pagaras 800 pesos mensuales + mantenimiento de 250 pesos");
    break;
   case 3:
    console.log("tu membresia es platinum pagaras 1,200 pesos mensuales + cuota de mantenimiento de 650 anuales");
    break; 
   case 4:
    console.log("tu membresia es kids pagaras 150 mensuales + cuota de mantenimiento de 100 pesos anuales");
    break;
    case "ninguna":
    console.log("no tienes ningun tipo de membresia favor de registrarte y seleccionar la membresia de tu preferencia gracias.");
    break;  
}

// CICLOS // 

for (let i = 0; i < 5; i++) {
    console.log("El valor de i es: " + i);
}


for (let i = 10; i >= 2; i--) {
    console.log("El valor de i es: " + i);
}

let i = 0;

while (i < 5) {
  console.log("el valor de i es:" + i);
  i++;
}

for (let i = 10; i >= 2; i--) {
    console.log("El valor de i es: " + i);
}

let i = 10;

while (i>=2) {
  console.log("El valor de i es: " + i);
  i--;
};

let respuesta;

while (respuesta != '4') {
  let pregunta = prompt('Cuanto es 2 +2');
  respuesta = pregunta;
}

//   Arrays  y Objetos //

//Arrays

const array = [1, 'hola', true, false];

// Objects

const obj = {
  auto = "verna",
  modelo = 2007,
  ciudad = "CDMX",
  año = 1998,
};

function primerElemento(array) {
  console.log(array[0]);
}

primerElemento (["rafa", "alfredo", "damian", "luis"]);

