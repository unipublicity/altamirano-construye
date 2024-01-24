(function(){
	var actualizarHora = function(){
		// Obtenemos la fecha actual, incluyendo las horas, minutos, segundos, dia de la semana, dia del mes, mes y año;
		var fecha = new Date(),
			horas = fecha.getHours(),
			minutos = fecha.getMinutes(),
			diaSemana = fecha.getDay(),
			dia = fecha.getDate(),
			mes = fecha.getMonth();

		// Accedemos a los elementos del DOM para agregar mas adelante sus correspondientes valores
		var pHoras = document.getElementById('horas'),
			pMinutos = document.getElementById('minutos'),
			pDiaSemana = document.getElementById('diaSemana'),
			pDia = document.getElementById('dia'),
			pMes = document.getElementById('mes');

		
		// Obtenemos el dia se la semana y lo mostramos
		var semana = ['Domingo', 'Lunes', 'Martes', 'Miercoles', 'Jueves', 'Viernes', 'Sabado'];
		pDiaSemana.textContent = semana[diaSemana];

		// Obtenemos el dia del mes
		pDia.textContent = dia;

		// Obtenemos el Mes y año y lo mostramos
		var meses = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre']
		pMes.textContent = meses[mes];

		// Si queremos mostrar un cero antes de las horas ejecutamos este condicional
		if (horas < 10){horas = '0' + horas;}
		pHoras.textContent = horas;

		// Minutos y Segundos
		if (minutos < 10){ minutos = "0" + minutos; }

		pMinutos.textContent = minutos;
	};

	actualizarHora();
	var intervalo = setInterval(actualizarHora, 1000);
}())