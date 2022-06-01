input.onButtonPressed(Button.A, function () {
    cuerda += -0.1
})
input.onButtonPressed(Button.B, function () {
    cuerda += 0.1
})
let cuerda = 2
basic.forever(function () {
    basic.clearScreen()
    led.plot(Math.round(cuerda), 2)
    if (cuerda < 0) {
        basic.pause(100)
        basic.showString("Ganaste A!")
    } else if (cuerda > 4) {
        basic.pause(100)
        basic.showString("Ganaste B!")
    }
})
