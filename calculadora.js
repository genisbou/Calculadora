let numero1 = "";
let numero2 = "";
let operador = "";
let resultat = "";

// Seleccionar tots els components que tinguin el ID display
const display = document.getElementById("display");
// Seleccionar tots els type button amb classe button
const buttons = document.querySelectorAll(".button"); // Crea una array

buttons.forEach (button => {

    button.addEventListener ("click", () => {
        const buttonselect = button.value; // Guarda el valor del botó seleccionat
        
        if (display.value === "0") { 
            display.value = buttonselect;  // Si el valor és 0, es mostra directament
        }

        if  (buttonselect === "C") {
            display.value = "0" ; // Si el valor és C, es posa a 0
        }
        
        if (buttomselect === "del") {
            display.value = display.value.slice(0, -1); // Si el valor és del, esborra l'últim caràcter
        }
        else {
            display.value += buttonselect;  // Si no és 0, s'afegeix al valor existent
        }
        
        
    });
});