basic.showIcon(IconNames.Heart)
basic.pause(2000)
radio.setGroup(1)
basic.forever(function () {
    if (input.buttonIsPressed(Button.A)) {
        basic.showString("A")
        radio.sendString("A")
    } else if (input.buttonIsPressed(Button.B)) {
        basic.showString("B")
        radio.sendString("B")
    } else if (input.buttonIsPressed(Button.AB)) {
        basic.showString("A+B")
        radio.sendString("A+B")
    } else {
        basic.showString("" + (input.temperature()))
    }
})
