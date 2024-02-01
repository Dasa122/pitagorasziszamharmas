datalogger.onLogFull(function () {
    start = 0
})
let sorszam = 0
let start = 0
start = 1
let num = 1
let num1 = 1
datalogger.deleteLog()
datalogger.mirrorToSerial(true)
basic.forever(function () {
    if (1 == start) {
        datalogger.log(
        datalogger.createCV("Sorszam", sorszam),
        datalogger.createCV("Negyzetszam", num1 * num1)
        )
        sorszam += 1
        num1 += 1
        basic.pause(500)
    }
    if (1 == start) {
        datalogger.log(
        datalogger.createCV("Sorszam", sorszam),
        datalogger.createCV("Paratlanszam", num)
        )
        sorszam += 1
        num += 2
        basic.pause(500)
    }
    if (Math.sqrt(num) == Math.round(Math.sqrt(num))) {
        basic.pause(2000)
    }
})
