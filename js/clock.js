// deneme 

let userName = prompt("Adinizi girin: ")
let id = document.querySelector("#myName")

id.innerHTML = userName

function showTime() {
    const days = ["pazartesi", "Sali", "Carsamba","Persembe", "Cuma", "Cumartesi", "Pazar"]
    let date = new Date()
    var hour = date.getHours()
    var minute = date.getMinutes()
    var second = date.getSeconds()
    var day = date.getDay()

    var time = hour + ":" + minute + ":" + second + " " + days[day-1]
    document.getElementById("myClock").innerText = time;
    document.getElementById("myClock").textContent = time;

    setTimeout(showTime,1000)
}
showTime()
// Yigit Sargin