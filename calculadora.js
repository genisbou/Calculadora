let numero1 = "";
let numero2 = "";
let operador = "";
let resultat = "";

// Seleccionar tots els components que tinguin el ID display
const display = document.getElementById("display");
// Seleccionar tots els type button 
const buttons = document.querySelectorAll("button"); // Crea una array

buttons.forEach (button => {

    button.addEventListener ("click", () => {

        const buttonselect = button.value; 
        display.value = buttonselect;
    })

})