let tocar = false
let caixa_P2 = 0
let caixa = 0
input.onPinPressed(TouchPin.P0, function () {
    tocar = false
    basic.showString("start")
    basic.showNumber(3)
    basic.showNumber(2)
    basic.showNumber(1)
    basic.clearScreen()
    basic.pause(randint(2000, 5000))
    basic.showLeds(`
        . # . # .
        . # . # .
        . . . . .
        # . . . #
        . # # # .
        `)
})
input.onPinPressed(TouchPin.P2, function () {
    if (tocar == false) {
        tocar = true
        caixa_P2 += 1
        basic.showLeds(`
            . . # # #
            . . # # #
            . . # # #
            . . # # #
            . . # # #
            `)
        basic.pause(100)
    }
})
input.onPinPressed(TouchPin.P1, function () {
    if (tocar == false) {
        tocar = true
        caixa += 1
        basic.showLeds(`
            # # # . .
            # # # . .
            # # # . .
            # # # . .
            # # # . .
            `)
        basic.pause(100)
    }
})
basic.forever(function () {
	
})
