namespace SpriteKind {
    export const scenery = SpriteKind.create()
    export const RebLaser = SpriteKind.create()
}
sprites.onOverlap(SpriteKind.RebLaser, SpriteKind.Enemy, function (sprite, otherSprite) {
    animation.runImageAnimation(
    otherSprite,
    assets.animation`boom`,
    400,
    true
    )
    pause(500)
    music.knock.play()
    otherSprite.destroy()
    info.changeScoreBy(5)
})
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    music.pewPew.play()
    lbolt = sprites.create(assets.image`laser`, SpriteKind.RebLaser)
    lbolt.setPosition(xwing.x, xwing.y)
    lbolt.setVelocity(150, 0)
    lbolt.setFlag(SpriteFlag.DestroyOnWall, true)
})
controller.down.onEvent(ControllerButtonEvent.Released, function () {
    xwing.y += 5
})
controller.right.onEvent(ControllerButtonEvent.Repeated, function () {
    speed += 5
    if (speed > 40) {
        speed = 40
    }
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Projectile, function (sprite, otherSprite) {
    otherSprite.destroy()
    info.changeLifeBy(-1)
    music.knock.play()
    scene.cameraShake(4, 500)
})
controller.up.onEvent(ControllerButtonEvent.Released, function () {
    xwing.y += -5
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Enemy, function (sprite, otherSprite) {
    otherSprite.destroy()
    info.changeLifeBy(-1)
    info.changeScoreBy(1)
    music.knock.play()
    scene.cameraShake(4, 500)
})
controller.left.onEvent(ControllerButtonEvent.Repeated, function () {
    speed += -5
    if (speed < 5) {
        speed = 5
    }
})
let tbolt: Sprite = null
let TFighter: Sprite = null
let grnd: Sprite = null
let lbolt: Sprite = null
let xwing: Sprite = null
let speed = 0
info.setLife(5)
let ground = [
assets.image`grnd1`,
assets.image`grnd2`,
assets.image`grnd3`,
assets.image`grnd4`
]
speed = 10
scene.setBackgroundImage(assets.image`sky`)
game.splash("Defend the Republic! Tie Fighters approaching!!")
xwing = sprites.create(assets.image`x-wing`, SpriteKind.Player)
xwing.setPosition(24, 65)
xwing.setStayInScreen(true)
forever(function () {
    for (let index = 0; index <= 3; index++) {
        grnd = sprites.create(ground[index], SpriteKind.scenery)
        grnd.setVelocity(-2 * speed, 0)
        grnd.setPosition(145, 102)
        grnd.setFlag(SpriteFlag.DestroyOnWall, true)
        pause(1000)
    }
})
forever(function () {
    pause(100 * randint(5, 10))
    if (7 < randint(0, 10)) {
        TFighter = sprites.create(assets.image`Tie`, SpriteKind.Enemy)
        TFighter.setFlag(SpriteFlag.AutoDestroy, true)
        TFighter.setPosition(160, randint(20, 100))
        TFighter.setVelocity(randint(-60, -20), 0)
        TFighter.setFlag(SpriteFlag.DestroyOnWall, true)
        if (4 < randint(0, 10)) {
            pause(500)
            tbolt = sprites.create(assets.image`tie-laser`, SpriteKind.Projectile)
            tbolt.setPosition(TFighter.x, TFighter.y)
            tbolt.setFlag(SpriteFlag.DestroyOnWall, true)
            tbolt.setVelocity(-200, 0)
        }
    }
})
