basic.forever(function () {
    for (let index = 0; index < 4; index++) {
        maqueen.motorRun(maqueen.Motors.All, maqueen.Dir.CW, 100)
        basic.pause(1000)
        maqueen.motorStop(maqueen.Motors.All)
        maqueen.motorRun(maqueen.Motors.M1, maqueen.Dir.CW, 100)
        basic.pause(500)
        maqueen.motorStop(maqueen.Motors.M1)
        basic.pause(100)
    }
    basic.pause(2000)
})
