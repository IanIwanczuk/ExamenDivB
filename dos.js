function mostrar()
{
    /* 
    El centro de hisopado de Ezeiza recibe una tripulación de 8 personas.
    Al ser hisopadas se ingresan sus datos en la aplicación:
        -nacionalidad ("argentina", "extranjero")
        -resultado("positivo", "negativo")
        -edad(entre 18 y 65)
        -cepa("delta", "alfa", "beta", "ninguna")
    Para poder ingresar ninguna el resultado debe ser negativo
    Luego del ingreso informar:
        a- Porcentaje de positivos
        b- Porcentaje de negativos
        c- Cuál es la cepa más encontrada
        d- Edad del mayor extranjero contagiado
        e- Cantidad de personas argentinas contagiadas con la delta
    */

    let nacionalidad;
    let resultado;
    let edad;
    let cepa;

    let contPositivos = 0;
    let contNegativos = 0;
    let porcenPos;
    let porcenNeg;

    let contDelta = 0;
    let contAlfa = 0;
    let contBeta = 0;
    let cepaMasEnc;

    let flagExtranjero = 1;
    let mayorExtContag;

    let argDelta = 0; 

    for(let i = 1; i < 9; i++){
        console.log(i);
        nacionalidad = prompt("Ingrese su nacionalidad. (argentina/extranjero)").toLowerCase();
		while(nacionalidad != "argentina" && nacionalidad != "extranjero"){
			nacionalidad = prompt("Error. Reingrese su nacionalidad. (argentina/extranjero)").toLowerCase();
		}

        resultado = prompt("Ingrese el resultado (Positivo/Negativo)").toLowerCase();
		while(resultado != "positivo" && resultado != "negativo"){
			resultado = prompt("ERROR. Reingrese el resultado (Positivo/Negativo)").toLowerCase();
		}
        if(resultado == "positivo"){
            contPositivos++;
        } else {
            contNegativos++;
        }

        edad = parseInt(prompt("Ingrese su edad. (18-65)"));
		while(isNaN(edad) || (edad < 18  || edad > 65)){
			edad = parseInt(prompt("Por favor, ingrese una edad válida. (18-65)"));
		}
        if(nacionalidad == "extranjero"){                   // D)
            if(flagExtranjero || edad > mayorExtContag){
                flagExtranjero = 0;
                mayorExtContag = edad;
            }
        }

        cepa = prompt("Ingrese la cepa. (Delta/Alfa/Beta/Ninguna)").toLowerCase();
		while(cepa != "delta" && cepa != "alfa" && cepa != "beta" && cepa != "ninguna"){
			cepa = prompt("Error. Reingrese la cepa. (Delta/Alfa/Beta/Ninguna)").toLowerCase();
		}
        if(cepa == "delta") {
            contDelta++;
            resultado = "positivo";
        } else if(cepa == "alfa") {
            contAlfa++;
            resultado = "positivo";
        } else if(cepa == "beta"){
            contBeta++;
            resultado = "positivo";
        } else {
            resultado = "negativo";
        }
        
        // A)
        porcenPos = (contPositivos * 100) / 8;
        // B)
        porcenNeg = (contNegativos * 100) / 8;
        // C) 
        if(contBeta > contDelta && contBeta > contAlfa){
            cepaMasEnc = "beta";
        } else if(contDelta >= contBeta && contDelta > contAlfa){
            cepaMasEnc = "delta";
        } else {
            cepaMasEnc = "alfa";
        }
        //E)
        if(nacionalidad == "argentina" && cepa == "delta"){
            argDelta++;
        }

    }

    document.write("A) Porcentaje de positivos: " + porcenPos + 
               "<br>B) Porcentaje de negativos: " + porcenNeg +
               "<br>C) Cepa más encontrada: " + cepaMasEnc +
               "<br>D) Edad del mayor extranjero contagiado: " + mayorExtContag +
               "<br>E) Argentinos con cepa delta: " + argDelta);

} // Función. 
