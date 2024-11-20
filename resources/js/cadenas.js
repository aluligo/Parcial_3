function ejecutarEjerciciosCadenas() {
    const resultadosDiv = document.getElementById("resultados");
    resultadosDiv.innerHTML = "";
  
    // Ejercicio 7: String.replace()
    resultadosDiv.innerHTML += "<h3>Ejercicio 7: replace()</h3>";
    resultadosDiv.innerHTML += "<p>Reemplaza la primera ocurrencia de una palabra o frase en un texto.</p>";
    const mensaje = "Feliz Navidad y un próspero año nuevo";
    resultadosDiv.innerHTML += `Texto original: '${mensaje}'<br>`;
    resultadosDiv.innerHTML += `Reemplazado: '${mensaje.replace("Navidad", "Año Nuevo")}'<br>`;
  
    // Ejercicio 8: String.replaceAll()
    resultadosDiv.innerHTML += "<h3>Ejercicio 8: replaceAll()</h3>";
    resultadosDiv.innerHTML += "<p>Reemplaza todas las ocurrencias de una palabra o frase en un texto.</p>";
    const textoMultiple = "🎅 Navidad 🎅 y Navidad son geniales!";
    resultadosDiv.innerHTML += `Texto original: '${textoMultiple}'<br>`;
    resultadosDiv.innerHTML += `Reemplazado: '${textoMultiple.replaceAll("Navidad", "Fiestas")}'<br>`;
  
    // Ejercicio 9: String.split()
    resultadosDiv.innerHTML += "<h3>Ejercicio 9: split()</h3>";
    resultadosDiv.innerHTML += "<p>Divide un texto en partes utilizando un separador específico.</p>";
    const lista = "Manzanas,Peras,Uvas,Naranjas";
    resultadosDiv.innerHTML += `Texto original: '${lista}'<br>`;
    resultadosDiv.innerHTML += `Convertido a Array: [${lista.split(",").join("|")}]<br>`;
  }
  //Dayana Lopez