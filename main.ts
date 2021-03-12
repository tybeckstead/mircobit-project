input.onButtonPressed(Button.A, function () {
    tempFunct()
})
function makeCommand () {
    basic.showLeds(`
        . . # . .
        . # # . .
        # # # . .
        . # # . .
        . . # . .
        `)
    basic.showString("Press Temp!")
}
function tempFunct () {
    if (input.temperature() <= 21) {
        basic.showString("" + (input.temperature()))
        basic.showString("It's Cold")
        basic.showLeds(`
            . . . . .
            . # . # .
            . . . . .
            . # # # .
            # . . . #
            `)
        basic.pause(1000)
    } else {
        basic.showString("" + (input.temperature()))
        basic.showString("It's Warm")
        basic.showIcon(IconNames.Happy)
        basic.pause(1000)
    }
}
function turnOnMelody () {
    music.playMelody("E A C5 A B G A F ", 150)
    basic.showString("Welcome!")
}
turnOnMelody()
basic.forever(function () {
    makeCommand()
})
