radio.onReceivedNumber(function (receivedNumber) {
    MotorDriver.MotorRun(Motor.A, Dir.backward, 16)
    MotorDriver.MotorRun(Motor.B, Dir.backward, 16)
})
input.onButtonPressed(Button.A, function () {
    radio.sendValue("forward", 1)
})
input.onButtonPressed(Button.AB, function () {
    radio.sendString("stop")
})
radio.onReceivedString(function (receivedString) {
    MotorDriver.MotorStop(Motor.A)
    MotorDriver.MotorStop(Motor.B)
})
input.onButtonPressed(Button.B, function () {
    radio.sendNumber(0)
})
radio.onReceivedValue(function (name, value) {
    MotorDriver.MotorRun(Motor.A, Dir.forward, 16)
    MotorDriver.MotorRun(Motor.B, Dir.forward, 16)
})
basic.forever(function () {
	
})
