radio.setGroup(5)
basic.forever(function () {
    if (BitMaker.read_Ain(AnalogPort.P0) > 515 && BitMaker.read_Ain(AnalogPort.P0) <= 780) {
        radio.sendString("droite")
    } else if (BitMaker.read_Ain(AnalogPort.P0) > 245 && BitMaker.read_Ain(AnalogPort.P0) <= 500) {
        radio.sendString("gauche")
    } else if (BitMaker.read_Ain(AnalogPort.P1) > 515 && BitMaker.read_Ain(AnalogPort.P1) <= 780) {
        radio.sendString("avancer")
    } else if (BitMaker.read_Ain(AnalogPort.P1) > 245 && BitMaker.read_Ain(AnalogPort.P1) <= 500) {
        radio.sendString("reculer")
    } else if (BitMaker.read_Ain(AnalogPort.P0) > 500 && BitMaker.read_Ain(AnalogPort.P0) <= 515) {
        radio.sendString("Stop")
    } else if (BitMaker.read_Ain(AnalogPort.P1) > 500 && BitMaker.read_Ain(AnalogPort.P1) <= 515) {
        radio.sendString("Stop")
    }
})
