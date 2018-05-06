function clock() {
  const fullDate = new Date();
  let hours = fullDate.getHours();
  let minutes = fullDate.getMinutes();
  let seconds = fullDate.getSeconds();
  const hour_span = document.getElementById('hour');
  const minute_span = document.getElementById('minute');
  const second_span = document.getElementById('second');

  if (hours < 10) {
    hours = "0" + hours;
  }

  if (minutes < 10) {
    minutes = "0" + minutes;
  }

  if (seconds < 10) {
    seconds = "0" + seconds;
  }

  hour_span.innerHTML = hours + " :";
  minute_span.innerHTML = minutes + " :";
  second_span.innerHTML = seconds;
}


setInterval(clock, 100);
