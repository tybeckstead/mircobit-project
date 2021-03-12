function tempFunct () {
    if (input.temperature() <= 21) {
        basic.showString("" + (input.temperature()))
        basic.showString("It's Cold")
    } else {
        basic.showString("" + (input.temperature()))
        basic.showString("It's Warm")
    }
}
function turnOnMelody () {
    music.playMelody("E A C5 A B G A F ", 150)
    basic.showString("Welcome!")
}
turnOnMelody()
tempFunct()
basic.forever(function () {
    basic.showString("" + (input.temperature()))
    basic.showString("'C")
})
