input.onButtonPressed(Button.A, function () {
    radio.sendString("X")
    minode.rgbChooseColor(ConnName.D15, MiNodeColor.MiNode_RGB_COLOR_RED)
    music.playTone(932, music.beat(BeatFraction.Whole))
    basic.showString("X")
    basic.clearScreen()
    minode.RGBSetColor(
    ConnName.D15,
    0,
    0,
    0
    )
})
input.onButtonPressed(Button.AB, function () {
    minode.rgbChooseColor(ConnName.D15, MiNodeColor.MiNode_RGB_COLOR_GREEN)
    music.playTone(330, music.beat(BeatFraction.Whole))
    basic.showString("Ok")
    radio.sendString("Ok")
    basic.clearScreen()
    minode.RGBSetColor(
    ConnName.D15,
    0,
    0,
    0
    )
})
radio.onReceivedString(function (receivedString) {
    basic.showString(receivedString)
})
minode.RGBSetColor(
ConnName.D15,
0,
0,
0
)
basic.forever(function () {
    radio.setGroup(54)
})
