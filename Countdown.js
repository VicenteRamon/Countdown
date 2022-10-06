function updateTimer() {
  launch = Date.parse("december 05, 2022 22:23:00");
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

  const end = count <= 0 ? menss() : timer();

  function menss() {
    document.getElementById("timer").innerHTML =
      '<iframe width="560" height="315" src="https://www.youtube.com/embed/oavMtUWDBTM" title="Trololo" frameborer="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>';
    
      stop();
    }


  function timer() {
    document.getElementById("timer").innerHTML =
      "<div><span>Dias</span>" +
      Dias +
      "</div>" +
      "<div>:</div>" +
      "<div><span>Horas</span>" +
      Horas +
      "</div>" +
      "<div>:</div>" +
      "<div><span>Minutos</span>" +
      Minutos +
      "</div>" +
      "<div>:</div>" +
      "<div><span>Segundos</span>" +
      Segundos +
      "</div>";
  }
}
function stop() {clearInterval(interval);}
const interval = setInterval("updateTimer()", 1000);

