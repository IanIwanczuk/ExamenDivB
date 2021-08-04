
function mostrar()
{
	/*
	Mientras el usuario quiera, de cada vacunado se solicita:
		-nombre (entre 3 y 10 caracteres)
		-edad ( mayor o igual a 12)
		-vacuna (“rusa”, “china”, “americana”)
		(entre 12 y 17 años ambos incluidos solo se permite la vacuna americana)
		-dosis (“p” en caso de ser la primer dosis o “s” en caso de ser la segunda dosis)
		-sexo( “f” o “m” )

	Informar:
		a- Promedio de edad de los que se vacunaron con la rusa
		b- Nombre y vacuna de la mujer con más edad
		c- De las personas que recibieron la vacuna americana que porcentaje son mayores de edad
		d- Porcentaje de los que están vacunados con 2 dosis sobre el total de vacunados
		e- Vacuna menos inoculada
	*/

	let nombre;
	let edad;
	let tipoVacuna;
	let dosis;
	let sexo;
	let respuesta = 's';

	let vacunadosRusa = 0;
	let acumEdadRusa = 0;
	let promedEdadRusa;

	let mujMasEdad;
	let mujMasEdadVacuna;
	let edadMujMasEdad;
	let flagMujMasEdad = 1;

	let vacunadosAmericana = 0;
	let vacMayoresAmerica = 0;
	let porcentajeMayoresAmerica;

	let vacSegunDosis = 0;
	let contVacunados = 0;
	let porcentajeSegunDosis;
	
	let contRusa = 0;
	let contAmericana = 0;
	let contChina = 0;
	let vacunaMenos;

	do{
		nombre = prompt("Ingrese su nombre.");
		while(nombre.length < 3){
			nombre = prompt("Por favor, ingrese su nombre.");
		}

		edad = parseInt(prompt("Ingrese su edad."));
		while(isNaN(edad) || edad < 12){
			edad = parseInt(prompt("Por favor, ingrese una edad válida."));
		}

		tipoVacuna = prompt("Ingrese el tipo de vacuna. (Rusa/China/Americana)").toLowerCase();
		while(tipoVacuna != "rusa" && tipoVacuna != "china" && tipoVacuna != "americana"){
			tipoVacuna = prompt("Error. Reingrese su vacuna. (Rusa/China/Americana)").toLowerCase();
		}
		if(edad <= 17){
			tipoVacuna = "americana";
		}

		dosis = prompt("¿Primera dósis o segunda dósis? (p/s)").toLowerCase();
		while(dosis != 'p' && dosis != 's'){
			dosis = prompt("Respuesta inválida. ¿Primera dósis o segunda dósis? (p/s)").toLowerCase();
		}

		// D)
		contVacunados++;
		if(dosis == 's'){
			vacSegunDosis++;
		}

		sexo = prompt("Ingrese su sexo. (f/m)").toLowerCase();
		while(sexo != 'f' && sexo != 'm'){
			sexo = prompt("Error. Reingrese su sexo. (f/m)").toLowerCase();
		}

		// A)
		if(tipoVacuna == "rusa"){
			vacunadosRusa++;
			acumEdadRusa += edad;
			// alert(vacunadosRusa + " " + acumEdadRusa);
		} else if(tipoVacuna == "americana"){            // C)
			vacunadosAmericana++;
			if(edad >= 18){
				vacMayoresAmerica++;
			}
			// alert(vacunadosAmericana + " " + vacMayoresAmerica);
		}

		// B)
		if(sexo == 'f'){
			if(flagMujMasEdad || edad > edadMujMasEdad){
				edadMujMasEdad = edad;
				mujMasEdadVacuna = tipoVacuna;
				mujMasEdad = nombre;
			}
		}

		// E)
		if(tipoVacuna == "rusa"){
			contRusa++;
		} else if(tipoVacuna == "americana"){
			contAmericana++;
		} else {
			contChina++;
		}

		respuesta = prompt("¿Desea seguir ingresando personas? (s/n)").toLowerCase();
		while(respuesta != 's' && respuesta != 'n'){
			respuesta = prompt("Ingrese una respuesta válida. ¿Desea seguir? (s/n)").toLowerCase();
		}

	} while(respuesta == 's');

	// A)
	promedEdadRusa = acumEdadRusa / vacunadosRusa;
	// C)
	porcentajeMayoresAmerica = (vacMayoresAmerica * 100) / vacunadosAmericana;
	// D)
	porcentajeSegunDosis = (vacSegunDosis * 100) / contVacunados;
	// E) 
	if(contRusa < contAmericana && contRusa < contChina){
		vacunaMenos = "rusa";
	} else if(contAmericana <= contRusa && contAmericana < contChina) {
		vacunaMenos = "americana";
	} else {
		vacunaMenos = "china";
	}

	document.write("A) Promedio de edad de la vacuna Rusa: " + promedEdadRusa +
				 "<br>B) Mujer con más edad: " + mujMasEdad + ", con la vacuna " + mujMasEdadVacuna + 
				 "<br>C) Porcentaje de mayores de edad con vacuna americana: " + porcentajeMayoresAmerica + 
				 "<br>D) Porcentaje de gente con la segunda dósis: " + porcentajeSegunDosis + 
				 "<br>E) La vacuna menos inoculada fue la " + vacunaMenos);

} // Función.
