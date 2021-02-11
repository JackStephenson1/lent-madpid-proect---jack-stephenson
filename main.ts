controller.up.onEvent(ControllerButtonEvent.Pressed, function () {
    if (mySprite.vy == 0) {
        mySprite.vy = -300
    }
})
controller.right.onEvent(ControllerButtonEvent.Repeated, function () {
    mySprite.x += 5
})
scene.onOverlapTile(SpriteKind.Player, tiles.util.door7, function (sprite, location) {
    mySprite.setPosition(14, 11)
    tiles.setTilemap(tilemap`level8`)
    info.startCountdown(20)
})
info.onCountdownEnd(function () {
    projectile = sprites.create(img`
        . . . . . . . e e . . . . . . . 
        . . d . . . e d d e . . . . d . 
        . d d f f . d d d d . . . d d d 
        . . d . f f 1 d d 1 . f f f f . 
        . . . . . f f 1 1 f f f . . . . 
        . . . . . . f 1 1 f . . . . . . 
        . . . . . . f 1 1 f . . . . . . 
        . . . . . . f 1 1 f . . . . . . 
        . . . . . . f f f f . . . . . . 
        . . . . . . f f f f . . . . . . 
        . . . . . . f f f f . . . . . . 
        . . . . . . f . . f . . . . . . 
        . . . . . . f . . f . . . . . . 
        . . . . . f f . . f f . . . . . 
        . . . f f f f . . f f f f . . . 
        . . . . . . . . . . . . . . . . 
        `, SpriteKind.Projectile)
    projectile.setPosition(76, 86)
    projectile.follow(mySprite)
    projectile.setVelocity(Math.max(20, -20), Math.max(20, -20))
})
scene.onOverlapTile(SpriteKind.Player, sprites.dungeon.chestClosed, function (sprite, location) {
    mySprite.say("You Got a runner but were expelled for vandalism and defacement of the school.", 5000)
    pause(5000)
    game.over(false, effects.splatter)
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Projectile, function (sprite, otherSprite) {
    mySprite.say("You can never escape from me", 2000)
    pause(2000)
    game.over(false)
})
scene.onOverlapTile(SpriteKind.Player, tiles.util.door5, function (sprite, location) {
    tiles.setTilemap(tilemap`level4`)
    mySprite.setPosition(14, 11)
    info.startCountdown(20)
})
controller.left.onEvent(ControllerButtonEvent.Repeated, function () {
    mySprite.x += -5
})
let projectile: Sprite = null
let mySprite: Sprite = null
tiles.setTilemap(tilemap`level3`)
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
mySprite.say("You have escaped JWFS's boring Computer Science lesson!", 5000)
pause(5000)
mySprite.say("Now climb the different Eton landmarks before he can catch you!", 5000)
pause(5000)
tiles.setTilemap(tilemap`level1`)
info.startCountdown(30)
mySprite.setPosition(4, 46)
mySprite.setFlag(SpriteFlag.StayInScreen, true)
scene.cameraFollowSprite(mySprite)
mySprite.ay = 450
