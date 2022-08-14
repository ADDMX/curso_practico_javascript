const h1 = document.querySelector("h1");
const texto_simulado = document.querySelector(".texto_simulado");
const p = document.querySelector(".parrafo");
const id = document.querySelector("#pid");
const input = document.querySelector("input");
const conHtml = document.querySelector(".con_html");
const conText = document.querySelector(".con_texto");

h1.innerHTML = "Estamos seleccionando desde javascript un elemento h1";
texto_simulado.innerHTML =
  "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede mollis pretium. Integer tincidunt. Cras dapibus. Vivamus elementum semper nisi. Aenean vulputate eleifend tellus. Aenean leo ligula, porttitor eu, consequat vitae, eleifend ac, enim. Aliquam lorem ante, dapibus in, viverra quis, feugiat a, tellus. Phasellus viverra nulla ut metus varius laoreet. Quisque rutrum. Aenean imperdiet. Etiam ultricies nisi vel augue. Curabitur ullamcorper ultricies nisi. Nam eget dui. Etiam rhoncus. Maecenas tempus, tellus eget condimentum rhoncus, sem quam semper libero, sit amet adipiscing sem neque sed ipsum. Nam quam nunc, blandit vel, luctus pulvinar, hendrerit id, lorem. Maecenas nec odio et ante tincidunt tempus. Donec vitae sapien ut libero venenatis faucibus. Nullam quis ante. Etiam sit amet orci eget eros faucibus tincidunt. Duis leo. Sed fringilla mauris sit amet nibh. Donec sodales sagittis magna. Sed consequat, leo eget bibendum sodales, augue velit cursus nunc, ";

p.innerHTML = "Estamos seleccionado desde javascript un elemento CLASS";

id.innerText = "Estamos seleccionado desde javascript un elemento ID";

console.log({
  h1,
  texto_simulado,
  p,
  id,
  input,
});

console.log(h1);
console.log(texto_simulado);
console.log(p);
console.log(id);
console.log(input);

console.log(input.value);

conHtml.innerHTML =
  "este es un ejemplo con HTML <br> <div>Este es otro parrafo</div>";
conText.innerText =
  "este es un ejemplo con HTML <br> <div>Este es otro parrafo</div>";

console.log(h1.getAttribute("class"));
console.log(p.getAttribute("class"));
console.log(conHtml.getAttribute("class"));

// este atributo sirve para modificar una clase dentro del HTML
h1.setAttribute("class", "verde");

// este atributo sirve para agregar una clase dentro del HTML

h1.classList.add("rojo");
h1.classList.remove("amarillo");
p.classList.add("padding");

input.value = "Escribe tu nombre por favor";

console.log(document.createElement("div"));

const img = document.createElement("img");
img.setAttribute(
  "src",
  "https://imagenes.elpais.com/resizer/w212nZUvnJ8pLMDV5AC4WHk_a_E=/414x0/arc-anglerfish-eu-central-1-prod-prisa.s3.amazonaws.com/public/I2W3YYSS3VPD3RNU4L3O5G7TUI.jpg"
);
console.log(img);

id.append(img);
