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
        music.playTone(196, music.beat(BeatFraction.Whole))
        basic.showString("" + (input.temperature()))
        basic.showString("It's Cold")
        basic.pause(1000)
        music.startMelody(music.builtInMelody(Melodies.Dadadadum), MelodyOptions.Once)
        basic.showLeds(`
            . . . . .
            . # . # .
            . . . . .
            . # # # .
            # . . . #
            `)
    } else {
        music.playTone(392, music.beat(BeatFraction.Whole))
        basic.showString("" + (input.temperature()))
        basic.showString("It's Warm")
        basic.pause(1000)
        music.startMelody(music.builtInMelody(Melodies.BaDing), MelodyOptions.Once)
        basic.showIcon(IconNames.Happy)
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
