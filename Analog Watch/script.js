let hour = document.getElementById("hour");
let min = document.getElementById("min");
let sec = document.getElementById("sec");
let d_hour = document.getElementById("digital-hour");
let d_min = document.getElementById("digital-min");
let d_sec = document.getElementById("digital-sec");

function showTime(){

    let date = new Date();

    let hh = date.getHours();
    let mm = date.getMinutes();
    let ss = date.getSeconds();

    let hRotate = 30*hh + mm/2;
    let mRotate = 6*mm;
    let sRotate = 6*ss;

    hour.style.transform = `rotate(${hRotate}deg)`;
    min.style.transform = `rotate(${mRotate}deg)`;
    sec.style.transform = `rotate(${sRotate}deg)`;

    d_hour.textContent = hh;
    d_min.textContent = mm;
    d_sec.textContent = ss;

}

setInterval(showTime , 1000);