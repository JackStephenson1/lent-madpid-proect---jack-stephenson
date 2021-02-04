controller.up.onEvent(ControllerButtonEvent.Pressed, function () {
    if (true) {
        mySprite.vy = -200
        mySprite.y += -75
    } else {
        mySprite.vy = 200
    }
})
controller.right.onEvent(ControllerButtonEvent.Repeated, function () {
    mySprite.x += 5
})
info.onCountdownEnd(function () {
    projectile = sprites.createProjectileFromSprite(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . e e e e . . . 1 1 . . 
        . . . . . f d d f . . 1 . . . . 
        . . . . . d d d d . 1 . . . . . 
        . 1 . . . . d d . . 1 . . . . . 
        . . 1 1 1 1 1 1 1 1 . . . . . . 
        . . . . . . 1 1 . . . . . . . . 
        . . . . . . 1 1 . . . . . . . . 
        . . . . . . f f . . . . . . . . 
        . . . . . f . . f . . . . . . . 
        . . . . . f . . f . . . . . . . 
        . . . . . f . . f . . . . . . . 
        . . . f f f . . f f f . . . . . 
        . . . . . . . . . . . . . . . . 
        `, mySprite, 5, 5)
    projectile.setPosition(75, 105)
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
tiles.setTilemap(tilemap`level1`)
info.startCountdown(10)
mySprite = sprites.create(img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . 2 . . . . . . 2 . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . 2 . . . . . . 2 . . . . 
    . . . . 2 2 . . . . . 2 . . . . 
    . . . . . 2 2 . . 2 2 2 . . . . 
    . . . . . . 2 2 2 2 . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    `, SpriteKind.Player)
mySprite.setPosition(4, 46)
mySprite.setFlag(SpriteFlag.StayInScreen, true)
scene.cameraFollowSprite(mySprite)
forever(function () {
    mySprite.vy = 200
})
