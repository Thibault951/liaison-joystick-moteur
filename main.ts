radio.setGroup(5)
basic.forever(function () {
    basic.clearScreen()
    if (BitMaker.read_Ain(AnalogPort.P0) > 450 && BitMaker.read_Ain(AnalogPort.P0) < 509) {
        basic.clearScreen()
    } else {
        radio.sendNumber(11)
    }
})
