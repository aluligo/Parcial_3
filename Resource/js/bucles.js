function ejecutarEjerciciosBucles() {
    const resultadosDiv = document.getElementById("resultados");
    resultadosDiv.innerHTML = ""; 
  
    // Ejercicio 1: For
    resultadosDiv.innerHTML += "<h3>Ejercicio 1: For</h3>";
    resultadosDiv.innerHTML += "<p>Muestra los números del 1 al 10 usando un bucle for.</p>";
    let resultado1 = "";
    for (let i = 1; i <= 10; i++) {
      resultado1 += `${i} <br>`;
    }
    resultadosDiv.innerHTML += resultado1;
    
    // Ejercicio 2: For/In
    resultadosDiv.innerHTML += "<h3>Ejercicio 2: For/In</h3>";
    resultadosDiv.innerHTML += "<p>Recorre las propiedades de un objeto y muestra sus nombres y valores.</p>";
    const regalo = {
      nombre: "Muñeco de nieve",
      precio: 25.0,
      categoria: "Navidad"
    };
    let resultado2 = "";
    for (let propiedad in regalo) {
      resultado2 += `${propiedad}: ${regalo[propiedad]} <br>`;
    }
    resultadosDiv.innerHTML += resultado2;
  
    // Ejercicio 3: For/Of
    resultadosDiv.innerHTML += "<h3>Ejercicio 3: For/Of</h3>";
    resultadosDiv.innerHTML += "<p>Recorre los elementos de un array y los muestra uno por uno.</p>";
    const familia = ["Ana", "Carlos", "Sofía", "Juan"];
    let resultado3 = "";
    for (let integrante of familia) {
      resultado3 += `${integrante} <br>`;
    }
    resultadosDiv.innerHTML += resultado3;
  }