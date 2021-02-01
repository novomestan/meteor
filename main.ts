let PociatokX = 0
let PociatokY = 0
function Obrazok () {
    led.plotBrightness(PociatokX + 0, PociatokY + 0, 255)
    led.plotBrightness(PociatokX + 1, PociatokY - 1, 170)
    led.plotBrightness(PociatokX + 2, PociatokY - 2, 90)
}
input.onGesture(Gesture.Shake, function () {
    PociatokX = 4
    PociatokY = 0
    for (let index = 0; index < 7; index++) {
        Obrazok()
        basic.pause(500)
        basic.clearScreen()
        PociatokX = PociatokX - 1
        PociatokY = PociatokY + 1
    }
    basic.showLeds(`
        . . . . .
        # . . # .
        # . # . .
        # # . . .
        # # # # .
        `)
    basic.pause(2000)
    basic.clearScreen()
})
