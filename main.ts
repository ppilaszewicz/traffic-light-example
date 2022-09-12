function sound_light () {
    count = 20
    for (let index = 0; index < 20; index++) {
        music.playTone(262, music.beat(BeatFraction.Quarter))
        basic.showLeds(`
            . . . . .
            . . . . #
            . . . # .
            # . # . .
            . # . . .
            `)
        basic.showNumber(count)
        count += -1
        basic.clearScreen()
    }
    music.playTone(392, music.beat(BeatFraction.Whole))
    basic.clearScreen()
}
radio.onReceivedNumber(function (receivedNumber) {
    if (receivedNumber == 6) {
        basic.pause(1000)
        GREEN()
    } else if (receivedNumber == 9) {
        basic.pause(1000)
        RED()
    }
})
function light1 () {
    basic.pause(7000)
    GREEN()
    basic.pause(10000)
    doSomething()
    basic.showIcon(IconNames.No)
    basic.pause(1000)
    OFF()
    basic.pause(1000)
    YELLOW()
    basic.pause(2000)
    OFF()
    basic.pause(1000)
    RED()
    basic.showIcon(IconNames.No)
}
input.onButtonPressed(Button.A, function () {
    light1()
})
function RED () {
    range = strip.range(0, 1)
    range.showColor(neopixel.colors(NeoPixelColors.Red))
    range = strip.range(1, 1)
    range.showColor(neopixel.colors(NeoPixelColors.Black))
    range = strip.range(2, 1)
    range.showColor(neopixel.colors(NeoPixelColors.Black))
    basic.showIcon(IconNames.No)
}
function GREEN () {
    range = strip.range(0, 1)
    range.showColor(neopixel.colors(NeoPixelColors.Black))
    range = strip.range(1, 1)
    range.showColor(neopixel.colors(NeoPixelColors.Black))
    range = strip.range(2, 1)
    range.showColor(neopixel.colors(NeoPixelColors.Green))
    basic.showLeds(`
        . . . . .
        . . . . #
        . . . # .
        # . # . .
        . # . . .
        `)
}
function doSomething () {
    count = 10
    for (let index = 0; index < 10; index++) {
        basic.showLeds(`
            . . . . .
            . . . . #
            . . . # .
            # . # . .
            . # . . .
            `)
        basic.showNumber(count)
        count += -1
        basic.clearScreen()
    }
    basic.clearScreen()
}
function GREEN2 () {
    range = strip.range(0, 1)
    range.showColor(neopixel.colors(NeoPixelColors.Black))
    range = strip.range(1, 1)
    range.showColor(neopixel.colors(NeoPixelColors.Black))
    range = strip.range(2, 1)
    range.showColor(neopixel.colors(NeoPixelColors.Green))
}
function sound_light1 () {
    basic.pause(7000)
    GREEN()
    sound_light()
    basic.showIcon(IconNames.No)
    basic.pause(1000)
    OFF()
    basic.pause(1000)
    YELLOW()
    basic.pause(2000)
    OFF()
    basic.pause(1000)
    RED()
    basic.showIcon(IconNames.No)
}
input.onButtonPressed(Button.B, function () {
    sound_light1()
})
function OFF () {
    range = strip.range(0, 1)
    range.showColor(neopixel.colors(NeoPixelColors.Black))
    range = strip.range(1, 1)
    range.showColor(neopixel.colors(NeoPixelColors.Black))
    range = strip.range(2, 1)
    range.showColor(neopixel.colors(NeoPixelColors.Black))
}
function sonar () {
    pins.digitalWritePin(DigitalPin.P8, 0)
    control.waitMicros(2)
    pins.digitalWritePin(DigitalPin.P8, 1)
    control.waitMicros(10)
    pins.digitalWritePin(DigitalPin.P8, 0)
    distance = pins.pulseIn(DigitalPin.P13, PulseValue.High) / 58
}
function Green_Car () {
    basic.pause(7000)
    GREEN2()
    basic.showIcon(IconNames.No)
    basic.pause(10000)
    OFF()
    basic.pause(2000)
    YELLOW()
    basic.pause(2000)
    OFF()
    basic.pause(1000)
    RED()
    basic.showIcon(IconNames.No)
}
function YELLOW () {
    range = strip.range(0, 1)
    range.showColor(neopixel.colors(NeoPixelColors.Black))
    range = strip.range(1, 1)
    range.showColor(neopixel.colors(NeoPixelColors.Yellow))
    range = strip.range(2, 1)
    range.showColor(neopixel.colors(NeoPixelColors.Black))
    basic.showIcon(IconNames.No)
}
let range: neopixel.Strip = null
let count = 0
let strip: neopixel.Strip = null
let distance = 0
let ccccc = 0
distance = 7
strip = neopixel.create(DigitalPin.P16, 3, NeoPixelMode.RGB)
strip.setBrightness(250)
RED()
radio.setGroup(69)
basic.forever(function () {
	
})
basic.forever(function () {
    for (let index = 0; index < 4; index++) {
        sonar()
        if (distance <= 5) {
            ccccc += 1
        }
        if (ccccc == 4) {
            Green_Car()
            ccccc = 0
        }
    }
    ccccc = 0
})
