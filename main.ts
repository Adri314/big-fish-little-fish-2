function setLevel () {
    tiles.setTilemap(tiles.createTilemap(hex`0a0008000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000`, img`
        . . . . . . . . . . 
        . . . . . . . . . . 
        . . . . . . . . . . 
        . . . . . . . . . . 
        . . . . . . . . . . 
        . . . . . . . . . . 
        . . . . . . . . . . 
        . . . . . . . . . . 
        `, [myTiles.transparency16], TileScale.Sixteen))
    paused = false
    level += 1
    if (level == 1) {
        game.showLongText("Level " + level + "                Eat the little fish", DialogLayout.Top)
        tiles.setTilemap(tiles.createTilemap(hex`0a0008000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000001010101010101010101`, img`
            . . . . . . . . . . 
            . . . . . . . . . . 
            . . . . . . . . . . 
            . . . . . . . . . . 
            . . . . . . . . . . 
            . . . . . . . . . . 
            . . . . . . . . . . 
            . . . . . . . . . . 
            `, [myTiles.transparency16,sprites.builtin.oceanSand2], TileScale.Sixteen))
        initFish("small", "orange", 3, 4)
        initFish("big", "orange", 6, 3)
    } else if (level == 2) {
        game.showLongText("Level " + level + "                You move all the big fish", DialogLayout.Top)
        tiles.setTilemap(tiles.createTilemap(hex`0a0008000000000001000000000300000000040000000004000000000400000000030403010101010401010300000000010000000004000000000400000000030000000001000000000402020202020202020202`, img`
            . . . . . . . . . . 
            . . . . . . . . . . 
            . . . . . . . . . . 
            . . . . . . . . . . 
            . . . . . . . . . . 
            . . . . . . . . . . 
            . . . . . . . . . . 
            . . . . . . . . . . 
            `, [myTiles.transparency16,sprites.builtin.coral5,sprites.builtin.oceanSand2,sprites.builtin.coral3,sprites.builtin.coral0], TileScale.Sixteen))
        initFish("small", "red", 0, 2)
        initFish("small", "blue", 8, 2)
        initFish("small", "yellow", 2, 6)
        initFish("small", "orange", 5, 4)
        initFish("big", "red", 3, 2)
        initFish("big", "blue", 6, 0)
        initFish("big", "yellow", 0, 4)
        initFish("big", "orange", 8, 4)
    } else if (level == 3) {
        game.showLongText("Level " + level + "                Eat your own color", DialogLayout.Top)
        tiles.setTilemap(tiles.createTilemap(hex`0a0008000000000000000000000000000000000000000000000000000000000000000101010101010101020000000000000000000000000000000000000000000000000000000000000001010101010101010101`, img`
            . . . . . . . . . . 
            . . . . . . . . . . 
            . . . . . . . . . . 
            . . . . . . . . . . 
            . . . . . . . . . . 
            . . . . . . . . . . 
            . . . . . . . . . . 
            . . . . . . . . . . 
            `, [myTiles.transparency16,sprites.builtin.oceanSand2,sprites.builtin.oceanSand3], TileScale.Sixteen))
        initFish("small", "yellow", 2, 2)
        initFish("small", "red", 1, 6)
        initFish("big", "red", 0, 2)
        initFish("big", "yellow", 2, 6)
    } else if (level == 4) {
        game.showLongText("Level " + level + "                Mix colors!", DialogLayout.Top)
        tiles.setTilemap(tiles.createTilemap(hex`0a0008000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000002030000000001010101010101010101`, img`
            . . . . . . . . . . 
            . . . . . . . . . . 
            . . . . . . . . . . 
            . . . . . . . . . . 
            . . . . . . . . . . 
            . . . . . . . . . . 
            . . . . . . . . . . 
            . . . . . . . . . . 
            `, [myTiles.transparency16,sprites.builtin.oceanSand2,sprites.builtin.coral1,sprites.builtin.coral2], TileScale.Sixteen))
        initFish("small", "green", 3, 6)
        initFish("big", "yellow", 6, 5)
        initFish("big", "blue", 8, 2)
    } else if (level == 5) {
        game.showLongText("Level " + level + "                Brown + any color = brown", DialogLayout.Top)
        tiles.setTilemap(tiles.createTilemap(hex`0a0008000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000001010101010101010101`, img`
            . . . . . . . . . . 
            . . . . . . . . . . 
            . . . . . . . . . . 
            . . . . . . . . . . 
            . . . . . . . . . . 
            . . . . . . . . . . 
            . . . . . . . . . . 
            . . . . . . . . . . 
            `, [myTiles.transparency16,sprites.builtin.oceanSand2], TileScale.Sixteen))
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
        game.showLongText("Level " + level + "                Eat them all!", DialogLayout.Top)
        tiles.setTilemap(tiles.createTilemap(hex`0a0008000404050605040405050406000000000000000005040000000000000000060405040600000404040500000005000004000000000000040000050000000000000400000600000000000002010103000000`, img`
            . . . . . . . . . . 
            . . . . . . . . . . 
            . . . . . . . . . . 
            . . . . . . . . . . 
            . . . . . . . . . . 
            . . . . . . . . . . 
            . . . . . . . . . . 
            . . . . . . . . . . 
            `, [myTiles.transparency16,sprites.builtin.oceanSand2,sprites.builtin.oceanSand1,sprites.builtin.oceanSand3,sprites.builtin.coral0,sprites.builtin.coral2,sprites.builtin.coral5], TileScale.Sixteen))
        initFish("small", "blue", 8, 1)
        initFish("small", "yellow", 8, 2)
        initFish("small", "green", 4, 6)
        initFish("small", "green", 5, 6)
        initFish("big", "blue", 1, 2)
        initFish("big", "yellow", 1, 1)
    } else if (level == 7) {
        game.showLongText("Level " + level, DialogLayout.Top)
        tiles.setTilemap(tiles.createTilemap(hex`0a0008000000000000000000000000000000000000000000000000000000000000000000050606060400000000000500000004000000000005000000040000000000050000000400000000000201010103000000`, img`
            . . . . . . . . . . 
            . . . . . . . . . . 
            . . . . . . . . . . 
            . . . . . . . . . . 
            . . . . . . . . . . 
            . . . . . . . . . . 
            . . . . . . . . . . 
            . . . . . . . . . . 
            `, [myTiles.transparency16,sprites.builtin.oceanSand2,sprites.builtin.oceanSand1,sprites.builtin.oceanSand3,sprites.builtin.coral5,sprites.builtin.coral3,sprites.builtin.coral4], TileScale.Sixteen))
        initFish("small", "blue", 4, 4)
        initFish("small", "blue", 4, 5)
        initFish("small", "purple", 5, 4)
        initFish("small", "purple", 3, 6)
        initFish("small", "red", 5, 5)
        initFish("big", "blue", 5, 6)
        initFish("big", "red", 3, 4)
    } else if (level == 8) {
        game.showLongText("Level " + level, DialogLayout.Top)
        tiles.setTilemap(tiles.createTilemap(hex`0a0008000000000000000000000000000000000000000000000007050505050600000000040000000006000000000400000000060000000004000000000600000000040000000006000000000201010101030000`, img`
            . . . . . . . . . . 
            . . . . . . . . . . 
            . . . . . . . . . . 
            . . . . . . . . . . 
            . . . . . . . . . . 
            . . . . . . . . . . 
            . . . . . . . . . . 
            . . . . . . . . . . 
            `, [myTiles.transparency16,sprites.builtin.oceanSand2,sprites.builtin.oceanSand1,sprites.builtin.oceanSand3,sprites.builtin.coral3,sprites.builtin.coral4,sprites.builtin.coral2,sprites.builtin.coral0], TileScale.Sixteen))
        initFish("small", "orange", 3, 5)
        initFish("small", "orange", 5, 5)
        initFish("small", "orange", 6, 5)
        initFish("small", "red", 3, 6)
        initFish("small", "red", 5, 6)
        initFish("small", "yellow", 4, 6)
        initFish("small", "yellow", 6, 6)
        initFish("big", "yellow", 3, 3)
        initFish("big", "red", 3, 4)
    } else if (level == 9) {
        game.showLongText("Level " + level, DialogLayout.Top)
        tiles.setTilemap(tiles.createTilemap(hex`0a0008000000000000000000000000000000000000000000000604040404040500000006000000000005000000060000000000050000000600000000000500000006000000000005000000020101010101030000`, img`
            . . . . . . . . . . 
            . . . . . . . . . . 
            . . . . . . . . . . 
            . . . . . . . . . . 
            . . . . . . . . . . 
            . . . . . . . . . . 
            . . . . . . . . . . 
            . . . . . . . . . . 
            `, [myTiles.transparency16,sprites.builtin.oceanSand2,sprites.builtin.oceanSand1,sprites.builtin.oceanSand3,sprites.builtin.coral4,sprites.builtin.coral2,sprites.builtin.coral1], TileScale.Sixteen))
        initFish("small", "green", 4, 3)
        initFish("small", "purple", 4, 6)
        initFish("big", "red", 2, 3)
        initFish("big", "yellow", 2, 6)
        initFish("big", "blue", 6, 3)
        initFish("big", "blue", 6, 6)
    } else if (level == 10) {
        game.showLongText("Level " + level, DialogLayout.Top)
        tiles.setTilemap(tiles.createTilemap(hex`0a0008000000000000000000000000000000000000000000000000000000000000000006040404040405000000060000000000050000000600000000000500000006000000000005000000020101010101030000`, img`
            . . . . . . . . . . 
            . . . . . . . . . . 
            . . . . . . . . . . 
            . . . . . . . . . . 
            . . . . . . . . . . 
            . . . . . . . . . . 
            . . . . . . . . . . 
            . . . . . . . . . . 
            `, [myTiles.transparency16,sprites.builtin.oceanSand2,sprites.builtin.oceanSand1,sprites.builtin.oceanSand3,sprites.builtin.coral4,sprites.builtin.coral2,sprites.builtin.coral1], TileScale.Sixteen))
        initFish("small", "blue", 2, 4)
        initFish("small", "blue", 3, 4)
        initFish("small", "green", 4, 4)
        initFish("small", "blue", 5, 4)
        initFish("small", "yellow", 3, 6)
        initFish("small", "green", 4, 6)
        initFish("small", "yellow", 5, 6)
        initFish("small", "yellow", 6, 6)
        initFish("big", "blue", 6, 4)
        initFish("big", "yellow", 2, 6)
    } else if (level == 11) {
        game.showLongText("Level " + level, DialogLayout.Top)
        tiles.setTilemap(tiles.createTilemap(hex`0a0008000000000000000000000000000000000000000000000007050505050600000000040000000006000000000400000000060000000004000000000600000000040000000006000000000201010101030000`, img`
            . . . . . . . . . . 
            . . . . . . . . . . 
            . . . . . . . . . . 
            . . . . . . . . . . 
            . . . . . . . . . . 
            . . . . . . . . . . 
            . . . . . . . . . . 
            . . . . . . . . . . 
            `, [myTiles.transparency16,sprites.builtin.oceanSand2,sprites.builtin.oceanSand1,sprites.builtin.oceanSand3,sprites.builtin.coral3,sprites.builtin.coral4,sprites.builtin.coral2,sprites.builtin.coral0], TileScale.Sixteen))
        initFish("big", "red", 3, 3)
        initFish("big", "blue", 6, 3)
        initFish("small", "red", 3, 4)
        initFish("small", "blue", 5, 4)
        initFish("small", "orange", 4, 5)
        initFish("small", "blue", 6, 5)
        initFish("big", "yellow", 3, 6)
        initFish("small", "blue", 5, 6)
    } else {
    	
    }
}
controller.up.onEvent(ControllerButtonEvent.Pressed, function () {
    checkMove(0, -1)
})
controller.B.onEvent(ControllerButtonEvent.Pressed, function () {
    level += -1
    for (let value of sprites.allOfKind(SpriteKind.Player)) {
        value.destroy()
    }
    for (let value of sprites.allOfKind(SpriteKind.Food)) {
        value.destroy()
    }
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
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    game.showLongText("B to restart level UP+DOWN to skip level", DialogLayout.Bottom)
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
                f 2 2 2 f 4 2 2 f f 2 2 2 f e f 
                f 2 2 2 f 4 2 f 4 f 2 2 2 f e f 
                f 2 2 2 4 4 2 2 2 f 2 2 2 f f f 
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
                f 5 5 5 f 1 5 5 f f 5 5 5 f 4 f 
                f 5 5 5 f 1 5 f d f 5 5 5 f 4 f 
                f 5 5 5 1 1 5 5 5 f 5 5 5 f f f 
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
                f 9 9 9 f 7 9 9 f f 9 9 9 f 6 f 
                f 9 9 9 f 7 9 f 7 f 9 9 9 f 6 f 
                f 9 9 9 7 7 9 9 9 f 9 9 9 f f f 
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
                f 4 4 4 f 5 4 4 f f 4 4 4 f 2 f 
                f 4 4 4 f 5 4 f 5 f 4 4 4 f 2 f 
                f 4 4 4 5 5 4 4 4 f 4 4 4 f f f 
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
                f a a a f 3 a a f f a a a f c f 
                f a a a f 3 a f 3 f a a a f c f 
                f a a a 3 3 a a a f a a a f f f 
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
                f 7 7 7 f 5 7 7 f f 7 7 7 f 6 f 
                f 7 7 7 f 5 7 f 5 f 7 7 7 f 6 f 
                f 7 7 7 5 5 7 7 7 f 7 7 7 f f f 
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
                f e e e f b e e f f e e e f c f 
                f e e e f b e f b f e e e f c f 
                f e e e b b e e e f e e e f f f 
                . f e e e e e f f e e e f f . . 
                . . f f e e e e e e e f f . . . 
                . . . . f f e e e e f c c f . . 
                . . . . . . f f f f c c e f . . 
                . . . . . . . . . . f f f . . . 
                . . . . . . . . . . . . . . . . 
                `, SpriteKind.Player)
        }
        mySprite.z = 1
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
        mySprite.z = 0
    }
    sprites.setDataString(mySprite, "color", color2)
    grid.place(mySprite, tiles.getTileLocation(col, row))
}
controller.left.onEvent(ControllerButtonEvent.Pressed, function () {
    checkMove(-1, 0)
})
controller.combos.attachCombo("u+d", function () {
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
        if (!(tiles.tileAtLocationEquals(grid.add(grid.getLocation(itemPlayer), col, row), myTiles.transparency16))) {
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
scene.setBackgroundImage(img`
    8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
    8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
    8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
    8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
    8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
    8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
    8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
    8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
    8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
    8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
    8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
    8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
    8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
    8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
    8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
    8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
    8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
    8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
    8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
    8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
    8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
    8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
    8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
    8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
    8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
    8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
    8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
    8888888888888888888888888888888888888888888888888888888888888888888888888888888888888866888888888888888888888888888888888888888888888888888888888888888888888888
    8888888888888888888888888888888888888888888888888888888888888888888888888888888888888666688888888888888888888888888888888888888888888888888888888888888888888888
    8888888888888888888888888888888888888888888888888888888888888888888888888888888888888666688888888888888888888888888888888888888888888888888888888888888888888888
    8888888888888888888888888888888888888888888888888888888888888888888888888888888888888666668888888888888888888888888888888888888888888888888888888888888888888888
    8888888888888888888888888888888888888888888888888888888888888888888888888888888888886666668888888888888888888888888888888888888888888888888888888888888888888888
    8888888888888888888888888888888888888888888888888888888888888888888888888888888888886666668888888888888888888888888888888888888888888888888888888888888888888888
    8888888888888888888888888888888888888888888888888888888888888888888888888888888888886666668888888888888888888888888888888888888888888888888888888888888888888888
    8888888888888888888888888888888888888888888888888888888888888888888888888888888888886666668888888888888888888888888888888888888888888888888888888888888888888888
    8888888888888888888888888888888888888888888888888888888888888888888888888888888888886666668888888888888888888888888888888888888888888888888888888888888888888888
    8888888888888888888888888888888888888888888888888888888888888888888888888888888888866666668888888888888888888888888888888888888888888888888888888888888888888888
    8888888888888888888888888888888888888888888888888888888888888888888888888888888888866666668888888888888888888888888888888888888888888888888888888888666666666688
    6688888888888888888888888888888888888888888888888888888888888888888888888888888888866666666888888888888888888888888888888888888888888888888888888886666666666666
    6666688888888888888888888888888888888888888888888888888888888888888888888888888888866666666888888888888888888888888888888888888888888888888888888866666666666666
    6666668888888888888888888888888888888888888888888888888888888888888888888888888888866666666888888888888888888888888888888888888888888888888888888866666666666666
    6666666888888888888888888888888888888888888888888888888888888888888888888888888888866666666888888888888888888888888888888888888888888888888888888866666666666666
    6666666888888888888888888888888888888888888888888888888888888888888888888888888888866666666888888888888888888888888888888888888888888888888666666666666666666666
    6666666888888888888888888888888888888888888888888888888888888888888888888888888888866666666888888888888888888888888888888888888888888888886666666666666666666666
    6666666888888888888888888888888888888888888888888888888888888888888888888888888888866666666688888888888888888888888888888888888888888888866666666666666666666666
    6666666888888888888888888888888888888888888888888888888888888888888888888888888888866666666688888888888888888888888888888888888888888888866666666666666666666666
    6666666888888888888888888888888888888888666888888888888888888888888888888888888888866666666688888888888888888888888888888888888888888888866666666666666666666666
    6666666888888888888888888888888888888666666688888888888888888888888888888888888888866666666668888888888888888888888888888888888888888666666666666666666666666666
    6666666888888888888888888888888888866666666688888888888888888888888888888888888888866666666668888888888888888888888888888888888888666666666666666666666666666666
    6666666888888888888888888888888886666666666668888888888888888888888888888888888888866666666666888888888888866666666666666666666666666666666666666666666666666666
    6666666888888888888888888888888866666666666668888888888888888888888888888888888888666666666666866666666666666666666666666666666666666666666666666666666666666666
    6666666888888888888888888888888666666666666668888888888888888888888888888888888886666666666666666666666666666666666666666666666666666666666666666666666666666666
    6666666888888888886888888888888666666666666668888888888888888888888888888888888886666666666666666666666666666666666666666666666666666666666666666666666666666666
    6666666888886666666688888888888666666666666668888888888888888888888886688888888866666666666666666666666666666666666666666666666666666666666666666666666666666666
    6666666886666666666688888888888666666666666666888888888888888888888866666668888666666666666666666666666666666666666666666666666666666666666666666666666666666666
    6666666666666666666688888888886666666666666666888888888888888888888666666666688666666666666666666666666666666666666666666666666666666666666666666666666666666666
    6666666666666666666688888888886666666666666666888888888888888888888666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
    6666666666666666666668888888886666666666666666888888888888888888888666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
    6666666666666666666668888888886666666666666666888888888888888888886666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
    6666666666666666666668888886666666666666666666888888888888888888886666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
    6666666666666666666666666666666666666666666666886668888888888888886666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
    6666666666666666666666666666666666666666666666886666888888888888886666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
    6666666666666666666666666666666666666666666666666666688888888888886666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
    6666666666666666666666666666666666666666666666666666668888888888886666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
    6666666666666666666666666666666666666666666666666666668888888888866666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
    6666666666666666666666666666666666666666666666666666668888888888866666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
    6666666666666666666666666666666666666666666666666666668888888888866666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
    6666666666666666666666666666666666666666666666666666666888888888866666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
    6666666666666666666666666666666666666666666666666666666688888888666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
    6666666666666666666666666666666666666666666666666666666668888886666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
    6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
    6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
    6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
    6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
    6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
    6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
    6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
    6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
    6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
    6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
    6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
    6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
    6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
    6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
    6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
    6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
    6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
    6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
    6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
    6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
    6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
    6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
    6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
    6666666666666666666699666666666666666666666666666666666666666666666666666666666666666666666666666666666666999999999999966666666666666666666666666666666666666666
    6666666666666999999999999999966666666666666666666666666666666666666666666666666666666666669999999999999999999999999999999999966666666666666666666666666666666666
    6666666699999999999999999999999999666666666666666666666666666666666666666666666666666669999999999999999999999999999999999999999996666666666666666666666666666666
    6666669999999999999999999999999999999999966666666666666666666666666666666666666666666999999999999999999999999999999999999999999999999996666666666666666666666666
    6699999999999999999999999999999999999999999999966666666666666666666666666666666666699999999999999999999999999999999999999999999999999999999999666666666666666666
    9999999999999999999999999999999999999999999999996666666666666666666666666666666666999999999999999999999999999999999999999999999999999999999999999996666666666666
    9999999999999999999999999999999999999999999999999966666666666666666666666666666699999999999999999999999999999999999999999999999999999999999999999999966666666669
    9999999999999999999999999999999999999999999999999996666666666666666666666666666999999999999999999999999999999999999999999999999999999999999999999999999666666999
    9999999999999999999999999999999999999999999999999999666666666666666666666666669999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999966666666666666666666666699999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999996666666666666666666669999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999666666669999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    `)
game.setDialogFrame(img`
    9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 
    9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 
    9 9 6 6 6 6 6 6 6 6 6 6 6 9 9 
    9 9 6 6 6 6 6 6 6 6 6 6 6 9 9 
    9 9 6 6 8 8 8 8 8 8 8 6 6 9 9 
    9 9 6 6 8 8 8 8 8 8 8 6 6 9 9 
    9 9 6 6 8 8 8 8 8 8 8 6 6 9 9 
    9 9 6 6 8 8 8 8 8 8 8 6 6 9 9 
    9 9 6 6 8 8 8 8 8 8 8 6 6 9 9 
    9 9 6 6 8 8 8 8 8 8 8 6 6 9 9 
    9 9 6 6 8 8 8 8 8 8 8 6 6 9 9 
    9 9 6 6 6 6 6 6 6 6 6 6 6 9 9 
    9 9 6 6 6 6 6 6 6 6 6 6 6 9 9 
    9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 
    9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 
    `)
game.setDialogTextColor(1)
game.setDialogCursor(img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
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
    `)
level = 0
setLevel()
