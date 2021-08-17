namespace SpriteKind {
    export const scenery = SpriteKind.create()
}
controller.up.onEvent(ControllerButtonEvent.Repeated, function () {
    xwing.y += -1
})
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    music.pewPew.play()
    lbolt = sprites.create(assets.image`laser`, SpriteKind.Player)
    lbolt.setPosition(xwing.x, xwing.y)
    lbolt.setVelocity(150, 0)
    lbolt.setFlag(SpriteFlag.AutoDestroy, true)
})
controller.right.onEvent(ControllerButtonEvent.Repeated, function () {
    speed += 5
    if (speed > 40) {
        speed = 40
    }
})
controller.down.onEvent(ControllerButtonEvent.Repeated, function () {
    xwing.y += 1
})
controller.left.onEvent(ControllerButtonEvent.Repeated, function () {
    speed += -5
    if (speed < 5) {
        speed = 5
    }
})
let grnd: Sprite = null
let lbolt: Sprite = null
let xwing: Sprite = null
let speed = 0
let ground = [
assets.image`grnd1`,
assets.image`grnd2`,
assets.image`grnd3`,
assets.image`grnd4`
]
speed = 10
scene.setBackgroundImage(assets.image`sky`)
effects.clouds.startScreenEffect()
xwing = sprites.create(assets.image`x-wing`, SpriteKind.Player)
xwing.setPosition(24, 65)
xwing.setStayInScreen(true)
forever(function () {
    for (let index = 0; index <= 3; index++) {
        grnd = sprites.create(ground[index], SpriteKind.scenery)
        grnd.setVelocity(-1 * speed, 0)
        grnd.setPosition(145, 102)
        pause(1000)
    }
})
