// 1.1 Añade un botón a tu html con el id btnToClick y en tu javascript añade el evento click que ejecute un console log con la información del evento del click

const boton = document.querySelector("#btnToClick");
boton.addEventListener("click", (event) => {
    console.log("Has hecho click!")
})


// 1.2 Añade un evento 'focus' que ejecute un console.log con el valor del input.

const foco = document.querySelector(".focus");
foco.addEventListener("focus", (event) => {
    console.log("Has hecho focus!");
})
 

// 1.3 Añade un evento 'input' que ejecute un console.log con el valor del input.

const input1 = document.querySelector(".value");
input1.addEventListener("input", (event) => {
    console.log("Has hecho input!");
})