function introAnimation () {
    basic.showString("Jukebox")
    basic.showLeds(`
        . . . . .
        . . . . .
        . . # . .
        . . . . .
        . . . . .
        `)
    basic.showIcon(IconNames.SmallDiamond)
    basic.showIcon(IconNames.Diamond)
    basic.showIcon(IconNames.Target)
    basic.showIcon(IconNames.Diamond)
    basic.showIcon(IconNames.SmallDiamond)
    basic.showLeds(`
        . . . . .
        . . . . .
        . . # . .
        . . . . .
        . . . . .
        `)
}
function musicBox () {
    music.setTempo(120)
    music.startMelody(music.builtInMelody(Melodies.Wedding), MelodyOptions.Forever)
    basic.showIcon(IconNames.Heart)
}
input.onButtonPressed(Button.A, function () {
	
})
input.onSound(DetectedSound.Loud, function () {
	
})
input.onButtonPressed(Button.AB, function () {
	
})
input.onButtonPressed(Button.B, function () {
	
})
input.onLogoEvent(TouchButtonEvent.Pressed, function () {
    musicBox()
})
music.playMelody("G A F - E D C C ", 230)
introAnimation()
basic.showString("Press Logo")
basic.forever(function () {
	
})
