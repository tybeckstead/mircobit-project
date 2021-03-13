input.onButtonPressed(Button.A, function () {
    basic.pause(500)
    tempFunct()
})
function makeCompass () {
    music.startMelody(music.builtInMelody(Melodies.PowerUp), MelodyOptions.Once)
    for (let index = 0; index < 2; index++) {
        basic.showString("" + (input.compassHeading()))
        basic.showString("Degrees")
    }
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
    basic.pause(500)
    makeCompass()
})
function tempFunct () {
    music.startMelody(music.builtInMelody(Melodies.PowerDown), MelodyOptions.Once)
    for (let index = 0; index < 2; index++) {
        if (input.temperature() <= 21) {
            basic.showString("" + (input.temperature()))
            basic.showString("*C")
            music.startMelody(music.builtInMelody(Melodies.Dadadadum), MelodyOptions.Once)
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
            basic.showString("*C")
            music.startMelody(music.builtInMelody(Melodies.Ode), MelodyOptions.Once)
            basic.showIcon(IconNames.Happy)
            basic.pause(2000)
        }
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
