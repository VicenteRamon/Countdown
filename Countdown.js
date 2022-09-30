function updateTimer() {

launch = Date.parse("october 02, 2022 12:00:00");
now = new Date();

count = launch - now;

days = Math.floor(count / (1000 * 60 * 60 * 24));
hours = Math.floor(count / (1000 * 60 * 60));
mins = Math.floor(count / (1000 * 60));
secs = Math.floor(count / 1000);

Dias = days;
Horas = hours - days * 24;
Minutos = mins - hours * 60;
Segundos = secs - mins * 60;


document.getElementById("timer")
  .innerHTML =
  '<div><span>Dias</span>' + Dias + '</div>' + '<div>:</div>' +
  '<div><span>Horas</span>' + Horas + '</div>' +'<div>:</div>' +
  '<div><span>Minutos</span>' + Minutos + '</div>' +'<div>:</div>' +
  '<div><span>Segundos</span>' + Segundos + '</div>';

}

setInterval('updateTimer()', 1000);
