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
        tiles.setTilemap(tiles.createTilemap(hex`0b00080004000000000100000000030400000000040000000004040000000004000000000304040301010101040101030400000000010000000004040000000004000000000304000000000100000000040202020202020202020202`, img`
            . . . . . . . . . . . 
            . . . . . . . . . . . 
            . . . . . . . . . . . 
            . . . . . . . . . . . 
            . . . . . . . . . . . 
            . . . . . . . . . . . 
            . . . . . . . . . . . 
            . . . . . . . . . . . 
            `, [myTiles.transparency16,sprites.builtin.coral5,sprites.builtin.oceanSand2,sprites.builtin.coral3,sprites.builtin.coral0], TileScale.Sixteen))
        scene.centerCameraAt(88, 60)
        initFish("small", "red", 1, 2)
        initFish("small", "blue", 9, 2)
        initFish("small", "yellow", 3, 6)
        initFish("small", "orange", 6, 4)
        initFish("big", "red", 4, 2)
        initFish("big", "blue", 7, 0)
        initFish("big", "yellow", 1, 4)
        initFish("big", "orange", 9, 4)
    } else if (level == 3) {
        game.showLongText("Level " + level + "                Eat your own color  B to restart level", DialogLayout.Top)
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
        tiles.setTilemap(tiles.createTilemap(hex`0b00080000000000000000000000000000000000000000000000000000000000000000000000000005060606040000000000000500000004000000000000050000000400000000000005000000040000000000000201010103000000`, img`
            . . . . . . . . . . . 
            . . . . . . . . . . . 
            . . . . . . . . . . . 
            . . . . . . . . . . . 
            . . . . . . . . . . . 
            . . . . . . . . . . . 
            . . . . . . . . . . . 
            . . . . . . . . . . . 
            `, [myTiles.transparency16,sprites.builtin.oceanSand2,sprites.builtin.oceanSand1,sprites.builtin.oceanSand3,sprites.builtin.coral5,sprites.builtin.coral3,sprites.builtin.coral4], TileScale.Sixteen))
        scene.centerCameraAt(88, 60)
        initFish("small", "blue", 5, 4)
        initFish("small", "blue", 5, 5)
        initFish("small", "purple", 6, 4)
        initFish("small", "purple", 4, 6)
        initFish("small", "red", 6, 5)
        initFish("big", "blue", 6, 6)
        initFish("big", "red", 4, 4)
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
        tiles.setTilemap(tiles.createTilemap(hex`0b00080000000000000000000000000000000000000000000000000006040404040405000000000600000000000500000000060000000000050000000006000000000005000000000600000000000500000000020101010101030000`, img`
            . . . . . . . . . . . 
            . . . . . . . . . . . 
            . . . . . . . . . . . 
            . . . . . . . . . . . 
            . . . . . . . . . . . 
            . . . . . . . . . . . 
            . . . . . . . . . . . 
            . . . . . . . . . . . 
            `, [myTiles.transparency16,sprites.builtin.oceanSand2,sprites.builtin.oceanSand1,sprites.builtin.oceanSand3,sprites.builtin.coral4,sprites.builtin.coral2,sprites.builtin.coral1], TileScale.Sixteen))
        scene.centerCameraAt(88, 60)
        initFish("small", "green", 5, 3)
        initFish("small", "purple", 5, 6)
        initFish("big", "red", 3, 3)
        initFish("big", "yellow", 3, 6)
        initFish("big", "blue", 7, 3)
        initFish("big", "blue", 7, 6)
    } else if (level == 10) {
        game.showLongText("Level " + level, DialogLayout.Top)
        tiles.setTilemap(tiles.createTilemap(hex`0b00080000000000000000000000000000000000000000000000000000000000000000000000000604040404040500000000060000000000050000000006000000000005000000000600000000000500000000020101010101030000`, img`
            . . . . . . . . . . . 
            . . . . . . . . . . . 
            . . . . . . . . . . . 
            . . . . . . . . . . . 
            . . . . . . . . . . . 
            . . . . . . . . . . . 
            . . . . . . . . . . . 
            . . . . . . . . . . . 
            `, [myTiles.transparency16,sprites.builtin.oceanSand2,sprites.builtin.oceanSand1,sprites.builtin.oceanSand3,sprites.builtin.coral4,sprites.builtin.coral2,sprites.builtin.coral1], TileScale.Sixteen))
        scene.centerCameraAt(88, 60)
        initFish("small", "blue", 3, 4)
        initFish("small", "blue", 4, 4)
        initFish("small", "green", 5, 4)
        initFish("small", "blue", 6, 4)
        initFish("small", "yellow", 4, 6)
        initFish("small", "green", 5, 6)
        initFish("small", "yellow", 6, 6)
        initFish("small", "yellow", 7, 6)
        initFish("big", "blue", 7, 4)
        initFish("big", "yellow", 3, 6)
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
    } else if (level == 12) {
        game.showLongText("Level " + level, DialogLayout.Top)
        tiles.setTilemap(tiles.createTilemap(hex`0b00080000000000000000000000000000060404040404070000000006000000000005000000000600000000000500000000060000000000050000000006000000000005000000000600000000000500000000020101010101030000`, img`
            . . . . . . . . . . . 
            . . . . . . . . . . . 
            . . . . . . . . . . . 
            . . . . . . . . . . . 
            . . . . . . . . . . . 
            . . . . . . . . . . . 
            . . . . . . . . . . . 
            . . . . . . . . . . . 
            `, [myTiles.transparency16,sprites.builtin.oceanSand2,sprites.builtin.oceanSand1,sprites.builtin.oceanSand3,sprites.builtin.coral4,sprites.builtin.coral2,sprites.builtin.coral1,sprites.builtin.coral5], TileScale.Sixteen))
        scene.centerCameraAt(88, 60)
        initFish("big", "red", 3, 2)
        initFish("big", "yellow", 3, 3)
        initFish("big", "red", 3, 4)
        initFish("big", "yellow", 3, 5)
        initFish("small", "orange", 3, 6)
        initFish("small", "green", 4, 6)
        for (let index = 0; index <= 3; index++) {
            initFish("big", "blue", 5, index + 2)
        }
        initFish("small", "purple", 5, 6)
        initFish("small", "green", 6, 6)
        initFish("big", "yellow", 7, 2)
        initFish("big", "red", 7, 3)
        initFish("big", "yellow", 7, 4)
        initFish("big", "red", 7, 5)
        initFish("small", "orange", 7, 6)
    } else if (level == 13) {
        game.showLongText("Level " + level, DialogLayout.Top)
        tiles.setTilemap(tiles.createTilemap(hex`0b00080000000000000000000000000000060404040404070000000006000000000005000000000600080008000500000000060000000000050000000006080000000805000000000600000800000500000000020101010101030000`, img`
            . . . . . . . . . . . 
            . . . . . . . . . . . 
            . . . . . . . . . . . 
            . . . . . . . . . . . 
            . . . . . . . . . . . 
            . . . . . . . . . . . 
            . . . . . . . . . . . 
            . . . . . . . . . . . 
            `, [myTiles.transparency16,sprites.builtin.oceanSand2,sprites.builtin.oceanSand1,sprites.builtin.oceanSand3,sprites.builtin.coral4,sprites.builtin.coral2,sprites.builtin.coral1,sprites.builtin.coral5,sprites.builtin.coral0], TileScale.Sixteen))
        scene.centerCameraAt(88, 60)
        initFish("small", "orange", 3, 2)
        initFish("big", "red", 4, 2)
        initFish("big", "blue", 6, 2)
        initFish("small", "orange", 7, 2)
        initFish("small", "green", 3, 4)
        initFish("small", "green", 7, 4)
        initFish("small", "orange", 5, 5)
        initFish("small", "green", 3, 6)
        initFish("big", "yellow", 4, 6)
        initFish("big", "yellow", 6, 6)
        initFish("small", "green", 7, 6)
    } else if (level == 14) {
        game.showLongText("Level " + level + "                Careful with the X!", DialogLayout.Top)
        tiles.setTilemap(tiles.createTilemap(hex`0b00080000000101010001010100000001000000010000000100000100000002000000010000010000000200000001000000010000020000010000000000010000000100000000000000010001000000000000000000010000000000`, img`
            . . . . . . . . . . . 
            . . . . . . . . . . . 
            . . . . . . . . . . . 
            . . . . . . . . . . . 
            . . . . . . . . . . . 
            . . . . . . . . . . . 
            . . . . . . . . . . . 
            . . . . . . . . . . . 
            `, [myTiles.transparency16,sprites.builtin.coral0,myTiles.tile2], TileScale.Sixteen))
        scene.centerCameraAt(88, 64)
        initFish("small", "purple", 3, 2)
        initFish("big", "purple", 7, 2)
    } else if (level == 15) {
        game.showLongText("Level " + level, DialogLayout.Top)
        tiles.setTilemap(tiles.createTilemap(hex`0b00080000000000000000000000000000000000000000000000000000020404040300000000000002000000030000000000000200010003000000000000020000000300000000000002040404030000000000000000000000000000`, img`
            . . . . . . . . . . . 
            . . . . . . . . . . . 
            . . . . . . . . . . . 
            . . . . . . . . . . . 
            . . . . . . . . . . . 
            . . . . . . . . . . . 
            . . . . . . . . . . . 
            . . . . . . . . . . . 
            `, [myTiles.transparency16,myTiles.tile2,sprites.builtin.coral1,sprites.builtin.coral5,sprites.builtin.coral4], TileScale.Sixteen))
        scene.centerCameraAt(88, 60)
        initFish("big", "red", 4, 3)
        initFish("small", "orange", 5, 3)
        initFish("big", "red", 6, 3)
        initFish("big", "red", 4, 4)
        initFish("big", "yellow", 6, 4)
        initFish("big", "yellow", 4, 5)
        initFish("small", "orange", 5, 5)
        initFish("big", "yellow", 6, 5)
    } else if (level == 16) {
        game.showLongText("Level " + level, DialogLayout.Top)
        tiles.setTilemap(tiles.createTilemap(hex`0a0008000000000000000000000000000000000000000000000007050505050600000000040000000006000000000400080800060000000004000808000600000000040000000006000000000201010101030000`, img`
            . . . . . . . . . . 
            . . . . . . . . . . 
            . . . . . . . . . . 
            . . . . . . . . . . 
            . . . . . . . . . . 
            . . . . . . . . . . 
            . . . . . . . . . . 
            . . . . . . . . . . 
            `, [myTiles.transparency16,sprites.builtin.oceanSand2,sprites.builtin.oceanSand1,sprites.builtin.oceanSand3,sprites.builtin.coral3,sprites.builtin.coral4,sprites.builtin.coral2,sprites.builtin.coral0,myTiles.tile2], TileScale.Sixteen))
        for (let index = 0; index <= 1; index++) {
            initFish("big", "blue", 3, 3 + index * 3)
            initFish("small", "green", 4, 3 + index * 3)
            initFish("small", "green", 5, 3 + index * 3)
            initFish("big", "blue", 6, 3 + index * 3)
        }
        for (let index = 0; index <= 1; index++) {
            initFish("big", "yellow", 3, index + 4)
            initFish("big", "yellow", 6, index + 4)
        }
    } else if (level == 17) {
        game.showLongText("Level " + level, DialogLayout.Top)
        tiles.setTilemap(tiles.createTilemap(hex`0b00080000000000000000000000000000000000000000000000000000000000000000000000000704050505050600000000070000080000060000000007000008000006000000000700000800000600000000020101010101030000`, img`
            . . . . . . . . . . . 
            . . . . . . . . . . . 
            . . . . . . . . . . . 
            . . . . . . . . . . . 
            . . . . . . . . . . . 
            . . . . . . . . . . . 
            . . . . . . . . . . . 
            . . . . . . . . . . . 
            `, [myTiles.transparency16,sprites.builtin.oceanSand2,sprites.builtin.oceanSand1,sprites.builtin.oceanSand3,sprites.builtin.coral3,sprites.builtin.coral4,sprites.builtin.coral2,sprites.builtin.coral0,myTiles.tile2], TileScale.Sixteen))
        scene.centerCameraAt(88, 60)
        for (let index = 0; index <= 1; index++) {
            initFish("big", "red", 3 + index * 4, 4)
            initFish("small", "red", 3 + index * 4, 5)
            initFish("big", "blue", 3 + index * 4, 6)
        }
        for (let col = 0; col <= 1; col++) {
            for (let row = 0; row <= 2; row++) {
                initFish("small", "purple", 4 + col * 2, row + 4)
            }
        }
    } else if (level == 18) {
        game.showLongText("Level " + level, DialogLayout.Top)
        tiles.setTilemap(tiles.createTilemap(hex`0a0008000000000300000300000000000003030303000000020000000000000000020002000002020000020002000000000000000002000000030303030000000000000300000300000001010101010101010101`, img`
            . . . . . . . . . . 
            . . . . . . . . . . 
            . . . . . . . . . . 
            . . . . . . . . . . 
            . . . . . . . . . . 
            . . . . . . . . . . 
            . . . . . . . . . . 
            . . . . . . . . . . 
            `, [myTiles.transparency16,sprites.builtin.oceanSand2,myTiles.tile2,sprites.builtin.coral0], TileScale.Sixteen))
        for (let col = 0; col <= 2; col++) {
            for (let row = 0; row <= 1; row++) {
                initFish("small", "red", col, row)
            }
        }
        for (let col = 0; col <= 2; col++) {
            for (let row = 0; row <= 1; row++) {
                initFish("small", "purple", col + 7, row)
            }
        }
        for (let col = 0; col <= 2; col++) {
            for (let row = 0; row <= 1; row++) {
                initFish("small", "purple", col, row + 5)
            }
        }
        for (let col = 0; col <= 2; col++) {
            for (let row = 0; row <= 1; row++) {
                initFish("small", "blue", col + 7, row + 5)
            }
        }
        initFish("big", "red", 3, 3)
        initFish("big", "blue", 6, 3)
    } else if (level == 19) {
        game.showLongText("Level " + level, DialogLayout.Top)
        tiles.setTilemap(tiles.createTilemap(hex`0b00080000000000000000000000000000000000000000000000020202020202020202020202000000020002000000020200010002000201010002020001000000000000000202020202020202020202020000000000000000000000`, img`
            . . . . . . . . . . . 
            . . . . . . . . . . . 
            . . . . . . . . . . . 
            . . . . . . . . . . . 
            . . . . . . . . . . . 
            . . . . . . . . . . . 
            . . . . . . . . . . . 
            . . . . . . . . . . . 
            `, [myTiles.transparency16,myTiles.tile2,sprites.builtin.coral0], TileScale.Sixteen))
        scene.centerCameraAt(88, 60)
        initFish("small", "purple", 5, 3)
        initFish("small", "red", 1, 4)
        initFish("big", "red", 3, 4)
        initFish("big", "blue", 8, 3)
        initFish("small", "blue", 8, 5)
    } else if (level == 20) {
        game.showLongText("Level " + level, DialogLayout.Top)
        tiles.setTilemap(tiles.createTilemap(hex`0a0008000000000000000000000000000000000000000000000004040404040400000000040000000004000000000400000000040000000004000000000400000000040000000004000000000302020202010000`, img`
            . . . . . . . . . . 
            . . . . . . . . . . 
            . . . . . . . . . . 
            . . . . . . . . . . 
            . . . . . . . . . . 
            . . . . . . . . . . 
            . . . . . . . . . . 
            . . . . . . . . . . 
            `, [myTiles.transparency16,sprites.builtin.oceanSand3,sprites.builtin.oceanSand2,sprites.builtin.oceanSand1,sprites.builtin.coral0], TileScale.Sixteen))
        initFish("big", "red", 3, 3)
        initFish("big", "yellow", 3, 4)
        initFish("small", "yellow", 4, 3)
        initFish("small", "red", 4, 4)
        initFish("small", "red", 5, 3)
        initFish("small", "yellow", 5, 4)
        initFish("small", "red", 5, 5)
        initFish("small", "yellow", 5, 6)
        initFish("small", "yellow", 6, 3)
        initFish("small", "red", 6, 4)
        initFish("small", "yellow", 6, 5)
        initFish("small", "red", 6, 6)
    } else if (level == 21) {
        game.showLongText("Level " + level, DialogLayout.Top)
        tiles.setTilemap(tiles.createTilemap(hex`0b00080000000404040404040400000000040004000400040000000004000400040004000000000400040004000400000000040000000000040000000004000404040004000000000400000000000400000000030202020202010000`, img`
            . . . . . . . . . . . 
            . . . . . . . . . . . 
            . . . . . . . . . . . 
            . . . . . . . . . . . 
            . . . . . . . . . . . 
            . . . . . . . . . . . 
            . . . . . . . . . . . 
            . . . . . . . . . . . 
            `, [myTiles.transparency16,sprites.builtin.oceanSand3,sprites.builtin.oceanSand2,sprites.builtin.oceanSand1,sprites.builtin.coral0], TileScale.Sixteen))
        scene.centerCameraAt(88, 60)
        initFish("big", "yellow", 3, 1)
        initFish("big", "blue", 5, 1)
        initFish("big", "red", 5, 2)
        initFish("big", "yellow", 7, 1)
        initFish("small", "green", 3, 6)
        initFish("small", "green", 4, 6)
        initFish("small", "orange", 5, 6)
        initFish("small", "green", 6, 6)
        initFish("small", "green", 7, 6)
    } else if (level == 22) {
        game.showLongText("Level " + level, DialogLayout.Top)
        tiles.setTilemap(tiles.createTilemap(hex`0a0008000100000101010100000101000000000000000001000100010101010001000001000102020100010000010000000001000100000100010101010001000100000000000000000101000001010101000001`, img`
            . . . . . . . . . . 
            . . . . . . . . . . 
            . . . . . . . . . . 
            . . . . . . . . . . 
            . . . . . . . . . . 
            . . . . . . . . . . 
            . . . . . . . . . . 
            . . . . . . . . . . 
            `, [myTiles.transparency16,sprites.builtin.coral0,myTiles.tile2], TileScale.Sixteen))
        scene.centerCameraAt(80, 64)
        initFish("small", "purple", 1, 0)
        initFish("small", "blue", 2, 0)
        initFish("small", "blue", 1, 1)
        initFish("small", "blue", 1, 6)
        initFish("small", "purple", 1, 7)
        initFish("small", "blue", 2, 7)
        initFish("small", "blue", 7, 0)
        initFish("big", "blue", 8, 0)
        initFish("small", "blue", 8, 1)
        initFish("small", "blue", 7, 7)
        initFish("small", "purple", 8, 7)
        initFish("small", "blue", 8, 6)
        initFish("small", "blue", 3, 4)
        initFish("big", "red", 5, 4)
    } else if (level == 23) {
        game.showLongText("Level " + level, DialogLayout.Top)
        tiles.setTilemap(tiles.createTilemap(hex`0b00080000010000000000000001000001000000000000000100000100000000000000010000010000000000000001000101000000000000000101010000000000000000000101000000000000000000010100000000000000000001`, img`
            . . . . . . . . . . . 
            . . . . . . . . . . . 
            . . . . . . . . . . . 
            . . . . . . . . . . . 
            . . . . . . . . . . . 
            . . . . . . . . . . . 
            . . . . . . . . . . . 
            . . . . . . . . . . . 
            `, [myTiles.transparency16,sprites.builtin.coral0], TileScale.Sixteen))
        scene.centerCameraAt(88, 60)
        for (let index = 0; index <= 2; index++) {
            initFish("big", "red", 2 + index, 0)
            initFish("small", "red", 6 + index, 0)
            initFish("big", "yellow", 2 + index, 2)
            initFish("small", "yellow", 6 + index, 2)
            initFish("big", "blue", 2 + index, 4)
            initFish("small", "blue", 6 + index, 4)
        }
        initFish("small", "purple", 2, 6)
        initFish("small", "orange", 5, 6)
        initFish("small", "green", 8, 6)
    } else if (level == 24) {
        game.showLongText("Level " + level, DialogLayout.Top)
        tiles.setTilemap(tiles.createTilemap(hex`0a0008000000000000000000000000000000000000000000000004040404040400000000040000000004000000000400000000040000000004000000000400000000040000000004000000000102020202030000`, img`
            . . . . . . . . . . 
            . . . . . . . . . . 
            . . . . . . . . . . 
            . . . . . . . . . . 
            . . . . . . . . . . 
            . . . . . . . . . . 
            . . . . . . . . . . 
            . . . . . . . . . . 
            `, [myTiles.transparency16,sprites.builtin.oceanSand1,sprites.builtin.oceanSand2,sprites.builtin.oceanSand3,sprites.builtin.coral0], TileScale.Sixteen))
        initFish("big", "red", 3, 3)
        initFish("small", "orange", 4, 3)
        initFish("big", "yellow", 6, 3)
        initFish("small", "green", 3, 5)
        initFish("small", "green", 4, 5)
        initFish("small", "red", 3, 6)
        initFish("big", "blue", 4, 6)
        initFish("small", "blue", 5, 6)
        initFish("big", "yellow", 6, 6)
    } else if (level == 25) {
        game.showLongText("Level " + level, DialogLayout.Top)
        tiles.setTilemap(tiles.createTilemap(hex`0b00080000000000000000000000000000000404040404000000000000040000000400000000000004000000040000000000000400000004000000000000040000000400000000000004000000040000000000000102020203000000`, img`
            . . . . . . . . . . . 
            . . . . . . . . . . . 
            . . . . . . . . . . . 
            . . . . . . . . . . . 
            . . . . . . . . . . . 
            . . . . . . . . . . . 
            . . . . . . . . . . . 
            . . . . . . . . . . . 
            `, [myTiles.transparency16,sprites.builtin.oceanSand1,sprites.builtin.oceanSand2,sprites.builtin.oceanSand3,sprites.builtin.coral0], TileScale.Sixteen))
        scene.centerCameraAt(88, 60)
        initFish("big", "blue", 4, 2)
        initFish("big", "blue", 6, 2)
        initFish("big", "red", 4, 3)
        initFish("big", "red", 5, 3)
        initFish("big", "yellow", 6, 3)
        initFish("small", "purple", 5, 4)
        initFish("small", "red", 4, 5)
        initFish("small", "red", 6, 5)
        initFish("small", "blue", 4, 6)
        initFish("small", "green", 5, 6)
        initFish("small", "blue", 6, 6)
    } else if (level == 26) {
        game.showLongText("Level " + level, DialogLayout.Top)
        tiles.setTilemap(tiles.createTilemap(hex`0a0008000000000000000000000000000000000000000000000004040404040400000000040000000004000000000400000000040000000004000000000400000000040000000004000000000102020202030000`, img`
            . . . . . . . . . . 
            . . . . . . . . . . 
            . . . . . . . . . . 
            . . . . . . . . . . 
            . . . . . . . . . . 
            . . . . . . . . . . 
            . . . . . . . . . . 
            . . . . . . . . . . 
            `, [myTiles.transparency16,sprites.builtin.oceanSand1,sprites.builtin.oceanSand2,sprites.builtin.oceanSand3,sprites.builtin.coral0], TileScale.Sixteen))
        initFish("small", "green", 3, 3)
        initFish("big", "yellow", 4, 3)
        initFish("big", "blue", 5, 3)
        initFish("small", "green", 6, 3)
        initFish("big", "yellow", 3, 4)
        initFish("big", "blue", 4, 4)
        initFish("big", "yellow", 5, 4)
        initFish("big", "blue", 6, 4)
        for (let index = 0; index <= 3; index++) {
            initFish("big", "blue", 3 + index, 5)
            initFish("small", "green", 3 + index, 6)
        }
    } else if (level == 27) {
        game.showLongText("Level " + level, DialogLayout.Top)
        tiles.setTilemap(tiles.createTilemap(hex`0a0008000000000000000000000000000000000000000000000004040404040400000000040000000004000000000400000000040000000004000000000400000000040000000004000000000102020202030000`, img`
            . . . . . . . . . . 
            . . . . . . . . . . 
            . . . . . . . . . . 
            . . . . . . . . . . 
            . . . . . . . . . . 
            . . . . . . . . . . 
            . . . . . . . . . . 
            . . . . . . . . . . 
            `, [myTiles.transparency16,sprites.builtin.oceanSand1,sprites.builtin.oceanSand2,sprites.builtin.oceanSand3,sprites.builtin.coral0], TileScale.Sixteen))
        initFish("big", "blue", 3, 3)
        initFish("big", "red", 4, 3)
        initFish("big", "yellow", 6, 3)
        initFish("small", "orange", 5, 4)
        initFish("small", "red", 3, 5)
        initFish("small", "blue", 4, 5)
        initFish("small", "yellow", 5, 5)
        initFish("small", "orange", 6, 5)
        initFish("small", "blue", 3, 6)
        initFish("small", "red", 4, 6)
        initFish("small", "yellow", 5, 6)
        initFish("small", "orange", 6, 6)
    } else if (level == 28) {
        game.showLongText("Level " + level, DialogLayout.Top)
        tiles.setTilemap(tiles.createTilemap(hex`0a0008000000000000000000000000000404040404040000000004000000000400000000040000000404000000000404040000040000000004000000040400000000040000000004000000000102020202030000`, img`
            . . . . . . . . . . 
            . . . . . . . . . . 
            . . . . . . . . . . 
            . . . . . . . . . . 
            . . . . . . . . . . 
            . . . . . . . . . . 
            . . . . . . . . . . 
            . . . . . . . . . . 
            `, [myTiles.transparency16,sprites.builtin.oceanSand1,sprites.builtin.oceanSand2,sprites.builtin.oceanSand3,sprites.builtin.coral0], TileScale.Sixteen))
        initFish("small", "blue", 3, 2)
        initFish("small", "yellow", 4, 2)
        initFish("big", "green", 5, 2)
        initFish("small", "yellow", 3, 3)
        initFish("small", "blue", 4, 3)
        initFish("big", "red", 5, 3)
        initFish("small", "red", 3, 5)
        initFish("small", "green", 4, 5)
        initFish("big", "yellow", 5, 5)
        initFish("small", "green", 3, 6)
        initFish("small", "red", 4, 6)
        initFish("big", "blue", 5, 6)
    } else if (level == 29) {
        game.showLongText("Level " + level, DialogLayout.Top)
        tiles.setTilemap(tiles.createTilemap(hex`0a0008000000000000000000000000000000000000000000000004040404040400000000040000000004000000000400000000040000000004000000000400000000040000000004000000000102020202030000`, img`
            . . . . . . . . . . 
            . . . . . . . . . . 
            . . . . . . . . . . 
            . . . . . . . . . . 
            . . . . . . . . . . 
            . . . . . . . . . . 
            . . . . . . . . . . 
            . . . . . . . . . . 
            `, [myTiles.transparency16,sprites.builtin.oceanSand1,sprites.builtin.oceanSand2,sprites.builtin.oceanSand3,sprites.builtin.coral0], TileScale.Sixteen))
        for (let index = 0; index <= 3; index++) {
            initFish("big", "yellow", 3 + index, 3)
            initFish("small", "orange", 3 + index, 5)
            initFish("small", "yellow", 3 + index, 6)
        }
        initFish("big", "red", 6, 4)
    } else if (level == 30) {
        game.showLongText("Level " + level, DialogLayout.Top)
        tiles.setTilemap(tiles.createTilemap(hex`0b00080000000000000000000000000000000000000000000000000004040404040404000000000400000000000400000000040000000000040000000004000000000004000000000400000000000400000000010202020202030000`, img`
            . . . . . . . . . . . 
            . . . . . . . . . . . 
            . . . . . . . . . . . 
            . . . . . . . . . . . 
            . . . . . . . . . . . 
            . . . . . . . . . . . 
            . . . . . . . . . . . 
            . . . . . . . . . . . 
            `, [myTiles.transparency16,sprites.builtin.oceanSand1,sprites.builtin.oceanSand2,sprites.builtin.oceanSand3,sprites.builtin.coral0], TileScale.Sixteen))
        scene.centerCameraAt(88, 60)
        for (let col = 0; col <= 1; col++) {
            for (let row = 0; row <= 1; row++) {
                initFish("big", "yellow", 3 + col * 3, 3 + row * 3)
            }
        }
        initFish("big", "blue", 4, 4)
        initFish("big", "blue", 5, 4)
        initFish("big", "red", 3, 5)
        initFish("big", "red", 6, 5)
        initFish("small", "orange", 7, 3)
        initFish("small", "green", 7, 4)
        initFish("small", "purple", 7, 5)
        initFish("small", "green", 7, 6)
    } else if (level == 31) {
        game.showLongText("Level " + level, DialogLayout.Top)
        tiles.setTilemap(tiles.createTilemap(hex`0a0008000000000000000000000000000000000000000000000004040404040400000000040000000004000000000400000000040000000004000000000400000000040000000004000000000102020202030000`, img`
            . . . . . . . . . . 
            . . . . . . . . . . 
            . . . . . . . . . . 
            . . . . . . . . . . 
            . . . . . . . . . . 
            . . . . . . . . . . 
            . . . . . . . . . . 
            . . . . . . . . . . 
            `, [myTiles.transparency16,sprites.builtin.oceanSand1,sprites.builtin.oceanSand2,sprites.builtin.oceanSand3,sprites.builtin.coral0], TileScale.Sixteen))
        for (let col = 0; col <= 1; col++) {
            for (let row = 0; row <= 1; row++) {
                initFish("small", "yellow", 3 + col * 3, 3 + row * 3)
            }
        }
        initFish("big", "blue", 4, 3)
        initFish("big", "blue", 5, 3)
        initFish("big", "blue", 4, 4)
        initFish("big", "blue", 6, 4)
        initFish("big", "yellow", 3, 4)
        initFish("big", "yellow", 5, 4)
        initFish("small", "green", 4, 6)
        initFish("small", "blue", 5, 6)
    } else if (level == 32) {
        game.showLongText("Level " + level, DialogLayout.Top)
        tiles.setTilemap(tiles.createTilemap(hex`0b00080000000000000000000000000000040404040404040000000004000000000004000000000400000000000400000000040000000000040000000004000000000004000000000400000000000400000000010202020202030000`, img`
            . . . . . . . . . . . 
            . . . . . . . . . . . 
            . . . . . . . . . . . 
            . . . . . . . . . . . 
            . . . . . . . . . . . 
            . . . . . . . . . . . 
            . . . . . . . . . . . 
            . . . . . . . . . . . 
            `, [myTiles.transparency16,sprites.builtin.oceanSand1,sprites.builtin.oceanSand2,sprites.builtin.oceanSand3,sprites.builtin.coral0], TileScale.Sixteen))
        scene.centerCameraAt(88, 60)
        initFish("small", "orange", 3, 2)
        initFish("small", "red", 5, 2)
        initFish("small", "orange", 7, 2)
        initFish("small", "yellow", 4, 3)
        initFish("small", "yellow", 6, 3)
        initFish("small", "red", 3, 4)
        initFish("big", "yellow", 4, 4)
        initFish("big", "red", 5, 4)
        initFish("big", "yellow", 6, 4)
        initFish("small", "red", 7, 4)
        initFish("small", "yellow", 4, 5)
        initFish("small", "yellow", 6, 5)
        initFish("big", "yellow", 5, 5)
        initFish("small", "orange", 3, 6)
        initFish("small", "red", 5, 6)
        initFish("small", "orange", 7, 6)
    } else if (level == 33) {
        game.showLongText("Level " + level + "                Final Level!", DialogLayout.Top)
        tiles.setTilemap(tiles.createTilemap(hex`0a0008000000000000000000000000000000000000000000000004040404040400000000040000000004000000000400000000040000000004000000000400000000040000000004000000000102020202030000`, img`
            . . . . . . . . . . 
            . . . . . . . . . . 
            . . . . . . . . . . 
            . . . . . . . . . . 
            . . . . . . . . . . 
            . . . . . . . . . . 
            . . . . . . . . . . 
            . . . . . . . . . . 
            `, [myTiles.transparency16,sprites.builtin.oceanSand1,sprites.builtin.oceanSand2,sprites.builtin.oceanSand3,sprites.builtin.coral0], TileScale.Sixteen))
        for (let index = 0; index <= 3; index++) {
            initFish("small", "yellow", 3 + index, 3)
            initFish("small", "red", 3 + index, 4)
            initFish("small", "blue", 3 + index, 5)
        }
        initFish("big", "yellow", 3, 6)
        initFish("big", "red", 4, 6)
        initFish("big", "blue", 5, 6)
    } else {
        game.over(true, effects.bubbles)
    }
}
controller.up.onEvent(ControllerButtonEvent.Pressed, function () {
    checkMove(0, -1)
})
controller.B.onEvent(ControllerButtonEvent.Pressed, function () {
    restartLevel()
})
function skipLevel () {
    if (level < levelTotal) {
        level += 1
        restartLevel()
    }
}
function restartLevel () {
    for (let value of sprites.allOfKind(SpriteKind.Player)) {
        value.destroy()
    }
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
    for (let value of sprites.allOfKind(SpriteKind.Food)) {
        value.destroy()
    }
    setLevel()
}
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
    skipLevel()
})
controller.right.onEvent(ControllerButtonEvent.Pressed, function () {
    checkMove(1, 0)
})
function checkMove (col: number, row: number) {
    for (let itemPlayer of sprites.allOfKind(SpriteKind.Player)) {
        move = true
        if (!(tiles.tileAtLocationEquals(grid.add(grid.getLocation(itemPlayer), col, row), myTiles.transparency16))) {
            if (tiles.tileAtLocationEquals(grid.add(grid.getLocation(itemPlayer), col, row), myTiles.tile2)) {
                itemPlayer.destroy()
                if (sprites.allOfKind(SpriteKind.Player).length == 0) {
                    game.showLongText("B to restart level", DialogLayout.Bottom)
                }
            } else {
                move = false
            }
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
    music.playTone(131, music.beat(BeatFraction.Quarter))
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Food, function (sprite, otherSprite) {
    otherSprite.destroy()
    if (sprites.allOfKind(SpriteKind.Food).length == 0) {
        music.playTone(523, music.beat(BeatFraction.Quarter))
        paused = true
        pause(500)
        for (let value of sprites.allOfKind(SpriteKind.Player)) {
            value.destroy()
        }
        level += 1
        setLevel()
    } else {
        music.playTone(262, music.beat(BeatFraction.Quarter))
    }
})
let move = false
let mySprite: Sprite = null
let paused = false
let levelTotal = 0
let level = 0
scene.setBackgroundColor(8)
game.setDialogFrame(img`
    9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 
    9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 
    9 9 6 6 6 6 6 6 6 6 6 6 6 9 9 
    9 9 6 6 6 6 6 6 6 6 6 6 6 9 9 
    9 9 6 6 6 6 6 6 6 6 6 6 6 9 9 
    9 9 6 6 6 6 6 6 6 6 6 6 6 9 9 
    9 9 6 6 6 6 6 6 6 6 6 6 6 9 9 
    9 9 6 6 6 6 6 6 6 6 6 6 6 9 9 
    9 9 6 6 6 6 6 6 6 6 6 6 6 9 9 
    9 9 6 6 6 6 6 6 6 6 6 6 6 9 9 
    9 9 6 6 6 6 6 6 6 6 6 6 6 9 9 
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
level = 1
levelTotal = 33
setLevel()
