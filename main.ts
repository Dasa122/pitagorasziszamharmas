datalogger.onLogFull(function () {
    start = 0
})
let start = 0
start = 1
let num = 1
let num1 = 1
datalogger.deleteLog()
datalogger.mirrorToSerial(true)
basic.forever(function () {
    if (1 == start) {
        datalogger.log(datalogger.createCV("Negyzetszam", num1 * num1))
        datalogger.log(datalogger.createCV("Paratlanszam", num))
        num += 2
        num1 += 1
        basic.pause(1000)
    }
})
