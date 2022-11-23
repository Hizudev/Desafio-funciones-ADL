function detectaBlanco(color) {
  let message = document.querySelector("#message");
  if (color === "#ffffff") {
    message.style.color = "black";
  } else {
    message.style.color = "white";
  }
  return color;
}

function caraBlack(color, numero){
  let emoji = document.querySelector(`#emoji${numero}`);
  if (color === "#ffffff"){
    emoji = emoji.style.color = "black";
  }
  else{
    emoji = emoji.style.color = "white";
  }
  return emoji
}

let square1 = document.querySelector("#square1");
let square2 = document.querySelector("#square2");
let square3 = document.querySelector("#square3");
let square4 = document.querySelector("#square4");
let pintorA = document.querySelector("#pintorA");
let pintorS = document.querySelector("#pintorS");
let pintorD = document.querySelector("#pintorD");
let pintorF = document.querySelector("#pintorF");

let color = document.addEventListener("keydown", (tecla) => {
  let minus = tecla.key;
  minus = minus.toLowerCase();
  if (minus === "a") {
    color = pintorA.value;
    message.style.backgroundColor = color;
    message.innerHTML = `Tecla A ~ Color seleccionado: ${detectaBlanco(color)}`;
  } else if (minus === "s") {
    color = pintorS.value;
    message.style.backgroundColor = color;
    message.style.color = "white";
    message.innerHTML = `Tecla S ~ Color seleccionado: ${detectaBlanco(color)}`;
  } else if (minus === "d") {
    color = pintorD.value;
    message.style.backgroundColor = color;
    message.style.color = "white";
    message.innerHTML = `Tecla D ~ Color seleccionado: ${detectaBlanco(color)}`;
  } else if (minus === "f") {
    color = pintorF.value;
    message.style.backgroundColor = color;
    message.style.color = "white";
    message.innerHTML = `Tecla F ~ Color seleccionado: ${detectaBlanco(color)}`;
  } else {
    color = "";
    message.style.backgroundColor = "";
    message.style.color = "#7743DB";
    message.innerHTML =
      "No tienes ningún color seleccionado. Al hacer click sobre un AmongUs, este volverá a su color original.";
  }
});

square1.addEventListener("click", () => {
  square1.style.backgroundColor = color;
  caraBlack(color, 1);
  console.log(color);
});
square2.addEventListener("click", () => {
  square2.style.backgroundColor = color;
  caraBlack(color, 2);
});
square3.addEventListener("click", () => {
  square3.style.backgroundColor = color;
  caraBlack(color, 3);
});
square4.addEventListener("click", () => {
  square4.style.backgroundColor = color;
  caraBlack(color, 4);
});
