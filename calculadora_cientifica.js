let numero1 = "";
let numero2 = "";
let operador = "";
let memory = 0;
let resultat1_x = "";
let error1= ("ERROR. No es pot dividir entre zero.");


// Seleccionar tots els components que tinguin el ID display
const display = document.getElementById("display");
// Seleccionar tots els type button amb classe button
const buttons = document.querySelectorAll(".button"); // Crea una array

buttons.forEach (button => {

    button.addEventListener ("click", () => {
        const buttonselect = button.value; // Guarda el valor del botó seleccionat


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
           

            const numeros_splitats = display.value.split(operador); //Separa els valors per l'operador
            numero1 = (parseFloat(numeros_splitats[0])); // Guarda el primer valor a numero1
            numero2= (parseFloat(numeros_splitats[1])); // Guarda el segon valor a numero2
            display.value = eval(parseFloat(numero1) + operador + parseFloat(numero2)); // Evalua la expressió
            
           if (operador === "/" && numero2 === 0) {
                display.value = error1;
                return;
            }
            
            if (biutton.id === "divisio") {

                numero1 = display.value; // Guarda el resultat a numero1
                numero2 = ""; // Esborra el valor de numero2
                operador = ""; // Esborra el valor de operador

                return; // Si és igual, no fa res més (no continua)
            }
            
           
           

        }

        if (button.id === "suma"){

            numero1 = display.value; // Guarda el valor del display a numero1
            operador = "+"; // Guarda el valor de l'operador
            display.value = operador;
            display.value = numero1;
            display.value += operador;
            // Veure tota la operaico a la pantalla abans de fer la suma
            return; // Si és suma, no fa res més (no continua)

        }

        if (button.id === "resta"){

            numero1 = display.value; // Guarda el valor del display a numero1
            operador = "-"; // Guarda el valor de l'operador
            display.value = operador;
            display.value = numero1;
            display.value += operador;
            // Veure tota la operaico a la pantalla abans de fer la suma
            return; // Si és suma, no fa res més (no continua)

        }

        if (button.id === "multiplicacio"){

            numero1 = display.value; // Guarda el valor del display a numero1
            operador = "*"; // Guarda el valor de l'operador
            display.value = operador;
            display.value = numero1;
            display.value += operador;
            // Veure tota la operaico a la pantalla abans de fer la suma
            return; // Si és suma, no fa res més (no continua)
        }

        if (button.id === "divisio"){

                numero1 = display.value; // Guarda el valor del display a numero1
                operador = "/"; // Guarda el valor de l'operador
                display.value = operador;
                display.value = numero1;
                display.value += operador;
                // Veure tota la operaicó a la pantalla abans de fer la suma
                return; // Si és suma, no fa res més (no continua)
           

        }

      
        if (button.id === "percentatge"){
            numero1 = display.value; // Guarda el valor del display a numero 1
            operador = "%"; // Guarda el valor de l'operador
            display.value = operador;
            display.value = numero1;
            display.value += operador;
            // Veure tota la operacio a la pantalla abans de fer la suma
            return; // No continua
        }

        if (button.id === "m+"){ // Suma un valor al valor guardat a la memòria
            
            if (display.value !== "0") {
                memory += parseFloat(display.value);
            }

            return;

        }
        if (button.id === "m-"){ // Resta un valor al valor guardat a la memòria

            memory -= parseFloat(display.value);
            return;

        }

        if (button.id === "mr") { // Mostra el valor de la memòria
            display.value = memory;
            return;
        }

        if  (button.id === "ac") {
            display.value = "0" ; // Si el valor és C, es posa a 0
            return; // Si esborra, no fa res més (no continua)
        }

        if (button.id === "1/x") {

            numero1 = "1"; // Guarda el valor del display a numero 1
            numero2= display.value;
            operador = "/";
            display.value = numero1 + operador + numero2;



            return;
        }

        if (button.id ==="arrel") {
            numero1 = display.value;
            operador = "√";
            display.value = operador + numero1; // Mostra l'operació a la pantalla
            // Guardar el resultat en una funcio
            return;
            
        }


        //

        if (display.value === "0") {
            display.value = buttonselect;  // Si el valor és 0, es mostra directament
        }
        else {
            display.value += buttonselect;  // Si no és 0, s'afegeix al valor existent

        }

    });
});