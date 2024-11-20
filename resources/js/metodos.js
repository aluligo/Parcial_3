function ejecutarEjerciciosMetodos() {
    const resultadosDiv = document.getElementById("resultados");
    resultadosDiv.innerHTML = "";
  
    // Ejercicio 4: While
    resultadosDiv.innerHTML += "<h3>Ejercicio 4: While</h3>";
    resultadosDiv.innerHTML += "<p>Pide números al usuario y calcula la suma hasta que se ingrese 0.</p>";
    let suma = 0;
    let numero;
    do {
      numero = parseInt(prompt("Ingresa un número (0 para salir):"));
      suma += numero;
    } while (numero !== 0);
    resultadosDiv.innerHTML += `Suma total: ${suma} <br>`;
  
    // Ejercicio 5: String.padEnd()
    resultadosDiv.innerHTML += "<h3>Ejercicio 5: padEnd()</h3>";
    resultadosDiv.innerHTML += "<p>Añade caracteres al final de una cadena para que alcance una longitud específica.</p>";
    const texto = "Feliz Navidad";
    resultadosDiv.innerHTML += `Texto original: '${texto}'<br>`;
    resultadosDiv.innerHTML += `Con relleno: '${texto.padEnd(20, "!")}'<br>`;
  
    // Ejercicio 6: String.repeat()
    resultadosDiv.innerHTML += "<h3>Ejercicio 6: repeat()</h3>";
    resultadosDiv.innerHTML += "<p>Repite una cadena varias veces.</p>";
    const frase = "Feliz ";
    resultadosDiv.innerHTML += `Repetido 3 veces: '${frase.repeat(3)}'<br>`;
  }
  