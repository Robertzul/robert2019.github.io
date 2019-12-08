var diallines = document.getElementsByClassName('diallines');
var clockE1 = document.getElementsByClassName('clock')[0];
for (var i = 1; i < 60; i++) {
    clockE1.innerHTML += "<div class='diallines'></div>";
    diallines[i].style.transform = "rotate(" + 6 * i + "deg)";
}
function clock() {
    var weekday = new Array(7),
        d = new Date(),
        h = d.getHours(),
        m = d.getMinutes(),
        s = d.getSeconds(),
        date = d.getDate(),
        month = d.getMonth() + 1,
        year = d.getFullYear(),

        hDeg = h * 30 + m * (360 / 720),
        mDeg = m * 6 + s * (360 / 3600),
        sDeg = s * 6,

        hE1 = document.querySelector('.hour-hand'),
        mE1 = document.querySelector('.minute-hand'),
        sE1 = document.querySelector('.second-hand'),
        dateE1 = document.querySelector('.date'),
        dayE1 = document.querySelector('.day');


    weekday[0] = "Sunday";
    weekday[1] = "Monday";
    weekday[2] = "Tuesday";
    weekday[3] = "Wednesday";
    weekday[4] = "Thursday";
    weekday[5] = "Friday";
    weekday[6] = "Saturday";


    var day = weekday[d.getDay()];
    hE1.style.transform = "rotate(" + hDeg + "deg)";
    mE1.style.transform = "rotate(" + mDeg + "deg)";
    sE1.style.transform = "rotate(" + sDeg + "deg)";
    dateE1.innerHTML = date + "/" + month + "/" + year;
    dayE1.innerHTML = day;
}
setInterval("clock()", 100);

function renderTime() {
    //Date
    var mydate = new Date();
    var year = mydate.getYear();
    if (year < 1000) {
        year += 1900
    }
    var day = mydate.getDay();
    var month = mydate.getMonth();
    var daym = mydate.getDate();
    var dayarray = new Array("Sunday,", "Monday,", "Tuesday,", "Wednesday,", "Thursday,", "Friday,", "Saturday,");
    var montharray = new Array("January,", "February,", "March,", "April,", "May,", "June,", "July,", "August,", "September,", "October,", "November,", "December,");
    //Date End
    //Time
    var currentTime = new Date();
    var h = currentTime.getHours();
    var m = currentTime.getMinutes();
    var s = currentTime.getSeconds();
    if (h == 24) {
        h = 0;
    } else if (h > 12) {
        h = h - 0;

    }

    if (h < 10) {
        h = "0" + h;
    }
    if (m < 10) {
        m = "0" + m;
    }
    if (s < 10) {
        s = "0" + s;
    }
    var myClock = document.getElementById("clockDisplay");
    myClock.textContent = "" + dayarray[day] + " " + daym + " " + montharray[month] + " " + year + " |" + h + ":" + m + ":" + s;
    myClock.innerText = "" + dayarray[day] + " " + daym + " " + montharray[month] + " " + year + " |" + h + ":" + m + ":" + s;
    setTimeout("renderTime()", 1000);
}
renderTime();

function openSlideMenu() {
    document.getElementById('menu').style.width = '350px';
    document.getElementById('content').style.marginLeft = '350px';
}
function closeSlideMenu() {
    document.getElementById('menu').style.width = '0';
    document.getElementById('content').style.marginLeft = '0';
}

