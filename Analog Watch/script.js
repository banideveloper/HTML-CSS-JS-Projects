let hour = document.getElementById("hour");
let min = document.getElementById("min");
let sec = document.getElementById("sec");

let d_hour = document.getElementById("digital-hour");
let d_min = document.getElementById("digital-min");
let d_sec = document.getElementById("digital-sec");

let date_var = document.getElementById("date");
let day_var = document.getElementById("day");
let month_var = document.getElementById("month");

function showTime(){

    let dateObj = new Date();

    let time = dateObj.toLocaleString([] , {hour: "numeric", minute: "numeric" , second: "numeric"});
    let hh = dateObj.getHours();
    let mm = dateObj.getMinutes();
    let ss = dateObj.getSeconds();

    let hRotate = 30*hh + mm/2;
    let mRotate = 6*mm;
    let sRotate = 6*ss;

    hour.style.transform = `rotate(${hRotate}deg)`;
    min.style.transform = `rotate(${mRotate}deg)`;
    sec.style.transform = `rotate(${sRotate}deg)`;

    d_hour.textContent = time;


}

setInterval(showTime , 1000);
