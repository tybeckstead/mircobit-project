input.onButtonPressed(Button.A, function () {
    basic.pause(500)
    tempFunct()
})
function makeCompass () {
    music.startMelody(music.builtInMelody(Melodies.BaDing), MelodyOptions.Once)
}
function makeCommand () {
    basic.showLeds(`
        . . # . .
        . # # . .
        # # # . .
        . # # . .
        . . # . .
        `)
    basic.showString("Press to view temp!")
}
input.onButtonPressed(Button.B, function () {
    basic.pause(500)
    makeCompass()
})
function tempFunct () {
    music.startMelody(music.builtInMelody(Melodies.BaDing), MelodyOptions.Once)
    if (input.temperature() <= 21) {
        basic.showString("" + (input.temperature()))
        basic.showString("Degrees *C")
        basic.showLeds(`
            . . . . .
            . # . # .
            . . . . .
            . # # # .
            # . . . #
            `)
        basic.pause(2000)
    } else {
        basic.showString("" + (input.temperature()))
        basic.showString("Degree *C")
        basic.showIcon(IconNames.Happy)
        basic.pause(2000)
    }
}
function turnOnMelody () {
    music.playMelody("E A C5 A B G A F ", 150)
    basic.showString("Welcome!")
}
function makeCommand2 () {
    basic.showLeds(`
        . . # . .
        . . # # .
        . . # # #
        . . # # .
        . . # . .
        `)
    basic.showString("Press to view Compass!")
}
turnOnMelody()
basic.forever(function () {
    makeCommand()
})
