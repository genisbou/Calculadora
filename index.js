// Obtindre la informació del navegador
const browserInfo = {
    browserName: navigator.userAgent.match(/(Chrome|Firefox|Safari|Edge|Opera)/i)[0],
    browserVersion: navigator.userAgent.match(/(\d+(?:\.\d+)+)/)[0],
    os: navigator.platform,
    lang : navigator.language,
    // Dades del hostname URL
    href: window.location.href,
    // Dades de la darrera modificació de la calculadora
    lastModified_calculadora: calculadora.html.lastModified
    


  
};
  
  // Mostrar la informació en el document HTML
  document.getElementById("browser-info").innerHTML = `
    <p>Navegador: ${browserInfo.browserName}</p>
    <p>Versió: ${browserInfo.browserVersion}</p>
    <p>Sistema Operatiu: ${browserInfo.os}</p>
    <p>Llenguatge: ${browserInfo.lang}</p>
    <p>URL: ${browserInfo.href}</p>
    <p>Última modificació de la calculadora: ${browserInfo.lastModified_calculadora}</p>
  `;