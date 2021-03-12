function turnOnMelody () {
    music.playMelody("E B C5 A B G A F ", 150)
    basic.showString("Welcome!")
}
turnOnMelody()
basic.forever(function () {
    if (21 < input.temperature()) {
        basic.showString("" + (input.temperature()))
        basic.showString("It's Cold")
    } else {
        basic.showString("" + (input.temperature()))
        basic.showString("It's Warm")
    }
})
