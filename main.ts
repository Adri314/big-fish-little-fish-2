function setLevel () {
    tiles.setTilemap(tiles.createTilemap(hex`0a0008000101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101`, img`
        . . . . . . . . . . 
        . . . . . . . . . . 
        . . . . . . . . . . 
        . . . . . . . . . . 
        . . . . . . . . . . 
        . . . . . . . . . . 
        . . . . . . . . . . 
        . . . . . . . . . . 
        `, [myTiles.transparency16,myTiles.tile1], TileScale.Sixteen))
    paused = false
    level += 1
    if (level == 1) {
        game.splash("Level 1", "Eat the little fish")
        tiles.setTilemap(tiles.createTilemap(hex`0a0008000101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010102020202020202020202`, img`
            . . . . . . . . . . 
            . . . . . . . . . . 
            . . . . . . . . . . 
            . . . . . . . . . . 
            . . . . . . . . . . 
            . . . . . . . . . . 
            . . . . . . . . . . 
            . . . . . . . . . . 
            `, [myTiles.transparency16,myTiles.tile1,sprites.builtin.oceanSand2], TileScale.Sixteen))
        initFish("small", "blue", 3, 4)
        initFish("big", "blue", 5, 3)
    } else if (level == 2) {
        game.splash("Level 2", "You move all the big fish")
        tiles.setTilemap(tiles.createTilemap(hex`0a0008000101010102010101010401010101050101010105010101010501010101040504020202020502020401010101020101010105010101010501010101040101010102010101010503030303030303030303`, img`
            . . . . . . . . . . 
            . . . . . . . . . . 
            . . . . . . . . . . 
            . . . . . . . . . . 
            . . . . . . . . . . 
            . . . . . . . . . . 
            . . . . . . . . . . 
            . . . . . . . . . . 
            `, [myTiles.transparency16,myTiles.tile1,sprites.builtin.coral5,sprites.builtin.oceanSand2,sprites.builtin.coral3,sprites.builtin.coral0], TileScale.Sixteen))
        initFish("small", "red", 0, 2)
        initFish("small", "blue", 8, 2)
        initFish("small", "yellow", 2, 6)
        initFish("small", "orange", 5, 4)
        initFish("big", "red", 3, 2)
        initFish("big", "blue", 6, 0)
        initFish("big", "yellow", 0, 4)
        initFish("big", "orange", 8, 4)
    } else if (level == 3) {
        game.splash("Level 3", "Eat your own color")
        tiles.setTilemap(tiles.createTilemap(hex`0a0008000101010101010101010101010101010101010101010101010101010101010202020202020202030101010101010101010101010101010101010101010101010101010101010102020202020202020202`, img`
            . . . . . . . . . . 
            . . . . . . . . . . 
            . . . . . . . . . . 
            . . . . . . . . . . 
            . . . . . . . . . . 
            . . . . . . . . . . 
            . . . . . . . . . . 
            . . . . . . . . . . 
            `, [myTiles.transparency16,myTiles.tile1,sprites.builtin.oceanSand2,sprites.builtin.oceanSand3], TileScale.Sixteen))
        initFish("small", "yellow", 2, 2)
        initFish("small", "red", 1, 6)
        initFish("big", "red", 0, 2)
        initFish("big", "yellow", 2, 6)
    } else if (level == 4) {
        game.splash("Level 4", "Mix colors!")
        tiles.setTilemap(tiles.createTilemap(hex`0a0008000101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010102010101010103030303030303030303`, img`
            . . . . . . . . . . 
            . . . . . . . . . . 
            . . . . . . . . . . 
            . . . . . . . . . . 
            . . . . . . . . . . 
            . . . . . . . . . . 
            . . . . . . . . . . 
            . . . . . . . . . . 
            `, [myTiles.transparency16,myTiles.tile1,sprites.builtin.coral5,sprites.builtin.oceanSand2], TileScale.Sixteen))
        initFish("small", "green", 3, 6)
        initFish("big", "yellow", 5, 5)
        initFish("big", "blue", 8, 2)
    } else if (level == 5) {
        game.splash("Level 5", "Brown + any color = brown")
        tiles.setTilemap(tiles.createTilemap(hex`0a0008000101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010102020202020202020202`, img`
            . . . . . . . . . . 
            . . . . . . . . . . 
            . . . . . . . . . . 
            . . . . . . . . . . 
            . . . . . . . . . . 
            . . . . . . . . . . 
            . . . . . . . . . . 
            . . . . . . . . . . 
            `, [myTiles.transparency16,myTiles.tile1,sprites.builtin.oceanSand2], TileScale.Sixteen))
        for (let index = 0; index <= 5; index++) {
            initFish("small", "brown", index + 2, 5)
        }
        initFish("small", "red", 2, 3)
        initFish("small", "orange", 3, 3)
        initFish("small", "yellow", 4, 3)
        initFish("small", "green", 5, 3)
        initFish("small", "blue", 6, 3)
        initFish("small", "purple", 7, 3)
        initFish("big", "red", 2, 1)
        initFish("big", "orange", 3, 1)
        initFish("big", "yellow", 4, 1)
        initFish("big", "green", 5, 1)
        initFish("big", "blue", 6, 1)
        initFish("big", "purple", 7, 1)
    } else if (level == 6) {
        game.splash("Level 6", "Eat them all!")
        tiles.setTilemap(tiles.createTilemap(hex`0a0008000505060706050506060507010101010101010106050101010101010101070506050701010505050601010106010105010101010101050101060101010101010501010701010101010103020204010101`, img`
            . . . . . . . . . . 
            . . . . . . . . . . 
            . . . . . . . . . . 
            . . . . . . . . . . 
            . . . . . . . . . . 
            . . . . . . . . . . 
            . . . . . . . . . . 
            . . . . . . . . . . 
            `, [myTiles.transparency16,myTiles.tile1,sprites.builtin.oceanSand2,sprites.builtin.oceanSand1,sprites.builtin.oceanSand3,sprites.builtin.coral0,sprites.builtin.coral2,sprites.builtin.coral5], TileScale.Sixteen))
        initFish("small", "blue", 8, 1)
        initFish("small", "yellow", 8, 2)
        initFish("small", "green", 4, 6)
        initFish("small", "green", 5, 6)
        initFish("big", "blue", 1, 2)
        initFish("big", "yellow", 1, 1)
    } else {
    	
    }
}
controller.up.onEvent(ControllerButtonEvent.Pressed, function () {
    checkMove(0, -1)
})
sprites.onDestroyed(SpriteKind.Food, function (sprite) {
    if (sprites.allOfKind(SpriteKind.Food).length == 0) {
        paused = true
        pause(500)
        for (let value of sprites.allOfKind(SpriteKind.Player)) {
            value.destroy()
        }
        setLevel()
    }
})
function initFish (size: string, color2: string, col: number, row: number) {
    if (size == "big") {
        if (color2 == "red") {
            mySprite = sprites.create(img`
                . . . . . . . . f f f f . . . . 
                . . . . . . f f 4 4 2 2 f . . . 
                . . . . . f f f f f f 2 f . . . 
                . . . . f f 4 4 2 2 e f f . f f 
                . . . f 1 4 2 2 2 2 2 e f f 4 f 
                . . f 1 2 2 2 2 2 2 2 2 2 f 2 f 
                . f 1 2 2 2 2 2 2 2 2 2 2 2 2 f 
                f 2 2 2 f 2 2 2 f f 2 2 2 f e f 
                f 2 2 2 f 2 2 f 4 f 2 2 2 f e f 
                f 2 2 2 2 2 2 2 2 f 2 2 2 f f f 
                . f 2 2 2 2 2 f f 2 2 2 f f . . 
                . . f f 2 2 2 2 2 2 2 f f . . . 
                . . . . f f 2 2 2 2 f e e f . . 
                . . . . . . f f f f e e 2 f . . 
                . . . . . . . . . . f f f . . . 
                . . . . . . . . . . . . . . . . 
                `, SpriteKind.Player)
        } else if (color2 == "yellow") {
            mySprite = sprites.create(img`
                . . . . . . . . f f f f . . . . 
                . . . . . . f f d d 5 5 f . . . 
                . . . . . f f f f f f 5 f . . . 
                . . . . f f d d 5 5 4 f f . f f 
                . . . f 1 d 5 5 5 5 5 4 f f d f 
                . . f 1 5 5 5 5 5 5 5 5 5 f 5 f 
                . f 1 5 5 5 5 5 5 5 5 5 5 5 5 f 
                f 5 5 5 f 5 5 5 f f 5 5 5 f 4 f 
                f 5 5 5 f 5 5 f d f 5 5 5 f 4 f 
                f 5 5 5 5 5 5 5 5 f 5 5 5 f f f 
                . f 5 5 5 5 5 f f 5 5 5 f f . . 
                . . f f 5 5 5 5 5 5 5 f f . . . 
                . . . . f f 5 5 5 5 f 4 4 f . . 
                . . . . . . f f f f 4 4 5 f . . 
                . . . . . . . . . . f f f . . . 
                . . . . . . . . . . . . . . . . 
                `, SpriteKind.Player)
        } else if (color2 == "blue") {
            mySprite = sprites.create(img`
                . . . . . . . . f f f f . . . . 
                . . . . . . f f 7 7 9 9 f . . . 
                . . . . . f f f f f f 9 f . . . 
                . . . . f f 7 7 9 9 6 f f . f f 
                . . . f 1 7 9 9 9 9 9 6 f f 7 f 
                . . f 1 9 9 9 9 9 9 9 9 9 f 9 f 
                . f 1 9 9 9 9 9 9 9 9 9 9 9 9 f 
                f 9 9 9 f 9 9 9 f f 9 9 9 f 6 f 
                f 9 9 9 f 9 9 f 7 f 9 9 9 f 6 f 
                f 9 9 9 9 9 9 9 9 f 9 9 9 f f f 
                . f 9 9 9 9 9 f f 9 9 9 f f . . 
                . . f f 9 9 9 9 9 9 9 f f . . . 
                . . . . f f 9 9 9 9 f 6 6 f . . 
                . . . . . . f f f f 6 6 9 f . . 
                . . . . . . . . . . f f f . . . 
                . . . . . . . . . . . . . . . . 
                `, SpriteKind.Player)
        } else if (color2 == "orange") {
            mySprite = sprites.create(img`
                . . . . . . . . f f f f . . . . 
                . . . . . . f f 5 5 4 4 f . . . 
                . . . . . f f f f f f 4 f . . . 
                . . . . f f 5 5 4 4 2 f f . f f 
                . . . f 1 5 4 4 4 4 4 2 f f 5 f 
                . . f 1 4 4 4 4 4 4 4 4 4 f 4 f 
                . f 1 4 4 4 4 4 4 4 4 4 4 4 4 f 
                f 4 4 4 f 4 4 4 f f 4 4 4 f 2 f 
                f 4 4 4 f 4 4 f 5 f 4 4 4 f 2 f 
                f 4 4 4 4 4 4 4 4 f 4 4 4 f f f 
                . f 4 4 4 4 4 f f 4 4 4 f f . . 
                . . f f 4 4 4 4 4 4 4 f f . . . 
                . . . . f f 4 4 4 4 f 2 2 f . . 
                . . . . . . f f f f 2 2 4 f . . 
                . . . . . . . . . . f f f . . . 
                . . . . . . . . . . . . . . . . 
                `, SpriteKind.Player)
        } else if (color2 == "purple") {
            mySprite = sprites.create(img`
                . . . . . . . . f f f f . . . . 
                . . . . . . f f 3 3 a a f . . . 
                . . . . . f f f f f f a f . . . 
                . . . . f f 3 3 a a c f f . f f 
                . . . f 1 3 a a a a a c f f 3 f 
                . . f 1 a a a a a a a a a f a f 
                . f 1 a a a a a a a a a a a a f 
                f a a a f a a a f f a a a f c f 
                f a a a f a a f 3 f a a a f c f 
                f a a a a a a a a f a a a f f f 
                . f a a a a a f f a a a f f . . 
                . . f f a a a a a a a f f . . . 
                . . . . f f a a a a f c c f . . 
                . . . . . . f f f f c c a f . . 
                . . . . . . . . . . f f f . . . 
                . . . . . . . . . . . . . . . . 
                `, SpriteKind.Player)
        } else if (color2 == "green") {
            mySprite = sprites.create(img`
                . . . . . . . . f f f f . . . . 
                . . . . . . f f 5 5 7 7 f . . . 
                . . . . . f f f f f f 7 f . . . 
                . . . . f f 5 5 7 7 6 f f . f f 
                . . . f 1 5 7 7 7 7 7 6 f f 5 f 
                . . f 1 7 7 7 7 7 7 7 7 7 f 7 f 
                . f 1 7 7 7 7 7 7 7 7 7 7 7 7 f 
                f 7 7 7 f 7 7 7 f f 7 7 7 f 6 f 
                f 7 7 7 f 7 7 f 5 f 7 7 7 f 6 f 
                f 7 7 7 7 7 7 7 7 f 7 7 7 f f f 
                . f 7 7 7 7 7 f f 7 7 7 f f . . 
                . . f f 7 7 7 7 7 7 7 f f . . . 
                . . . . f f 7 7 7 7 f 6 6 f . . 
                . . . . . . f f f f 6 6 7 f . . 
                . . . . . . . . . . f f f . . . 
                . . . . . . . . . . . . . . . . 
                `, SpriteKind.Player)
        } else {
            mySprite = sprites.create(img`
                . . . . . . . . f f f f . . . . 
                . . . . . . f f b b e e f . . . 
                . . . . . f f f f f f e f . . . 
                . . . . f f b b e e c f f . f f 
                . . . f 1 b e e e e e c f f b f 
                . . f 1 e e e e e e e e e f e f 
                . f 1 e e e e e e e e e e e e f 
                f e e e f e e e f f e e e f c f 
                f e e e f e e f b f e e e f c f 
                f e e e e e e e e f e e e f f f 
                . f e e e e e f f e e e f f . . 
                . . f f e e e e e e e f f . . . 
                . . . . f f e e e e f c c f . . 
                . . . . . . f f f f c c e f . . 
                . . . . . . . . . . f f f . . . 
                . . . . . . . . . . . . . . . . 
                `, SpriteKind.Player)
        }
    } else {
        if (color2 == "red") {
            mySprite = sprites.create(img`
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . f f f . . . . . . 
                . . . f f f f 1 2 f . . . . . . 
                . . f 1 2 2 4 f 2 f . . f f . . 
                . f 1 2 2 2 2 4 f f . f 1 f . . 
                . f 1 2 f 2 2 e 4 4 f 1 2 f . . 
                . f 4 2 2 2 2 e 2 2 2 2 f . . . 
                . f 4 2 2 2 e e 2 2 f e 2 f . . 
                . . f f f f f f f f . f f f . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                `, SpriteKind.Player)
        } else if (color2 == "yellow") {
            mySprite = sprites.create(img`
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . f f f . . . . . . 
                . . . f f f f 1 5 f . . . . . . 
                . . f 1 5 5 d f 5 f . . f f . . 
                . f 1 5 5 5 5 d f f . f 1 f . . 
                . f 1 5 f 5 5 4 d d f 1 5 f . . 
                . f d 5 5 5 5 4 5 5 5 5 f . . . 
                . f d 5 5 5 4 4 5 5 f 4 5 f . . 
                . . f f f f f f f f . f f f . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                `, SpriteKind.Player)
        } else if (color2 == "blue") {
            mySprite = sprites.create(img`
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . f f f . . . . . . 
                . . . f f f f 1 9 f . . . . . . 
                . . f 1 9 9 7 f 9 f . . f f . . 
                . f 1 9 9 9 9 7 f f . f 1 f . . 
                . f 1 9 f 9 9 6 7 7 f 1 9 f . . 
                . f 7 9 9 9 9 6 9 9 9 9 f . . . 
                . f 7 9 9 9 6 6 9 9 f 6 9 f . . 
                . . f f f f f f f f . f f f . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                `, SpriteKind.Player)
        } else if (color2 == "orange") {
            mySprite = sprites.create(img`
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . f f f . . . . . . 
                . . . f f f f 1 4 f . . . . . . 
                . . f 1 4 4 5 f 4 f . . f f . . 
                . f 1 4 4 4 4 5 f f . f 1 f . . 
                . f 1 4 f 4 4 2 5 5 f 1 4 f . . 
                . f 5 4 4 4 4 2 4 4 4 4 f . . . 
                . f 5 4 4 4 2 2 4 4 f 2 4 f . . 
                . . f f f f f f f f . f f f . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                `, SpriteKind.Player)
        } else if (color2 == "purple") {
            mySprite = sprites.create(img`
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . f f f . . . . . . 
                . . . f f f f 1 a f . . . . . . 
                . . f 1 a a 3 f a f . . f f . . 
                . f 1 a a a a 3 f f . f 1 f . . 
                . f 1 a f a a c 3 3 f 1 a f . . 
                . f 3 a a a a c a a a a f . . . 
                . f 3 a a a c c a a f c a f . . 
                . . f f f f f f f f . f f f . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                `, SpriteKind.Player)
        } else if (color2 == "green") {
            mySprite = sprites.create(img`
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . f f f . . . . . . 
                . . . f f f f 1 7 f . . . . . . 
                . . f 1 7 7 5 f 7 f . . f f . . 
                . f 1 7 7 7 7 5 f f . f 1 f . . 
                . f 1 7 f 7 7 6 5 5 f 1 7 f . . 
                . f 5 7 7 7 7 6 7 7 7 7 f . . . 
                . f 5 7 7 7 6 6 7 7 f 6 7 f . . 
                . . f f f f f f f f . f f f . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                `, SpriteKind.Player)
        } else {
            mySprite = sprites.create(img`
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . f f f . . . . . . 
                . . . f f f f 1 e f . . . . . . 
                . . f 1 e e b f e f . . f f . . 
                . f 1 e e e e b f f . f 1 f . . 
                . f 1 e f e e c b b f 1 e f . . 
                . f b e e e e c e e e e f . . . 
                . f b e e e c c e e f c e f . . 
                . . f f f f f f f f . f f f . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                `, SpriteKind.Player)
        }
        mySprite.setKind(SpriteKind.Food)
    }
    sprites.setDataString(mySprite, "color", color2)
    grid.place(mySprite, tiles.getTileLocation(col, row))
}
controller.left.onEvent(ControllerButtonEvent.Pressed, function () {
    checkMove(-1, 0)
})
controller.combos.attachCombo("a+b", function () {
    level += -1
    for (let value of sprites.allOfKind(SpriteKind.Food)) {
        value.destroy()
    }
})
controller.right.onEvent(ControllerButtonEvent.Pressed, function () {
    checkMove(1, 0)
})
function checkMove (col: number, row: number) {
    music.playTone(262, music.beat(BeatFraction.Quarter))
    for (let itemPlayer of sprites.allOfKind(SpriteKind.Player)) {
        move = true
        if (!(tiles.tileAtLocationEquals(grid.add(grid.getLocation(itemPlayer), col, row), myTiles.tile1))) {
            move = false
        } else {
            for (let itemObstacle of grid.getSprites(grid.add(grid.getLocation(itemPlayer), col, row))) {
                if (itemObstacle.kind() != itemPlayer.kind() && sprites.readDataString(itemObstacle, "color") != sprites.readDataString(itemPlayer, "color")) {
                    move = false
                }
            }
        }
        if (move && !(paused)) {
            grid.move(itemPlayer, col, row)
        }
    }
}
controller.down.onEvent(ControllerButtonEvent.Pressed, function () {
    checkMove(0, 1)
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Player, function (sprite, otherSprite) {
    if (sprites.readDataString(sprite, "color") == sprites.readDataString(otherSprite, "color")) {
        otherSprite.destroy()
    } else {
        if (sprites.readDataString(sprite, "color") == "red" && sprites.readDataString(otherSprite, "color") == "blue" || sprites.readDataString(otherSprite, "color") == "red" && sprites.readDataString(sprite, "color") == "blue") {
            initFish("big", "purple", grid.spriteCol(sprite), grid.spriteRow(sprite))
        } else if (sprites.readDataString(sprite, "color") == "red" && sprites.readDataString(otherSprite, "color") == "yellow" || sprites.readDataString(otherSprite, "color") == "red" && sprites.readDataString(sprite, "color") == "yellow") {
            initFish("big", "orange", grid.spriteCol(sprite), grid.spriteRow(sprite))
        } else if (sprites.readDataString(sprite, "color") == "blue" && sprites.readDataString(otherSprite, "color") == "yellow" || sprites.readDataString(otherSprite, "color") == "blue" && sprites.readDataString(sprite, "color") == "yellow") {
            initFish("big", "green", grid.spriteCol(sprite), grid.spriteRow(sprite))
        } else {
            initFish("big", "brown", grid.spriteCol(sprite), grid.spriteRow(sprite))
        }
        otherSprite.destroy()
        sprite.destroy()
    }
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Food, function (sprite, otherSprite) {
    otherSprite.destroy()
})
let move = false
let mySprite: Sprite = null
let paused = false
let level = 0
scene.setBackgroundColor(8)
level = 0
setLevel()
