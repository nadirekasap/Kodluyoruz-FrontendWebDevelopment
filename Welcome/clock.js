let myNames = prompt("Please write your name: ");

Name = document.querySelector("#myName");

Name.innerHTML = `${Name.innerHTML} <small style="color:#fefae0"> ${myNames} </small>`

function startTime() {
    var today = new Date();
    var h = today.getHours();
    var m = today.getMinutes();
    var s = today.getSeconds();
    var d = today.getDay();

    switch (d) {
        case 0: d = "Sunday";
            break;
        case 1: d = "Monday";
            break;
        case 2: d = "Tuesday";
            break;
        case 3: d = "Wednesday";
            break;
        case 4: d = "Thursday";
            break;
        case 5: d = "Friday";
            break;
        case 6: d = "Saturday";
            break;
    }
    m = checkTime(m);
    s = checkTime(s);
    document.querySelector("#myClock").innerHTML = h + ":" + m + ":" + s + "|" + d;
    t = setTimeout(function () { startTime() }, 500) //update time

}
function checkTime(i) {
    if (i < 10) {
        i = "0" + i;
    }
    return i;
}
startTime();