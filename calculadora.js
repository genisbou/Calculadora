let numero1 = "";
let numero2 = "";
let operador = "";
let error1= ("ERROR no es pot dividir/0.");


// Seleccionar tots els components que tinguin el ID display
const display = document.getElementById("display");
// Seleccionar tots els type button amb classe button
const buttons = document.querySelectorAll(".button"); // Crea una array

buttons.forEach (button => {

    button.addEventListener ("click", () => {
        const buttonselect = button.value; // Guarda el valor del botó seleccionat
        

        if  (button.id === "clear") {
            display.value = "0" ; // Si el valor és C, es posa a 0
            return; // Si esborra, no fa res més (no continua)
        }
        
        if (button.id === "del") {
            // Si la length del display és 1, posa el valor a 0
            if (display.value.length === 1) {
                display.value = "0";
                return; // Si esborra, no fa res més (no continua)
            }
            else{ // Si no, esborra l'últim caràcter
                display.value = display.value.slice(0, -1);
                return; //  Si esborra, no fa res més (no continua)
            }
        }

        if (button.id === "igual") {
            
            numero2= display.value.split(operador)[1]; // Guarda el valor del display a numero2 i separa els valors per l'operador
            display.value = eval(parseFloat(numero1) + operador + parseFloat(numero2)); // Evalua la expressió
            numero1 = display.value; // Guarda el resultat a numero1
            numero2 = ""; // Esborra el valor de numero2
            operador = ""; // Esborra el valor de operador
            return; // Si és igual, no fa res més (no continua)
        }

        if (button.id == "suma"){
            
            numero1 = display.value; // Guarda el valor del display a numero1
            operador = "+"; // Guarda el valor de l'operador
            display.value = operador;
            display.value = numero1; 
            display.value += operador; 
            // Veure tota la operaico a la pantalla abans de fer la suma
            return; // Si és suma, no fa res més (no continua)
            
        }

        if (button.id == "resta"){

            numero1 = display.value; // Guarda el valor del display a numero1
            operador = "-"; // Guarda el valor de l'operador
            display.value = operador;
            display.value = numero1; 
            display.value += operador; 
            // Veure tota la operaico a la pantalla abans de fer la suma
            return; // Si és suma, no fa res més (no continua)

        }

        if (button.id == "multiplicacio"){

            numero1 = display.value; // Guarda el valor del display a numero1
            operador = "*"; // Guarda el valor de l'operador
            display.value = operador;
            display.value = numero1; 
            display.value += operador; 
            // Veure tota la operaico a la pantalla abans de fer la suma
            return; // Si és suma, no fa res més (no continua)
        }

        if (operador === "/" && numero2 === 0) {
            display.value = error1;
            return;
        }

        if (button.id == "divisio"){

            numero1 = display.value; // Guarda el valor del display a numero1
            operador = "/"; // Guarda el valor de l'operador
            display.value = operador;
            display.value = numero1; 
            display.value += operador; 
            // Veure tota la operaico a la pantalla abans de fer la suma
            return; // Si és suma, no fa res més (no continua)
        }
                       

        if (display.value === "0") { 
            display.value = buttonselect;  // Si el valor és 0, es mostra directament
        }
        else {
            display.value += buttonselect;  // Si no és 0, s'afegeix al valor existent
            
        }
        
    });
});