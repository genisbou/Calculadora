// Obtindre la informació del navegador
const browserInfo = {
    browserName: navigator.userAgent.match(/(Chrome|Firefox|Safari|Edge|Opera)/i)[0],
    browserVersion: navigator.userAgent.match(/(\d+(?:\.\d+)+)/)[0],
    os: navigator.platform,
    lang : navigator.language,
    // Dades del hostname URL
    href: window.location.href,
    // Ultima modifiacio
    lastModified: document.lastModified
  
};

// Go back 
function goBack() {
    window.history.back();
}
// Go forward
function goForward() {
    window.history.forward();
}

  // Mostrar la informació en el document HTML
  document.getElementById("browser-info").innerHTML = `
    <p>Navegador: ${browserInfo.browserName}</p>
    <p>Versió: ${browserInfo.browserVersion}</p>
    <p>Sistema Operatiu: ${browserInfo.os}</p>
    <p>Llenguatge: ${browserInfo.lang}</p>
    <p>URL: ${browserInfo.href}</p>
    <p>Ultima Modificació: ${browserInfo.lastModified}</p>
    
    
  `;

// Go back button
document.getElementById("go-back").addEventListener("click", goBack);
// Go forward button
document.getElementById("go-forward").addEventListener("click", goForward);

// Si es prem el boto settings, preguntar nom usuari i tipus de calculadora i guardar-ho
document.getElementById("settings").addEventListener("click", () => {
    let username = prompt("Introdueix el teu nom d'usuari");
    // Guardar el nom d'usuari a localStorage
    localStorage.setItem("username", username);
    // Guardar el tipus de calculadora a localStorage
    let calculatorType = prompt("Introdueix el tipus de calculadora (1: Bàsica, 2: Científica)");
    localStorage.setItem("calculatorType", calculatorType);
    alert("Configuració guardada correctament. En el botó de calculadora pots veure el tipus de calculadora que has seleccionat.");
});
// Si es prem el boto de calculadora, mostrar el tipus de calculadora que s'ha guardat
document.getElementById("calculator").addEventListener("click", () => {
    let username = localStorage.getItem("username");
    let calculatorType = localStorage.getItem("calculatorType");
    alert(`Nom d'usuari: ${username}\nTipus de calculadora (1: Bàsica, 2: Científica): ${calculatorType}`);
    if (calculatorType == 1) {
        window.location.href = "calculadora.html";
    }
    if (calculatorType == 2) {
        window.location.href = "calculadora_cientifica.html";
    }
});