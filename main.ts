input.onButtonPressed(Button.A, function () {
    basic.pause(500)
    tempFunct()
})
function makeCompass () {
    music.startMelody(music.builtInMelody(Melodies.PowerUp), MelodyOptions.Once)
}
function makeCommand () {
    basic.showLeds(`
        . . # . .
        . # # . .
        # # # . .
        . # # . .
        . . # . .
        `)
    basic.showString("Press for Temp!")
    basic.showLeds(`
        . . # . .
        . . # # .
        . . # # #
        . . # # .
        . . # . .
        `)
    basic.showString("Press for Compass!")
}
input.onButtonPressed(Button.B, function () {
    basic.showString("" + (input.compassHeading()))
    basic.pause(500)
    makeCompass()
})
function tempFunct () {
    music.startMelody(music.builtInMelody(Melodies.PowerDown), MelodyOptions.Once)
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
turnOnMelody()
basic.forever(function () {
    if (input.buttonIsPressed(Button.B)) {
        makeCompass()
    } else if (input.buttonIsPressed(Button.A)) {
        tempFunct()
    } else {
        makeCommand()
    }
})
