const second = 1000,
  minute = second * 60,
  hour = minute * 60,
  day = hour * 24;

var time = '2023-03-11T18:00:00.000+05:30'
console.log(time);

let countDown = new Date(time).getTime();
console.log(countDown)
  x = setInterval(function () {
    let now = new Date().getTime(),
      distance = countDown - now;

    (document.getElementById("days").innerHTML = Math.floor(distance / day)),
      (document.getElementById("hours").innerHTML = Math.floor(
        (distance % day) / hour 
      )) + "HOURS",
      (document.getElementById("minutes").innerHTML = Math.floor(
        (distance % hour) / minute
      )),
      (document.getElementById("seconds").innerHTML = Math.floor(
        (distance % minute) / second
      ));
  }, second);
