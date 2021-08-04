function mostrar()
{
	/* 
	Llegan 10 vuelos con vacunas de distintos lugares del mundo
	Se debe registrar de cada vuelo:
		-Origen (“Asia”, “Europa”, “USA”)
		-Cantidad de vacunas (no puede ser 0)
		-Costo del vuelo (entre 1 millón y 5 millones de pesos)
	Informar:
		a- El origen que envió mayor cantidad de vacunas
		b- El promedio de vacunas llegadas de Asia
		c- El total sin descuentos a pagar por los gastos de los viajes
		d- Si en total se recibieron mas de 4 millones de vacunas se hace un descuento de 30%, Si se recibieron entre 2 y 4 millones el descuento es del 20% con menor cantidad no hay descuento.
	Informar si hubo descuento de cuanto fue y el importe final con descuento.
	*/

	let origen;
	let cantidadVac = 0; // No puede ser 0
	let costoVuelo; // 1 Millon y 5 Millones

	let cantVacAsia = 0;
	let cantVacEu = 0;
	let cantVacUsa = 0;
	let origenMasVac;

	let acumVacunasT = 0;
	let acumAvionesAs = 0;
	let promedVacAsia;

	let acumPrecViajeT = 0;
	let precioViajDescuento;
	let descuento;
	let descuentoMsg;

	for(let i = 1; i < 11; i++){
		origen = prompt("Ingrese el origen. (Asia/Europa/USA)").toLowerCase();
		while(origen != "asia" && origen != "europa" && origen != "usa"){
			origen = prompt("ERROR. Reingrese el origen. (Asia/Europa/USA)").toLowerCase();
		}

		cantidadVac = parseInt(prompt("Ingrese la cantidad de vacunas."));
		while(isNaN(cantidadVac) || cantidadVac <= 0){
			cantidadVac = parseInt(prompt("Por favor, ingrese una cantidad válida."));
		}

		costoVuelo = parseFloat(prompt("Ingrese el costo del vuelo. (1M-5M)"));
		while(isNaN(costoVuelo) || (costoVuelo < 1000000  || costoVuelo > 5000000)){
			costoVuelo = parseFloat(prompt("Por favor, ingrese un costo válido. (1M-5M)"));
		}
		// C)
		acumPrecViajeT += costoVuelo;

		// D)
		acumVacunasT += cantidadVac;

		if(origen == "asia"){
			cantVacAsia += cantidadVac;
			acumAvionesAs++;
		} else if(origen == "europa") {
			cantVacEu += cantidadVac;
		} else {
			cantVacUsa += cantidadVac;
		}

		




	}

	// A)
	if(cantVacAsia > cantVacEu && cantVacAsia > cantVacUsa){
		origenMasVac = "Asia";
	} else if(cantVacEu >= cantVacAsia && cantVacEu > cantVacUsa){
		origenMasVac = "Europa";
	} else {
		origenMasVac = "USA";
	}
	// B)
	promedVacAsia = cantVacAsia / acumAvionesAs;

	// D)
	if(acumVacunasT > 4000000){
		descuento = 0.3;
	} else if(acumVacunasT > 2000000 && acumVacunasT < 4000000){
		descuento = 0.2;
	} else {
		descuento = 0;
	}
	precioViajDescuento = acumPrecViajeT - (acumPrecViajeT * descuento);
	descuentoMsg = descuento * 100;

	document.write("A) El origen con más vacunas: " + origenMasVac +
			   "<br>B) Promedio de vacunas llegadas de Asia: " + promedVacAsia +
			   "<br>C) Precio total de los viajes sin descuento: " + acumPrecViajeT +
			   "<br>D) Precio del viaje con descuento: " + precioViajDescuento + " y el descuento fue de " + descuentoMsg + "%");

}
