controller.up.onEvent(ControllerButtonEvent.Pressed, function () {
    if (mySprite.vy == 0) {
        mySprite.vy = -300
    }
})
controller.right.onEvent(ControllerButtonEvent.Repeated, function () {
    mySprite.x += 5
})
info.onCountdownEnd(function () {
    projectile = sprites.create(img`
        . . . . . . . . . . . . . . . . 
        . . . . . f f f f f . . . . . . 
        . . . . f f . . . . f f . . . . 
        . . . . f . . f f f . f f . . . 
        . . . . f . f . f f . . f . . . 
        . . . . f f . f f f . . f . . . 
        . . . . f f . f f f f f f . . . 
        . . . . f f . f f f . f f . . . 
        . . . . f f . . f f f . . . . . 
        . . . . f f . . f f f . . . . . 
        . . . . f f f f f f . . . . . . 
        . . . . . f f f f f f . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `, SpriteKind.Projectile)
    projectile.setPosition(76, 86)
    projectile.follow(mySprite)
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Projectile, function (sprite, otherSprite) {
    game.over(false)
})
controller.left.onEvent(ControllerButtonEvent.Repeated, function () {
    mySprite.x += -5
})
let projectile: Sprite = null
let mySprite: Sprite = null
mySprite = sprites.create(img`
    . d . . . . . . . . . . . . d . 
    d d d . . . e e e e . . . d d d 
    . d f . . . d d d d . . . f d . 
    . f f f . . d d d d . . f f f . 
    . . f f f . 1 d d 1 . f f . . . 
    . . . . f f 1 1 1 1 f f . . . . 
    . . . . . f f 1 1 f f . . . . . 
    . . . . . f f 1 1 f f . . . . . 
    . . . . . f f 1 1 f f . . . . . 
    . . . . . f f f f f f . . . . . 
    . . . . . f f f f f f . . . . . 
    . . . . . f f . . f f . . . . . 
    . . . . . f f . . f f . . . . . 
    . . . . . f f . . f f . . . . . 
    . . . f f f f . . f f f f . . . 
    . . f f f f f . . f f f f f . . 
    `, SpriteKind.Player)
tiles.setTilemap(tilemap`level3`)
mySprite.say("You have escaped JWFS's Dull Computer Science lesson!", 5000)
pause(5000)
mySprite.say("Now climb the different Eton landmarks before he can catch you!", 5000)
pause(5000)
tiles.setTilemap(tilemap`level1`)
info.startCountdown(30)
mySprite.setPosition(4, 46)
mySprite.setFlag(SpriteFlag.StayInScreen, true)
scene.cameraFollowSprite(mySprite)
mySprite.ay = 450
