function setLevel () {
    tiles.setTilemap(tilemap`level`)
    paused = false
    if (level == 1) {
        game.showLongText("Level " + level + "                Eat the little fish", DialogLayout.Top)
        tiles.setTilemap(tilemap`level_0`)
        initFish("small", "orange", 3, 4)
        initFish("big", "orange", 6, 3)
    } else if (level == 2) {
        game.showLongText("Level " + level + "                You move all the big fish", DialogLayout.Top)
        tiles.setTilemap(tilemap`level_1`)
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
        tiles.setTilemap(tilemap`level_2`)
        initFish("small", "yellow", 2, 2)
        initFish("small", "red", 1, 6)
        initFish("big", "red", 0, 2)
        initFish("big", "yellow", 2, 6)
    } else if (level == 4) {
        game.showLongText("Level " + level + "                Mix colors!", DialogLayout.Top)
        tiles.setTilemap(tilemap`level_3`)
        initFish("small", "green", 3, 6)
        initFish("big", "yellow", 6, 5)
        initFish("big", "blue", 8, 2)
    } else if (level == 5) {
        game.showLongText("Level " + level + "                Brown + any color = brown", DialogLayout.Top)
        tiles.setTilemap(tilemap`level_4`)
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
        tiles.setTilemap(tilemap`level_5`)
        initFish("small", "blue", 8, 1)
        initFish("small", "yellow", 8, 2)
        initFish("small", "green", 4, 6)
        initFish("small", "green", 5, 6)
        initFish("big", "blue", 1, 2)
        initFish("big", "yellow", 1, 1)
    } else if (level == 7) {
        game.showLongText("Level " + level, DialogLayout.Top)
        tiles.setTilemap(tilemap`level_6`)
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
        tiles.setTilemap(tilemap`level_7`)
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
        tiles.setTilemap(tilemap`level_8`)
        scene.centerCameraAt(88, 60)
        initFish("small", "green", 5, 3)
        initFish("small", "purple", 5, 6)
        initFish("big", "red", 3, 3)
        initFish("big", "yellow", 3, 6)
        initFish("big", "blue", 7, 3)
        initFish("big", "blue", 7, 6)
    } else if (level == 10) {
        game.showLongText("Level " + level, DialogLayout.Top)
        tiles.setTilemap(tilemap`level_9`)
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
        tiles.setTilemap(tilemap`level_10`)
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
        tiles.setTilemap(tilemap`level_11`)
        scene.centerCameraAt(88, 60)
        initFish("big", "red", 3, 2)
        initFish("big", "yellow", 3, 3)
        initFish("big", "red", 3, 4)
        initFish("big", "yellow", 3, 5)
        initFish("small", "orange", 3, 6)
        initFish("small", "green", 4, 6)
        for (let index2 = 0; index2 <= 3; index2++) {
            initFish("big", "blue", 5, index2 + 2)
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
        tiles.setTilemap(tilemap`level_12`)
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
        tiles.setTilemap(tilemap`level_13`)
        scene.centerCameraAt(88, 64)
        initFish("small", "purple", 3, 2)
        initFish("big", "purple", 7, 2)
    } else if (level == 15) {
        game.showLongText("Level " + level, DialogLayout.Top)
        tiles.setTilemap(tilemap`level_14`)
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
        tiles.setTilemap(tilemap`level_15`)
        for (let index3 = 0; index3 <= 1; index3++) {
            initFish("big", "blue", 3, 3 + index3 * 3)
            initFish("small", "green", 4, 3 + index3 * 3)
            initFish("small", "green", 5, 3 + index3 * 3)
            initFish("big", "blue", 6, 3 + index3 * 3)
        }
        for (let index4 = 0; index4 <= 1; index4++) {
            initFish("big", "yellow", 3, index4 + 4)
            initFish("big", "yellow", 6, index4 + 4)
        }
    } else if (level == 17) {
        game.showLongText("Level " + level, DialogLayout.Top)
        tiles.setTilemap(tilemap`level_16`)
        scene.centerCameraAt(88, 60)
        for (let index5 = 0; index5 <= 1; index5++) {
            initFish("big", "red", 3 + index5 * 4, 4)
            initFish("small", "red", 3 + index5 * 4, 5)
            initFish("big", "blue", 3 + index5 * 4, 6)
        }
        for (let col = 0; col <= 1; col++) {
            for (let row = 0; row <= 2; row++) {
                initFish("small", "purple", 4 + col * 2, row + 4)
            }
        }
    } else if (level == 18) {
        game.showLongText("Level " + level, DialogLayout.Top)
        tiles.setTilemap(tilemap`level_17`)
        for (let col2 = 0; col2 <= 2; col2++) {
            for (let row2 = 0; row2 <= 1; row2++) {
                initFish("small", "red", col2, row2)
            }
        }
        for (let col3 = 0; col3 <= 2; col3++) {
            for (let row3 = 0; row3 <= 1; row3++) {
                initFish("small", "purple", col3 + 7, row3)
            }
        }
        for (let col4 = 0; col4 <= 2; col4++) {
            for (let row4 = 0; row4 <= 1; row4++) {
                initFish("small", "purple", col4, row4 + 5)
            }
        }
        for (let col5 = 0; col5 <= 2; col5++) {
            for (let row5 = 0; row5 <= 1; row5++) {
                initFish("small", "blue", col5 + 7, row5 + 5)
            }
        }
        initFish("big", "red", 3, 3)
        initFish("big", "blue", 6, 3)
    } else if (level == 19) {
        game.showLongText("Level " + level, DialogLayout.Top)
        tiles.setTilemap(tilemap`level_18`)
        scene.centerCameraAt(88, 60)
        initFish("small", "purple", 5, 3)
        initFish("small", "red", 1, 4)
        initFish("big", "red", 3, 4)
        initFish("big", "blue", 8, 3)
        initFish("small", "blue", 8, 5)
    } else if (level == 20) {
        game.showLongText("Level " + level, DialogLayout.Top)
        tiles.setTilemap(tilemap`level_19`)
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
        tiles.setTilemap(tilemap`level_20`)
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
        tiles.setTilemap(tilemap`level_21`)
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
        tiles.setTilemap(tilemap`level_22`)
        scene.centerCameraAt(88, 60)
        for (let index6 = 0; index6 <= 2; index6++) {
            initFish("big", "red", 2 + index6, 0)
            initFish("small", "red", 6 + index6, 0)
            initFish("big", "yellow", 2 + index6, 2)
            initFish("small", "yellow", 6 + index6, 2)
            initFish("big", "blue", 2 + index6, 4)
            initFish("small", "blue", 6 + index6, 4)
        }
        initFish("small", "purple", 2, 6)
        initFish("small", "orange", 5, 6)
        initFish("small", "green", 8, 6)
    } else if (level == 24) {
        game.showLongText("Level " + level, DialogLayout.Top)
        tiles.setTilemap(tilemap`level_23`)
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
        tiles.setTilemap(tilemap`level_24`)
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
        tiles.setTilemap(tilemap`level_25`)
        initFish("small", "green", 3, 3)
        initFish("big", "yellow", 4, 3)
        initFish("big", "blue", 5, 3)
        initFish("small", "green", 6, 3)
        initFish("big", "yellow", 3, 4)
        initFish("big", "blue", 4, 4)
        initFish("big", "yellow", 5, 4)
        initFish("big", "blue", 6, 4)
        for (let index7 = 0; index7 <= 3; index7++) {
            initFish("big", "blue", 3 + index7, 5)
            initFish("small", "green", 3 + index7, 6)
        }
    } else if (level == 27) {
        game.showLongText("Level " + level, DialogLayout.Top)
        tiles.setTilemap(tilemap`level_26`)
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
        tiles.setTilemap(tilemap`level_27`)
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
        tiles.setTilemap(tilemap`level_28`)
        for (let index8 = 0; index8 <= 3; index8++) {
            initFish("big", "yellow", 3 + index8, 3)
            initFish("small", "orange", 3 + index8, 5)
            initFish("small", "yellow", 3 + index8, 6)
        }
        initFish("big", "red", 6, 4)
    } else if (level == 30) {
        game.showLongText("Level " + level, DialogLayout.Top)
        tiles.setTilemap(tilemap`level_29`)
        scene.centerCameraAt(88, 60)
        for (let col6 = 0; col6 <= 1; col6++) {
            for (let row6 = 0; row6 <= 1; row6++) {
                initFish("big", "yellow", 3 + col6 * 3, 3 + row6 * 3)
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
        tiles.setTilemap(tilemap`level_30`)
        for (let col7 = 0; col7 <= 1; col7++) {
            for (let row7 = 0; row7 <= 1; row7++) {
                initFish("small", "yellow", 3 + col7 * 3, 3 + row7 * 3)
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
        tiles.setTilemap(tilemap`level_31`)
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
        tiles.setTilemap(tilemap`level_32`)
        for (let index9 = 0; index9 <= 3; index9++) {
            initFish("small", "yellow", 3 + index9, 3)
            initFish("small", "red", 3 + index9, 4)
            initFish("small", "blue", 3 + index9, 5)
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
    tiles.setTilemap(tilemap`level_33`)
    for (let value2 of sprites.allOfKind(SpriteKind.Food)) {
        value2.destroy()
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
function intro () {
    scene.setBackgroundImage(img`
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
        9999899999998999999989999999899999998999999989999999899999998999999989999999899999998999999989999999899999998999999989999999899999998999999989999999899999998999
        9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
        9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
        9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
        8999899989998999899989998999899989998999899989998999899989998999899989998999899989998999899989998999899989998999899989998999899989998999899989998999899989998999
        9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
        9999998999999989999999899999998999999989999999899999998999999989999999899999998999999989999999899999998999999989999999899999998999999989999999899999998999999989
        9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
        8999899989998999899989998999899989998999899989998999899989998999899989998999899989998999899989998999899989998999899989998999899989998999899989998999899989998999
        9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
        9989998999899989998999899989998999899989998999899989998999899989998999899989998999899989998999899989998999899989998999899989998999899989998999899989998999899989
        9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
        8989898989898989898989898989898989898989898989898989898989898989898989898989898989898989898989898989898989898989898989898989898989898989898989898989898989898989
        9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
        9989998999899989998999899989998999899989998999899989998999899989998999899989998999899989998999899989998999899989998999899989998999899989998999899989998999899989
        9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
        8989898989898989898989898989898989898989898989898989898989898989898989898989898989898989898989898989898989898989898989898989898989898989898989898989898989898989
        9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
        8989898989898989898989898989898989898989898989898989898989898989898989898989898989898989898989898989898989898989898989898989898989898989898989898989898989898989
        9899999998999999989999999899999998999999989999999899999998999999989999999899999998999999989999999899999998999999989999999899999998999999989999999899999998999999
        8989898989898989898989898989898989898989898989898989898989898989898989898989898989898989898989898989898989898989898989898989898989898989898989898989898989898989
        9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
        8989898989898989898989898989898989898989898989898989898989898989898989898989898989898989898989898989898989898989898989898989898989898989898989898989898989898989
        9899989998999899989998999899989998999899989998999899989998999899989998999899989998999899989998999899989998999899989998999899989998999899989998999899989998999899
        8989898989898989898989898989898989898989898989898989898989898989898989898989898989898989898989898989898989898989898989898989898989898989898989898989898989898989
        9998999999989999999899999998999999989999999899999998999999989999999899999998999999989999999899999998999999989999999899999998999999989999999899999998999999989999
        8989898989898989898989898989898989898989898989898989898989898989898989898989898989898989898989898989898989898989898989898989898989898989898989898989898989898989
        9899989998999899989998999899989998999899989998999899989998999899989998999899989998999899989998999899989998999899989998999899989998999899989998999899989998999899
        8989898989898989898989898989898989898989898989898989898989898989898989898989898989898989898989898989898989898989898989898989898989898989898989898989898989898989
        9998999899989998999899989998999899989998999899989998999899989998999899989998999899989998999899989998999899989998999899989998999899989998999899989998999899989998
        8989898989898989898989898989898989898989898989898989898989898989898989898989898989898989898989898989898989898989898989898989898989898989898989898989898989898989
        9899989898999898989998989899989898999898989998989899989898999898989998989899989898999898989998989899989898999898989998989899989898999898989998989899989898999898
        8989898989898989898989898989898989898989898989898989898989898989898989898989898989898989898989898989898989898989898989898989898989898989898989898989898989898989
        9898999898989998989899989898999898989998989899989898999898989998989899989898999898989998989899989898999898989998989899989898999898989998989899989898999898989998
        8989898989898989898989898989898989898989898989898989898989898989898989898989898989898989898989898989898989898989898989898989898989898989898989898989898989898989
        9898989898989898989898989898989898989898989898989898989898989898989898989898989898989898989898989898989898989898989898989898989898989898989898989898989898989898
        8989898989898989898989898989898989898989898989898989898989898989898989898989898989898989898989898989898989898989898989898989898989898989898989898989898989898989
        9898989898989898989898989898989898989898989898989898989898989898989898989898989898989898989898989898989898989898989898989898989898989898989898989898989898989898
        8989898989898989898989898989898989898989898989898989898989898989898989898989898989898989898989898989898989898989898989898989898989898989898989898989898989898989
        9898989898989898989898989898989898989898989898989898989898989898989898989898989898989898989898989898989898989898989898989898989898989898989898989898989898989898
        8989888989898889898988898989888989898889898988898989888989898889898988898989888989898889898988898989888989898889898988898989888989898889898988898989888989898889
        9898989898989898989898989898989898989898989898989898989898989898989898989898989898989898989898989898989898989898989898989898989898989898989898989898989898989898
        8989898989898989898989898989898989898989898989898989898989898989898989898989898989898989898989898989898989898989898989898989898989898989898989898989898989898989
        9898989898989898989898989898989898989898989898989898989898989898989898989898989898989898989898989898989898989898989898989898989898989898989898989898989898989898
        8889888988898889888988898889888988898889888988898889888988898889888988898889888988898889888988898889888988898889888988898889888988898889888988898889888988898889
        9898989898989898989898989898989898989898989898989898989898989898989898989898989898989898989898989898989898989898989898989898989898989898989898989898989898989898
        8989898889898988898989888989898889898988898989888989898889898988898989888989898889898988898989888989898889898988898989888989898889898988898989888989898889898988
        9898989898989898989898989898989898989898989898989898989898989898989898989898989898989898989898989898989898989898989898989898989898989898989898989898989898989898
        8889888988898889888988898889888988898889888988898889888988898889888988898889888988898889888988898889888988898889888988898889888988898889888988898889888988898889
        9898989898989898989898989898989898989898989898989898989898989898989898989898989898989898989898989898989898989898989898989898989898989898989898989898989898989898
        8988898889888988898889888988898889888988898889888988898889888988898889888988898889888988898889888988898889888988898889888988898889888988898889888988898889888988
        9898989898989898989898989898989898989898989898989898989898989898989898989898989898989898989898989898989898989898989898989898989898989898989898989898989898989898
        8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
        9898989898989898989898989898989898989898989898989898989898989898989898989898989898989898989898989898989898989898989898989898989898989898989898989898989898989898
        8988888889888888898888888988888889888888898888888988888889888888898888888988888889888888898888888988888889888888898888888988888889888888898888888988888889888888
        9898989898989898989898989898989898989898989898989898989898989898989898989898989898989898989898989898989898989898989898989898989898989898989898989898989898989898
        8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
        9898989898989898989898989898989898989898989898989898989898989898989898989898989898989898989898989898989898989898989898989898989898989898989898989898989898989898
        8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
        8898989888989898889898988898989888989898889898988898989888989898889898988898989888989898889898988898989888989898889898988898989888989898889898988898989888989898
        8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
        9898989898989898989898989898989898989898989898989898989898989898989898989898989898989898989898989898989898989898989898989898989898989898989898989898989898989898
        8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
        8898889888988898889888988898889888988898889888988898889888988898889888988898889888988898889888988898889888988898889888988898889888988898889888988898889888988898
        8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
        9888988898889888988898889888988898889888988898889888988898889888988898889888988898889888988898889888988898889888988898889888988898889888988898889888988898889888
        8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
        8898889888988898889888988898889888988898889888988898889888988898889888988898889888988898889888988898889888988898889888988898889888988898889888988898889888988898
        8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
        9888988898889888988898889888988898889888988898889888988898889888988898889888988898889888988898889888988898889888988898889888988898889888988898889888988898889888
        8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
        8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
        8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
        8888988888889888888898888888988888889888888898888888988888889888888898888888988888889888888898888888988888889888888898888888988888889888888898888888988888889888
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
        8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
        8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
        8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
        8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
        8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
        8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
        8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
        8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
        `)
    introAnim = [
    img`
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
        9999899999998999999989999999899999998999999989999999899999998999999989999999899999998999999989999999899999998999999989999999899999998999999989999999899999998999
        9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
        9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
        9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
        8999899989998999899989998999899989998999899989998999899989998999899989998999899989998999899989998999899989998999899989998999899989998999899989998999899989998999
        9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
        9999998999999989999999899999998999999989999999899999998999999989999999899999998999999989999999899999998999999989999999899999998999999989999999899999998999999989
        9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
        8999899989998999899989998999899989998999899989998999899989998999899989998999899989998999899989998999899989998999899989998999899989998999899989998999899989998999
        99999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999ffffffffffffffff9999999999999999
        99899989998999899989998999899989998999899989998999899989998999899989998999899989998999899989998999899989998999899989998999899989ffffffffffffffff9989998999899989
        99999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999ffffffffffffffff9999999999999999
        89898989898989898989898989898989898989898989898989898989898989898989898989898989898989898989898989898989898989898989898989898989ffffffffffffffff8989898989898989
        999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999ffffffff5555555544444444ffff999999999999
        998999899989998999899989998999899989998999899989998999899989998999899989998999899989998999899989998999899989998999899989ffffffff5555555544444444ffff998999899989
        999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999ffffffff5555555544444444ffff999999999999
        898989898989898989898989898989898989898989898989898989898989898989898989898989898989898989898989898989898989898989898989ffffffff5555555544444444ffff898989898989
        99999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999ffffffffffffffffffffffff4444ffff999999999999
        89898989898989898989898989898989898989898989898989898989898989898989898989898989898989898989898989898989898989898989ffffffffffffffffffffffff4444ffff898989898989
        98999999989999999899999998999999989999999899999998999999989999999899999998999999989999999899999998999999989999999899ffffffffffffffffffffffff4444ffff999998999999
        89898989898989898989898989898989898989898989898989898989898989898989898989898989898989898989898989898989898989898989ffffffffffffffffffffffff4444ffff898989898989
        9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999ffffffff55555555444444442222ffffffff9999ffffffff
        8989898989898989898989898989898989898989898989898989898989898989898989898989898989898989898989898989898989898989ffffffff55555555444444442222ffffffff8989ffffffff
        9899989998999899989998999899989998999899989998999899989998999899989998999899989998999899989998999899989998999899ffffffff55555555444444442222ffffffff9899ffffffff
        8989898989898989898989898989898989898989898989898989898989898989898989898989898989898989898989898989898989898989ffffffff55555555444444442222ffffffff8989ffffffff
        9998999999989999999899999998999999989999ffffffffffff99999998999999989999999899999998999999989999999899999998ffff11115555444444444444444444442222ffffffff5555ffff
        8989898989898989898989898989898989898989ffffffffffff89898989898989898989898989898989898989898989898989898989ffff11115555444444444444444444442222ffffffff5555ffff
        9899989998999899989998999899989998999899ffffffffffff98999899989998999899989998999899989998999899989998999899ffff11115555444444444444444444442222ffffffff5555ffff
        8989898989898989898989898989898989898989ffffffffffff89898989898989898989898989898989898989898989898989898989ffff11115555444444444444444444442222ffffffff5555ffff
        999899989998999899989998ffffffffffffffff11114444ffff9998999899989998999899989998999899989998999899989998ffff1111444444444444444444444444444444444444ffff4444ffff
        898989898989898989898989ffffffffffffffff11114444ffff8989898989898989898989898989898989898989898989898989ffff1111444444444444444444444444444444444444ffff4444ffff
        989998989899989898999898ffffffffffffffff11114444ffff9898989998989899989898999898989998989899989898999898ffff1111444444444444444444444444444444444444ffff4444ffff
        898989898989898989898989ffffffffffffffff11114444ffff8989898989898989898989898989898989898989898989898989ffff1111444444444444444444444444444444444444ffff4444ffff
        98989998989899989898ffff1111444444445555ffff4444ffff99989898ffffffff99989898999898989998989899989898ffff1111444444444444444444444444444444444444444444444444ffff
        89898989898989898989ffff1111444444445555ffff4444ffff89898989ffffffff89898989898989898989898989898989ffff1111444444444444444444444444444444444444444444444444ffff
        98989898989898989898ffff1111444444445555ffff4444ffff98989898ffffffff98989898989898989898989898989898ffff1111444444444444444444444444444444444444444444444444ffff
        89898989898989898989ffff1111444444445555ffff4444ffff89898989ffffffff89898989898989898989898989898989ffff1111444444444444444444444444444444444444444444444444ffff
        9898989898989898ffff111144444444444444445555ffffffff9898ffff1111ffff9898989898989898989898989898ffff444444444444ffff555544444444ffffffff444444444444ffff2222ffff
        8989898989898989ffff111144444444444444445555ffffffff8989ffff1111ffff8989898989898989898989898989ffff444444444444ffff555544444444ffffffff444444444444ffff2222ffff
        9898989898989898ffff111144444444444444445555ffffffff9898ffff1111ffff9898989898989898989898989898ffff444444444444ffff555544444444ffffffff444444444444ffff2222ffff
        8989888989898889ffff111144444444444444445555ffffffff8889ffff1111ffff8889898988898989888989898889ffff444444444444ffff555544444444ffffffff444444444444ffff2222ffff
        9898989898989898ffff11114444ffff44444444222255555555ffff11114444ffff9898989898989898989898989898ffff444444444444ffff55554444ffff5555ffff444444444444ffff2222ffff
        8989898989898989ffff11114444ffff44444444222255555555ffff11114444ffff8989898989898989898989898989ffff444444444444ffff55554444ffff5555ffff444444444444ffff2222ffff
        9898989898989898ffff11114444ffff44444444222255555555ffff11114444ffff9898989898989898989898989898ffff444444444444ffff55554444ffff5555ffff444444444444ffff2222ffff
        8889888988898889ffff11114444ffff44444444222255555555ffff11114444ffff8889888988898889888988898889ffff444444444444ffff55554444ffff5555ffff444444444444ffff2222ffff
        9898989898989898ffff5555444444444444444422224444444444444444ffff98989898989898989898989898989898ffff44444444444455555555444444444444ffff444444444444ffffffffffff
        8989898889898988ffff5555444444444444444422224444444444444444ffff89898988898989888989898889898988ffff44444444444455555555444444444444ffff444444444444ffffffffffff
        9898989898989898ffff5555444444444444444422224444444444444444ffff98989898989898989898989898989898ffff44444444444455555555444444444444ffff444444444444ffffffffffff
        8889888988898889ffff5555444444444444444422224444444444444444ffff88898889888988898889888988898889ffff44444444444455555555444444444444ffff444444444444ffffffffffff
        9898989898989898ffff55554444444444442222222244444444ffff22224444ffff98989898989898989898989898989898ffff44444444444444444444ffffffff444444444444ffffffff98989898
        8988898889888988ffff55554444444444442222222244444444ffff22224444ffff89888988898889888988898889888988ffff44444444444444444444ffffffff444444444444ffffffff89888988
        9898989898989898ffff55554444444444442222222244444444ffff22224444ffff98989898989898989898989898989898ffff44444444444444444444ffffffff444444444444ffffffff98989898
        8888888888888888ffff55554444444444442222222244444444ffff22224444ffff88888888888888888888888888888888ffff44444444444444444444ffffffff444444444444ffffffff88888888
        98989898989898989898ffffffffffffffffffffffffffffffff9898ffffffffffff989898989898989898989898989898989898ffffffff4444444444444444444444444444ffffffff989898989898
        89888888898888888988ffffffffffffffffffffffffffffffff8888ffffffffffff888889888888898888888988888889888888ffffffff4444444444444444444444444444ffffffff888889888888
        98989898989898989898ffffffffffffffffffffffffffffffff9898ffffffffffff989898989898989898989898989898989898ffffffff4444444444444444444444444444ffffffff989898989898
        88888888888888888888ffffffffffffffffffffffffffffffff8888ffffffffffff888888888888888888888888888888888888ffffffff4444444444444444444444444444ffffffff888888888888
        9898989898989898989898989898989898989898989898989898989898989898989898989898989898989898989898989898989898989898ffffffff4444444444444444ffff22222222ffff98989898
        8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888ffffffff4444444444444444ffff22222222ffff88888888
        8898989888989898889898988898989888989898889898988898989888989898889898988898989888989898889898988898989888989898ffffffff4444444444444444ffff22222222ffff88989898
        8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888ffffffff4444444444444444ffff22222222ffff88888888
        989898989898989898989898989898989898989898989898989898989898989898989898989898989898989898989898989898989898989898989898ffffffffffffffff222222224444ffff98989898
        888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888ffffffffffffffff222222224444ffff88888888
        889888988898889888988898889888988898889888988898889888988898889888988898889888988898889888988898889888988898889888988898ffffffffffffffff222222224444ffff88988898
        888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888ffffffffffffffff222222224444ffff88888888
        9888988898889888988898889888988898889888988898889888988898889888988898889888988898889888988898889888988898889888988898889888988898889888ffffffffffff988898889888
        8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888ffffffffffff888888888888
        8898889888988898889888988898889888988898889888988898889888988898889888988898889888988898889888988898889888988898889888988898889888988898ffffffffffff889888988898
        8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888ffffffffffff888888888888
        9888988898889888988898889888988898889888988898889888988898889888988898889888988898889888988898889888988898889888988898889888988898889888988898889888988898889888
        8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
        8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
        8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
        8888988888889888888898888888988888889888888898888888988888889888888898888888988888889888888898888888988888889888888898888888988888889888888898888888988888889888
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
        8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
        8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
        8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
        8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
        8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
        8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
        8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
        8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
        `,
    img`
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
        9999899999998999999989999999899999998999999989999999899999998999999989999999899999998999999989999999899999998999999989999999899999998999999989999999899999998999
        9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
        9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
        9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
        8999899989998999899989998999899989998999899989998999899989998999899989998999899989998999899989998999899989998999899989998999899989998999899989998999899989998999
        9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
        9999998999999989999999899999998999999989999999899999998999999989999999899999998999999989999999899999998999999989999999899999998999999989999999899999998999999989
        9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
        8999899989998999899989998999899989998999899989998999899989998999899989998999899989998999899989998999899989998999899989998999899989998999899989998999899989998999
        9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999ffffffffffffffff99999999999999999999
        9989998999899989998999899989998999899989998999899989998999899989998999899989998999899989998999899989998999899989998999899989ffffffffffffffff99899989998999899989
        9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999ffffffffffffffff99999999999999999999
        8989898989898989898989898989898989898989898989898989898989898989898989898989898989898989898989898989898989898989898989898989ffffffffffffffff89898989898989898989
        99999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999ffffffff5555555544444444ffff9999999999999999
        99899989998999899989998999899989998999899989998999899989998999899989998999899989998999899989998999899989998999899989ffffffff5555555544444444ffff9989998999899989
        99999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999ffffffff5555555544444444ffff9999999999999999
        89898989898989898989898989898989898989898989898989898989898989898989898989898989898989898989898989898989898989898989ffffffff5555555544444444ffff8989898989898989
        9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999ffffffffffffffffffffffff4444ffff9999999999999999
        8989898989898989898989898989898989898989898989898989898989898989898989898989898989898989898989898989898989898989ffffffffffffffffffffffff4444ffff8989898989898989
        9899999998999999989999999899999998999999989999999899999998999999989999999899999998999999989999999899999998999999ffffffffffffffffffffffff4444ffff9899999998999999
        8989898989898989898989898989898989898989898989898989898989898989898989898989898989898989898989898989898989898989ffffffffffffffffffffffff4444ffff8989898989898989
        999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999ffffffff55555555444444442222ffffffff9999ffffffff9999
        898989898989898989898989898989898989898989898989898989898989898989898989898989898989898989898989898989898989ffffffff55555555444444442222ffffffff8989ffffffff8989
        989998999899989998999899989998999899989998999899989998999899989998999899989998999899989998999899989998999899ffffffff55555555444444442222ffffffff9899ffffffff9899
        898989898989898989898989898989898989898989898989898989898989898989898989898989898989898989898989898989898989ffffffff55555555444444442222ffffffff8989ffffffff8989
        9998999999989999999899999998999999989999ffffffffffff9999999899999998999999989999999899999998999999989999ffff11115555444444444444444444442222ffffffff5555ffff9999
        8989898989898989898989898989898989898989ffffffffffff8989898989898989898989898989898989898989898989898989ffff11115555444444444444444444442222ffffffff5555ffff8989
        9899989998999899989998999899989998999899ffffffffffff9899989998999899989998999899989998999899989998999899ffff11115555444444444444444444442222ffffffff5555ffff9899
        8989898989898989898989898989898989898989ffffffffffff8989898989898989898989898989898989898989898989898989ffff11115555444444444444444444442222ffffffff5555ffff8989
        999899989998999899989998ffffffffffffffff11114444ffff999899989998999899989998999899989998999899989998ffff1111444444444444444444444444444444444444ffff4444ffff9998
        898989898989898989898989ffffffffffffffff11114444ffff898989898989898989898989898989898989898989898989ffff1111444444444444444444444444444444444444ffff4444ffff8989
        989998989899989898999898ffffffffffffffff11114444ffff989898999898989998989899989898999898989998989899ffff1111444444444444444444444444444444444444ffff4444ffff9898
        898989898989898989898989ffffffffffffffff11114444ffff898989898989898989898989898989898989898989898989ffff1111444444444444444444444444444444444444ffff4444ffff8989
        98989998989899989898ffff1111444444445555ffff4444ffff99989898ffffffff9998989899989898999898989998ffff1111444444444444444444444444444444444444444444444444ffff9998
        89898989898989898989ffff1111444444445555ffff4444ffff89898989ffffffff8989898989898989898989898989ffff1111444444444444444444444444444444444444444444444444ffff8989
        98989898989898989898ffff1111444444445555ffff4444ffff98989898ffffffff9898989898989898989898989898ffff1111444444444444444444444444444444444444444444444444ffff9898
        89898989898989898989ffff1111444444445555ffff4444ffff89898989ffffffff8989898989898989898989898989ffff1111444444444444444444444444444444444444444444444444ffff8989
        9898989898989898ffff111144444444444444445555ffffffff9898ffff1111ffff989898989898989898989898ffff444444444444ffff555544444444ffffffff444444444444ffff2222ffff9898
        8989898989898989ffff111144444444444444445555ffffffff8989ffff1111ffff898989898989898989898989ffff444444444444ffff555544444444ffffffff444444444444ffff2222ffff8989
        9898989898989898ffff111144444444444444445555ffffffff9898ffff1111ffff989898989898989898989898ffff444444444444ffff555544444444ffffffff444444444444ffff2222ffff9898
        8989888989898889ffff111144444444444444445555ffffffff8889ffff1111ffff888989898889898988898989ffff444444444444ffff555544444444ffffffff444444444444ffff2222ffff8889
        9898989898989898ffff11114444ffff44444444222255555555ffff11114444ffff989898989898989898989898ffff444444444444ffff55554444ffff5555ffff444444444444ffff2222ffff9898
        8989898989898989ffff11114444ffff44444444222255555555ffff11114444ffff898989898989898989898989ffff444444444444ffff55554444ffff5555ffff444444444444ffff2222ffff8989
        9898989898989898ffff11114444ffff44444444222255555555ffff11114444ffff989898989898989898989898ffff444444444444ffff55554444ffff5555ffff444444444444ffff2222ffff9898
        8889888988898889ffff11114444ffff44444444222255555555ffff11114444ffff888988898889888988898889ffff444444444444ffff55554444ffff5555ffff444444444444ffff2222ffff8889
        9898989898989898ffff5555444444444444444422224444444444444444ffff9898989898989898989898989898ffff44444444444455555555444444444444ffff444444444444ffffffffffff9898
        8989898889898988ffff5555444444444444444422224444444444444444ffff8989898889898988898989888989ffff44444444444455555555444444444444ffff444444444444ffffffffffff8988
        9898989898989898ffff5555444444444444444422224444444444444444ffff9898989898989898989898989898ffff44444444444455555555444444444444ffff444444444444ffffffffffff9898
        8889888988898889ffff5555444444444444444422224444444444444444ffff8889888988898889888988898889ffff44444444444455555555444444444444ffff444444444444ffffffffffff8889
        9898989898989898ffff55554444444444442222222244444444ffff22224444ffff9898989898989898989898989898ffff44444444444444444444ffffffff444444444444ffffffff989898989898
        8988898889888988ffff55554444444444442222222244444444ffff22224444ffff8988898889888988898889888988ffff44444444444444444444ffffffff444444444444ffffffff898889888988
        9898989898989898ffff55554444444444442222222244444444ffff22224444ffff9898989898989898989898989898ffff44444444444444444444ffffffff444444444444ffffffff989898989898
        8888888888888888ffff55554444444444442222222244444444ffff22224444ffff8888888888888888888888888888ffff44444444444444444444ffffffff444444444444ffffffff888888888888
        98989898989898989898ffffffffffffffffffffffffffffffff9898ffffffffffff98989898989898989898989898989898ffffffff4444444444444444444444444444ffffffff9898989898989898
        89888888898888888988ffffffffffffffffffffffffffffffff8888ffffffffffff88888988888889888888898888888988ffffffff4444444444444444444444444444ffffffff8988888889888888
        98989898989898989898ffffffffffffffffffffffffffffffff9898ffffffffffff98989898989898989898989898989898ffffffff4444444444444444444444444444ffffffff9898989898989898
        88888888888888888888ffffffffffffffffffffffffffffffff8888ffffffffffff88888888888888888888888888888888ffffffff4444444444444444444444444444ffffffff8888888888888888
        989898989898989898989898989898989898989898989898989898989898989898989898989898989898989898989898989898989898ffffffff4444444444444444ffff22222222ffff989898989898
        888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888ffffffff4444444444444444ffff22222222ffff888888888888
        889898988898989888989898889898988898989888989898889898988898989888989898889898988898989888989898889898988898ffffffff4444444444444444ffff22222222ffff989888989898
        888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888ffffffff4444444444444444ffff22222222ffff888888888888
        98989898989898989898989898989898989898989898989898989898989898989898989898989898989898989898989898989898989898989898ffffffffffffffff222222224444ffff989898989898
        88888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888ffffffffffffffff222222224444ffff888888888888
        88988898889888988898889888988898889888988898889888988898889888988898889888988898889888988898889888988898889888988898ffffffffffffffff222222224444ffff889888988898
        88888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888ffffffffffffffff222222224444ffff888888888888
        988898889888988898889888988898889888988898889888988898889888988898889888988898889888988898889888988898889888988898889888988898889888ffffffffffff9888988898889888
        888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888ffffffffffff8888888888888888
        889888988898889888988898889888988898889888988898889888988898889888988898889888988898889888988898889888988898889888988898889888988898ffffffffffff8898889888988898
        888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888ffffffffffff8888888888888888
        9888988898889888988898889888988898889888988898889888988898889888988898889888988898889888988898889888988898889888988898889888988898889888988898889888988898889888
        8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
        8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
        8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
        8888988888889888888898888888988888889888888898888888988888889888888898888888988888889888888898888888988888889888888898888888988888889888888898888888988888889888
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
        8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
        8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
        8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
        8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
        8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
        8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
        8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
        8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
        `,
    img`
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
        9999899999998999999989999999899999998999999989999999899999998999999989999999899999998999999989999999899999998999999989999999899999998999999989999999899999998999
        9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
        9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
        9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
        8999899989998999899989998999899989998999899989998999899989998999899989998999899989998999899989998999899989998999899989998999899989998999899989998999899989998999
        9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
        9999998999999989999999899999998999999989999999899999998999999989999999899999998999999989999999899999998999999989999999899999998999999989999999899999998999999989
        9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
        8999899989998999899989998999899989998999899989998999899989998999899989998999899989998999899989998999899989998999899989998999899989998999899989998999899989998999
        999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999ffffffffffffffff999999999999999999999999
        998999899989998999899989998999899989998999899989998999899989998999899989998999899989998999899989998999899989998999899989ffffffffffffffff998999899989998999899989
        999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999ffffffffffffffff999999999999999999999999
        898989898989898989898989898989898989898989898989898989898989898989898989898989898989898989898989898989898989898989898989ffffffffffffffff898989898989898989898989
        9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999ffffffff5555555544444444ffff99999999999999999999
        9989998999899989998999899989998999899989998999899989998999899989998999899989998999899989998999899989998999899989ffffffff5555555544444444ffff99899989998999899989
        9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999ffffffff5555555544444444ffff99999999999999999999
        8989898989898989898989898989898989898989898989898989898989898989898989898989898989898989898989898989898989898989ffffffff5555555544444444ffff89898989898989898989
        999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999ffffffffffffffffffffffff4444ffff99999999999999999999
        898989898989898989898989898989898989898989898989898989898989898989898989898989898989898989898989898989898989ffffffffffffffffffffffff4444ffff89898989898989898989
        989999999899999998999999989999999899999998999999989999999899999998999999989999999899999998999999989999999899ffffffffffffffffffffffff4444ffff99999899999998999999
        898989898989898989898989898989898989898989898989898989898989898989898989898989898989898989898989898989898989ffffffffffffffffffffffff4444ffff89898989898989898989
        99999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999ffffffff55555555444444442222ffffffff9999ffffffff99999999
        89898989898989898989898989898989898989898989898989898989898989898989898989898989898989898989898989898989ffffffff55555555444444442222ffffffff8989ffffffff89898989
        98999899989998999899989998999899989998999899989998999899989998999899989998999899989998999899989998999899ffffffff55555555444444442222ffffffff9899ffffffff98999899
        89898989898989898989898989898989898989898989898989898989898989898989898989898989898989898989898989898989ffffffff55555555444444442222ffffffff8989ffffffff89898989
        9998999999989999999899999998999999989999ffffffffffff999999989999999899999998999999989999999899999998ffff11115555444444444444444444442222ffffffff5555ffff99989999
        8989898989898989898989898989898989898989ffffffffffff898989898989898989898989898989898989898989898989ffff11115555444444444444444444442222ffffffff5555ffff89898989
        9899989998999899989998999899989998999899ffffffffffff989998999899989998999899989998999899989998999899ffff11115555444444444444444444442222ffffffff5555ffff98999899
        8989898989898989898989898989898989898989ffffffffffff898989898989898989898989898989898989898989898989ffff11115555444444444444444444442222ffffffff5555ffff89898989
        999899989998999899989998ffffffffffffffff11114444ffff99989998999899989998999899989998999899989998ffff1111444444444444444444444444444444444444ffff4444ffff99989998
        898989898989898989898989ffffffffffffffff11114444ffff89898989898989898989898989898989898989898989ffff1111444444444444444444444444444444444444ffff4444ffff89898989
        989998989899989898999898ffffffffffffffff11114444ffff98989899989898999898989998989899989898999898ffff1111444444444444444444444444444444444444ffff4444ffff98999898
        898989898989898989898989ffffffffffffffff11114444ffff89898989898989898989898989898989898989898989ffff1111444444444444444444444444444444444444ffff4444ffff89898989
        98989998989899989898ffff1111444444445555ffff4444ffff99989898ffffffff999898989998989899989898ffff1111444444444444444444444444444444444444444444444444ffff98989998
        89898989898989898989ffff1111444444445555ffff4444ffff89898989ffffffff898989898989898989898989ffff1111444444444444444444444444444444444444444444444444ffff89898989
        98989898989898989898ffff1111444444445555ffff4444ffff98989898ffffffff989898989898989898989898ffff1111444444444444444444444444444444444444444444444444ffff98989898
        89898989898989898989ffff1111444444445555ffff4444ffff89898989ffffffff898989898989898989898989ffff1111444444444444444444444444444444444444444444444444ffff89898989
        9898989898989898ffff111144444444444444445555ffffffff9898ffff1111ffff98989898989898989898ffff444444444444ffff555544444444ffffffff444444444444ffff2222ffff98989898
        8989898989898989ffff111144444444444444445555ffffffff8989ffff1111ffff89898989898989898989ffff444444444444ffff555544444444ffffffff444444444444ffff2222ffff89898989
        9898989898989898ffff111144444444444444445555ffffffff9898ffff1111ffff98989898989898989898ffff444444444444ffff555544444444ffffffff444444444444ffff2222ffff98989898
        8989888989898889ffff111144444444444444445555ffffffff8889ffff1111ffff88898989888989898889ffff444444444444ffff555544444444ffffffff444444444444ffff2222ffff89898889
        9898989898989898ffff11114444ffff44444444222255555555ffff11114444ffff98989898989898989898ffff444444444444ffff55554444ffff5555ffff444444444444ffff2222ffff98989898
        8989898989898989ffff11114444ffff44444444222255555555ffff11114444ffff89898989898989898989ffff444444444444ffff55554444ffff5555ffff444444444444ffff2222ffff89898989
        9898989898989898ffff11114444ffff44444444222255555555ffff11114444ffff98989898989898989898ffff444444444444ffff55554444ffff5555ffff444444444444ffff2222ffff98989898
        8889888988898889ffff11114444ffff44444444222255555555ffff11114444ffff88898889888988898889ffff444444444444ffff55554444ffff5555ffff444444444444ffff2222ffff88898889
        9898989898989898ffff5555444444444444444422224444444444444444ffff989898989898989898989898ffff44444444444455555555444444444444ffff444444444444ffffffffffff98989898
        8989898889898988ffff5555444444444444444422224444444444444444ffff898989888989898889898988ffff44444444444455555555444444444444ffff444444444444ffffffffffff89898988
        9898989898989898ffff5555444444444444444422224444444444444444ffff989898989898989898989898ffff44444444444455555555444444444444ffff444444444444ffffffffffff98989898
        8889888988898889ffff5555444444444444444422224444444444444444ffff888988898889888988898889ffff44444444444455555555444444444444ffff444444444444ffffffffffff88898889
        9898989898989898ffff55554444444444442222222244444444ffff22224444ffff989898989898989898989898ffff44444444444444444444ffffffff444444444444ffffffff9898989898989898
        8988898889888988ffff55554444444444442222222244444444ffff22224444ffff898889888988898889888988ffff44444444444444444444ffffffff444444444444ffffffff8988898889888988
        9898989898989898ffff55554444444444442222222244444444ffff22224444ffff989898989898989898989898ffff44444444444444444444ffffffff444444444444ffffffff9898989898989898
        8888888888888888ffff55554444444444442222222244444444ffff22224444ffff888888888888888888888888ffff44444444444444444444ffffffff444444444444ffffffff8888888888888888
        98989898989898989898ffffffffffffffffffffffffffffffff9898ffffffffffff9898989898989898989898989898ffffffff4444444444444444444444444444ffffffff98989898989898989898
        89888888898888888988ffffffffffffffffffffffffffffffff8888ffffffffffff8888898888888988888889888888ffffffff4444444444444444444444444444ffffffff88888988888889888888
        98989898989898989898ffffffffffffffffffffffffffffffff9898ffffffffffff9898989898989898989898989898ffffffff4444444444444444444444444444ffffffff98989898989898989898
        88888888888888888888ffffffffffffffffffffffffffffffff8888ffffffffffff8888888888888888888888888888ffffffff4444444444444444444444444444ffffffff88888888888888888888
        98989898989898989898989898989898989898989898989898989898989898989898989898989898989898989898989898989898ffffffff4444444444444444ffff22222222ffff9898989898989898
        88888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888ffffffff4444444444444444ffff22222222ffff8888888888888888
        88989898889898988898989888989898889898988898989888989898889898988898989888989898889898988898989888989898ffffffff4444444444444444ffff22222222ffff8898989888989898
        88888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888ffffffff4444444444444444ffff22222222ffff8888888888888888
        9898989898989898989898989898989898989898989898989898989898989898989898989898989898989898989898989898989898989898ffffffffffffffff222222224444ffff9898989898989898
        8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888ffffffffffffffff222222224444ffff8888888888888888
        8898889888988898889888988898889888988898889888988898889888988898889888988898889888988898889888988898889888988898ffffffffffffffff222222224444ffff8898889888988898
        8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888ffffffffffffffff222222224444ffff8888888888888888
        98889888988898889888988898889888988898889888988898889888988898889888988898889888988898889888988898889888988898889888988898889888ffffffffffff98889888988898889888
        88888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888ffffffffffff88888888888888888888
        88988898889888988898889888988898889888988898889888988898889888988898889888988898889888988898889888988898889888988898889888988898ffffffffffff88988898889888988898
        88888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888ffffffffffff88888888888888888888
        9888988898889888988898889888988898889888988898889888988898889888988898889888988898889888988898889888988898889888988898889888988898889888988898889888988898889888
        8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
        8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
        8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
        8888988888889888888898888888988888889888888898888888988888889888888898888888988888889888888898888888988888889888888898888888988888889888888898888888988888889888
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
        8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
        8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
        8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
        8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
        8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
        8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
        8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
        8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
        `,
    img`
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
        9999899999998999999989999999899999998999999989999999899999998999999989999999899999998999999989999999899999998999999989999999899999998999999989999999899999998999
        9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
        9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
        9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
        8999899989998999899989998999899989998999899989998999899989998999899989998999899989998999899989998999899989998999899989998999899989998999899989998999899989998999
        9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
        9999998999999989999999899999998999999989999999899999998999999989999999899999998999999989999999899999998999999989999999899999998999999989999999899999998999999989
        9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
        8999899989998999899989998999899989998999899989998999899989998999899989998999899989998999899989998999899989998999899989998999899989998999899989998999899989998999
        99999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999ffffffffffffffff9999999999999999999999999999
        99899989998999899989998999899989998999899989998999899989998999899989998999899989998999899989998999899989998999899989ffffffffffffffff9989998999899989998999899989
        99999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999ffffffffffffffff9999999999999999999999999999
        89898989898989898989898989898989898989898989898989898989898989898989898989898989898989898989898989898989898989898989ffffffffffffffff8989898989898989898989898989
        999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999ffffffff5555555544444444ffff999999999999999999999999
        998999899989998999899989998999899989998999899989998999899989998999899989998999899989998999899989998999899989ffffffff5555555544444444ffff998999899989998999899989
        999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999ffffffff5555555544444444ffff999999999999999999999999
        898989898989898989898989898989898989898989898989898989898989898989898989898989898989898989898989898989898989ffffffff5555555544444444ffff898989898989898989898989
        99999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999ffffffffffffffffffffffff4444ffff999999999999999999999999
        89898989898989898989898989898989898989898989898989898989898989898989898989898989898989898989898989898989ffffffffffffffffffffffff4444ffff898989898989898989898989
        98999999989999999899999998999999989999999899999998999999989999999899999998999999989999999899999998999999ffffffffffffffffffffffff4444ffff989999999899999998999999
        89898989898989898989898989898989898989898989898989898989898989898989898989898989898989898989898989898989ffffffffffffffffffffffff4444ffff898989898989898989898989
        9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999ffffffff55555555444444442222ffffffff9999ffffffff999999999999
        8989898989898989898989898989898989898989898989898989898989898989898989898989898989898989898989898989ffffffff55555555444444442222ffffffff8989ffffffff898989898989
        9899989998999899989998999899989998999899989998999899989998999899989998999899989998999899989998999899ffffffff55555555444444442222ffffffff9899ffffffff989998999899
        8989898989898989898989898989898989898989898989898989898989898989898989898989898989898989898989898989ffffffff55555555444444442222ffffffff8989ffffffff898989898989
        9998999999989999999899999998999999989999ffffffffffff99999998999999989999999899999998999999989999ffff11115555444444444444444444442222ffffffff5555ffff999999989999
        8989898989898989898989898989898989898989ffffffffffff89898989898989898989898989898989898989898989ffff11115555444444444444444444442222ffffffff5555ffff898989898989
        9899989998999899989998999899989998999899ffffffffffff98999899989998999899989998999899989998999899ffff11115555444444444444444444442222ffffffff5555ffff989998999899
        8989898989898989898989898989898989898989ffffffffffff89898989898989898989898989898989898989898989ffff11115555444444444444444444442222ffffffff5555ffff898989898989
        999899989998999899989998ffffffffffffffff11114444ffff9998999899989998999899989998999899989998ffff1111444444444444444444444444444444444444ffff4444ffff999899989998
        898989898989898989898989ffffffffffffffff11114444ffff8989898989898989898989898989898989898989ffff1111444444444444444444444444444444444444ffff4444ffff898989898989
        989998989899989898999898ffffffffffffffff11114444ffff9898989998989899989898999898989998989899ffff1111444444444444444444444444444444444444ffff4444ffff989898999898
        898989898989898989898989ffffffffffffffff11114444ffff8989898989898989898989898989898989898989ffff1111444444444444444444444444444444444444ffff4444ffff898989898989
        98989998989899989898ffff1111444444445555ffff4444ffff99989898ffffffff99989898999898989998ffff1111444444444444444444444444444444444444444444444444ffff999898989998
        89898989898989898989ffff1111444444445555ffff4444ffff89898989ffffffff89898989898989898989ffff1111444444444444444444444444444444444444444444444444ffff898989898989
        98989898989898989898ffff1111444444445555ffff4444ffff98989898ffffffff98989898989898989898ffff1111444444444444444444444444444444444444444444444444ffff989898989898
        89898989898989898989ffff1111444444445555ffff4444ffff89898989ffffffff89898989898989898989ffff1111444444444444444444444444444444444444444444444444ffff898989898989
        9898989898989898ffff111144444444444444445555ffffffff9898ffff1111ffff9898989898989898ffff444444444444ffff555544444444ffffffff444444444444ffff2222ffff989898989898
        8989898989898989ffff111144444444444444445555ffffffff8989ffff1111ffff8989898989898989ffff444444444444ffff555544444444ffffffff444444444444ffff2222ffff898989898989
        9898989898989898ffff111144444444444444445555ffffffff9898ffff1111ffff9898989898989898ffff444444444444ffff555544444444ffffffff444444444444ffff2222ffff989898989898
        8989888989898889ffff111144444444444444445555ffffffff8889ffff1111ffff8889898988898989ffff444444444444ffff555544444444ffffffff444444444444ffff2222ffff888989898889
        9898989898989898ffff11114444ffff44444444222255555555ffff11114444ffff9898989898989898ffff444444444444ffff55554444ffff5555ffff444444444444ffff2222ffff989898989898
        8989898989898989ffff11114444ffff44444444222255555555ffff11114444ffff8989898989898989ffff444444444444ffff55554444ffff5555ffff444444444444ffff2222ffff898989898989
        9898989898989898ffff11114444ffff44444444222255555555ffff11114444ffff9898989898989898ffff444444444444ffff55554444ffff5555ffff444444444444ffff2222ffff989898989898
        8889888988898889ffff11114444ffff44444444222255555555ffff11114444ffff8889888988898889ffff444444444444ffff55554444ffff5555ffff444444444444ffff2222ffff888988898889
        9898989898989898ffff5555444444444444444422224444444444444444ffff98989898989898989898ffff44444444444455555555444444444444ffff444444444444ffffffffffff989898989898
        8989898889898988ffff5555444444444444444422224444444444444444ffff89898988898989888989ffff44444444444455555555444444444444ffff444444444444ffffffffffff898889898988
        9898989898989898ffff5555444444444444444422224444444444444444ffff98989898989898989898ffff44444444444455555555444444444444ffff444444444444ffffffffffff989898989898
        8889888988898889ffff5555444444444444444422224444444444444444ffff88898889888988898889ffff44444444444455555555444444444444ffff444444444444ffffffffffff888988898889
        9898989898989898ffff55554444444444442222222244444444ffff22224444ffff98989898989898989898ffff44444444444444444444ffffffff444444444444ffffffff98989898989898989898
        8988898889888988ffff55554444444444442222222244444444ffff22224444ffff89888988898889888988ffff44444444444444444444ffffffff444444444444ffffffff89888988898889888988
        9898989898989898ffff55554444444444442222222244444444ffff22224444ffff98989898989898989898ffff44444444444444444444ffffffff444444444444ffffffff98989898989898989898
        8888888888888888ffff55554444444444442222222244444444ffff22224444ffff88888888888888888888ffff44444444444444444444ffffffff444444444444ffffffff88888888888888888888
        98989898989898989898ffffffffffffffffffffffffffffffff9898ffffffffffff989898989898989898989898ffffffff4444444444444444444444444444ffffffff989898989898989898989898
        89888888898888888988ffffffffffffffffffffffffffffffff8888ffffffffffff888889888888898888888988ffffffff4444444444444444444444444444ffffffff898888888988888889888888
        98989898989898989898ffffffffffffffffffffffffffffffff9898ffffffffffff989898989898989898989898ffffffff4444444444444444444444444444ffffffff989898989898989898989898
        88888888888888888888ffffffffffffffffffffffffffffffff8888ffffffffffff888888888888888888888888ffffffff4444444444444444444444444444ffffffff888888888888888888888888
        9898989898989898989898989898989898989898989898989898989898989898989898989898989898989898989898989898ffffffff4444444444444444ffff22222222ffff98989898989898989898
        8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888ffffffff4444444444444444ffff22222222ffff88888888888888888888
        8898989888989898889898988898989888989898889898988898989888989898889898988898989888989898889898988898ffffffff4444444444444444ffff22222222ffff98988898989888989898
        8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888ffffffff4444444444444444ffff22222222ffff88888888888888888888
        989898989898989898989898989898989898989898989898989898989898989898989898989898989898989898989898989898989898ffffffffffffffff222222224444ffff98989898989898989898
        888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888ffffffffffffffff222222224444ffff88888888888888888888
        889888988898889888988898889888988898889888988898889888988898889888988898889888988898889888988898889888988898ffffffffffffffff222222224444ffff88988898889888988898
        888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888ffffffffffffffff222222224444ffff88888888888888888888
        9888988898889888988898889888988898889888988898889888988898889888988898889888988898889888988898889888988898889888988898889888ffffffffffff988898889888988898889888
        8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888ffffffffffff888888888888888888888888
        8898889888988898889888988898889888988898889888988898889888988898889888988898889888988898889888988898889888988898889888988898ffffffffffff889888988898889888988898
        8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888ffffffffffff888888888888888888888888
        9888988898889888988898889888988898889888988898889888988898889888988898889888988898889888988898889888988898889888988898889888988898889888988898889888988898889888
        8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
        8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
        8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
        8888988888889888888898888888988888889888888898888888988888889888888898888888988888889888888898888888988888889888888898888888988888889888888898888888988888889888
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
        8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
        8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
        8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
        8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
        8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
        8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
        8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
        8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
        `,
    img`
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
        9999899999998999999989999999899999998999999989999999899999998999999989999999899999998999999989999999899999998999999989999999899999998999999989999999899999998999
        9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
        9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
        9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
        8999899989998999899989998999899989998999899989998999899989998999899989998999899989998999899989998999899989998999899989998999899989998999899989998999899989998999
        9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
        9999998999999989999999899999998999999989999999899999998999999989999999899999998999999989999999899999998999999989999999899999998999999989999999899999998999999989
        9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
        8999899989998999899989998999899989998999899989998999899989998999899989998999899989998999899989998999899989998999899989998999899989998999899989998999899989998999
        9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999ffffffffffffffff99999999999999999999999999999999
        9989998999899989998999899989998999899989998999899989998999899989998999899989998999899989998999899989998999899989ffffffffffffffff99899989998999899989998999899989
        9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999ffffffffffffffff99999999999999999999999999999999
        8989898989898989898989898989898989898989898989898989898989898989898989898989898989898989898989898989898989898989ffffffffffffffff89898989898989898989898989898989
        99999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999ffffffff5555555544444444ffff9999999999999999999999999999
        99899989998999899989998999899989998999899989998999899989998999899989998999899989998999899989998999899989ffffffff5555555544444444ffff9989998999899989998999899989
        99999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999ffffffff5555555544444444ffff9999999999999999999999999999
        89898989898989898989898989898989898989898989898989898989898989898989898989898989898989898989898989898989ffffffff5555555544444444ffff8989898989898989898989898989
        9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999ffffffffffffffffffffffff4444ffff9999999999999999999999999999
        8989898989898989898989898989898989898989898989898989898989898989898989898989898989898989898989898989ffffffffffffffffffffffff4444ffff8989898989898989898989898989
        9899999998999999989999999899999998999999989999999899999998999999989999999899999998999999989999999899ffffffffffffffffffffffff4444ffff9999989999999899999998999999
        8989898989898989898989898989898989898989898989898989898989898989898989898989898989898989898989898989ffffffffffffffffffffffff4444ffff8989898989898989898989898989
        999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999ffffffff55555555444444442222ffffffff9999ffffffff9999999999999999
        898989898989898989898989898989898989898989898989898989898989898989898989898989898989898989898989ffffffff55555555444444442222ffffffff8989ffffffff8989898989898989
        989998999899989998999899989998999899989998999899989998999899989998999899989998999899989998999899ffffffff55555555444444442222ffffffff9899ffffffff9899989998999899
        898989898989898989898989898989898989898989898989898989898989898989898989898989898989898989898989ffffffff55555555444444442222ffffffff8989ffffffff8989898989898989
        9998999999989999999899999998999999989999ffffffffffff9999999899999998999999989999999899999998ffff11115555444444444444444444442222ffffffff5555ffff9998999999989999
        8989898989898989898989898989898989898989ffffffffffff8989898989898989898989898989898989898989ffff11115555444444444444444444442222ffffffff5555ffff8989898989898989
        9899989998999899989998999899989998999899ffffffffffff9899989998999899989998999899989998999899ffff11115555444444444444444444442222ffffffff5555ffff9899989998999899
        8989898989898989898989898989898989898989ffffffffffff8989898989898989898989898989898989898989ffff11115555444444444444444444442222ffffffff5555ffff8989898989898989
        999899989998999899989998ffffffffffffffff11114444ffff999899989998999899989998999899989998ffff1111444444444444444444444444444444444444ffff4444ffff9998999899989998
        898989898989898989898989ffffffffffffffff11114444ffff898989898989898989898989898989898989ffff1111444444444444444444444444444444444444ffff4444ffff8989898989898989
        989998989899989898999898ffffffffffffffff11114444ffff989898999898989998989899989898999898ffff1111444444444444444444444444444444444444ffff4444ffff9899989898999898
        898989898989898989898989ffffffffffffffff11114444ffff898989898989898989898989898989898989ffff1111444444444444444444444444444444444444ffff4444ffff8989898989898989
        98989998989899989898ffff1111444444445555ffff4444ffff99989898ffffffff9998989899989898ffff1111444444444444444444444444444444444444444444444444ffff9898999898989998
        89898989898989898989ffff1111444444445555ffff4444ffff89898989ffffffff8989898989898989ffff1111444444444444444444444444444444444444444444444444ffff8989898989898989
        98989898989898989898ffff1111444444445555ffff4444ffff98989898ffffffff9898989898989898ffff1111444444444444444444444444444444444444444444444444ffff9898989898989898
        89898989898989898989ffff1111444444445555ffff4444ffff89898989ffffffff8989898989898989ffff1111444444444444444444444444444444444444444444444444ffff8989898989898989
        9898989898989898ffff111144444444444444445555ffffffff9898ffff1111ffff989898989898ffff444444444444ffff555544444444ffffffff444444444444ffff2222ffff9898989898989898
        8989898989898989ffff111144444444444444445555ffffffff8989ffff1111ffff898989898989ffff444444444444ffff555544444444ffffffff444444444444ffff2222ffff8989898989898989
        9898989898989898ffff111144444444444444445555ffffffff9898ffff1111ffff989898989898ffff444444444444ffff555544444444ffffffff444444444444ffff2222ffff9898989898989898
        8989888989898889ffff111144444444444444445555ffffffff8889ffff1111ffff888989898889ffff444444444444ffff555544444444ffffffff444444444444ffff2222ffff8989888989898889
        9898989898989898ffff11114444ffff44444444222255555555ffff11114444ffff989898989898ffff444444444444ffff55554444ffff5555ffff444444444444ffff2222ffff9898989898989898
        8989898989898989ffff11114444ffff44444444222255555555ffff11114444ffff898989898989ffff444444444444ffff55554444ffff5555ffff444444444444ffff2222ffff8989898989898989
        9898989898989898ffff11114444ffff44444444222255555555ffff11114444ffff989898989898ffff444444444444ffff55554444ffff5555ffff444444444444ffff2222ffff9898989898989898
        8889888988898889ffff11114444ffff44444444222255555555ffff11114444ffff888988898889ffff444444444444ffff55554444ffff5555ffff444444444444ffff2222ffff8889888988898889
        9898989898989898ffff5555444444444444444422224444444444444444ffff9898989898989898ffff44444444444455555555444444444444ffff444444444444ffffffffffff9898989898989898
        8989898889898988ffff5555444444444444444422224444444444444444ffff8989898889898988ffff44444444444455555555444444444444ffff444444444444ffffffffffff8989898889898988
        9898989898989898ffff5555444444444444444422224444444444444444ffff9898989898989898ffff44444444444455555555444444444444ffff444444444444ffffffffffff9898989898989898
        8889888988898889ffff5555444444444444444422224444444444444444ffff8889888988898889ffff44444444444455555555444444444444ffff444444444444ffffffffffff8889888988898889
        9898989898989898ffff55554444444444442222222244444444ffff22224444ffff9898989898989898ffff44444444444444444444ffffffff444444444444ffffffff989898989898989898989898
        8988898889888988ffff55554444444444442222222244444444ffff22224444ffff8988898889888988ffff44444444444444444444ffffffff444444444444ffffffff898889888988898889888988
        9898989898989898ffff55554444444444442222222244444444ffff22224444ffff9898989898989898ffff44444444444444444444ffffffff444444444444ffffffff989898989898989898989898
        8888888888888888ffff55554444444444442222222244444444ffff22224444ffff8888888888888888ffff44444444444444444444ffffffff444444444444ffffffff888888888888888888888888
        98989898989898989898ffffffffffffffffffffffffffffffff9898ffffffffffff98989898989898989898ffffffff4444444444444444444444444444ffffffff9898989898989898989898989898
        89888888898888888988ffffffffffffffffffffffffffffffff8888ffffffffffff88888988888889888888ffffffff4444444444444444444444444444ffffffff8888898888888988888889888888
        98989898989898989898ffffffffffffffffffffffffffffffff9898ffffffffffff98989898989898989898ffffffff4444444444444444444444444444ffffffff9898989898989898989898989898
        88888888888888888888ffffffffffffffffffffffffffffffff8888ffffffffffff88888888888888888888ffffffff4444444444444444444444444444ffffffff8888888888888888888888888888
        989898989898989898989898989898989898989898989898989898989898989898989898989898989898989898989898ffffffff4444444444444444ffff22222222ffff989898989898989898989898
        888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888ffffffff4444444444444444ffff22222222ffff888888888888888888888888
        889898988898989888989898889898988898989888989898889898988898989888989898889898988898989888989898ffffffff4444444444444444ffff22222222ffff889898988898989888989898
        888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888ffffffff4444444444444444ffff22222222ffff888888888888888888888888
        98989898989898989898989898989898989898989898989898989898989898989898989898989898989898989898989898989898ffffffffffffffff222222224444ffff989898989898989898989898
        88888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888ffffffffffffffff222222224444ffff888888888888888888888888
        88988898889888988898889888988898889888988898889888988898889888988898889888988898889888988898889888988898ffffffffffffffff222222224444ffff889888988898889888988898
        88888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888ffffffffffffffff222222224444ffff888888888888888888888888
        988898889888988898889888988898889888988898889888988898889888988898889888988898889888988898889888988898889888988898889888ffffffffffff9888988898889888988898889888
        888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888ffffffffffff8888888888888888888888888888
        889888988898889888988898889888988898889888988898889888988898889888988898889888988898889888988898889888988898889888988898ffffffffffff8898889888988898889888988898
        888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888ffffffffffff8888888888888888888888888888
        9888988898889888988898889888988898889888988898889888988898889888988898889888988898889888988898889888988898889888988898889888988898889888988898889888988898889888
        8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
        8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
        8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
        8888988888889888888898888888988888889888888898888888988888889888888898888888988888889888888898888888988888889888888898888888988888889888888898888888988888889888
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
        8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
        8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
        8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
        8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
        8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
        8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
        8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
        8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
        `,
    img`
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
        9999899999998999999989999999899999998999999989999999899999998999999989999999899999998999999989999999899999998999999989999999899999998999999989999999899999998999
        9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
        9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
        9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
        8999899989998999899989998999899989998999899989998999899989998999899989998999899989998999899989998999899989998999899989998999899989998999899989998999899989998999
        9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
        9999998999999989999999899999998999999989999999899999998999999989999999899999998999999989999999899999998999999989999999899999998999999989999999899999998999999989
        9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
        8999899989998999899989998999899989998999899989998999899989998999899989998999899989998999899989998999899989998999899989998999899989998999899989998999899989998999
        999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999ffffffffffffffff999999999999999999999999999999999999
        998999899989998999899989998999899989998999899989998999899989998999899989998999899989998999899989998999899989ffffffffffffffff998999899989998999899989998999899989
        999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999ffffffffffffffff999999999999999999999999999999999999
        898989898989898989898989898989898989898989898989898989898989898989898989898989898989898989898989898989898989ffffffffffffffff898989898989898989898989898989898989
        9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999ffffffff5555555544444444ffff99999999999999999999999999999999
        9989998999899989998999899989998999899989998999899989998999899989998999899989998999899989998999899989ffffffff5555555544444444ffff99899989998999899989998999899989
        9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999ffffffff5555555544444444ffff99999999999999999999999999999999
        8989898989898989898989898989898989898989898989898989898989898989898989898989898989898989898989898989ffffffff5555555544444444ffff89898989898989898989898989898989
        999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999ffffffffffffffffffffffff4444ffff99999999999999999999999999999999
        898989898989898989898989898989898989898989898989898989898989898989898989898989898989898989898989ffffffffffffffffffffffff4444ffff89898989898989898989898989898989
        989999999899999998999999989999999899999998999999989999999899999998999999989999999899999998999999ffffffffffffffffffffffff4444ffff98999999989999999899999998999999
        898989898989898989898989898989898989898989898989898989898989898989898989898989898989898989898989ffffffffffffffffffffffff4444ffff89898989898989898989898989898989
        99999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999ffffffff55555555444444442222ffffffff9999ffffffff99999999999999999999
        89898989898989898989898989898989898989898989898989898989898989898989898989898989898989898989ffffffff55555555444444442222ffffffff8989ffffffff89898989898989898989
        98999899989998999899989998999899989998999899989998999899989998999899989998999899989998999899ffffffff55555555444444442222ffffffff9899ffffffff98999899989998999899
        89898989898989898989898989898989898989898989898989898989898989898989898989898989898989898989ffffffff55555555444444442222ffffffff8989ffffffff89898989898989898989
        9998999999989999999899999998999999989999ffffffffffff999999989999999899999998999999989999ffff11115555444444444444444444442222ffffffff5555ffff99999998999999989999
        8989898989898989898989898989898989898989ffffffffffff898989898989898989898989898989898989ffff11115555444444444444444444442222ffffffff5555ffff89898989898989898989
        9899989998999899989998999899989998999899ffffffffffff989998999899989998999899989998999899ffff11115555444444444444444444442222ffffffff5555ffff98999899989998999899
        8989898989898989898989898989898989898989ffffffffffff898989898989898989898989898989898989ffff11115555444444444444444444442222ffffffff5555ffff89898989898989898989
        999899989998999899989998ffffffffffffffff11114444ffff99989998999899989998999899989998ffff1111444444444444444444444444444444444444ffff4444ffff99989998999899989998
        898989898989898989898989ffffffffffffffff11114444ffff89898989898989898989898989898989ffff1111444444444444444444444444444444444444ffff4444ffff89898989898989898989
        989998989899989898999898ffffffffffffffff11114444ffff98989899989898999898989998989899ffff1111444444444444444444444444444444444444ffff4444ffff98989899989898999898
        898989898989898989898989ffffffffffffffff11114444ffff89898989898989898989898989898989ffff1111444444444444444444444444444444444444ffff4444ffff89898989898989898989
        98989998989899989898ffff1111444444445555ffff4444ffff99989898ffffffff999898989998ffff1111444444444444444444444444444444444444444444444444ffff99989898999898989998
        89898989898989898989ffff1111444444445555ffff4444ffff89898989ffffffff898989898989ffff1111444444444444444444444444444444444444444444444444ffff89898989898989898989
        98989898989898989898ffff1111444444445555ffff4444ffff98989898ffffffff989898989898ffff1111444444444444444444444444444444444444444444444444ffff98989898989898989898
        89898989898989898989ffff1111444444445555ffff4444ffff89898989ffffffff898989898989ffff1111444444444444444444444444444444444444444444444444ffff89898989898989898989
        9898989898989898ffff111144444444444444445555ffffffff9898ffff1111ffff98989898ffff444444444444ffff555544444444ffffffff444444444444ffff2222ffff98989898989898989898
        8989898989898989ffff111144444444444444445555ffffffff8989ffff1111ffff89898989ffff444444444444ffff555544444444ffffffff444444444444ffff2222ffff89898989898989898989
        9898989898989898ffff111144444444444444445555ffffffff9898ffff1111ffff98989898ffff444444444444ffff555544444444ffffffff444444444444ffff2222ffff98989898989898989898
        8989888989898889ffff111144444444444444445555ffffffff8889ffff1111ffff88898989ffff444444444444ffff555544444444ffffffff444444444444ffff2222ffff88898989888989898889
        9898989898989898ffff11114444ffff44444444222255555555ffff11114444ffff98989898ffff444444444444ffff55554444ffff5555ffff444444444444ffff2222ffff98989898989898989898
        8989898989898989ffff11114444ffff44444444222255555555ffff11114444ffff89898989ffff444444444444ffff55554444ffff5555ffff444444444444ffff2222ffff89898989898989898989
        9898989898989898ffff11114444ffff44444444222255555555ffff11114444ffff98989898ffff444444444444ffff55554444ffff5555ffff444444444444ffff2222ffff98989898989898989898
        8889888988898889ffff11114444ffff44444444222255555555ffff11114444ffff88898889ffff444444444444ffff55554444ffff5555ffff444444444444ffff2222ffff88898889888988898889
        9898989898989898ffff5555444444444444444422224444444444444444ffff989898989898ffff44444444444455555555444444444444ffff444444444444ffffffffffff98989898989898989898
        8989898889898988ffff5555444444444444444422224444444444444444ffff898989888989ffff44444444444455555555444444444444ffff444444444444ffffffffffff89888989898889898988
        9898989898989898ffff5555444444444444444422224444444444444444ffff989898989898ffff44444444444455555555444444444444ffff444444444444ffffffffffff98989898989898989898
        8889888988898889ffff5555444444444444444422224444444444444444ffff888988898889ffff44444444444455555555444444444444ffff444444444444ffffffffffff88898889888988898889
        9898989898989898ffff55554444444444442222222244444444ffff22224444ffff989898989898ffff44444444444444444444ffffffff444444444444ffffffff9898989898989898989898989898
        8988898889888988ffff55554444444444442222222244444444ffff22224444ffff898889888988ffff44444444444444444444ffffffff444444444444ffffffff8988898889888988898889888988
        9898989898989898ffff55554444444444442222222244444444ffff22224444ffff989898989898ffff44444444444444444444ffffffff444444444444ffffffff9898989898989898989898989898
        8888888888888888ffff55554444444444442222222244444444ffff22224444ffff888888888888ffff44444444444444444444ffffffff444444444444ffffffff8888888888888888888888888888
        98989898989898989898ffffffffffffffffffffffffffffffff9898ffffffffffff9898989898989898ffffffff4444444444444444444444444444ffffffff98989898989898989898989898989898
        89888888898888888988ffffffffffffffffffffffffffffffff8888ffffffffffff8888898888888988ffffffff4444444444444444444444444444ffffffff89888888898888888988888889888888
        98989898989898989898ffffffffffffffffffffffffffffffff9898ffffffffffff9898989898989898ffffffff4444444444444444444444444444ffffffff98989898989898989898989898989898
        88888888888888888888ffffffffffffffffffffffffffffffff8888ffffffffffff8888888888888888ffffffff4444444444444444444444444444ffffffff88888888888888888888888888888888
        98989898989898989898989898989898989898989898989898989898989898989898989898989898989898989898ffffffff4444444444444444ffff22222222ffff9898989898989898989898989898
        88888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888ffffffff4444444444444444ffff22222222ffff8888888888888888888888888888
        88989898889898988898989888989898889898988898989888989898889898988898989888989898889898988898ffffffff4444444444444444ffff22222222ffff9898889898988898989888989898
        88888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888ffffffff4444444444444444ffff22222222ffff8888888888888888888888888888
        9898989898989898989898989898989898989898989898989898989898989898989898989898989898989898989898989898ffffffffffffffff222222224444ffff9898989898989898989898989898
        8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888ffffffffffffffff222222224444ffff8888888888888888888888888888
        8898889888988898889888988898889888988898889888988898889888988898889888988898889888988898889888988898ffffffffffffffff222222224444ffff8898889888988898889888988898
        8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888ffffffffffffffff222222224444ffff8888888888888888888888888888
        98889888988898889888988898889888988898889888988898889888988898889888988898889888988898889888988898889888988898889888ffffffffffff98889888988898889888988898889888
        88888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888ffffffffffff88888888888888888888888888888888
        88988898889888988898889888988898889888988898889888988898889888988898889888988898889888988898889888988898889888988898ffffffffffff88988898889888988898889888988898
        88888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888ffffffffffff88888888888888888888888888888888
        9888988898889888988898889888988898889888988898889888988898889888988898889888988898889888988898889888988898889888988898889888988898889888988898889888988898889888
        8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
        8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
        8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
        8888988888889888888898888888988888889888888898888888988888889888888898888888988888889888888898888888988888889888888898888888988888889888888898888888988888889888
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
        8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
        8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
        8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
        8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
        8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
        8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
        8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
        8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
        `,
    img`
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
        9999899999998999999989999999899999998999999989999999899999998999999989999999899999998999999989999999899999998999999989999999899999998999999989999999899999998999
        9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
        9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
        9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
        8999899989998999899989998999899989998999899989998999899989998999899989998999899989998999899989998999899989998999899989998999899989998999899989998999899989998999
        9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
        9999998999999989999999899999998999999989999999899999998999999989999999899999998999999989999999899999998999999989999999899999998999999989999999899999998999999989
        9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
        8999899989998999899989998999899989998999899989998999899989998999899989998999899989998999899989998999899989998999899989998999899989998999899989998999899989998999
        99999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999ffffffffffffffff9999999999999999999999999999999999999999
        99899989998999899989998999899989998999899989998999899989998999899989998999899989998999899989998999899989ffffffffffffffff9989998999899989998999899989998999899989
        99999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999ffffffffffffffff9999999999999999999999999999999999999999
        89898989898989898989898989898989898989898989898989898989898989898989898989898989898989898989898989898989ffffffffffffffff8989898989898989898989898989898989898989
        999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999ffffffff5555555544444444ffff999999999999999999999999999999999999
        998999899989998999899989998999899989998999899989998999899989998999899989998999899989998999899989ffffffff5555555544444444ffff998999899989998999899989998999899989
        999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999ffffffff5555555544444444ffff999999999999999999999999999999999999
        898989898989898989898989898989898989898989898989898989898989898989898989898989898989898989898989ffffffff5555555544444444ffff898989898989898989898989898989898989
        99999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999ffffffffffffffffffffffff4444ffff999999999999999999999999999999999999
        89898989898989898989898989898989898989898989898989898989898989898989898989898989898989898989ffffffffffffffffffffffff4444ffff898989898989898989898989898989898989
        98999999989999999899999998999999989999999899999998999999989999999899999998999999989999999899ffffffffffffffffffffffff4444ffff999998999999989999999899999998999999
        89898989898989898989898989898989898989898989898989898989898989898989898989898989898989898989ffffffffffffffffffffffff4444ffff898989898989898989898989898989898989
        9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999ffffffff55555555444444442222ffffffff9999ffffffff999999999999999999999999
        8989898989898989898989898989898989898989898989898989898989898989898989898989898989898989ffffffff55555555444444442222ffffffff8989ffffffff898989898989898989898989
        9899989998999899989998999899989998999899989998999899989998999899989998999899989998999899ffffffff55555555444444442222ffffffff9899ffffffff989998999899989998999899
        8989898989898989898989898989898989898989898989898989898989898989898989898989898989898989ffffffff55555555444444442222ffffffff8989ffffffff898989898989898989898989
        9998999999989999999899999998999999989999ffffffffffff99999998999999989999999899999998ffff11115555444444444444444444442222ffffffff5555ffff999899999998999999989999
        8989898989898989898989898989898989898989ffffffffffff89898989898989898989898989898989ffff11115555444444444444444444442222ffffffff5555ffff898989898989898989898989
        9899989998999899989998999899989998999899ffffffffffff98999899989998999899989998999899ffff11115555444444444444444444442222ffffffff5555ffff989998999899989998999899
        8989898989898989898989898989898989898989ffffffffffff89898989898989898989898989898989ffff11115555444444444444444444442222ffffffff5555ffff898989898989898989898989
        999899989998999899989998ffffffffffffffff11114444ffff9998999899989998999899989998ffff1111444444444444444444444444444444444444ffff4444ffff999899989998999899989998
        898989898989898989898989ffffffffffffffff11114444ffff8989898989898989898989898989ffff1111444444444444444444444444444444444444ffff4444ffff898989898989898989898989
        989998989899989898999898ffffffffffffffff11114444ffff9898989998989899989898999898ffff1111444444444444444444444444444444444444ffff4444ffff989998989899989898999898
        898989898989898989898989ffffffffffffffff11114444ffff8989898989898989898989898989ffff1111444444444444444444444444444444444444ffff4444ffff898989898989898989898989
        98989998989899989898ffff1111444444445555ffff4444ffff99989898ffffffff99989898ffff1111444444444444444444444444444444444444444444444444ffff989899989898999898989998
        89898989898989898989ffff1111444444445555ffff4444ffff89898989ffffffff89898989ffff1111444444444444444444444444444444444444444444444444ffff898989898989898989898989
        98989898989898989898ffff1111444444445555ffff4444ffff98989898ffffffff98989898ffff1111444444444444444444444444444444444444444444444444ffff989898989898989898989898
        89898989898989898989ffff1111444444445555ffff4444ffff89898989ffffffff89898989ffff1111444444444444444444444444444444444444444444444444ffff898989898989898989898989
        9898989898989898ffff111144444444444444445555ffffffff9898ffff1111ffff9898ffff444444444444ffff555544444444ffffffff444444444444ffff2222ffff989898989898989898989898
        8989898989898989ffff111144444444444444445555ffffffff8989ffff1111ffff8989ffff444444444444ffff555544444444ffffffff444444444444ffff2222ffff898989898989898989898989
        9898989898989898ffff111144444444444444445555ffffffff9898ffff1111ffff9898ffff444444444444ffff555544444444ffffffff444444444444ffff2222ffff989898989898989898989898
        8989888989898889ffff111144444444444444445555ffffffff8889ffff1111ffff8889ffff444444444444ffff555544444444ffffffff444444444444ffff2222ffff898988898989888989898889
        9898989898989898ffff11114444ffff44444444222255555555ffff11114444ffff9898ffff444444444444ffff55554444ffff5555ffff444444444444ffff2222ffff989898989898989898989898
        8989898989898989ffff11114444ffff44444444222255555555ffff11114444ffff8989ffff444444444444ffff55554444ffff5555ffff444444444444ffff2222ffff898989898989898989898989
        9898989898989898ffff11114444ffff44444444222255555555ffff11114444ffff9898ffff444444444444ffff55554444ffff5555ffff444444444444ffff2222ffff989898989898989898989898
        8889888988898889ffff11114444ffff44444444222255555555ffff11114444ffff8889ffff444444444444ffff55554444ffff5555ffff444444444444ffff2222ffff888988898889888988898889
        9898989898989898ffff5555444444444444444422224444444444444444ffff98989898ffff44444444444455555555444444444444ffff444444444444ffffffffffff989898989898989898989898
        8989898889898988ffff5555444444444444444422224444444444444444ffff89898988ffff44444444444455555555444444444444ffff444444444444ffffffffffff898989888989898889898988
        9898989898989898ffff5555444444444444444422224444444444444444ffff98989898ffff44444444444455555555444444444444ffff444444444444ffffffffffff989898989898989898989898
        8889888988898889ffff5555444444444444444422224444444444444444ffff88898889ffff44444444444455555555444444444444ffff444444444444ffffffffffff888988898889888988898889
        9898989898989898ffff55554444444444442222222244444444ffff22224444ffff98989898ffff44444444444444444444ffffffff444444444444ffffffff98989898989898989898989898989898
        8988898889888988ffff55554444444444442222222244444444ffff22224444ffff89888988ffff44444444444444444444ffffffff444444444444ffffffff89888988898889888988898889888988
        9898989898989898ffff55554444444444442222222244444444ffff22224444ffff98989898ffff44444444444444444444ffffffff444444444444ffffffff98989898989898989898989898989898
        8888888888888888ffff55554444444444442222222244444444ffff22224444ffff88888888ffff44444444444444444444ffffffff444444444444ffffffff88888888888888888888888888888888
        98989898989898989898ffffffffffffffffffffffffffffffff9898ffffffffffff989898989898ffffffff4444444444444444444444444444ffffffff989898989898989898989898989898989898
        89888888898888888988ffffffffffffffffffffffffffffffff8888ffffffffffff888889888888ffffffff4444444444444444444444444444ffffffff888889888888898888888988888889888888
        98989898989898989898ffffffffffffffffffffffffffffffff9898ffffffffffff989898989898ffffffff4444444444444444444444444444ffffffff989898989898989898989898989898989898
        88888888888888888888ffffffffffffffffffffffffffffffff8888ffffffffffff888888888888ffffffff4444444444444444444444444444ffffffff888888888888888888888888888888888888
        9898989898989898989898989898989898989898989898989898989898989898989898989898989898989898ffffffff4444444444444444ffff22222222ffff98989898989898989898989898989898
        8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888ffffffff4444444444444444ffff22222222ffff88888888888888888888888888888888
        8898989888989898889898988898989888989898889898988898989888989898889898988898989888989898ffffffff4444444444444444ffff22222222ffff88989898889898988898989888989898
        8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888ffffffff4444444444444444ffff22222222ffff88888888888888888888888888888888
        989898989898989898989898989898989898989898989898989898989898989898989898989898989898989898989898ffffffffffffffff222222224444ffff98989898989898989898989898989898
        888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888ffffffffffffffff222222224444ffff88888888888888888888888888888888
        889888988898889888988898889888988898889888988898889888988898889888988898889888988898889888988898ffffffffffffffff222222224444ffff88988898889888988898889888988898
        888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888ffffffffffffffff222222224444ffff88888888888888888888888888888888
        9888988898889888988898889888988898889888988898889888988898889888988898889888988898889888988898889888988898889888ffffffffffff988898889888988898889888988898889888
        8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888ffffffffffff888888888888888888888888888888888888
        8898889888988898889888988898889888988898889888988898889888988898889888988898889888988898889888988898889888988898ffffffffffff889888988898889888988898889888988898
        8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888ffffffffffff888888888888888888888888888888888888
        9888988898889888988898889888988898889888988898889888988898889888988898889888988898889888988898889888988898889888988898889888988898889888988898889888988898889888
        8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
        8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
        8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
        8888988888889888888898888888988888889888888898888888988888889888888898888888988888889888888898888888988888889888888898888888988888889888888898888888988888889888
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
        8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
        8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
        8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
        8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
        8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
        8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
        8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
        8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
        `,
    img`
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
        9999899999998999999989999999899999998999999989999999899999998999999989999999899999998999999989999999899999998999999989999999899999998999999989999999899999998999
        9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
        9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
        9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
        8999899989998999899989998999899989998999899989998999899989998999899989998999899989998999899989998999899989998999899989998999899989998999899989998999899989998999
        9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
        9999998999999989999999899999998999999989999999899999998999999989999999899999998999999989999999899999998999999989999999899999998999999989999999899999998999999989
        9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
        8999899989998999899989998999899989998999899989998999899989998999899989998999899989998999899989998999899989998999899989998999899989998999899989998999899989998999
        9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999ffffffffffffffff99999999999999999999999999999999999999999999
        9989998999899989998999899989998999899989998999899989998999899989998999899989998999899989998999899989ffffffffffffffff99899989998999899989998999899989998999899989
        9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999ffffffffffffffff99999999999999999999999999999999999999999999
        8989898989898989898989898989898989898989898989898989898989898989898989898989898989898989898989898989ffffffffffffffff89898989898989898989898989898989898989898989
        99999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999ffffffff5555555544444444ffff9999999999999999999999999999999999999999
        99899989998999899989998999899989998999899989998999899989998999899989998999899989998999899989ffffffff5555555544444444ffff9989998999899989998999899989998999899989
        99999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999ffffffff5555555544444444ffff9999999999999999999999999999999999999999
        89898989898989898989898989898989898989898989898989898989898989898989898989898989898989898989ffffffff5555555544444444ffff8989898989898989898989898989898989898989
        9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999ffffffffffffffffffffffff4444ffff9999999999999999999999999999999999999999
        8989898989898989898989898989898989898989898989898989898989898989898989898989898989898989ffffffffffffffffffffffff4444ffff8989898989898989898989898989898989898989
        9899999998999999989999999899999998999999989999999899999998999999989999999899999998999999ffffffffffffffffffffffff4444ffff9899999998999999989999999899999998999999
        8989898989898989898989898989898989898989898989898989898989898989898989898989898989898989ffffffffffffffffffffffff4444ffff8989898989898989898989898989898989898989
        999999999999999999999999999999999999999999999999999999999999999999999999999999999999ffffffff55555555444444442222ffffffff9999ffffffff9999999999999999999999999999
        898989898989898989898989898989898989898989898989898989898989898989898989898989898989ffffffff55555555444444442222ffffffff8989ffffffff8989898989898989898989898989
        989998999899989998999899989998999899989998999899989998999899989998999899989998999899ffffffff55555555444444442222ffffffff9899ffffffff9899989998999899989998999899
        898989898989898989898989898989898989898989898989898989898989898989898989898989898989ffffffff55555555444444442222ffffffff8989ffffffff8989898989898989898989898989
        9998999999989999999899999998999999989999ffffffffffff9999999899999998999999989999ffff11115555444444444444444444442222ffffffff5555ffff9999999899999998999999989999
        8989898989898989898989898989898989898989ffffffffffff8989898989898989898989898989ffff11115555444444444444444444442222ffffffff5555ffff8989898989898989898989898989
        9899989998999899989998999899989998999899ffffffffffff9899989998999899989998999899ffff11115555444444444444444444442222ffffffff5555ffff9899989998999899989998999899
        8989898989898989898989898989898989898989ffffffffffff8989898989898989898989898989ffff11115555444444444444444444442222ffffffff5555ffff8989898989898989898989898989
        999899989998999899989998ffffffffffffffff11114444ffff999899989998999899989998ffff1111444444444444444444444444444444444444ffff4444ffff9998999899989998999899989998
        898989898989898989898989ffffffffffffffff11114444ffff898989898989898989898989ffff1111444444444444444444444444444444444444ffff4444ffff8989898989898989898989898989
        989998989899989898999898ffffffffffffffff11114444ffff989898999898989998989899ffff1111444444444444444444444444444444444444ffff4444ffff9898989998989899989898999898
        898989898989898989898989ffffffffffffffff11114444ffff898989898989898989898989ffff1111444444444444444444444444444444444444ffff4444ffff8989898989898989898989898989
        98989998989899989898ffff1111444444445555ffff4444ffff99989898ffffffff9998ffff1111444444444444444444444444444444444444444444444444ffff9998989899989898999898989998
        89898989898989898989ffff1111444444445555ffff4444ffff89898989ffffffff8989ffff1111444444444444444444444444444444444444444444444444ffff8989898989898989898989898989
        98989898989898989898ffff1111444444445555ffff4444ffff98989898ffffffff9898ffff1111444444444444444444444444444444444444444444444444ffff9898989898989898989898989898
        89898989898989898989ffff1111444444445555ffff4444ffff89898989ffffffff8989ffff1111444444444444444444444444444444444444444444444444ffff8989898989898989898989898989
        9898989898989898ffff111144444444444444445555ffffffff9898ffff1111ffffffff444444444444ffff555544444444ffffffff444444444444ffff2222ffff9898989898989898989898989898
        8989898989898989ffff111144444444444444445555ffffffff8989ffff1111ffffffff444444444444ffff555544444444ffffffff444444444444ffff2222ffff8989898989898989898989898989
        9898989898989898ffff111144444444444444445555ffffffff9898ffff1111ffffffff444444444444ffff555544444444ffffffff444444444444ffff2222ffff9898989898989898989898989898
        8989888989898889ffff111144444444444444445555ffffffff8889ffff1111ffffffff444444444444ffff555544444444ffffffff444444444444ffff2222ffff8889898988898989888989898889
        9898989898989898ffff11114444ffff44444444222255555555ffff11114444ffffffff444444444444ffff55554444ffff5555ffff444444444444ffff2222ffff9898989898989898989898989898
        8989898989898989ffff11114444ffff44444444222255555555ffff11114444ffffffff444444444444ffff55554444ffff5555ffff444444444444ffff2222ffff8989898989898989898989898989
        9898989898989898ffff11114444ffff44444444222255555555ffff11114444ffffffff444444444444ffff55554444ffff5555ffff444444444444ffff2222ffff9898989898989898989898989898
        8889888988898889ffff11114444ffff44444444222255555555ffff11114444ffffffff444444444444ffff55554444ffff5555ffff444444444444ffff2222ffff8889888988898889888988898889
        9898989898989898ffff5555444444444444444422224444444444444444ffff9898ffff44444444444455555555444444444444ffff444444444444ffffffffffff9898989898989898989898989898
        8989898889898988ffff5555444444444444444422224444444444444444ffff8989ffff44444444444455555555444444444444ffff444444444444ffffffffffff8988898989888989898889898988
        9898989898989898ffff5555444444444444444422224444444444444444ffff9898ffff44444444444455555555444444444444ffff444444444444ffffffffffff9898989898989898989898989898
        8889888988898889ffff5555444444444444444422224444444444444444ffff8889ffff44444444444455555555444444444444ffff444444444444ffffffffffff8889888988898889888988898889
        9898989898989898ffff55554444444444442222222244444444ffff22224444ffff9898ffff44444444444444444444ffffffff444444444444ffffffff989898989898989898989898989898989898
        8988898889888988ffff55554444444444442222222244444444ffff22224444ffff8988ffff44444444444444444444ffffffff444444444444ffffffff898889888988898889888988898889888988
        9898989898989898ffff55554444444444442222222244444444ffff22224444ffff9898ffff44444444444444444444ffffffff444444444444ffffffff989898989898989898989898989898989898
        8888888888888888ffff55554444444444442222222244444444ffff22224444ffff8888ffff44444444444444444444ffffffff444444444444ffffffff888888888888888888888888888888888888
        98989898989898989898ffffffffffffffffffffffffffffffff9898ffffffffffff98989898ffffffff4444444444444444444444444444ffffffff9898989898989898989898989898989898989898
        89888888898888888988ffffffffffffffffffffffffffffffff8888ffffffffffff88888988ffffffff4444444444444444444444444444ffffffff8988888889888888898888888988888889888888
        98989898989898989898ffffffffffffffffffffffffffffffff9898ffffffffffff98989898ffffffff4444444444444444444444444444ffffffff9898989898989898989898989898989898989898
        88888888888888888888ffffffffffffffffffffffffffffffff8888ffffffffffff88888888ffffffff4444444444444444444444444444ffffffff8888888888888888888888888888888888888888
        989898989898989898989898989898989898989898989898989898989898989898989898989898989898ffffffff4444444444444444ffff22222222ffff989898989898989898989898989898989898
        888888888888888888888888888888888888888888888888888888888888888888888888888888888888ffffffff4444444444444444ffff22222222ffff888888888888888888888888888888888888
        889898988898989888989898889898988898989888989898889898988898989888989898889898988898ffffffff4444444444444444ffff22222222ffff989888989898889898988898989888989898
        888888888888888888888888888888888888888888888888888888888888888888888888888888888888ffffffff4444444444444444ffff22222222ffff888888888888888888888888888888888888
        98989898989898989898989898989898989898989898989898989898989898989898989898989898989898989898ffffffffffffffff222222224444ffff989898989898989898989898989898989898
        88888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888ffffffffffffffff222222224444ffff888888888888888888888888888888888888
        88988898889888988898889888988898889888988898889888988898889888988898889888988898889888988898ffffffffffffffff222222224444ffff889888988898889888988898889888988898
        88888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888ffffffffffffffff222222224444ffff888888888888888888888888888888888888
        988898889888988898889888988898889888988898889888988898889888988898889888988898889888988898889888988898889888ffffffffffff9888988898889888988898889888988898889888
        888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888ffffffffffff8888888888888888888888888888888888888888
        889888988898889888988898889888988898889888988898889888988898889888988898889888988898889888988898889888988898ffffffffffff8898889888988898889888988898889888988898
        888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888ffffffffffff8888888888888888888888888888888888888888
        9888988898889888988898889888988898889888988898889888988898889888988898889888988898889888988898889888988898889888988898889888988898889888988898889888988898889888
        8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
        8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
        8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
        8888988888889888888898888888988888889888888898888888988888889888888898888888988888889888888898888888988888889888888898888888988888889888888898888888988888889888
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
        8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
        8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
        8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
        8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
        8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
        8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
        8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
        8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
        `,
    img`
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
        9999899999998999999989999999899999998999999989999999899999998999999989999999899999998999999989999999899999998999999989999999899999998999999989999999899999998999
        9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
        9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
        9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
        8999899989998999899989998999899989998999899989998999899989998999899989998999899989998999899989998999899989998999899989998999899989998999899989998999899989998999
        9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
        9999998999999989999999899999998999999989999999899999998999999989999999899999998999999989999999899999998999999989999999899999998999999989999999899999998999999989
        9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
        8999899989998999899989998999899989998999899989998999899989998999899989998999899989998999899989998999899989998999899989998999899989998999899989998999899989998999
        999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999ffffffffffffffff999999999999999999999999999999999999999999999999
        998999899989998999899989998999899989998999899989998999899989998999899989998999899989998999899989ffffffffffffffff998999899989998999899989998999899989998999899989
        999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999ffffffffffffffff999999999999999999999999999999999999999999999999
        898989898989898989898989898989898989898989898989898989898989898989898989898989898989898989898989ffffffffffffffff898989898989898989898989898989898989898989898989
        9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999ffffffff5555555544444444ffff99999999999999999999999999999999999999999999
        9989998999899989998999899989998999899989998999899989998999899989998999899989998999899989ffffffff5555555544444444ffff99899989998999899989998999899989998999899989
        9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999ffffffff5555555544444444ffff99999999999999999999999999999999999999999999
        8989898989898989898989898989898989898989898989898989898989898989898989898989898989898989ffffffff5555555544444444ffff89898989898989898989898989898989898989898989
        999999999999999999999999999999999999999999999999999999999999999999999999999999999999ffffffffffffffffffffffff4444ffff99999999999999999999999999999999999999999999
        898989898989898989898989898989898989898989898989898989898989898989898989898989898989ffffffffffffffffffffffff4444ffff89898989898989898989898989898989898989898989
        989999999899999998999999989999999899999998999999989999999899999998999999989999999899ffffffffffffffffffffffff4444ffff99999899999998999999989999999899999998999999
        898989898989898989898989898989898989898989898989898989898989898989898989898989898989ffffffffffffffffffffffff4444ffff89898989898989898989898989898989898989898989
        99999999999999999999999999999999999999999999999999999999999999999999999999999999ffffffff55555555444444442222ffffffff9999ffffffff99999999999999999999999999999999
        89898989898989898989898989898989898989898989898989898989898989898989898989898989ffffffff55555555444444442222ffffffff8989ffffffff89898989898989898989898989898989
        98999899989998999899989998999899989998999899989998999899989998999899989998999899ffffffff55555555444444442222ffffffff9899ffffffff98999899989998999899989998999899
        89898989898989898989898989898989898989898989898989898989898989898989898989898989ffffffff55555555444444442222ffffffff8989ffffffff89898989898989898989898989898989
        9998999999989999999899999998999999989999ffffffffffff999999989999999899999998ffff11115555444444444444444444442222ffffffff5555ffff99989999999899999998999999989999
        8989898989898989898989898989898989898989ffffffffffff898989898989898989898989ffff11115555444444444444444444442222ffffffff5555ffff89898989898989898989898989898989
        9899989998999899989998999899989998999899ffffffffffff989998999899989998999899ffff11115555444444444444444444442222ffffffff5555ffff98999899989998999899989998999899
        8989898989898989898989898989898989898989ffffffffffff898989898989898989898989ffff11115555444444444444444444442222ffffffff5555ffff89898989898989898989898989898989
        999899989998999899989998ffffffffffffffff11114444ffff99989998999899989998ffff1111444444444444444444444444444444444444ffff4444ffff99989998999899989998999899989998
        898989898989898989898989ffffffffffffffff11114444ffff89898989898989898989ffff1111444444444444444444444444444444444444ffff4444ffff89898989898989898989898989898989
        989998989899989898999898ffffffffffffffff11114444ffff98989899989898999898ffff1111444444444444444444444444444444444444ffff4444ffff98999898989998989899989898999898
        898989898989898989898989ffffffffffffffff11114444ffff89898989898989898989ffff1111444444444444444444444444444444444444ffff4444ffff89898989898989898989898989898989
        98989998989899989898ffff1111444444445555ffff4444ffff99989898ffff9898ffff1111444444444444444444444444444444444444444444444444ffff98989998989899989898999898989998
        89898989898989898989ffff1111444444445555ffff4444ffff89898989ffff8989ffff1111444444444444444444444444444444444444444444444444ffff89898989898989898989898989898989
        98989898989898989898ffff1111444444445555ffff4444ffff98989898ffff9898ffff1111444444444444444444444444444444444444444444444444ffff98989898989898989898989898989898
        89898989898989898989ffff1111444444445555ffff4444ffff89898989ffff8989ffff1111444444444444444444444444444444444444444444444444ffff89898989898989898989898989898989
        9898989898989898ffff111144444444444444445555ffffffff9898ffff1111ffff444444444444ffff555544444444ffffffff444444444444ffff2222ffff98989898989898989898989898989898
        8989898989898989ffff111144444444444444445555ffffffff8989ffff1111ffff444444444444ffff555544444444ffffffff444444444444ffff2222ffff89898989898989898989898989898989
        9898989898989898ffff111144444444444444445555ffffffff9898ffff1111ffff444444444444ffff555544444444ffffffff444444444444ffff2222ffff98989898989898989898989898989898
        8989888989898889ffff111144444444444444445555ffffffff8889ffff1111ffff444444444444ffff555544444444ffffffff444444444444ffff2222ffff89898889898988898989888989898889
        9898989898989898ffff11114444ffff44444444222255555555ffff11114444ffff444444444444ffff55554444ffff5555ffff444444444444ffff2222ffff98989898989898989898989898989898
        8989898989898989ffff11114444ffff44444444222255555555ffff11114444ffff444444444444ffff55554444ffff5555ffff444444444444ffff2222ffff89898989898989898989898989898989
        9898989898989898ffff11114444ffff44444444222255555555ffff11114444ffff444444444444ffff55554444ffff5555ffff444444444444ffff2222ffff98989898989898989898989898989898
        8889888988898889ffff11114444ffff44444444222255555555ffff11114444ffff444444444444ffff55554444ffff5555ffff444444444444ffff2222ffff88898889888988898889888988898889
        9898989898989898ffff5555444444444444444422224444444444444444ffffffff44444444444455555555444444444444ffff444444444444ffffffffffff98989898989898989898989898989898
        8989898889898988ffff5555444444444444444422224444444444444444ffffffff44444444444455555555444444444444ffff444444444444ffffffffffff89898988898989888989898889898988
        9898989898989898ffff5555444444444444444422224444444444444444ffffffff44444444444455555555444444444444ffff444444444444ffffffffffff98989898989898989898989898989898
        8889888988898889ffff5555444444444444444422224444444444444444ffffffff44444444444455555555444444444444ffff444444444444ffffffffffff88898889888988898889888988898889
        9898989898989898ffff55554444444444442222222244444444ffff222244449898ffff44444444444444444444ffffffff444444444444ffffffff9898989898989898989898989898989898989898
        8988898889888988ffff55554444444444442222222244444444ffff222244448988ffff44444444444444444444ffffffff444444444444ffffffff8988898889888988898889888988898889888988
        9898989898989898ffff55554444444444442222222244444444ffff222244449898ffff44444444444444444444ffffffff444444444444ffffffff9898989898989898989898989898989898989898
        8888888888888888ffff55554444444444442222222244444444ffff222244448888ffff44444444444444444444ffffffff444444444444ffffffff8888888888888888888888888888888888888888
        98989898989898989898ffffffffffffffffffffffffffffffff9898ffffffff98989898ffffffff4444444444444444444444444444ffffffff98989898989898989898989898989898989898989898
        89888888898888888988ffffffffffffffffffffffffffffffff8888ffffffff89888888ffffffff4444444444444444444444444444ffffffff88888988888889888888898888888988888889888888
        98989898989898989898ffffffffffffffffffffffffffffffff9898ffffffff98989898ffffffff4444444444444444444444444444ffffffff98989898989898989898989898989898989898989898
        88888888888888888888ffffffffffffffffffffffffffffffff8888ffffffff88888888ffffffff4444444444444444444444444444ffffffff88888888888888888888888888888888888888888888
        98989898989898989898989898989898989898989898989898989898989898989898989898989898ffffffff4444444444444444ffff22222222ffff9898989898989898989898989898989898989898
        88888888888888888888888888888888888888888888888888888888888888888888888888888888ffffffff4444444444444444ffff22222222ffff8888888888888888888888888888888888888888
        88989898889898988898989888989898889898988898989888989898889898988898989888989898ffffffff4444444444444444ffff22222222ffff8898989888989898889898988898989888989898
        88888888888888888888888888888888888888888888888888888888888888888888888888888888ffffffff4444444444444444ffff22222222ffff8888888888888888888888888888888888888888
        9898989898989898989898989898989898989898989898989898989898989898989898989898989898989898ffffffffffffffff222222224444ffff9898989898989898989898989898989898989898
        8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888ffffffffffffffff222222224444ffff8888888888888888888888888888888888888888
        8898889888988898889888988898889888988898889888988898889888988898889888988898889888988898ffffffffffffffff222222224444ffff8898889888988898889888988898889888988898
        8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888ffffffffffffffff222222224444ffff8888888888888888888888888888888888888888
        98889888988898889888988898889888988898889888988898889888988898889888988898889888988898889888988898889888ffffffffffff98889888988898889888988898889888988898889888
        88888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888ffffffffffff88888888888888888888888888888888888888888888
        88988898889888988898889888988898889888988898889888988898889888988898889888988898889888988898889888988898ffffffffffff88988898889888988898889888988898889888988898
        88888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888ffffffffffff88888888888888888888888888888888888888888888
        9888988898889888988898889888988898889888988898889888988898889888988898889888988898889888988898889888988898889888988898889888988898889888988898889888988898889888
        8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
        8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
        8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
        8888988888889888888898888888988888889888888898888888988888889888888898888888988888889888888898888888988888889888888898888888988888889888888898888888988888889888
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
        8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
        8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
        8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
        8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
        8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
        8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
        8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
        8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
        `,
    img`
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
        9999899999998999999989999999899999998999999989999999899999998999999989999999899999998999999989999999899999998999999989999999899999998999999989999999899999998999
        9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
        9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
        9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
        8999899989998999899989998999899989998999899989998999899989998999899989998999899989998999899989998999899989998999899989998999899989998999899989998999899989998999
        9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
        9999998999999989999999899999998999999989999999899999998999999989999999899999998999999989999999899999998999999989999999899999998999999989999999899999998999999989
        9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
        8999899989998999899989998999899989998999899989998999899989998999899989998999899989998999899989998999899989998999899989998999899989998999899989998999899989998999
        99999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999ffffffffffffffff9999999999999999999999999999999999999999999999999999
        99899989998999899989998999899989998999899989998999899989998999899989998999899989998999899989ffffffffffffffff9989998999899989998999899989998999899989998999899989
        99999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999ffffffffffffffff9999999999999999999999999999999999999999999999999999
        89898989898989898989898989898989898989898989898989898989898989898989898989898989898989898989ffffffffffffffff8989898989898989898989898989898989898989898989898989
        999999999999999999999999999999999999999999999999999999999999999999999999999999999999ffffffff5555555544444444ffff999999999999999999999999999999999999999999999999
        998999899989998999899989998999899989998999899989998999899989998999899989998999899989ffffffff5555555544444444ffff998999899989998999899989998999899989998999899989
        999999999999999999999999999999999999999999999999999999999999999999999999999999999999ffffffff5555555544444444ffff999999999999999999999999999999999999999999999999
        898989898989898989898989898989898989898989898989898989898989898989898989898989898989ffffffff5555555544444444ffff898989898989898989898989898989898989898989898989
        99999999999999999999999999999999999999999999999999999999999999999999999999999999ffffffffffffffffffffffff4444ffff999999999999999999999999999999999999999999999999
        89898989898989898989898989898989898989898989898989898989898989898989898989898989ffffffffffffffffffffffff4444ffff898989898989898989898989898989898989898989898989
        98999999989999999899999998999999989999999899999998999999989999999899999998999999ffffffffffffffffffffffff4444ffff989999999899999998999999989999999899999998999999
        89898989898989898989898989898989898989898989898989898989898989898989898989898989ffffffffffffffffffffffff4444ffff898989898989898989898989898989898989898989898989
        9999999999999999999999999999999999999999999999999999999999999999999999999999ffffffff55555555444444442222ffffffff9999ffffffff999999999999999999999999999999999999
        8989898989898989898989898989898989898989898989898989898989898989898989898989ffffffff55555555444444442222ffffffff8989ffffffff898989898989898989898989898989898989
        9899989998999899989998999899989998999899989998999899989998999899989998999899ffffffff55555555444444442222ffffffff9899ffffffff989998999899989998999899989998999899
        8989898989898989898989898989898989898989898989898989898989898989898989898989ffffffff55555555444444442222ffffffff8989ffffffff898989898989898989898989898989898989
        9998999999989999999899999998999999989999ffffffffffff99999998999999989999ffff11115555444444444444444444442222ffffffff5555ffff999999989999999899999998999999989999
        8989898989898989898989898989898989898989ffffffffffff89898989898989898989ffff11115555444444444444444444442222ffffffff5555ffff898989898989898989898989898989898989
        9899989998999899989998999899989998999899ffffffffffff98999899989998999899ffff11115555444444444444444444442222ffffffff5555ffff989998999899989998999899989998999899
        8989898989898989898989898989898989898989ffffffffffff89898989898989898989ffff11115555444444444444444444442222ffffffff5555ffff898989898989898989898989898989898989
        999899989998999899989998ffffffffffffffff11114444ffff9998999899989998ffff1111444444444444444444444444444444444444ffff4444ffff999899989998999899989998999899989998
        898989898989898989898989ffffffffffffffff11114444ffff8989898989898989ffff1111444444444444444444444444444444444444ffff4444ffff898989898989898989898989898989898989
        989998989899989898999898ffffffffffffffff11114444ffff9898989998989899ffff1111444444444444444444444444444444444444ffff4444ffff989898999898989998989899989898999898
        898989898989898989898989ffffffffffffffff11114444ffff8989898989898989ffff1111444444444444444444444444444444444444ffff4444ffff898989898989898989898989898989898989
        98989998989899989898ffff1111444444445555ffff4444ffff999898989998ffff1111444444444444444444444444444444444444444444444444ffff999898989998989899989898999898989998
        89898989898989898989ffff1111444444445555ffff4444ffff898989898989ffff1111444444444444444444444444444444444444444444444444ffff898989898989898989898989898989898989
        98989898989898989898ffff1111444444445555ffff4444ffff989898989898ffff1111444444444444444444444444444444444444444444444444ffff989898989898989898989898989898989898
        89898989898989898989ffff1111444444445555ffff4444ffff898989898989ffff1111444444444444444444444444444444444444444444444444ffff898989898989898989898989898989898989
        9898989898989898ffff111144444444444444445555ffffffff9898ffffffff444444444444ffff555544444444ffffffff444444444444ffff2222ffff989898989898989898989898989898989898
        8989898989898989ffff111144444444444444445555ffffffff8989ffffffff444444444444ffff555544444444ffffffff444444444444ffff2222ffff898989898989898989898989898989898989
        9898989898989898ffff111144444444444444445555ffffffff9898ffffffff444444444444ffff555544444444ffffffff444444444444ffff2222ffff989898989898989898989898989898989898
        8989888989898889ffff111144444444444444445555ffffffff8889ffffffff444444444444ffff555544444444ffffffff444444444444ffff2222ffff888989898889898988898989888989898889
        9898989898989898ffff11114444ffff44444444222255555555ffff1111ffff444444444444ffff55554444ffff5555ffff444444444444ffff2222ffff989898989898989898989898989898989898
        8989898989898989ffff11114444ffff44444444222255555555ffff1111ffff444444444444ffff55554444ffff5555ffff444444444444ffff2222ffff898989898989898989898989898989898989
        9898989898989898ffff11114444ffff44444444222255555555ffff1111ffff444444444444ffff55554444ffff5555ffff444444444444ffff2222ffff989898989898989898989898989898989898
        8889888988898889ffff11114444ffff44444444222255555555ffff1111ffff444444444444ffff55554444ffff5555ffff444444444444ffff2222ffff888988898889888988898889888988898889
        9898989898989898ffff5555444444444444444422224444444444444444ffff44444444444455555555444444444444ffff444444444444ffffffffffff989898989898989898989898989898989898
        8989898889898988ffff5555444444444444444422224444444444444444ffff44444444444455555555444444444444ffff444444444444ffffffffffff898889898988898989888989898889898988
        9898989898989898ffff5555444444444444444422224444444444444444ffff44444444444455555555444444444444ffff444444444444ffffffffffff989898989898989898989898989898989898
        8889888988898889ffff5555444444444444444422224444444444444444ffff44444444444455555555444444444444ffff444444444444ffffffffffff888988898889888988898889888988898889
        9898989898989898ffff55554444444444442222222244444444ffff22229898ffff44444444444444444444ffffffff444444444444ffffffff98989898989898989898989898989898989898989898
        8988898889888988ffff55554444444444442222222244444444ffff22228988ffff44444444444444444444ffffffff444444444444ffffffff89888988898889888988898889888988898889888988
        9898989898989898ffff55554444444444442222222244444444ffff22229898ffff44444444444444444444ffffffff444444444444ffffffff98989898989898989898989898989898989898989898
        8888888888888888ffff55554444444444442222222244444444ffff22228888ffff44444444444444444444ffffffff444444444444ffffffff88888888888888888888888888888888888888888888
        98989898989898989898ffffffffffffffffffffffffffffffff9898ffff98989898ffffffff4444444444444444444444444444ffffffff989898989898989898989898989898989898989898989898
        89888888898888888988ffffffffffffffffffffffffffffffff8888ffff88888988ffffffff4444444444444444444444444444ffffffff898888888988888889888888898888888988888889888888
        98989898989898989898ffffffffffffffffffffffffffffffff9898ffff98989898ffffffff4444444444444444444444444444ffffffff989898989898989898989898989898989898989898989898
        88888888888888888888ffffffffffffffffffffffffffffffff8888ffff88888888ffffffff4444444444444444444444444444ffffffff888888888888888888888888888888888888888888888888
        9898989898989898989898989898989898989898989898989898989898989898989898989898ffffffff4444444444444444ffff22222222ffff98989898989898989898989898989898989898989898
        8888888888888888888888888888888888888888888888888888888888888888888888888888ffffffff4444444444444444ffff22222222ffff88888888888888888888888888888888888888888888
        8898989888989898889898988898989888989898889898988898989888989898889898988898ffffffff4444444444444444ffff22222222ffff98988898989888989898889898988898989888989898
        8888888888888888888888888888888888888888888888888888888888888888888888888888ffffffff4444444444444444ffff22222222ffff88888888888888888888888888888888888888888888
        989898989898989898989898989898989898989898989898989898989898989898989898989898989898ffffffffffffffff222222224444ffff98989898989898989898989898989898989898989898
        888888888888888888888888888888888888888888888888888888888888888888888888888888888888ffffffffffffffff222222224444ffff88888888888888888888888888888888888888888888
        889888988898889888988898889888988898889888988898889888988898889888988898889888988898ffffffffffffffff222222224444ffff88988898889888988898889888988898889888988898
        888888888888888888888888888888888888888888888888888888888888888888888888888888888888ffffffffffffffff222222224444ffff88888888888888888888888888888888888888888888
        9888988898889888988898889888988898889888988898889888988898889888988898889888988898889888988898889888ffffffffffff988898889888988898889888988898889888988898889888
        8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888ffffffffffff888888888888888888888888888888888888888888888888
        8898889888988898889888988898889888988898889888988898889888988898889888988898889888988898889888988898ffffffffffff889888988898889888988898889888988898889888988898
        8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888ffffffffffff888888888888888888888888888888888888888888888888
        9888988898889888988898889888988898889888988898889888988898889888988898889888988898889888988898889888988898889888988898889888988898889888988898889888988898889888
        8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
        8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
        8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
        8888988888889888888898888888988888889888888898888888988888889888888898888888988888889888888898888888988888889888888898888888988888889888888898888888988888889888
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
        8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
        8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
        8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
        8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
        8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
        8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
        8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
        8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
        `,
    img`
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
        9999899999998999999989999999899999998999999989999999899999998999999989999999899999998999999989999999899999998999999989999999899999998999999989999999899999998999
        9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
        9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
        9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
        8999899989998999899989998999899989998999899989998999899989998999899989998999899989998999899989998999899989998999899989998999899989998999899989998999899989998999
        9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
        9999998999999989999999899999998999999989999999899999998999999989999999899999998999999989999999899999998999999989999999899999998999999989999999899999998999999989
        9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
        8999899989998999899989998999899989998999899989998999899989998999899989998999899989998999899989998999899989998999899989998999899989998999899989998999899989998999
        9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999ffffffffffffffff99999999999999999999999999999999999999999999999999999999
        9989998999899989998999899989998999899989998999899989998999899989998999899989998999899989ffffffffffffffff99899989998999899989998999899989998999899989998999899989
        9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999ffffffffffffffff99999999999999999999999999999999999999999999999999999999
        8989898989898989898989898989898989898989898989898989898989898989898989898989898989898989ffffffffffffffff89898989898989898989898989898989898989898989898989898989
        99999999999999999999999999999999999999999999999999999999999999999999999999999999ffffffff5555555544444444ffff9999999999999999999999999999999999999999999999999999
        99899989998999899989998999899989998999899989998999899989998999899989998999899989ffffffff5555555544444444ffff9989998999899989998999899989998999899989998999899989
        99999999999999999999999999999999999999999999999999999999999999999999999999999999ffffffff5555555544444444ffff9999999999999999999999999999999999999999999999999999
        89898989898989898989898989898989898989898989898989898989898989898989898989898989ffffffff5555555544444444ffff8989898989898989898989898989898989898989898989898989
        9999999999999999999999999999999999999999999999999999999999999999999999999999ffffffffffffffffffffffff4444ffff9999999999999999999999999999999999999999999999999999
        8989898989898989898989898989898989898989898989898989898989898989898989898989ffffffffffffffffffffffff4444ffff8989898989898989898989898989898989898989898989898989
        9899999998999999989999999899999998999999989999999899999998999999989999999899ffffffffffffffffffffffff4444ffff9999989999999899999998999999989999999899999998999999
        8989898989898989898989898989898989898989898989898989898989898989898989898989ffffffffffffffffffffffff4444ffff8989898989898989898989898989898989898989898989898989
        999999999999999999999999999999999999999999999999999999999999999999999999ffffffff55555555444444442222ffffffff9999ffffffff9999999999999999999999999999999999999999
        898989898989898989898989898989898989898989898989898989898989898989898989ffffffff55555555444444442222ffffffff8989ffffffff8989898989898989898989898989898989898989
        989998999899989998999899989998999899989998999899989998999899989998999899ffffffff55555555444444442222ffffffff9899ffffffff9899989998999899989998999899989998999899
        898989898989898989898989898989898989898989898989898989898989898989898989ffffffff55555555444444442222ffffffff8989ffffffff8989898989898989898989898989898989898989
        9998999999989999999899999998999999989999ffffffffffff9999999899999998ffff11115555444444444444444444442222ffffffff5555ffff9998999999989999999899999998999999989999
        8989898989898989898989898989898989898989ffffffffffff8989898989898989ffff11115555444444444444444444442222ffffffff5555ffff8989898989898989898989898989898989898989
        9899989998999899989998999899989998999899ffffffffffff9899989998999899ffff11115555444444444444444444442222ffffffff5555ffff9899989998999899989998999899989998999899
        8989898989898989898989898989898989898989ffffffffffff8989898989898989ffff11115555444444444444444444442222ffffffff5555ffff8989898989898989898989898989898989898989
        999899989998999899989998ffffffffffffffff11114444ffff999899989998ffff1111444444444444444444444444444444444444ffff4444ffff9998999899989998999899989998999899989998
        898989898989898989898989ffffffffffffffff11114444ffff898989898989ffff1111444444444444444444444444444444444444ffff4444ffff8989898989898989898989898989898989898989
        989998989899989898999898ffffffffffffffff11114444ffff989898999898ffff1111444444444444444444444444444444444444ffff4444ffff9899989898999898989998989899989898999898
        898989898989898989898989ffffffffffffffff11114444ffff898989898989ffff1111444444444444444444444444444444444444ffff4444ffff8989898989898989898989898989898989898989
        98989998989899989898ffff1111444444445555ffff4444ffff99989898ffff1111444444444444444444444444444444444444444444444444ffff9898999898989998989899989898999898989998
        89898989898989898989ffff1111444444445555ffff4444ffff89898989ffff1111444444444444444444444444444444444444444444444444ffff8989898989898989898989898989898989898989
        98989898989898989898ffff1111444444445555ffff4444ffff98989898ffff1111444444444444444444444444444444444444444444444444ffff9898989898989898989898989898989898989898
        89898989898989898989ffff1111444444445555ffff4444ffff89898989ffff1111444444444444444444444444444444444444444444444444ffff8989898989898989898989898989898989898989
        9898989898989898ffff111144444444444444445555ffffffff9898ffff444444444444ffff555544444444ffffffff444444444444ffff2222ffff9898989898989898989898989898989898989898
        8989898989898989ffff111144444444444444445555ffffffff8989ffff444444444444ffff555544444444ffffffff444444444444ffff2222ffff8989898989898989898989898989898989898989
        9898989898989898ffff111144444444444444445555ffffffff9898ffff444444444444ffff555544444444ffffffff444444444444ffff2222ffff9898989898989898989898989898989898989898
        8989888989898889ffff111144444444444444445555ffffffff8889ffff444444444444ffff555544444444ffffffff444444444444ffff2222ffff8989888989898889898988898989888989898889
        9898989898989898ffff11114444ffff44444444222255555555ffffffff444444444444ffff55554444ffff5555ffff444444444444ffff2222ffff9898989898989898989898989898989898989898
        8989898989898989ffff11114444ffff44444444222255555555ffffffff444444444444ffff55554444ffff5555ffff444444444444ffff2222ffff8989898989898989898989898989898989898989
        9898989898989898ffff11114444ffff44444444222255555555ffffffff444444444444ffff55554444ffff5555ffff444444444444ffff2222ffff9898989898989898989898989898989898989898
        8889888988898889ffff11114444ffff44444444222255555555ffffffff444444444444ffff55554444ffff5555ffff444444444444ffff2222ffff8889888988898889888988898889888988898889
        9898989898989898ffff555544444444444444442222444444444444ffff44444444444455555555444444444444ffff444444444444ffffffffffff9898989898989898989898989898989898989898
        8989898889898988ffff555544444444444444442222444444444444ffff44444444444455555555444444444444ffff444444444444ffffffffffff8989898889898988898989888989898889898988
        9898989898989898ffff555544444444444444442222444444444444ffff44444444444455555555444444444444ffff444444444444ffffffffffff9898989898989898989898989898989898989898
        8889888988898889ffff555544444444444444442222444444444444ffff44444444444455555555444444444444ffff444444444444ffffffffffff8889888988898889888988898889888988898889
        9898989898989898ffff55554444444444442222222244444444ffff9898ffff44444444444444444444ffffffff444444444444ffffffff989898989898989898989898989898989898989898989898
        8988898889888988ffff55554444444444442222222244444444ffff8988ffff44444444444444444444ffffffff444444444444ffffffff898889888988898889888988898889888988898889888988
        9898989898989898ffff55554444444444442222222244444444ffff9898ffff44444444444444444444ffffffff444444444444ffffffff989898989898989898989898989898989898989898989898
        8888888888888888ffff55554444444444442222222244444444ffff8888ffff44444444444444444444ffffffff444444444444ffffffff888888888888888888888888888888888888888888888888
        98989898989898989898ffffffffffffffffffffffffffffffff989898989898ffffffff4444444444444444444444444444ffffffff9898989898989898989898989898989898989898989898989898
        89888888898888888988ffffffffffffffffffffffffffffffff888889888888ffffffff4444444444444444444444444444ffffffff8888898888888988888889888888898888888988888889888888
        98989898989898989898ffffffffffffffffffffffffffffffff989898989898ffffffff4444444444444444444444444444ffffffff9898989898989898989898989898989898989898989898989898
        88888888888888888888ffffffffffffffffffffffffffffffff888888888888ffffffff4444444444444444444444444444ffffffff8888888888888888888888888888888888888888888888888888
        989898989898989898989898989898989898989898989898989898989898989898989898ffffffff4444444444444444ffff22222222ffff989898989898989898989898989898989898989898989898
        888888888888888888888888888888888888888888888888888888888888888888888888ffffffff4444444444444444ffff22222222ffff888888888888888888888888888888888888888888888888
        889898988898989888989898889898988898989888989898889898988898989888989898ffffffff4444444444444444ffff22222222ffff889898988898989888989898889898988898989888989898
        888888888888888888888888888888888888888888888888888888888888888888888888ffffffff4444444444444444ffff22222222ffff888888888888888888888888888888888888888888888888
        98989898989898989898989898989898989898989898989898989898989898989898989898989898ffffffffffffffff222222224444ffff989898989898989898989898989898989898989898989898
        88888888888888888888888888888888888888888888888888888888888888888888888888888888ffffffffffffffff222222224444ffff888888888888888888888888888888888888888888888888
        88988898889888988898889888988898889888988898889888988898889888988898889888988898ffffffffffffffff222222224444ffff889888988898889888988898889888988898889888988898
        88888888888888888888888888888888888888888888888888888888888888888888888888888888ffffffffffffffff222222224444ffff888888888888888888888888888888888888888888888888
        988898889888988898889888988898889888988898889888988898889888988898889888988898889888988898889888ffffffffffff9888988898889888988898889888988898889888988898889888
        888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888ffffffffffff8888888888888888888888888888888888888888888888888888
        889888988898889888988898889888988898889888988898889888988898889888988898889888988898889888988898ffffffffffff8898889888988898889888988898889888988898889888988898
        888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888ffffffffffff8888888888888888888888888888888888888888888888888888
        9888988898889888988898889888988898889888988898889888988898889888988898889888988898889888988898889888988898889888988898889888988898889888988898889888988898889888
        8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
        8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
        8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
        8888988888889888888898888888988888889888888898888888988888889888888898888888988888889888888898888888988888889888888898888888988888889888888898888888988888889888
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
        8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
        8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
        8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
        8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
        8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
        8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
        8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
        8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
        `,
    img`
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
        9999899999998999999989999999899999998999999989999999899999998999999989999999899999998999999989999999899999998999999989999999899999998999999989999999899999998999
        9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
        9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
        9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
        8999899989998999899989998999899989998999899989998999899989998999899989998999899989998999899989998999899989998999899989998999899989998999899989998999899989998999
        9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
        9999998999999989999999899999998999999989999999899999998999999989999999899999998999999989999999899999998999999989999999899999998999999989999999899999998999999989
        9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
        8999899989998999899989998999899989998999899989998999899989998999899989998999899989998999899989998999899989998999899989998999899989998999899989998999899989998999
        999999999999999999999999999999999999999999999999999999999999999999999999999999999999ffffffffffffffff999999999999999999999999999999999999999999999999999999999999
        998999899989998999899989998999899989998999899989998999899989998999899989998999899989ffffffffffffffff998999899989998999899989998999899989998999899989998999899989
        999999999999999999999999999999999999999999999999999999999999999999999999999999999999ffffffffffffffff999999999999999999999999999999999999999999999999999999999999
        898989898989898989898989898989898989898989898989898989898989898989898989898989898989ffffffffffffffff898989898989898989898989898989898989898989898989898989898989
        9999999999999999999999999999999999999999999999999999999999999999999999999999ffffffff5555555544444444ffff99999999999999999999999999999999999999999999999999999999
        9989998999899989998999899989998999899989998999899989998999899989998999899989ffffffff5555555544444444ffff99899989998999899989998999899989998999899989998999899989
        9999999999999999999999999999999999999999999999999999999999999999999999999999ffffffff5555555544444444ffff99999999999999999999999999999999999999999999999999999999
        8989898989898989898989898989898989898989898989898989898989898989898989898989ffffffff5555555544444444ffff89898989898989898989898989898989898989898989898989898989
        999999999999999999999999999999999999999999999999999999999999999999999999ffffffffffffffffffffffff4444ffff99999999999999999999999999999999999999999999999999999999
        898989898989898989898989898989898989898989898989898989898989898989898989ffffffffffffffffffffffff4444ffff89898989898989898989898989898989898989898989898989898989
        989999999899999998999999989999999899999998999999989999999899999998999999ffffffffffffffffffffffff4444ffff98999999989999999899999998999999989999999899999998999999
        898989898989898989898989898989898989898989898989898989898989898989898989ffffffffffffffffffffffff4444ffff89898989898989898989898989898989898989898989898989898989
        99999999999999999999999999999999999999999999999999999999999999999999ffffffff55555555444444442222ffffffff9999ffffffff99999999999999999999999999999999999999999999
        89898989898989898989898989898989898989898989898989898989898989898989ffffffff55555555444444442222ffffffff8989ffffffff89898989898989898989898989898989898989898989
        98999899989998999899989998999899989998999899989998999899989998999899ffffffff55555555444444442222ffffffff9899ffffffff98999899989998999899989998999899989998999899
        89898989898989898989898989898989898989898989898989898989898989898989ffffffff55555555444444442222ffffffff8989ffffffff89898989898989898989898989898989898989898989
        9998999999989999999899999998999999989999ffffffffffff999999989999ffff11115555444444444444444444442222ffffffff5555ffff99999998999999989999999899999998999999989999
        8989898989898989898989898989898989898989ffffffffffff898989898989ffff11115555444444444444444444442222ffffffff5555ffff89898989898989898989898989898989898989898989
        9899989998999899989998999899989998999899ffffffffffff989998999899ffff11115555444444444444444444442222ffffffff5555ffff98999899989998999899989998999899989998999899
        8989898989898989898989898989898989898989ffffffffffff898989898989ffff11115555444444444444444444442222ffffffff5555ffff89898989898989898989898989898989898989898989
        999899989998999899989998ffffffffffffffff11114444ffff99989998ffff1111444444444444444444444444444444444444ffff4444ffff99989998999899989998999899989998999899989998
        898989898989898989898989ffffffffffffffff11114444ffff89898989ffff1111444444444444444444444444444444444444ffff4444ffff89898989898989898989898989898989898989898989
        989998989899989898999898ffffffffffffffff11114444ffff98989899ffff1111444444444444444444444444444444444444ffff4444ffff98989899989898999898989998989899989898999898
        898989898989898989898989ffffffffffffffff11114444ffff89898989ffff1111444444444444444444444444444444444444ffff4444ffff89898989898989898989898989898989898989898989
        98989998989899989898ffff1111444444445555ffff4444ffff9998ffff1111444444444444444444444444444444444444444444444444ffff99989898999898989998989899989898999898989998
        89898989898989898989ffff1111444444445555ffff4444ffff8989ffff1111444444444444444444444444444444444444444444444444ffff89898989898989898989898989898989898989898989
        98989898989898989898ffff1111444444445555ffff4444ffff9898ffff1111444444444444444444444444444444444444444444444444ffff98989898989898989898989898989898989898989898
        89898989898989898989ffff1111444444445555ffff4444ffff8989ffff1111444444444444444444444444444444444444444444444444ffff89898989898989898989898989898989898989898989
        9898989898989898ffff111144444444444444445555ffffffffffff444444444444ffff555544444444ffffffff444444444444ffff2222ffff98989898989898989898989898989898989898989898
        8989898989898989ffff111144444444444444445555ffffffffffff444444444444ffff555544444444ffffffff444444444444ffff2222ffff89898989898989898989898989898989898989898989
        9898989898989898ffff111144444444444444445555ffffffffffff444444444444ffff555544444444ffffffff444444444444ffff2222ffff98989898989898989898989898989898989898989898
        8989888989898889ffff111144444444444444445555ffffffffffff444444444444ffff555544444444ffffffff444444444444ffff2222ffff88898989888989898889898988898989888989898889
        9898989898989898ffff11114444ffff44444444222255555555ffff444444444444ffff55554444ffff5555ffff444444444444ffff2222ffff98989898989898989898989898989898989898989898
        8989898989898989ffff11114444ffff44444444222255555555ffff444444444444ffff55554444ffff5555ffff444444444444ffff2222ffff89898989898989898989898989898989898989898989
        9898989898989898ffff11114444ffff44444444222255555555ffff444444444444ffff55554444ffff5555ffff444444444444ffff2222ffff98989898989898989898989898989898989898989898
        8889888988898889ffff11114444ffff44444444222255555555ffff444444444444ffff55554444ffff5555ffff444444444444ffff2222ffff88898889888988898889888988898889888988898889
        9898989898989898ffff55554444444444444444222244444444ffff44444444444455555555444444444444ffff444444444444ffffffffffff98989898989898989898989898989898989898989898
        8989898889898988ffff55554444444444444444222244444444ffff44444444444455555555444444444444ffff444444444444ffffffffffff89888989898889898988898989888989898889898988
        9898989898989898ffff55554444444444444444222244444444ffff44444444444455555555444444444444ffff444444444444ffffffffffff98989898989898989898989898989898989898989898
        8889888988898889ffff55554444444444444444222244444444ffff44444444444455555555444444444444ffff444444444444ffffffffffff88898889888988898889888988898889888988898889
        9898989898989898ffff555544444444444422222222444444449898ffff44444444444444444444ffffffff444444444444ffffffff9898989898989898989898989898989898989898989898989898
        8988898889888988ffff555544444444444422222222444444448988ffff44444444444444444444ffffffff444444444444ffffffff8988898889888988898889888988898889888988898889888988
        9898989898989898ffff555544444444444422222222444444449898ffff44444444444444444444ffffffff444444444444ffffffff9898989898989898989898989898989898989898989898989898
        8888888888888888ffff555544444444444422222222444444448888ffff44444444444444444444ffffffff444444444444ffffffff8888888888888888888888888888888888888888888888888888
        98989898989898989898ffffffffffffffffffffffffffffffff98989898ffffffff4444444444444444444444444444ffffffff98989898989898989898989898989898989898989898989898989898
        89888888898888888988ffffffffffffffffffffffffffffffff88888988ffffffff4444444444444444444444444444ffffffff89888888898888888988888889888888898888888988888889888888
        98989898989898989898ffffffffffffffffffffffffffffffff98989898ffffffff4444444444444444444444444444ffffffff98989898989898989898989898989898989898989898989898989898
        88888888888888888888ffffffffffffffffffffffffffffffff88888888ffffffff4444444444444444444444444444ffffffff88888888888888888888888888888888888888888888888888888888
        98989898989898989898989898989898989898989898989898989898989898989898ffffffff4444444444444444ffff22222222ffff9898989898989898989898989898989898989898989898989898
        88888888888888888888888888888888888888888888888888888888888888888888ffffffff4444444444444444ffff22222222ffff8888888888888888888888888888888888888888888888888888
        88989898889898988898989888989898889898988898989888989898889898988898ffffffff4444444444444444ffff22222222ffff9898889898988898989888989898889898988898989888989898
        88888888888888888888888888888888888888888888888888888888888888888888ffffffff4444444444444444ffff22222222ffff8888888888888888888888888888888888888888888888888888
        9898989898989898989898989898989898989898989898989898989898989898989898989898ffffffffffffffff222222224444ffff9898989898989898989898989898989898989898989898989898
        8888888888888888888888888888888888888888888888888888888888888888888888888888ffffffffffffffff222222224444ffff8888888888888888888888888888888888888888888888888888
        8898889888988898889888988898889888988898889888988898889888988898889888988898ffffffffffffffff222222224444ffff8898889888988898889888988898889888988898889888988898
        8888888888888888888888888888888888888888888888888888888888888888888888888888ffffffffffffffff222222224444ffff8888888888888888888888888888888888888888888888888888
        98889888988898889888988898889888988898889888988898889888988898889888988898889888988898889888ffffffffffff98889888988898889888988898889888988898889888988898889888
        88888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888ffffffffffff88888888888888888888888888888888888888888888888888888888
        88988898889888988898889888988898889888988898889888988898889888988898889888988898889888988898ffffffffffff88988898889888988898889888988898889888988898889888988898
        88888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888ffffffffffff88888888888888888888888888888888888888888888888888888888
        9888988898889888988898889888988898889888988898889888988898889888988898889888988898889888988898889888988898889888988898889888988898889888988898889888988898889888
        8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
        8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
        8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
        8888988888889888888898888888988888889888888898888888988888889888888898888888988888889888888898888888988888889888888898888888988888889888888898888888988888889888
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
        8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
        8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
        8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
        8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
        8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
        8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
        8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
        8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
        `,
    img`
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
        9999899999998999999989999999899999998999999989999999899999998999999989999999899999998999999989999999899999998999999989999999899999998999999989999999899999998999
        9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
        9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
        9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
        8999899989998999899989998999899989998999899989998999899989998999899989998999899989998999899989998999899989998999899989998999899989998999899989998999899989998999
        9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
        9999998999999989999999899999998999999989999999899999998999999989999999899999998999999989999999899999998999999989999999899999998999999989999999899999998999999989
        9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
        8999899989998999899989998999899989998999899989998999899989998999899989998999899989998999899989998999899989998999899989998999899989998999899989998999899989998999
        99999999999999999999999999999999999999999999999999999999999999999999999999999999ffffffffffffffff9999999999999999999999999999999999999999999999999999999999999999
        99899989998999899989998999899989998999899989998999899989998999899989998999899989ffffffffffffffff9989998999899989998999899989998999899989998999899989998999899989
        99999999999999999999999999999999999999999999999999999999999999999999999999999999ffffffffffffffff9999999999999999999999999999999999999999999999999999999999999999
        89898989898989898989898989898989898989898989898989898989898989898989898989898989ffffffffffffffff8989898989898989898989898989898989898989898989898989898989898989
        999999999999999999999999999999999999999999999999999999999999999999999999ffffffff5555555544444444ffff999999999999999999999999999999999999999999999999999999999999
        998999899989998999899989998999899989998999899989998999899989998999899989ffffffff5555555544444444ffff998999899989998999899989998999899989998999899989998999899989
        999999999999999999999999999999999999999999999999999999999999999999999999ffffffff5555555544444444ffff999999999999999999999999999999999999999999999999999999999999
        898989898989898989898989898989898989898989898989898989898989898989898989ffffffff5555555544444444ffff898989898989898989898989898989898989898989898989898989898989
        99999999999999999999999999999999999999999999999999999999999999999999ffffffffffffffffffffffff4444ffff999999999999999999999999999999999999999999999999999999999999
        89898989898989898989898989898989898989898989898989898989898989898989ffffffffffffffffffffffff4444ffff898989898989898989898989898989898989898989898989898989898989
        98999999989999999899999998999999989999999899999998999999989999999899ffffffffffffffffffffffff4444ffff999998999999989999999899999998999999989999999899999998999999
        89898989898989898989898989898989898989898989898989898989898989898989ffffffffffffffffffffffff4444ffff898989898989898989898989898989898989898989898989898989898989
        9999999999999999999999999999999999999999999999999999999999999999ffffffff55555555444444442222ffffffff9999ffffffff999999999999999999999999999999999999999999999999
        8989898989898989898989898989898989898989898989898989898989898989ffffffff55555555444444442222ffffffff8989ffffffff898989898989898989898989898989898989898989898989
        9899989998999899989998999899989998999899989998999899989998999899ffffffff55555555444444442222ffffffff9899ffffffff989998999899989998999899989998999899989998999899
        8989898989898989898989898989898989898989898989898989898989898989ffffffff55555555444444442222ffffffff8989ffffffff898989898989898989898989898989898989898989898989
        9998999999989999999899999998999999989999ffffffff999899999998ffff11115555444444444444444444442222ffffffff5555ffff999899999998999999989999999899999998999999989999
        8989898989898989898989898989898989898989ffffffff898989898989ffff11115555444444444444444444442222ffffffff5555ffff898989898989898989898989898989898989898989898989
        9899989998999899989998999899989998999899ffffffff989998999899ffff11115555444444444444444444442222ffffffff5555ffff989998999899989998999899989998999899989998999899
        8989898989898989898989898989898989898989ffffffff898989898989ffff11115555444444444444444444442222ffffffff5555ffff898989898989898989898989898989898989898989898989
        999899989998999899989998ffffffffffffffff1111444499989998ffff1111444444444444444444444444444444444444ffff4444ffff999899989998999899989998999899989998999899989998
        898989898989898989898989ffffffffffffffff1111444489898989ffff1111444444444444444444444444444444444444ffff4444ffff898989898989898989898989898989898989898989898989
        989998989899989898999898ffffffffffffffff1111444498999898ffff1111444444444444444444444444444444444444ffff4444ffff989998989899989898999898989998989899989898999898
        898989898989898989898989ffffffffffffffff1111444489898989ffff1111444444444444444444444444444444444444ffff4444ffff898989898989898989898989898989898989898989898989
        98989998989899989898ffff1111444444445555ffff44449898ffff1111444444444444444444444444444444444444444444444444ffff989899989898999898989998989899989898999898989998
        89898989898989898989ffff1111444444445555ffff44448989ffff1111444444444444444444444444444444444444444444444444ffff898989898989898989898989898989898989898989898989
        98989898989898989898ffff1111444444445555ffff44449898ffff1111444444444444444444444444444444444444444444444444ffff989898989898989898989898989898989898989898989898
        89898989898989898989ffff1111444444445555ffff44448989ffff1111444444444444444444444444444444444444444444444444ffff898989898989898989898989898989898989898989898989
        9898989898989898ffff111144444444444444445555ffffffff444444444444ffff555544444444ffffffff444444444444ffff2222ffff989898989898989898989898989898989898989898989898
        8989898989898989ffff111144444444444444445555ffffffff444444444444ffff555544444444ffffffff444444444444ffff2222ffff898989898989898989898989898989898989898989898989
        9898989898989898ffff111144444444444444445555ffffffff444444444444ffff555544444444ffffffff444444444444ffff2222ffff989898989898989898989898989898989898989898989898
        8989888989898889ffff111144444444444444445555ffffffff444444444444ffff555544444444ffffffff444444444444ffff2222ffff898988898989888989898889898988898989888989898889
        9898989898989898ffff11114444ffff4444444422225555ffff444444444444ffff55554444ffff5555ffff444444444444ffff2222ffff989898989898989898989898989898989898989898989898
        8989898989898989ffff11114444ffff4444444422225555ffff444444444444ffff55554444ffff5555ffff444444444444ffff2222ffff898989898989898989898989898989898989898989898989
        9898989898989898ffff11114444ffff4444444422225555ffff444444444444ffff55554444ffff5555ffff444444444444ffff2222ffff989898989898989898989898989898989898989898989898
        8889888988898889ffff11114444ffff4444444422225555ffff444444444444ffff55554444ffff5555ffff444444444444ffff2222ffff888988898889888988898889888988898889888988898889
        9898989898989898ffff5555444444444444444422224444ffff44444444444455555555444444444444ffff444444444444ffffffffffff989898989898989898989898989898989898989898989898
        8989898889898988ffff5555444444444444444422224444ffff44444444444455555555444444444444ffff444444444444ffffffffffff898989888989898889898988898989888989898889898988
        9898989898989898ffff5555444444444444444422224444ffff44444444444455555555444444444444ffff444444444444ffffffffffff989898989898989898989898989898989898989898989898
        8889888988898889ffff5555444444444444444422224444ffff44444444444455555555444444444444ffff444444444444ffffffffffff888988898889888988898889888988898889888988898889
        9898989898989898ffff55554444444444442222222244449898ffff44444444444444444444ffffffff444444444444ffffffff98989898989898989898989898989898989898989898989898989898
        8988898889888988ffff55554444444444442222222244448988ffff44444444444444444444ffffffff444444444444ffffffff89888988898889888988898889888988898889888988898889888988
        9898989898989898ffff55554444444444442222222244449898ffff44444444444444444444ffffffff444444444444ffffffff98989898989898989898989898989898989898989898989898989898
        8888888888888888ffff55554444444444442222222244448888ffff44444444444444444444ffffffff444444444444ffffffff88888888888888888888888888888888888888888888888888888888
        98989898989898989898ffffffffffffffffffffffffffff98989898ffffffff4444444444444444444444444444ffffffff989898989898989898989898989898989898989898989898989898989898
        89888888898888888988ffffffffffffffffffffffffffff89888888ffffffff4444444444444444444444444444ffffffff888889888888898888888988888889888888898888888988888889888888
        98989898989898989898ffffffffffffffffffffffffffff98989898ffffffff4444444444444444444444444444ffffffff989898989898989898989898989898989898989898989898989898989898
        88888888888888888888ffffffffffffffffffffffffffff88888888ffffffff4444444444444444444444444444ffffffff888888888888888888888888888888888888888888888888888888888888
        9898989898989898989898989898989898989898989898989898989898989898ffffffff4444444444444444ffff22222222ffff98989898989898989898989898989898989898989898989898989898
        8888888888888888888888888888888888888888888888888888888888888888ffffffff4444444444444444ffff22222222ffff88888888888888888888888888888888888888888888888888888888
        8898989888989898889898988898989888989898889898988898989888989898ffffffff4444444444444444ffff22222222ffff88989898889898988898989888989898889898988898989888989898
        8888888888888888888888888888888888888888888888888888888888888888ffffffff4444444444444444ffff22222222ffff88888888888888888888888888888888888888888888888888888888
        989898989898989898989898989898989898989898989898989898989898989898989898ffffffffffffffff222222224444ffff98989898989898989898989898989898989898989898989898989898
        888888888888888888888888888888888888888888888888888888888888888888888888ffffffffffffffff222222224444ffff88888888888888888888888888888888888888888888888888888888
        889888988898889888988898889888988898889888988898889888988898889888988898ffffffffffffffff222222224444ffff88988898889888988898889888988898889888988898889888988898
        888888888888888888888888888888888888888888888888888888888888888888888888ffffffffffffffff222222224444ffff88888888888888888888888888888888888888888888888888888888
        9888988898889888988898889888988898889888988898889888988898889888988898889888988898889888ffffffffffff988898889888988898889888988898889888988898889888988898889888
        8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888ffffffffffff888888888888888888888888888888888888888888888888888888888888
        8898889888988898889888988898889888988898889888988898889888988898889888988898889888988898ffffffffffff889888988898889888988898889888988898889888988898889888988898
        8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888ffffffffffff888888888888888888888888888888888888888888888888888888888888
        9888988898889888988898889888988898889888988898889888988898889888988898889888988898889888988898889888988898889888988898889888988898889888988898889888988898889888
        8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
        8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
        8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
        8888988888889888888898888888988888889888888898888888988888889888888898888888988888889888888898888888988888889888888898888888988888889888888898888888988888889888
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
        8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
        8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
        8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
        8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
        8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
        8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
        8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
        8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
        `,
    img`
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
        9999899999998999999989999999899999998999999989999999899999998999999989999999899999998999999989999999899999998999999989999999899999998999999989999999899999998999
        9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
        9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
        9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
        8999899989998999899989998999899989998999899989998999899989998999899989998999899989998999899989998999899989998999899989998999899989998999899989998999899989998999
        9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
        9999998999999989999999899999998999999989999999899999998999999989999999899999998999999989999999899999998999999989999999899999998999999989999999899999998999999989
        9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
        8999899989998999899989998999899989998999899989998999899989998999899989998999899989998999899989998999899989998999899989998999899989998999899989998999899989998999
        9999999999999999999999999999999999999999999999999999999999999999999999999999ffffffffffffffff99999999999999999999999999999999999999999999999999999999999999999999
        9989998999899989998999899989998999899989998999899989998999899989998999899989ffffffffffffffff99899989998999899989998999899989998999899989998999899989998999899989
        9999999999999999999999999999999999999999999999999999999999999999999999999999ffffffffffffffff99999999999999999999999999999999999999999999999999999999999999999999
        8989898989898989898989898989898989898989898989898989898989898989898989898989ffffffffffffffff89898989898989898989898989898989898989898989898989898989898989898989
        99999999999999999999999999999999999999999999999999999999999999999999ffffffff5555555544444444ffff9999999999999999999999999999999999999999999999999999999999999999
        99899989998999899989998999899989998999899989998999899989998999899989ffffffff5555555544444444ffff9989998999899989998999899989998999899989998999899989998999899989
        99999999999999999999999999999999999999999999999999999999999999999999ffffffff5555555544444444ffff9999999999999999999999999999999999999999999999999999999999999999
        89898989898989898989898989898989898989898989898989898989898989898989ffffffff5555555544444444ffff8989898989898989898989898989898989898989898989898989898989898989
        9999999999999999999999999999999999999999999999999999999999999999ffffffffffffffffffffffff4444ffff9999999999999999999999999999999999999999999999999999999999999999
        8989898989898989898989898989898989898989898989898989898989898989ffffffffffffffffffffffff4444ffff8989898989898989898989898989898989898989898989898989898989898989
        9899999998999999989999999899999998999999989999999899999998999999ffffffffffffffffffffffff4444ffff9899999998999999989999999899999998999999989999999899999998999999
        8989898989898989898989898989898989898989898989898989898989898989ffffffffffffffffffffffff4444ffff8989898989898989898989898989898989898989898989898989898989898989
        999999999999999999999999999999999999999999999999999999999999ffffffff55555555444444442222ffffffff9999ffffffff9999999999999999999999999999999999999999999999999999
        898989898989898989898989898989898989898989898989898989898989ffffffff55555555444444442222ffffffff8989ffffffff8989898989898989898989898989898989898989898989898989
        989998999899989998999899989998999899989998999899989998999899ffffffff55555555444444442222ffffffff9899ffffffff9899989998999899989998999899989998999899989998999899
        898989898989898989898989898989898989898989898989898989898989ffffffff55555555444444442222ffffffff8989ffffffff8989898989898989898989898989898989898989898989898989
        9998999999989999999899999998999999989999ffff999999989999ffff11115555444444444444444444442222ffffffff5555ffff9999999899999998999999989999999899999998999999989999
        8989898989898989898989898989898989898989ffff898989898989ffff11115555444444444444444444442222ffffffff5555ffff8989898989898989898989898989898989898989898989898989
        9899989998999899989998999899989998999899ffff989998999899ffff11115555444444444444444444442222ffffffff5555ffff9899989998999899989998999899989998999899989998999899
        8989898989898989898989898989898989898989ffff898989898989ffff11115555444444444444444444442222ffffffff5555ffff8989898989898989898989898989898989898989898989898989
        999899989998999899989998ffffffffffffffff111199989998ffff1111444444444444444444444444444444444444ffff4444ffff9998999899989998999899989998999899989998999899989998
        898989898989898989898989ffffffffffffffff111189898989ffff1111444444444444444444444444444444444444ffff4444ffff8989898989898989898989898989898989898989898989898989
        989998989899989898999898ffffffffffffffff111198989899ffff1111444444444444444444444444444444444444ffff4444ffff9898989998989899989898999898989998989899989898999898
        898989898989898989898989ffffffffffffffff111189898989ffff1111444444444444444444444444444444444444ffff4444ffff8989898989898989898989898989898989898989898989898989
        98989998989899989898ffff1111444444445555ffff9998ffff1111444444444444444444444444444444444444444444444444ffff9998989899989898999898989998989899989898999898989998
        89898989898989898989ffff1111444444445555ffff8989ffff1111444444444444444444444444444444444444444444444444ffff8989898989898989898989898989898989898989898989898989
        98989898989898989898ffff1111444444445555ffff9898ffff1111444444444444444444444444444444444444444444444444ffff9898989898989898989898989898989898989898989898989898
        89898989898989898989ffff1111444444445555ffff8989ffff1111444444444444444444444444444444444444444444444444ffff8989898989898989898989898989898989898989898989898989
        9898989898989898ffff111144444444444444445555ffff444444444444ffff555544444444ffffffff444444444444ffff2222ffff9898989898989898989898989898989898989898989898989898
        8989898989898989ffff111144444444444444445555ffff444444444444ffff555544444444ffffffff444444444444ffff2222ffff8989898989898989898989898989898989898989898989898989
        9898989898989898ffff111144444444444444445555ffff444444444444ffff555544444444ffffffff444444444444ffff2222ffff9898989898989898989898989898989898989898989898989898
        8989888989898889ffff111144444444444444445555ffff444444444444ffff555544444444ffffffff444444444444ffff2222ffff8889898988898989888989898889898988898989888989898889
        9898989898989898ffff11114444ffff444444442222ffff444444444444ffff55554444ffff5555ffff444444444444ffff2222ffff9898989898989898989898989898989898989898989898989898
        8989898989898989ffff11114444ffff444444442222ffff444444444444ffff55554444ffff5555ffff444444444444ffff2222ffff8989898989898989898989898989898989898989898989898989
        9898989898989898ffff11114444ffff444444442222ffff444444444444ffff55554444ffff5555ffff444444444444ffff2222ffff9898989898989898989898989898989898989898989898989898
        8889888988898889ffff11114444ffff444444442222ffff444444444444ffff55554444ffff5555ffff444444444444ffff2222ffff8889888988898889888988898889888988898889888988898889
        9898989898989898ffff555544444444444444442222ffff44444444444455555555444444444444ffff444444444444ffffffffffff9898989898989898989898989898989898989898989898989898
        8989898889898988ffff555544444444444444442222ffff44444444444455555555444444444444ffff444444444444ffffffffffff8988898989888989898889898988898989888989898889898988
        9898989898989898ffff555544444444444444442222ffff44444444444455555555444444444444ffff444444444444ffffffffffff9898989898989898989898989898989898989898989898989898
        8889888988898889ffff555544444444444444442222ffff44444444444455555555444444444444ffff444444444444ffffffffffff8889888988898889888988898889888988898889888988898889
        9898989898989898ffff5555444444444444222222229898ffff44444444444444444444ffffffff444444444444ffffffff989898989898989898989898989898989898989898989898989898989898
        8988898889888988ffff5555444444444444222222228988ffff44444444444444444444ffffffff444444444444ffffffff898889888988898889888988898889888988898889888988898889888988
        9898989898989898ffff5555444444444444222222229898ffff44444444444444444444ffffffff444444444444ffffffff989898989898989898989898989898989898989898989898989898989898
        8888888888888888ffff5555444444444444222222228888ffff44444444444444444444ffffffff444444444444ffffffff888888888888888888888888888888888888888888888888888888888888
        98989898989898989898ffffffffffffffffffffffff98989898ffffffff4444444444444444444444444444ffffffff9898989898989898989898989898989898989898989898989898989898989898
        89888888898888888988ffffffffffffffffffffffff88888988ffffffff4444444444444444444444444444ffffffff8988888889888888898888888988888889888888898888888988888889888888
        98989898989898989898ffffffffffffffffffffffff98989898ffffffff4444444444444444444444444444ffffffff9898989898989898989898989898989898989898989898989898989898989898
        88888888888888888888ffffffffffffffffffffffff88888888ffffffff4444444444444444444444444444ffffffff8888888888888888888888888888888888888888888888888888888888888888
        989898989898989898989898989898989898989898989898989898989898ffffffff4444444444444444ffff22222222ffff989898989898989898989898989898989898989898989898989898989898
        888888888888888888888888888888888888888888888888888888888888ffffffff4444444444444444ffff22222222ffff888888888888888888888888888888888888888888888888888888888888
        889898988898989888989898889898988898989888989898889898988898ffffffff4444444444444444ffff22222222ffff989888989898889898988898989888989898889898988898989888989898
        888888888888888888888888888888888888888888888888888888888888ffffffff4444444444444444ffff22222222ffff888888888888888888888888888888888888888888888888888888888888
        98989898989898989898989898989898989898989898989898989898989898989898ffffffffffffffff222222224444ffff989898989898989898989898989898989898989898989898989898989898
        88888888888888888888888888888888888888888888888888888888888888888888ffffffffffffffff222222224444ffff888888888888888888888888888888888888888888888888888888888888
        88988898889888988898889888988898889888988898889888988898889888988898ffffffffffffffff222222224444ffff889888988898889888988898889888988898889888988898889888988898
        88888888888888888888888888888888888888888888888888888888888888888888ffffffffffffffff222222224444ffff888888888888888888888888888888888888888888888888888888888888
        988898889888988898889888988898889888988898889888988898889888988898889888988898889888ffffffffffff9888988898889888988898889888988898889888988898889888988898889888
        888888888888888888888888888888888888888888888888888888888888888888888888888888888888ffffffffffff8888888888888888888888888888888888888888888888888888888888888888
        889888988898889888988898889888988898889888988898889888988898889888988898889888988898ffffffffffff8898889888988898889888988898889888988898889888988898889888988898
        888888888888888888888888888888888888888888888888888888888888888888888888888888888888ffffffffffff8888888888888888888888888888888888888888888888888888888888888888
        9888988898889888988898889888988898889888988898889888988898889888988898889888988898889888988898889888988898889888988898889888988898889888988898889888988898889888
        8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
        8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
        8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
        8888988888889888888898888888988888889888888898888888988888889888888898888888988888889888888898888888988888889888888898888888988888889888888898888888988888889888
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
        8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
        8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
        8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
        8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
        8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
        8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
        8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
        8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
        `,
    img`
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
        9999899999998999999989999999899999998999999989999999899999998999999989999999899999998999999989999999899999998999999989999999899999998999999989999999899999998999
        9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
        9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
        9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
        8999899989998999899989998999899989998999899989998999899989998999899989998999899989998999899989998999899989998999899989998999899989998999899989998999899989998999
        9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
        9999998999999989999999899999998999999989999999899999998999999989999999899999998999999989999999899999998999999989999999899999998999999989999999899999998999999989
        9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
        8999899989998999899989998999899989998999899989998999899989998999899989998999899989998999899989998999899989998999899989998999899989998999899989998999899989998999
        999999999999999999999999999999999999999999999999999999999999999999999999ffffffffffffffff999999999999999999999999999999999999999999999999999999999999999999999999
        998999899989998999899989998999899989998999899989998999899989998999899989ffffffffffffffff998999899989998999899989998999899989998999899989998999899989998999899989
        999999999999999999999999999999999999999999999999999999999999999999999999ffffffffffffffff999999999999999999999999999999999999999999999999999999999999999999999999
        898989898989898989898989898989898989898989898989898989898989898989898989ffffffffffffffff898989898989898989898989898989898989898989898989898989898989898989898989
        9999999999999999999999999999999999999999999999999999999999999999ffffffff5555555544444444ffff99999999999999999999999999999999999999999999999999999999999999999999
        9989998999899989998999899989998999899989998999899989998999899989ffffffff5555555544444444ffff99899989998999899989998999899989998999899989998999899989998999899989
        9999999999999999999999999999999999999999999999999999999999999999ffffffff5555555544444444ffff99999999999999999999999999999999999999999999999999999999999999999999
        8989898989898989898989898989898989898989898989898989898989898989ffffffff5555555544444444ffff89898989898989898989898989898989898989898989898989898989898989898989
        999999999999999999999999999999999999999999999999999999999999ffffffffffffffffffffffff4444ffff99999999999999999999999999999999999999999999999999999999999999999999
        898989898989898989898989898989898989898989898989898989898989ffffffffffffffffffffffff4444ffff89898989898989898989898989898989898989898989898989898989898989898989
        989999999899999998999999989999999899999998999999989999999899ffffffffffffffffffffffff4444ffff99999899999998999999989999999899999998999999989999999899999998999999
        898989898989898989898989898989898989898989898989898989898989ffffffffffffffffffffffff4444ffff89898989898989898989898989898989898989898989898989898989898989898989
        99999999999999999999999999999999999999999999999999999999ffffffff55555555444444442222ffffffff9999ffffffff99999999999999999999999999999999999999999999999999999999
        89898989898989898989898989898989898989898989898989898989ffffffff55555555444444442222ffffffff8989ffffffff89898989898989898989898989898989898989898989898989898989
        98999899989998999899989998999899989998999899989998999899ffffffff55555555444444442222ffffffff9899ffffffff98999899989998999899989998999899989998999899989998999899
        89898989898989898989898989898989898989898989898989898989ffffffff55555555444444442222ffffffff8989ffffffff89898989898989898989898989898989898989898989898989898989
        9998999999989999999899999998999999989999999899999998ffff11115555444444444444444444442222ffffffff5555ffff99989999999899999998999999989999999899999998999999989999
        8989898989898989898989898989898989898989898989898989ffff11115555444444444444444444442222ffffffff5555ffff89898989898989898989898989898989898989898989898989898989
        9899989998999899989998999899989998999899989998999899ffff11115555444444444444444444442222ffffffff5555ffff98999899989998999899989998999899989998999899989998999899
        8989898989898989898989898989898989898989898989898989ffff11115555444444444444444444442222ffffffff5555ffff89898989898989898989898989898989898989898989898989898989
        999899989998999899989998ffffffffffffffff99989998ffff1111444444444444444444444444444444444444ffff4444ffff99989998999899989998999899989998999899989998999899989998
        898989898989898989898989ffffffffffffffff89898989ffff1111444444444444444444444444444444444444ffff4444ffff89898989898989898989898989898989898989898989898989898989
        989998989899989898999898ffffffffffffffff98999898ffff1111444444444444444444444444444444444444ffff4444ffff98999898989998989899989898999898989998989899989898999898
        898989898989898989898989ffffffffffffffff89898989ffff1111444444444444444444444444444444444444ffff4444ffff89898989898989898989898989898989898989898989898989898989
        98989998989899989898ffff11114444444455559898ffff1111444444444444444444444444444444444444444444444444ffff98989998989899989898999898989998989899989898999898989998
        89898989898989898989ffff11114444444455558989ffff1111444444444444444444444444444444444444444444444444ffff89898989898989898989898989898989898989898989898989898989
        98989898989898989898ffff11114444444455559898ffff1111444444444444444444444444444444444444444444444444ffff98989898989898989898989898989898989898989898989898989898
        89898989898989898989ffff11114444444455558989ffff1111444444444444444444444444444444444444444444444444ffff89898989898989898989898989898989898989898989898989898989
        9898989898989898ffff11114444444444444444ffff444444444444ffff555544444444ffffffff444444444444ffff2222ffff98989898989898989898989898989898989898989898989898989898
        8989898989898989ffff11114444444444444444ffff444444444444ffff555544444444ffffffff444444444444ffff2222ffff89898989898989898989898989898989898989898989898989898989
        9898989898989898ffff11114444444444444444ffff444444444444ffff555544444444ffffffff444444444444ffff2222ffff98989898989898989898989898989898989898989898989898989898
        8989888989898889ffff11114444444444444444ffff444444444444ffff555544444444ffffffff444444444444ffff2222ffff89898889898988898989888989898889898988898989888989898889
        9898989898989898ffff11114444ffff44444444ffff444444444444ffff55554444ffff5555ffff444444444444ffff2222ffff98989898989898989898989898989898989898989898989898989898
        8989898989898989ffff11114444ffff44444444ffff444444444444ffff55554444ffff5555ffff444444444444ffff2222ffff89898989898989898989898989898989898989898989898989898989
        9898989898989898ffff11114444ffff44444444ffff444444444444ffff55554444ffff5555ffff444444444444ffff2222ffff98989898989898989898989898989898989898989898989898989898
        8889888988898889ffff11114444ffff44444444ffff444444444444ffff55554444ffff5555ffff444444444444ffff2222ffff88898889888988898889888988898889888988898889888988898889
        9898989898989898ffff55554444444444444444ffff44444444444455555555444444444444ffff444444444444ffffffffffff98989898989898989898989898989898989898989898989898989898
        8989898889898988ffff55554444444444444444ffff44444444444455555555444444444444ffff444444444444ffffffffffff89898988898989888989898889898988898989888989898889898988
        9898989898989898ffff55554444444444444444ffff44444444444455555555444444444444ffff444444444444ffffffffffff98989898989898989898989898989898989898989898989898989898
        8889888988898889ffff55554444444444444444ffff44444444444455555555444444444444ffff444444444444ffffffffffff88898889888988898889888988898889888988898889888988898889
        9898989898989898ffff555544444444444422229898ffff44444444444444444444ffffffff444444444444ffffffff9898989898989898989898989898989898989898989898989898989898989898
        8988898889888988ffff555544444444444422228988ffff44444444444444444444ffffffff444444444444ffffffff8988898889888988898889888988898889888988898889888988898889888988
        9898989898989898ffff555544444444444422229898ffff44444444444444444444ffffffff444444444444ffffffff9898989898989898989898989898989898989898989898989898989898989898
        8888888888888888ffff555544444444444422228888ffff44444444444444444444ffffffff444444444444ffffffff8888888888888888888888888888888888888888888888888888888888888888
        98989898989898989898ffffffffffffffffffff98989898ffffffff4444444444444444444444444444ffffffff98989898989898989898989898989898989898989898989898989898989898989898
        89888888898888888988ffffffffffffffffffff89888888ffffffff4444444444444444444444444444ffffffff88888988888889888888898888888988888889888888898888888988888889888888
        98989898989898989898ffffffffffffffffffff98989898ffffffff4444444444444444444444444444ffffffff98989898989898989898989898989898989898989898989898989898989898989898
        88888888888888888888ffffffffffffffffffff88888888ffffffff4444444444444444444444444444ffffffff88888888888888888888888888888888888888888888888888888888888888888888
        98989898989898989898989898989898989898989898989898989898ffffffff4444444444444444ffff22222222ffff9898989898989898989898989898989898989898989898989898989898989898
        88888888888888888888888888888888888888888888888888888888ffffffff4444444444444444ffff22222222ffff8888888888888888888888888888888888888888888888888888888888888888
        88989898889898988898989888989898889898988898989888989898ffffffff4444444444444444ffff22222222ffff8898989888989898889898988898989888989898889898988898989888989898
        88888888888888888888888888888888888888888888888888888888ffffffff4444444444444444ffff22222222ffff8888888888888888888888888888888888888888888888888888888888888888
        9898989898989898989898989898989898989898989898989898989898989898ffffffffffffffff222222224444ffff9898989898989898989898989898989898989898989898989898989898989898
        8888888888888888888888888888888888888888888888888888888888888888ffffffffffffffff222222224444ffff8888888888888888888888888888888888888888888888888888888888888888
        8898889888988898889888988898889888988898889888988898889888988898ffffffffffffffff222222224444ffff8898889888988898889888988898889888988898889888988898889888988898
        8888888888888888888888888888888888888888888888888888888888888888ffffffffffffffff222222224444ffff8888888888888888888888888888888888888888888888888888888888888888
        98889888988898889888988898889888988898889888988898889888988898889888988898889888ffffffffffff98889888988898889888988898889888988898889888988898889888988898889888
        88888888888888888888888888888888888888888888888888888888888888888888888888888888ffffffffffff88888888888888888888888888888888888888888888888888888888888888888888
        88988898889888988898889888988898889888988898889888988898889888988898889888988898ffffffffffff88988898889888988898889888988898889888988898889888988898889888988898
        88888888888888888888888888888888888888888888888888888888888888888888888888888888ffffffffffff88888888888888888888888888888888888888888888888888888888888888888888
        9888988898889888988898889888988898889888988898889888988898889888988898889888988898889888988898889888988898889888988898889888988898889888988898889888988898889888
        8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
        8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
        8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
        8888988888889888888898888888988888889888888898888888988888889888888898888888988888889888888898888888988888889888888898888888988888889888888898888888988888889888
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
        8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
        8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
        8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
        8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
        8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
        8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
        8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
        8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
        `,
    img`
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
        9999899999998999999989999999899999998999999989999999899999998999999989999999899999998999999989999999899999998999999989999999899999998999999989999999899999998999
        9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
        9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
        9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
        8999899989998999899989998999899989998999899989998999899989998999899989998999899989998999899989998999899989998999899989998999899989998999899989998999899989998999
        9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
        9999998999999989999999899999998999999989999999899999998999999989999999899999998999999989999999899999998999999989999999899999998999999989999999899999998999999989
        9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
        8999899989998999899989998999899989998999899989998999899989998999899989998999899989998999899989998999899989998999899989998999899989998999899989998999899989998999
        99999999999999999999999999999999999999999999999999999999999999999999ffffffffffffffff9999999999999999999999999999999999999999999999999999999999999999999999999999
        99899989998999899989998999899989998999899989998999899989998999899989ffffffffffffffff9989998999899989998999899989998999899989998999899989998999899989998999899989
        99999999999999999999999999999999999999999999999999999999999999999999ffffffffffffffff9999999999999999999999999999999999999999999999999999999999999999999999999999
        89898989898989898989898989898989898989898989898989898989898989898989ffffffffffffffff8989898989898989898989898989898989898989898989898989898989898989898989898989
        999999999999999999999999999999999999999999999999999999999999ffffffff5555555544444444ffff999999999999999999999999999999999999999999999999999999999999999999999999
        998999899989998999899989998999899989998999899989998999899989ffffffff5555555544444444ffff998999899989998999899989998999899989998999899989998999899989998999899989
        999999999999999999999999999999999999999999999999999999999999ffffffff5555555544444444ffff999999999999999999999999999999999999999999999999999999999999999999999999
        898989898989898989898989898989898989898989898989898989898989ffffffff5555555544444444ffff898989898989898989898989898989898989898989898989898989898989898989898989
        99999999999999999999999999999999999999999999999999999999ffffffffffffffffffffffff4444ffff999999999999999999999999999999999999999999999999999999999999999999999999
        89898989898989898989898989898989898989898989898989898989ffffffffffffffffffffffff4444ffff898989898989898989898989898989898989898989898989898989898989898989898989
        98999999989999999899999998999999989999999899999998999999ffffffffffffffffffffffff4444ffff989999999899999998999999989999999899999998999999989999999899999998999999
        89898989898989898989898989898989898989898989898989898989ffffffffffffffffffffffff4444ffff898989898989898989898989898989898989898989898989898989898989898989898989
        9999999999999999999999999999999999999999999999999999ffffffff55555555444444442222ffffffff9999ffffffff999999999999999999999999999999999999999999999999999999999999
        8989898989898989898989898989898989898989898989898989ffffffff55555555444444442222ffffffff8989ffffffff898989898989898989898989898989898989898989898989898989898989
        9899989998999899989998999899989998999899989998999899ffffffff55555555444444442222ffffffff9899ffffffff989998999899989998999899989998999899989998999899989998999899
        8989898989898989898989898989898989898989898989898989ffffffff55555555444444442222ffffffff8989ffffffff898989898989898989898989898989898989898989898989898989898989
        999899999998999999989999999899999998999999989999ffff11115555444444444444444444442222ffffffff5555ffff999999989999999899999998999999989999999899999998999999989999
        898989898989898989898989898989898989898989898989ffff11115555444444444444444444442222ffffffff5555ffff898989898989898989898989898989898989898989898989898989898989
        989998999899989998999899989998999899989998999899ffff11115555444444444444444444442222ffffffff5555ffff989998999899989998999899989998999899989998999899989998999899
        898989898989898989898989898989898989898989898989ffff11115555444444444444444444442222ffffffff5555ffff898989898989898989898989898989898989898989898989898989898989
        999899989998999899989998ffffffffffff99989998ffff1111444444444444444444444444444444444444ffff4444ffff999899989998999899989998999899989998999899989998999899989998
        898989898989898989898989ffffffffffff89898989ffff1111444444444444444444444444444444444444ffff4444ffff898989898989898989898989898989898989898989898989898989898989
        989998989899989898999898ffffffffffff98989899ffff1111444444444444444444444444444444444444ffff4444ffff989898999898989998989899989898999898989998989899989898999898
        898989898989898989898989ffffffffffff89898989ffff1111444444444444444444444444444444444444ffff4444ffff898989898989898989898989898989898989898989898989898989898989
        98989998989899989898ffff1111444444449998ffff1111444444444444444444444444444444444444444444444444ffff999898989998989899989898999898989998989899989898999898989998
        89898989898989898989ffff1111444444448989ffff1111444444444444444444444444444444444444444444444444ffff898989898989898989898989898989898989898989898989898989898989
        98989898989898989898ffff1111444444449898ffff1111444444444444444444444444444444444444444444444444ffff989898989898989898989898989898989898989898989898989898989898
        89898989898989898989ffff1111444444448989ffff1111444444444444444444444444444444444444444444444444ffff898989898989898989898989898989898989898989898989898989898989
        9898989898989898ffff1111444444444444ffff444444444444ffff555544444444ffffffff444444444444ffff2222ffff989898989898989898989898989898989898989898989898989898989898
        8989898989898989ffff1111444444444444ffff444444444444ffff555544444444ffffffff444444444444ffff2222ffff898989898989898989898989898989898989898989898989898989898989
        9898989898989898ffff1111444444444444ffff444444444444ffff555544444444ffffffff444444444444ffff2222ffff989898989898989898989898989898989898989898989898989898989898
        8989888989898889ffff1111444444444444ffff444444444444ffff555544444444ffffffff444444444444ffff2222ffff888989898889898988898989888989898889898988898989888989898889
        9898989898989898ffff11114444ffff4444ffff444444444444ffff55554444ffff5555ffff444444444444ffff2222ffff989898989898989898989898989898989898989898989898989898989898
        8989898989898989ffff11114444ffff4444ffff444444444444ffff55554444ffff5555ffff444444444444ffff2222ffff898989898989898989898989898989898989898989898989898989898989
        9898989898989898ffff11114444ffff4444ffff444444444444ffff55554444ffff5555ffff444444444444ffff2222ffff989898989898989898989898989898989898989898989898989898989898
        8889888988898889ffff11114444ffff4444ffff444444444444ffff55554444ffff5555ffff444444444444ffff2222ffff888988898889888988898889888988898889888988898889888988898889
        9898989898989898ffff5555444444444444ffff44444444444455555555444444444444ffff444444444444ffffffffffff989898989898989898989898989898989898989898989898989898989898
        8989898889898988ffff5555444444444444ffff44444444444455555555444444444444ffff444444444444ffffffffffff898889898988898989888989898889898988898989888989898889898988
        9898989898989898ffff5555444444444444ffff44444444444455555555444444444444ffff444444444444ffffffffffff989898989898989898989898989898989898989898989898989898989898
        8889888988898889ffff5555444444444444ffff44444444444455555555444444444444ffff444444444444ffffffffffff888988898889888988898889888988898889888988898889888988898889
        9898989898989898ffff55554444444444449898ffff44444444444444444444ffffffff444444444444ffffffff98989898989898989898989898989898989898989898989898989898989898989898
        8988898889888988ffff55554444444444448988ffff44444444444444444444ffffffff444444444444ffffffff89888988898889888988898889888988898889888988898889888988898889888988
        9898989898989898ffff55554444444444449898ffff44444444444444444444ffffffff444444444444ffffffff98989898989898989898989898989898989898989898989898989898989898989898
        8888888888888888ffff55554444444444448888ffff44444444444444444444ffffffff444444444444ffffffff88888888888888888888888888888888888888888888888888888888888888888888
        98989898989898989898ffffffffffffffff98989898ffffffff4444444444444444444444444444ffffffff989898989898989898989898989898989898989898989898989898989898989898989898
        89888888898888888988ffffffffffffffff88888988ffffffff4444444444444444444444444444ffffffff898888888988888889888888898888888988888889888888898888888988888889888888
        98989898989898989898ffffffffffffffff98989898ffffffff4444444444444444444444444444ffffffff989898989898989898989898989898989898989898989898989898989898989898989898
        88888888888888888888ffffffffffffffff88888888ffffffff4444444444444444444444444444ffffffff888888888888888888888888888888888888888888888888888888888888888888888888
        9898989898989898989898989898989898989898989898989898ffffffff4444444444444444ffff22222222ffff98989898989898989898989898989898989898989898989898989898989898989898
        8888888888888888888888888888888888888888888888888888ffffffff4444444444444444ffff22222222ffff88888888888888888888888888888888888888888888888888888888888888888888
        8898989888989898889898988898989888989898889898988898ffffffff4444444444444444ffff22222222ffff98988898989888989898889898988898989888989898889898988898989888989898
        8888888888888888888888888888888888888888888888888888ffffffff4444444444444444ffff22222222ffff88888888888888888888888888888888888888888888888888888888888888888888
        989898989898989898989898989898989898989898989898989898989898ffffffffffffffff222222224444ffff98989898989898989898989898989898989898989898989898989898989898989898
        888888888888888888888888888888888888888888888888888888888888ffffffffffffffff222222224444ffff88888888888888888888888888888888888888888888888888888888888888888888
        889888988898889888988898889888988898889888988898889888988898ffffffffffffffff222222224444ffff88988898889888988898889888988898889888988898889888988898889888988898
        888888888888888888888888888888888888888888888888888888888888ffffffffffffffff222222224444ffff88888888888888888888888888888888888888888888888888888888888888888888
        9888988898889888988898889888988898889888988898889888988898889888988898889888ffffffffffff988898889888988898889888988898889888988898889888988898889888988898889888
        8888888888888888888888888888888888888888888888888888888888888888888888888888ffffffffffff888888888888888888888888888888888888888888888888888888888888888888888888
        8898889888988898889888988898889888988898889888988898889888988898889888988898ffffffffffff889888988898889888988898889888988898889888988898889888988898889888988898
        8888888888888888888888888888888888888888888888888888888888888888888888888888ffffffffffff888888888888888888888888888888888888888888888888888888888888888888888888
        9888988898889888988898889888988898889888988898889888988898889888988898889888988898889888988898889888988898889888988898889888988898889888988898889888988898889888
        8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
        8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
        8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
        8888988888889888888898888888988888889888888898888888988888889888888898888888988888889888888898888888988888889888888898888888988888889888888898888888988888889888
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
        8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
        8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
        8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
        8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
        8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
        8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
        8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
        8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
        `,
    img`
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
        9999899999998999999989999999899999998999999989999999899999998999999989999999899999998999999989999999899999998999999989999999899999998999999989999999899999998999
        9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
        9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
        9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
        8999899989998999899989998999899989998999899989998999899989998999899989998999899989998999899989998999899989998999899989998999899989998999899989998999899989998999
        9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
        9999998999999989999999899999998999999989999999899999998999999989999999899999998999999989999999899999998999999989999999899999998999999989999999899999998999999989
        9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
        8999899989998999899989998999899989998999899989998999899989998999899989998999899989998999899989998999899989998999899989998999899989998999899989998999899989998999
        9999999999999999999999999999999999999999999999999999999999999999ffffffffffffffff99999999999999999999999999999999999999999999999999999999999999999999999999999999
        9989998999899989998999899989998999899989998999899989998999899989ffffffffffffffff99899989998999899989998999899989998999899989998999899989998999899989998999899989
        9999999999999999999999999999999999999999999999999999999999999999ffffffffffffffff99999999999999999999999999999999999999999999999999999999999999999999999999999999
        8989898989898989898989898989898989898989898989898989898989898989ffffffffffffffff89898989898989898989898989898989898989898989898989898989898989898989898989898989
        99999999999999999999999999999999999999999999999999999999ffffffff5555555544444444ffff9999999999999999999999999999999999999999999999999999999999999999999999999999
        99899989998999899989998999899989998999899989998999899989ffffffff5555555544444444ffff9989998999899989998999899989998999899989998999899989998999899989998999899989
        99999999999999999999999999999999999999999999999999999999ffffffff5555555544444444ffff9999999999999999999999999999999999999999999999999999999999999999999999999999
        89898989898989898989898989898989898989898989898989898989ffffffff5555555544444444ffff8989898989898989898989898989898989898989898989898989898989898989898989898989
        9999999999999999999999999999999999999999999999999999ffffffffffffffffffffffff4444ffff9999999999999999999999999999999999999999999999999999999999999999999999999999
        8989898989898989898989898989898989898989898989898989ffffffffffffffffffffffff4444ffff8989898989898989898989898989898989898989898989898989898989898989898989898989
        9899999998999999989999999899999998999999989999999899ffffffffffffffffffffffff4444ffff9999989999999899999998999999989999999899999998999999989999999899999998999999
        8989898989898989898989898989898989898989898989898989ffffffffffffffffffffffff4444ffff8989898989898989898989898989898989898989898989898989898989898989898989898989
        999999999999999999999999999999999999999999999999ffffffff55555555444444442222ffffffff9999ffffffff9999999999999999999999999999999999999999999999999999999999999999
        898989898989898989898989898989898989898989898989ffffffff55555555444444442222ffffffff8989ffffffff8989898989898989898989898989898989898989898989898989898989898989
        989998999899989998999899989998999899989998999899ffffffff55555555444444442222ffffffff9899ffffffff9899989998999899989998999899989998999899989998999899989998999899
        898989898989898989898989898989898989898989898989ffffffff55555555444444442222ffffffff8989ffffffff8989898989898989898989898989898989898989898989898989898989898989
        99989999999899999998999999989999999899999998ffff11115555444444444444444444442222ffffffff5555ffff9998999999989999999899999998999999989999999899999998999999989999
        89898989898989898989898989898989898989898989ffff11115555444444444444444444442222ffffffff5555ffff8989898989898989898989898989898989898989898989898989898989898989
        98999899989998999899989998999899989998999899ffff11115555444444444444444444442222ffffffff5555ffff9899989998999899989998999899989998999899989998999899989998999899
        89898989898989898989898989898989898989898989ffff11115555444444444444444444442222ffffffff5555ffff8989898989898989898989898989898989898989898989898989898989898989
        999899989998999899989998ffffffff99989998ffff1111444444444444444444444444444444444444ffff4444ffff9998999899989998999899989998999899989998999899989998999899989998
        898989898989898989898989ffffffff89898989ffff1111444444444444444444444444444444444444ffff4444ffff8989898989898989898989898989898989898989898989898989898989898989
        989998989899989898999898ffffffff98999898ffff1111444444444444444444444444444444444444ffff4444ffff9899989898999898989998989899989898999898989998989899989898999898
        898989898989898989898989ffffffff89898989ffff1111444444444444444444444444444444444444ffff4444ffff8989898989898989898989898989898989898989898989898989898989898989
        98989998989899989898ffff111144449898ffff1111444444444444444444444444444444444444444444444444ffff9898999898989998989899989898999898989998989899989898999898989998
        89898989898989898989ffff111144448989ffff1111444444444444444444444444444444444444444444444444ffff8989898989898989898989898989898989898989898989898989898989898989
        98989898989898989898ffff111144449898ffff1111444444444444444444444444444444444444444444444444ffff9898989898989898989898989898989898989898989898989898989898989898
        89898989898989898989ffff111144448989ffff1111444444444444444444444444444444444444444444444444ffff8989898989898989898989898989898989898989898989898989898989898989
        9898989898989898ffff111144444444ffff444444444444ffff555544444444ffffffff444444444444ffff2222ffff9898989898989898989898989898989898989898989898989898989898989898
        8989898989898989ffff111144444444ffff444444444444ffff555544444444ffffffff444444444444ffff2222ffff8989898989898989898989898989898989898989898989898989898989898989
        9898989898989898ffff111144444444ffff444444444444ffff555544444444ffffffff444444444444ffff2222ffff9898989898989898989898989898989898989898989898989898989898989898
        8989888989898889ffff111144444444ffff444444444444ffff555544444444ffffffff444444444444ffff2222ffff8989888989898889898988898989888989898889898988898989888989898889
        9898989898989898ffff11114444ffffffff444444444444ffff55554444ffff5555ffff444444444444ffff2222ffff9898989898989898989898989898989898989898989898989898989898989898
        8989898989898989ffff11114444ffffffff444444444444ffff55554444ffff5555ffff444444444444ffff2222ffff8989898989898989898989898989898989898989898989898989898989898989
        9898989898989898ffff11114444ffffffff444444444444ffff55554444ffff5555ffff444444444444ffff2222ffff9898989898989898989898989898989898989898989898989898989898989898
        8889888988898889ffff11114444ffffffff444444444444ffff55554444ffff5555ffff444444444444ffff2222ffff8889888988898889888988898889888988898889888988898889888988898889
        9898989898989898ffff555544444444ffff44444444444455555555444444444444ffff444444444444ffffffffffff9898989898989898989898989898989898989898989898989898989898989898
        8989898889898988ffff555544444444ffff44444444444455555555444444444444ffff444444444444ffffffffffff8989898889898988898989888989898889898988898989888989898889898988
        9898989898989898ffff555544444444ffff44444444444455555555444444444444ffff444444444444ffffffffffff9898989898989898989898989898989898989898989898989898989898989898
        8889888988898889ffff555544444444ffff44444444444455555555444444444444ffff444444444444ffffffffffff8889888988898889888988898889888988898889888988898889888988898889
        9898989898989898ffff5555444444449898ffff44444444444444444444ffffffff444444444444ffffffff989898989898989898989898989898989898989898989898989898989898989898989898
        8988898889888988ffff5555444444448988ffff44444444444444444444ffffffff444444444444ffffffff898889888988898889888988898889888988898889888988898889888988898889888988
        9898989898989898ffff5555444444449898ffff44444444444444444444ffffffff444444444444ffffffff989898989898989898989898989898989898989898989898989898989898989898989898
        8888888888888888ffff5555444444448888ffff44444444444444444444ffffffff444444444444ffffffff888888888888888888888888888888888888888888888888888888888888888888888888
        98989898989898989898ffffffffffff98989898ffffffff4444444444444444444444444444ffffffff9898989898989898989898989898989898989898989898989898989898989898989898989898
        89888888898888888988ffffffffffff89888888ffffffff4444444444444444444444444444ffffffff8888898888888988888889888888898888888988888889888888898888888988888889888888
        98989898989898989898ffffffffffff98989898ffffffff4444444444444444444444444444ffffffff9898989898989898989898989898989898989898989898989898989898989898989898989898
        88888888888888888888ffffffffffff88888888ffffffff4444444444444444444444444444ffffffff8888888888888888888888888888888888888888888888888888888888888888888888888888
        989898989898989898989898989898989898989898989898ffffffff4444444444444444ffff22222222ffff989898989898989898989898989898989898989898989898989898989898989898989898
        888888888888888888888888888888888888888888888888ffffffff4444444444444444ffff22222222ffff888888888888888888888888888888888888888888888888888888888888888888888888
        889898988898989888989898889898988898989888989898ffffffff4444444444444444ffff22222222ffff889898988898989888989898889898988898989888989898889898988898989888989898
        888888888888888888888888888888888888888888888888ffffffff4444444444444444ffff22222222ffff888888888888888888888888888888888888888888888888888888888888888888888888
        98989898989898989898989898989898989898989898989898989898ffffffffffffffff222222224444ffff989898989898989898989898989898989898989898989898989898989898989898989898
        88888888888888888888888888888888888888888888888888888888ffffffffffffffff222222224444ffff888888888888888888888888888888888888888888888888888888888888888888888888
        88988898889888988898889888988898889888988898889888988898ffffffffffffffff222222224444ffff889888988898889888988898889888988898889888988898889888988898889888988898
        88888888888888888888888888888888888888888888888888888888ffffffffffffffff222222224444ffff888888888888888888888888888888888888888888888888888888888888888888888888
        988898889888988898889888988898889888988898889888988898889888988898889888ffffffffffff9888988898889888988898889888988898889888988898889888988898889888988898889888
        888888888888888888888888888888888888888888888888888888888888888888888888ffffffffffff8888888888888888888888888888888888888888888888888888888888888888888888888888
        889888988898889888988898889888988898889888988898889888988898889888988898ffffffffffff8898889888988898889888988898889888988898889888988898889888988898889888988898
        888888888888888888888888888888888888888888888888888888888888888888888888ffffffffffff8888888888888888888888888888888888888888888888888888888888888888888888888888
        9888988898889888988898889888988898889888988898889888988898889888988898889888988898889888988898889888988898889888988898889888988898889888988898889888988898889888
        8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
        8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
        8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
        8888988888889888888898888888988888889888888898888888988888889888888898888888988888889888888898888888988888889888888898888888988888889888888898888888988888889888
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
        8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
        8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
        8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
        8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
        8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
        8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
        8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
        8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
        `,
    img`
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
        9999899999998999999989999999899999998999999989999999899999998999999989999999899999998999999989999999899999998999999989999999899999998999999989999999899999998999
        9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
        9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
        9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
        8999899989998999899989998999899989998999899989998999899989998999899989998999899989998999899989998999899989998999899989998999899989998999899989998999899989998999
        9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
        9999998999999989999999899999998999999989999999899999998999999989999999899999998999999989999999899999998999999989999999899999998999999989999999899999998999999989
        9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
        8999899989998999899989998999899989998999899989998999899989998999899989998999899989998999899989998999899989998999899989998999899989998999899989998999899989998999
        999999999999999999999999999999999999999999999999999999999999ffffffffffffffff999999999999999999999999999999999999999999999999999999999999999999999999999999999999
        998999899989998999899989998999899989998999899989998999899989ffffffffffffffff998999899989998999899989998999899989998999899989998999899989998999899989998999899989
        999999999999999999999999999999999999999999999999999999999999ffffffffffffffff999999999999999999999999999999999999999999999999999999999999999999999999999999999999
        898989898989898989898989898989898989898989898989898989898989ffffffffffffffff898989898989898989898989898989898989898989898989898989898989898989898989898989898989
        9999999999999999999999999999999999999999999999999999ffffffff5555555544444444ffff99999999999999999999999999999999999999999999999999999999999999999999999999999999
        9989998999899989998999899989998999899989998999899989ffffffff5555555544444444ffff99899989998999899989998999899989998999899989998999899989998999899989998999899989
        9999999999999999999999999999999999999999999999999999ffffffff5555555544444444ffff99999999999999999999999999999999999999999999999999999999999999999999999999999999
        8989898989898989898989898989898989898989898989898989ffffffff5555555544444444ffff89898989898989898989898989898989898989898989898989898989898989898989898989898989
        999999999999999999999999999999999999999999999999ffffffffffffffffffffffff4444ffff99999999999999999999999999999999999999999999999999999999999999999999999999999999
        898989898989898989898989898989898989898989898989ffffffffffffffffffffffff4444ffff89898989898989898989898989898989898989898989898989898989898989898989898989898989
        989999999899999998999999989999999899999998999999ffffffffffffffffffffffff4444ffff98999999989999999899999998999999989999999899999998999999989999999899999998999999
        898989898989898989898989898989898989898989898989ffffffffffffffffffffffff4444ffff89898989898989898989898989898989898989898989898989898989898989898989898989898989
        99999999999999999999999999999999999999999999ffffffff55555555444444442222ffffffff9999ffffffff99999999999999999999999999999999999999999999999999999999999999999999
        89898989898989898989898989898989898989898989ffffffff55555555444444442222ffffffff8989ffffffff89898989898989898989898989898989898989898989898989898989898989898989
        98999899989998999899989998999899989998999899ffffffff55555555444444442222ffffffff9899ffffffff98999899989998999899989998999899989998999899989998999899989998999899
        89898989898989898989898989898989898989898989ffffffff55555555444444442222ffffffff8989ffffffff89898989898989898989898989898989898989898989898989898989898989898989
        9998999999989999999899999998999999989999ffff11115555444444444444444444442222ffffffff5555ffff99999998999999989999999899999998999999989999999899999998999999989999
        8989898989898989898989898989898989898989ffff11115555444444444444444444442222ffffffff5555ffff89898989898989898989898989898989898989898989898989898989898989898989
        9899989998999899989998999899989998999899ffff11115555444444444444444444442222ffffffff5555ffff98999899989998999899989998999899989998999899989998999899989998999899
        8989898989898989898989898989898989898989ffff11115555444444444444444444442222ffffffff5555ffff89898989898989898989898989898989898989898989898989898989898989898989
        999899989998999899989998ffff99989998ffff1111444444444444444444444444444444444444ffff4444ffff99989998999899989998999899989998999899989998999899989998999899989998
        898989898989898989898989ffff89898989ffff1111444444444444444444444444444444444444ffff4444ffff89898989898989898989898989898989898989898989898989898989898989898989
        989998989899989898999898ffff98989899ffff1111444444444444444444444444444444444444ffff4444ffff98989899989898999898989998989899989898999898989998989899989898999898
        898989898989898989898989ffff89898989ffff1111444444444444444444444444444444444444ffff4444ffff89898989898989898989898989898989898989898989898989898989898989898989
        98989998989899989898ffff11119998ffff1111444444444444444444444444444444444444444444444444ffff99989898999898989998989899989898999898989998989899989898999898989998
        89898989898989898989ffff11118989ffff1111444444444444444444444444444444444444444444444444ffff89898989898989898989898989898989898989898989898989898989898989898989
        98989898989898989898ffff11119898ffff1111444444444444444444444444444444444444444444444444ffff98989898989898989898989898989898989898989898989898989898989898989898
        89898989898989898989ffff11118989ffff1111444444444444444444444444444444444444444444444444ffff89898989898989898989898989898989898989898989898989898989898989898989
        9898989898989898ffff11114444ffff444444444444ffff555544444444ffffffff444444444444ffff2222ffff98989898989898989898989898989898989898989898989898989898989898989898
        8989898989898989ffff11114444ffff444444444444ffff555544444444ffffffff444444444444ffff2222ffff89898989898989898989898989898989898989898989898989898989898989898989
        9898989898989898ffff11114444ffff444444444444ffff555544444444ffffffff444444444444ffff2222ffff98989898989898989898989898989898989898989898989898989898989898989898
        8989888989898889ffff11114444ffff444444444444ffff555544444444ffffffff444444444444ffff2222ffff88898989888989898889898988898989888989898889898988898989888989898889
        9898989898989898ffff11114444ffff444444444444ffff55554444ffff5555ffff444444444444ffff2222ffff98989898989898989898989898989898989898989898989898989898989898989898
        8989898989898989ffff11114444ffff444444444444ffff55554444ffff5555ffff444444444444ffff2222ffff89898989898989898989898989898989898989898989898989898989898989898989
        9898989898989898ffff11114444ffff444444444444ffff55554444ffff5555ffff444444444444ffff2222ffff98989898989898989898989898989898989898989898989898989898989898989898
        8889888988898889ffff11114444ffff444444444444ffff55554444ffff5555ffff444444444444ffff2222ffff88898889888988898889888988898889888988898889888988898889888988898889
        9898989898989898ffff55554444ffff44444444444455555555444444444444ffff444444444444ffffffffffff98989898989898989898989898989898989898989898989898989898989898989898
        8989898889898988ffff55554444ffff44444444444455555555444444444444ffff444444444444ffffffffffff89888989898889898988898989888989898889898988898989888989898889898988
        9898989898989898ffff55554444ffff44444444444455555555444444444444ffff444444444444ffffffffffff98989898989898989898989898989898989898989898989898989898989898989898
        8889888988898889ffff55554444ffff44444444444455555555444444444444ffff444444444444ffffffffffff88898889888988898889888988898889888988898889888988898889888988898889
        9898989898989898ffff555544449898ffff44444444444444444444ffffffff444444444444ffffffff9898989898989898989898989898989898989898989898989898989898989898989898989898
        8988898889888988ffff555544448988ffff44444444444444444444ffffffff444444444444ffffffff8988898889888988898889888988898889888988898889888988898889888988898889888988
        9898989898989898ffff555544449898ffff44444444444444444444ffffffff444444444444ffffffff9898989898989898989898989898989898989898989898989898989898989898989898989898
        8888888888888888ffff555544448888ffff44444444444444444444ffffffff444444444444ffffffff8888888888888888888888888888888888888888888888888888888888888888888888888888
        98989898989898989898ffffffff98989898ffffffff4444444444444444444444444444ffffffff98989898989898989898989898989898989898989898989898989898989898989898989898989898
        89888888898888888988ffffffff88888988ffffffff4444444444444444444444444444ffffffff89888888898888888988888889888888898888888988888889888888898888888988888889888888
        98989898989898989898ffffffff98989898ffffffff4444444444444444444444444444ffffffff98989898989898989898989898989898989898989898989898989898989898989898989898989898
        88888888888888888888ffffffff88888888ffffffff4444444444444444444444444444ffffffff88888888888888888888888888888888888888888888888888888888888888888888888888888888
        98989898989898989898989898989898989898989898ffffffff4444444444444444ffff22222222ffff9898989898989898989898989898989898989898989898989898989898989898989898989898
        88888888888888888888888888888888888888888888ffffffff4444444444444444ffff22222222ffff8888888888888888888888888888888888888888888888888888888888888888888888888888
        88989898889898988898989888989898889898988898ffffffff4444444444444444ffff22222222ffff9898889898988898989888989898889898988898989888989898889898988898989888989898
        88888888888888888888888888888888888888888888ffffffff4444444444444444ffff22222222ffff8888888888888888888888888888888888888888888888888888888888888888888888888888
        9898989898989898989898989898989898989898989898989898ffffffffffffffff222222224444ffff9898989898989898989898989898989898989898989898989898989898989898989898989898
        8888888888888888888888888888888888888888888888888888ffffffffffffffff222222224444ffff8888888888888888888888888888888888888888888888888888888888888888888888888888
        8898889888988898889888988898889888988898889888988898ffffffffffffffff222222224444ffff8898889888988898889888988898889888988898889888988898889888988898889888988898
        8888888888888888888888888888888888888888888888888888ffffffffffffffff222222224444ffff8888888888888888888888888888888888888888888888888888888888888888888888888888
        98889888988898889888988898889888988898889888988898889888988898889888ffffffffffff98889888988898889888988898889888988898889888988898889888988898889888988898889888
        88888888888888888888888888888888888888888888888888888888888888888888ffffffffffff88888888888888888888888888888888888888888888888888888888888888888888888888888888
        88988898889888988898889888988898889888988898889888988898889888988898ffffffffffff88988898889888988898889888988898889888988898889888988898889888988898889888988898
        88888888888888888888888888888888888888888888888888888888888888888888ffffffffffff88888888888888888888888888888888888888888888888888888888888888888888888888888888
        9888988898889888988898889888988898889888988898889888988898889888988898889888988898889888988898889888988898889888988898889888988898889888988898889888988898889888
        8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
        8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
        8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
        8888988888889888888898888888988888889888888898888888988888889888888898888888988888889888888898888888988888889888888898888888988888889888888898888888988888889888
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
        8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
        8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
        8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
        8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
        8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
        8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
        8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
        8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
        `,
    img`
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
        9999899999998999999989999999899999998999999989999999899999998999999989999999899999998999999989999999899999998999999989999999899999998999999989999999899999998999
        9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
        9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
        9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
        8999899989998999899989998999899989998999899989998999899989998999899989998999899989998999899989998999899989998999899989998999899989998999899989998999899989998999
        9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
        9999998999999989999999899999998999999989999999899999998999999989999999899999998999999989999999899999998999999989999999899999998999999989999999899999998999999989
        9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
        8999899989998999899989998999899989998999899989998999899989998999899989998999899989998999899989998999899989998999899989998999899989998999899989998999899989998999
        99999999999999999999999999999999999999999999999999999999ffffffffffffffff9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
        99899989998999899989998999899989998999899989998999899989ffffffffffffffff9989998999899989998999899989998999899989998999899989998999899989998999899989998999899989
        99999999999999999999999999999999999999999999999999999999ffffffffffffffff9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
        89898989898989898989898989898989898989898989898989898989ffffffffffffffff8989898989898989898989898989898989898989898989898989898989898989898989898989898989898989
        999999999999999999999999999999999999999999999999ffffffff5555555544444444ffff999999999999999999999999999999999999999999999999999999999999999999999999999999999999
        998999899989998999899989998999899989998999899989ffffffff5555555544444444ffff998999899989998999899989998999899989998999899989998999899989998999899989998999899989
        999999999999999999999999999999999999999999999999ffffffff5555555544444444ffff999999999999999999999999999999999999999999999999999999999999999999999999999999999999
        898989898989898989898989898989898989898989898989ffffffff5555555544444444ffff898989898989898989898989898989898989898989898989898989898989898989898989898989898989
        99999999999999999999999999999999999999999999ffffffffffffffffffffffff4444ffff999999999999999999999999999999999999999999999999999999999999999999999999999999999999
        89898989898989898989898989898989898989898989ffffffffffffffffffffffff4444ffff898989898989898989898989898989898989898989898989898989898989898989898989898989898989
        98999999989999999899999998999999989999999899ffffffffffffffffffffffff4444ffff999998999999989999999899999998999999989999999899999998999999989999999899999998999999
        89898989898989898989898989898989898989898989ffffffffffffffffffffffff4444ffff898989898989898989898989898989898989898989898989898989898989898989898989898989898989
        9999999999999999999999999999999999999999ffffffff55555555444444442222ffffffff9999ffffffff999999999999999999999999999999999999999999999999999999999999999999999999
        8989898989898989898989898989898989898989ffffffff55555555444444442222ffffffff8989ffffffff898989898989898989898989898989898989898989898989898989898989898989898989
        9899989998999899989998999899989998999899ffffffff55555555444444442222ffffffff9899ffffffff989998999899989998999899989998999899989998999899989998999899989998999899
        8989898989898989898989898989898989898989ffffffff55555555444444442222ffffffff8989ffffffff898989898989898989898989898989898989898989898989898989898989898989898989
        999899999998999999989999999899999998ffff11115555444444444444444444442222ffffffff5555ffff999899999998999999989999999899999998999999989999999899999998999999989999
        898989898989898989898989898989898989ffff11115555444444444444444444442222ffffffff5555ffff898989898989898989898989898989898989898989898989898989898989898989898989
        989998999899989998999899989998999899ffff11115555444444444444444444442222ffffffff5555ffff989998999899989998999899989998999899989998999899989998999899989998999899
        898989898989898989898989898989898989ffff11115555444444444444444444442222ffffffff5555ffff898989898989898989898989898989898989898989898989898989898989898989898989
        99989998999899989998999899989998ffff1111444444444444444444444444444444444444ffff4444ffff999899989998999899989998999899989998999899989998999899989998999899989998
        89898989898989898989898989898989ffff1111444444444444444444444444444444444444ffff4444ffff898989898989898989898989898989898989898989898989898989898989898989898989
        98999898989998989899989898999898ffff1111444444444444444444444444444444444444ffff4444ffff989998989899989898999898989998989899989898999898989998989899989898999898
        89898989898989898989898989898989ffff1111444444444444444444444444444444444444ffff4444ffff898989898989898989898989898989898989898989898989898989898989898989898989
        98989998989899989898ffff9898ffff1111444444444444444444444444444444444444444444444444ffff989899989898999898989998989899989898999898989998989899989898999898989998
        89898989898989898989ffff8989ffff1111444444444444444444444444444444444444444444444444ffff898989898989898989898989898989898989898989898989898989898989898989898989
        98989898989898989898ffff9898ffff1111444444444444444444444444444444444444444444444444ffff989898989898989898989898989898989898989898989898989898989898989898989898
        89898989898989898989ffff8989ffff1111444444444444444444444444444444444444444444444444ffff898989898989898989898989898989898989898989898989898989898989898989898989
        9898989898989898ffff1111ffff444444444444ffff555544444444ffffffff444444444444ffff2222ffff989898989898989898989898989898989898989898989898989898989898989898989898
        8989898989898989ffff1111ffff444444444444ffff555544444444ffffffff444444444444ffff2222ffff898989898989898989898989898989898989898989898989898989898989898989898989
        9898989898989898ffff1111ffff444444444444ffff555544444444ffffffff444444444444ffff2222ffff989898989898989898989898989898989898989898989898989898989898989898989898
        8989888989898889ffff1111ffff444444444444ffff555544444444ffffffff444444444444ffff2222ffff898988898989888989898889898988898989888989898889898988898989888989898889
        9898989898989898ffff1111ffff444444444444ffff55554444ffff5555ffff444444444444ffff2222ffff989898989898989898989898989898989898989898989898989898989898989898989898
        8989898989898989ffff1111ffff444444444444ffff55554444ffff5555ffff444444444444ffff2222ffff898989898989898989898989898989898989898989898989898989898989898989898989
        9898989898989898ffff1111ffff444444444444ffff55554444ffff5555ffff444444444444ffff2222ffff989898989898989898989898989898989898989898989898989898989898989898989898
        8889888988898889ffff1111ffff444444444444ffff55554444ffff5555ffff444444444444ffff2222ffff888988898889888988898889888988898889888988898889888988898889888988898889
        9898989898989898ffff5555ffff44444444444455555555444444444444ffff444444444444ffffffffffff989898989898989898989898989898989898989898989898989898989898989898989898
        8989898889898988ffff5555ffff44444444444455555555444444444444ffff444444444444ffffffffffff898989888989898889898988898989888989898889898988898989888989898889898988
        9898989898989898ffff5555ffff44444444444455555555444444444444ffff444444444444ffffffffffff989898989898989898989898989898989898989898989898989898989898989898989898
        8889888988898889ffff5555ffff44444444444455555555444444444444ffff444444444444ffffffffffff888988898889888988898889888988898889888988898889888988898889888988898889
        9898989898989898ffff55559898ffff44444444444444444444ffffffff444444444444ffffffff98989898989898989898989898989898989898989898989898989898989898989898989898989898
        8988898889888988ffff55558988ffff44444444444444444444ffffffff444444444444ffffffff89888988898889888988898889888988898889888988898889888988898889888988898889888988
        9898989898989898ffff55559898ffff44444444444444444444ffffffff444444444444ffffffff98989898989898989898989898989898989898989898989898989898989898989898989898989898
        8888888888888888ffff55558888ffff44444444444444444444ffffffff444444444444ffffffff88888888888888888888888888888888888888888888888888888888888888888888888888888888
        98989898989898989898ffff98989898ffffffff4444444444444444444444444444ffffffff989898989898989898989898989898989898989898989898989898989898989898989898989898989898
        89888888898888888988ffff89888888ffffffff4444444444444444444444444444ffffffff888889888888898888888988888889888888898888888988888889888888898888888988888889888888
        98989898989898989898ffff98989898ffffffff4444444444444444444444444444ffffffff989898989898989898989898989898989898989898989898989898989898989898989898989898989898
        88888888888888888888ffff88888888ffffffff4444444444444444444444444444ffffffff888888888888888888888888888888888888888888888888888888888888888888888888888888888888
        9898989898989898989898989898989898989898ffffffff4444444444444444ffff22222222ffff98989898989898989898989898989898989898989898989898989898989898989898989898989898
        8888888888888888888888888888888888888888ffffffff4444444444444444ffff22222222ffff88888888888888888888888888888888888888888888888888888888888888888888888888888888
        8898989888989898889898988898989888989898ffffffff4444444444444444ffff22222222ffff88989898889898988898989888989898889898988898989888989898889898988898989888989898
        8888888888888888888888888888888888888888ffffffff4444444444444444ffff22222222ffff88888888888888888888888888888888888888888888888888888888888888888888888888888888
        989898989898989898989898989898989898989898989898ffffffffffffffff222222224444ffff98989898989898989898989898989898989898989898989898989898989898989898989898989898
        888888888888888888888888888888888888888888888888ffffffffffffffff222222224444ffff88888888888888888888888888888888888888888888888888888888888888888888888888888888
        889888988898889888988898889888988898889888988898ffffffffffffffff222222224444ffff88988898889888988898889888988898889888988898889888988898889888988898889888988898
        888888888888888888888888888888888888888888888888ffffffffffffffff222222224444ffff88888888888888888888888888888888888888888888888888888888888888888888888888888888
        9888988898889888988898889888988898889888988898889888988898889888ffffffffffff988898889888988898889888988898889888988898889888988898889888988898889888988898889888
        8888888888888888888888888888888888888888888888888888888888888888ffffffffffff888888888888888888888888888888888888888888888888888888888888888888888888888888888888
        8898889888988898889888988898889888988898889888988898889888988898ffffffffffff889888988898889888988898889888988898889888988898889888988898889888988898889888988898
        8888888888888888888888888888888888888888888888888888888888888888ffffffffffff888888888888888888888888888888888888888888888888888888888888888888888888888888888888
        9888988898889888988898889888988898889888988898889888988898889888988898889888988898889888988898889888988898889888988898889888988898889888988898889888988898889888
        8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
        8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
        8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
        8888988888889888888898888888988888889888888898888888988888889888888898888888988888889888888898888888988888889888888898888888988888889888888898888888988888889888
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
        8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
        8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
        8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
        8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
        8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
        8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
        8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
        8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
        `,
    img`
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
        9999899999998999999989999999899999998999999989999999899999998999999989999999899999998999999989999999899999998999999989999999899999998999999989999999899999998999
        9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
        9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
        9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
        8999899989998999899989998999899989998999899989998999899989998999899989998999899989998999899989998999899989998999899989998999899989998999899989998999899989998999
        9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
        9999998999999989999999899999998999999989999999899999998999999989999999899999998999999989999999899999998999999989999999899999998999999989999999899999998999999989
        9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
        8999899989998999899989998999899989998999899989998999899989998999899989998999899989998999899989998999899989998999899989998999899989998999899989998999899989998999
        9999999999999999999999999999999999999999999999999999ffffffffffffffff99999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
        9989998999899989998999899989998999899989998999899989ffffffffffffffff99899989998999899989998999899989998999899989998999899989998999899989998999899989998999899989
        9999999999999999999999999999999999999999999999999999ffffffffffffffff99999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
        8989898989898989898989898989898989898989898989898989ffffffffffffffff89898989898989898989898989898989898989898989898989898989898989898989898989898989898989898989
        99999999999999999999999999999999999999999999ffffffff5555555544444444ffff9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
        99899989998999899989998999899989998999899989ffffffff5555555544444444ffff9989998999899989998999899989998999899989998999899989998999899989998999899989998999899989
        99999999999999999999999999999999999999999999ffffffff5555555544444444ffff9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
        89898989898989898989898989898989898989898989ffffffff5555555544444444ffff8989898989898989898989898989898989898989898989898989898989898989898989898989898989898989
        9999999999999999999999999999999999999999ffffffffffffffffffffffff4444ffff9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
        8989898989898989898989898989898989898989ffffffffffffffffffffffff4444ffff8989898989898989898989898989898989898989898989898989898989898989898989898989898989898989
        9899999998999999989999999899999998999999ffffffffffffffffffffffff4444ffff9899999998999999989999999899999998999999989999999899999998999999989999999899999998999999
        8989898989898989898989898989898989898989ffffffffffffffffffffffff4444ffff8989898989898989898989898989898989898989898989898989898989898989898989898989898989898989
        999999999999999999999999999999999999ffffffff55555555444444442222ffffffff9999ffffffff9999999999999999999999999999999999999999999999999999999999999999999999999999
        898989898989898989898989898989898989ffffffff55555555444444442222ffffffff8989ffffffff8989898989898989898989898989898989898989898989898989898989898989898989898989
        989998999899989998999899989998999899ffffffff55555555444444442222ffffffff9899ffffffff9899989998999899989998999899989998999899989998999899989998999899989998999899
        898989898989898989898989898989898989ffffffff55555555444444442222ffffffff8989ffffffff8989898989898989898989898989898989898989898989898989898989898989898989898989
        99989999999899999998999999989999ffff11115555444444444444444444442222ffffffff5555ffff9999999899999998999999989999999899999998999999989999999899999998999999989999
        89898989898989898989898989898989ffff11115555444444444444444444442222ffffffff5555ffff8989898989898989898989898989898989898989898989898989898989898989898989898989
        98999899989998999899989998999899ffff11115555444444444444444444442222ffffffff5555ffff9899989998999899989998999899989998999899989998999899989998999899989998999899
        89898989898989898989898989898989ffff11115555444444444444444444442222ffffffff5555ffff8989898989898989898989898989898989898989898989898989898989898989898989898989
        9998999899989998999899989998ffff1111444444444444444444444444444444444444ffff4444ffff9998999899989998999899989998999899989998999899989998999899989998999899989998
        8989898989898989898989898989ffff1111444444444444444444444444444444444444ffff4444ffff8989898989898989898989898989898989898989898989898989898989898989898989898989
        9899989898999898989998989899ffff1111444444444444444444444444444444444444ffff4444ffff9898989998989899989898999898989998989899989898999898989998989899989898999898
        8989898989898989898989898989ffff1111444444444444444444444444444444444444ffff4444ffff8989898989898989898989898989898989898989898989898989898989898989898989898989
        989899989898999898989998ffff1111444444444444444444444444444444444444444444444444ffff9998989899989898999898989998989899989898999898989998989899989898999898989998
        898989898989898989898989ffff1111444444444444444444444444444444444444444444444444ffff8989898989898989898989898989898989898989898989898989898989898989898989898989
        989898989898989898989898ffff1111444444444444444444444444444444444444444444444444ffff9898989898989898989898989898989898989898989898989898989898989898989898989898
        898989898989898989898989ffff1111444444444444444444444444444444444444444444444444ffff8989898989898989898989898989898989898989898989898989898989898989898989898989
        9898989898989898ffffffff444444444444ffff555544444444ffffffff444444444444ffff2222ffff9898989898989898989898989898989898989898989898989898989898989898989898989898
        8989898989898989ffffffff444444444444ffff555544444444ffffffff444444444444ffff2222ffff8989898989898989898989898989898989898989898989898989898989898989898989898989
        9898989898989898ffffffff444444444444ffff555544444444ffffffff444444444444ffff2222ffff9898989898989898989898989898989898989898989898989898989898989898989898989898
        8989888989898889ffffffff444444444444ffff555544444444ffffffff444444444444ffff2222ffff8889898988898989888989898889898988898989888989898889898988898989888989898889
        9898989898989898ffffffff444444444444ffff55554444ffff5555ffff444444444444ffff2222ffff9898989898989898989898989898989898989898989898989898989898989898989898989898
        8989898989898989ffffffff444444444444ffff55554444ffff5555ffff444444444444ffff2222ffff8989898989898989898989898989898989898989898989898989898989898989898989898989
        9898989898989898ffffffff444444444444ffff55554444ffff5555ffff444444444444ffff2222ffff9898989898989898989898989898989898989898989898989898989898989898989898989898
        8889888988898889ffffffff444444444444ffff55554444ffff5555ffff444444444444ffff2222ffff8889888988898889888988898889888988898889888988898889888988898889888988898889
        9898989898989898ffffffff44444444444455555555444444444444ffff444444444444ffffffffffff9898989898989898989898989898989898989898989898989898989898989898989898989898
        8989898889898988ffffffff44444444444455555555444444444444ffff444444444444ffffffffffff8988898989888989898889898988898989888989898889898988898989888989898889898988
        9898989898989898ffffffff44444444444455555555444444444444ffff444444444444ffffffffffff9898989898989898989898989898989898989898989898989898989898989898989898989898
        8889888988898889ffffffff44444444444455555555444444444444ffff444444444444ffffffffffff8889888988898889888988898889888988898889888988898889888988898889888988898889
        9898989898989898ffff9898ffff44444444444444444444ffffffff444444444444ffffffff989898989898989898989898989898989898989898989898989898989898989898989898989898989898
        8988898889888988ffff8988ffff44444444444444444444ffffffff444444444444ffffffff898889888988898889888988898889888988898889888988898889888988898889888988898889888988
        9898989898989898ffff9898ffff44444444444444444444ffffffff444444444444ffffffff989898989898989898989898989898989898989898989898989898989898989898989898989898989898
        8888888888888888ffff8888ffff44444444444444444444ffffffff444444444444ffffffff888888888888888888888888888888888888888888888888888888888888888888888888888888888888
        9898989898989898989898989898ffffffff4444444444444444444444444444ffffffff9898989898989898989898989898989898989898989898989898989898989898989898989898989898989898
        8988888889888888898888888988ffffffff4444444444444444444444444444ffffffff8988888889888888898888888988888889888888898888888988888889888888898888888988888889888888
        9898989898989898989898989898ffffffff4444444444444444444444444444ffffffff9898989898989898989898989898989898989898989898989898989898989898989898989898989898989898
        8888888888888888888888888888ffffffff4444444444444444444444444444ffffffff8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
        989898989898989898989898989898989898ffffffff4444444444444444ffff22222222ffff989898989898989898989898989898989898989898989898989898989898989898989898989898989898
        888888888888888888888888888888888888ffffffff4444444444444444ffff22222222ffff888888888888888888888888888888888888888888888888888888888888888888888888888888888888
        889898988898989888989898889898988898ffffffff4444444444444444ffff22222222ffff989888989898889898988898989888989898889898988898989888989898889898988898989888989898
        888888888888888888888888888888888888ffffffff4444444444444444ffff22222222ffff888888888888888888888888888888888888888888888888888888888888888888888888888888888888
        98989898989898989898989898989898989898989898ffffffffffffffff222222224444ffff989898989898989898989898989898989898989898989898989898989898989898989898989898989898
        88888888888888888888888888888888888888888888ffffffffffffffff222222224444ffff888888888888888888888888888888888888888888888888888888888888888888888888888888888888
        88988898889888988898889888988898889888988898ffffffffffffffff222222224444ffff889888988898889888988898889888988898889888988898889888988898889888988898889888988898
        88888888888888888888888888888888888888888888ffffffffffffffff222222224444ffff888888888888888888888888888888888888888888888888888888888888888888888888888888888888
        988898889888988898889888988898889888988898889888988898889888ffffffffffff9888988898889888988898889888988898889888988898889888988898889888988898889888988898889888
        888888888888888888888888888888888888888888888888888888888888ffffffffffff8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
        889888988898889888988898889888988898889888988898889888988898ffffffffffff8898889888988898889888988898889888988898889888988898889888988898889888988898889888988898
        888888888888888888888888888888888888888888888888888888888888ffffffffffff8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
        9888988898889888988898889888988898889888988898889888988898889888988898889888988898889888988898889888988898889888988898889888988898889888988898889888988898889888
        8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
        8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
        8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
        8888988888889888888898888888988888889888888898888888988888889888888898888888988888889888888898888888988888889888888898888888988888889888888898888888988888889888
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
        8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
        8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
        8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
        8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
        8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
        8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
        8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
        8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
        `,
    img`
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
        9999899999998999999989999999899999998999999989999999899999998999999989999999899999998999999989999999899999998999999989999999899999998999999989999999899999998999
        9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
        9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
        9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
        8999899989998999899989998999899989998999899989998999899989998999899989998999899989998999899989998999899989998999899989998999899989998999899989998999899989998999
        9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
        9999998999999989999999899999998999999989999999899999998999999989999999899999998999999989999999899999998999999989999999899999998999999989999999899999998999999989
        9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
        8999899989998999899989998999899989998999899989998999899989998999899989998999899989998999899989998999899989998999899989998999899989998999899989998999899989998999
        999999999999999999999999999999999999999999999999ffffffffffffffff999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
        998999899989998999899989998999899989998999899989ffffffffffffffff998999899989998999899989998999899989998999899989998999899989998999899989998999899989998999899989
        999999999999999999999999999999999999999999999999ffffffffffffffff999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
        898989898989898989898989898989898989898989898989ffffffffffffffff898989898989898989898989898989898989898989898989898989898989898989898989898989898989898989898989
        9999999999999999999999999999999999999999ffffffff5555555544444444ffff99999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
        9989998999899989998999899989998999899989ffffffff5555555544444444ffff99899989998999899989998999899989998999899989998999899989998999899989998999899989998999899989
        9999999999999999999999999999999999999999ffffffff5555555544444444ffff99999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
        8989898989898989898989898989898989898989ffffffff5555555544444444ffff89898989898989898989898989898989898989898989898989898989898989898989898989898989898989898989
        999999999999999999999999999999999999ffffffffffffffffffffffff4444ffff99999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
        898989898989898989898989898989898989ffffffffffffffffffffffff4444ffff89898989898989898989898989898989898989898989898989898989898989898989898989898989898989898989
        989999999899999998999999989999999899ffffffffffffffffffffffff4444ffff99999899999998999999989999999899999998999999989999999899999998999999989999999899999998999999
        898989898989898989898989898989898989ffffffffffffffffffffffff4444ffff89898989898989898989898989898989898989898989898989898989898989898989898989898989898989898989
        99999999999999999999999999999999ffffffff55555555444444442222ffffffff9999ffffffff99999999999999999999999999999999999999999999999999999999999999999999999999999999
        89898989898989898989898989898989ffffffff55555555444444442222ffffffff8989ffffffff89898989898989898989898989898989898989898989898989898989898989898989898989898989
        98999899989998999899989998999899ffffffff55555555444444442222ffffffff9899ffffffff98999899989998999899989998999899989998999899989998999899989998999899989998999899
        89898989898989898989898989898989ffffffff55555555444444442222ffffffff8989ffffffff89898989898989898989898989898989898989898989898989898989898989898989898989898989
        9998999999989999999899999998ffff11115555444444444444444444442222ffffffff5555ffff99989999999899999998999999989999999899999998999999989999999899999998999999989999
        8989898989898989898989898989ffff11115555444444444444444444442222ffffffff5555ffff89898989898989898989898989898989898989898989898989898989898989898989898989898989
        9899989998999899989998999899ffff11115555444444444444444444442222ffffffff5555ffff98999899989998999899989998999899989998999899989998999899989998999899989998999899
        8989898989898989898989898989ffff11115555444444444444444444442222ffffffff5555ffff89898989898989898989898989898989898989898989898989898989898989898989898989898989
        999899989998999899989998ffff1111444444444444444444444444444444444444ffff4444ffff99989998999899989998999899989998999899989998999899989998999899989998999899989998
        898989898989898989898989ffff1111444444444444444444444444444444444444ffff4444ffff89898989898989898989898989898989898989898989898989898989898989898989898989898989
        989998989899989898999898ffff1111444444444444444444444444444444444444ffff4444ffff98999898989998989899989898999898989998989899989898999898989998989899989898999898
        898989898989898989898989ffff1111444444444444444444444444444444444444ffff4444ffff89898989898989898989898989898989898989898989898989898989898989898989898989898989
        98989998989899989898ffff1111444444444444444444444444444444444444444444444444ffff98989998989899989898999898989998989899989898999898989998989899989898999898989998
        89898989898989898989ffff1111444444444444444444444444444444444444444444444444ffff89898989898989898989898989898989898989898989898989898989898989898989898989898989
        98989898989898989898ffff1111444444444444444444444444444444444444444444444444ffff98989898989898989898989898989898989898989898989898989898989898989898989898989898
        89898989898989898989ffff1111444444444444444444444444444444444444444444444444ffff89898989898989898989898989898989898989898989898989898989898989898989898989898989
        9898989898989898ffff444444444444ffff555544444444ffffffff444444444444ffff2222ffff98989898989898989898989898989898989898989898989898989898989898989898989898989898
        8989898989898989ffff444444444444ffff555544444444ffffffff444444444444ffff2222ffff89898989898989898989898989898989898989898989898989898989898989898989898989898989
        9898989898989898ffff444444444444ffff555544444444ffffffff444444444444ffff2222ffff98989898989898989898989898989898989898989898989898989898989898989898989898989898
        8989888989898889ffff444444444444ffff555544444444ffffffff444444444444ffff2222ffff89898889898988898989888989898889898988898989888989898889898988898989888989898889
        9898989898989898ffff444444444444ffff55554444ffff5555ffff444444444444ffff2222ffff98989898989898989898989898989898989898989898989898989898989898989898989898989898
        8989898989898989ffff444444444444ffff55554444ffff5555ffff444444444444ffff2222ffff89898989898989898989898989898989898989898989898989898989898989898989898989898989
        9898989898989898ffff444444444444ffff55554444ffff5555ffff444444444444ffff2222ffff98989898989898989898989898989898989898989898989898989898989898989898989898989898
        8889888988898889ffff444444444444ffff55554444ffff5555ffff444444444444ffff2222ffff88898889888988898889888988898889888988898889888988898889888988898889888988898889
        9898989898989898ffff44444444444455555555444444444444ffff444444444444ffffffffffff98989898989898989898989898989898989898989898989898989898989898989898989898989898
        8989898889898988ffff44444444444455555555444444444444ffff444444444444ffffffffffff89898988898989888989898889898988898989888989898889898988898989888989898889898988
        9898989898989898ffff44444444444455555555444444444444ffff444444444444ffffffffffff98989898989898989898989898989898989898989898989898989898989898989898989898989898
        8889888988898889ffff44444444444455555555444444444444ffff444444444444ffffffffffff88898889888988898889888988898889888988898889888988898889888988898889888988898889
        98989898989898989898ffff44444444444444444444ffffffff444444444444ffffffff9898989898989898989898989898989898989898989898989898989898989898989898989898989898989898
        89888988898889888988ffff44444444444444444444ffffffff444444444444ffffffff8988898889888988898889888988898889888988898889888988898889888988898889888988898889888988
        98989898989898989898ffff44444444444444444444ffffffff444444444444ffffffff9898989898989898989898989898989898989898989898989898989898989898989898989898989898989898
        88888888888888888888ffff44444444444444444444ffffffff444444444444ffffffff8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
        989898989898989898989898ffffffff4444444444444444444444444444ffffffff98989898989898989898989898989898989898989898989898989898989898989898989898989898989898989898
        898888888988888889888888ffffffff4444444444444444444444444444ffffffff88888988888889888888898888888988888889888888898888888988888889888888898888888988888889888888
        989898989898989898989898ffffffff4444444444444444444444444444ffffffff98989898989898989898989898989898989898989898989898989898989898989898989898989898989898989898
        888888888888888888888888ffffffff4444444444444444444444444444ffffffff88888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
        98989898989898989898989898989898ffffffff4444444444444444ffff22222222ffff9898989898989898989898989898989898989898989898989898989898989898989898989898989898989898
        88888888888888888888888888888888ffffffff4444444444444444ffff22222222ffff8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
        88989898889898988898989888989898ffffffff4444444444444444ffff22222222ffff8898989888989898889898988898989888989898889898988898989888989898889898988898989888989898
        88888888888888888888888888888888ffffffff4444444444444444ffff22222222ffff8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
        9898989898989898989898989898989898989898ffffffffffffffff222222224444ffff9898989898989898989898989898989898989898989898989898989898989898989898989898989898989898
        8888888888888888888888888888888888888888ffffffffffffffff222222224444ffff8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
        8898889888988898889888988898889888988898ffffffffffffffff222222224444ffff8898889888988898889888988898889888988898889888988898889888988898889888988898889888988898
        8888888888888888888888888888888888888888ffffffffffffffff222222224444ffff8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
        98889888988898889888988898889888988898889888988898889888ffffffffffff98889888988898889888988898889888988898889888988898889888988898889888988898889888988898889888
        88888888888888888888888888888888888888888888888888888888ffffffffffff88888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
        88988898889888988898889888988898889888988898889888988898ffffffffffff88988898889888988898889888988898889888988898889888988898889888988898889888988898889888988898
        88888888888888888888888888888888888888888888888888888888ffffffffffff88888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
        9888988898889888988898889888988898889888988898889888988898889888988898889888988898889888988898889888988898889888988898889888988898889888988898889888988898889888
        8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
        8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
        8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
        8888988888889888888898888888988888889888888898888888988888889888888898888888988888889888888898888888988888889888888898888888988888889888888898888888988888889888
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
        8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
        8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
        8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
        8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
        8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
        8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
        8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
        8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
        `,
    img`
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
        9999899999998999999989999999899999998999999989999999899999998999999989999999899999998999999989999999899999998999999989999999899999998999999989999999899999998999
        9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
        9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
        9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
        8999899989998999899989998999899989998999899989998999899989998999899989998999899989998999899989998999899989998999899989998999899989998999899989998999899989998999
        9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
        9999998999999989999999899999998999999989999999899999998999999989999999899999998999999989999999899999998999999989999999899999998999999989999999899999998999999989
        9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
        8999899989998999899989998999899989998999899989998999899989998999899989998999899989998999899989998999899989998999899989998999899989998999899989998999899989998999
        9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
        9989998999899989998999899989998999899989998999899989998999899989998999899989998999899989998999899989998999899989998999899989998999899989998999899989998999899989
        9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
        8989898989898989898989898989898989898989898989898989898989898989898989898989898989898989898989898989898989898989898989898989898989898989898989898989898989898989
        9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
        9989998999899989998999899989998999899989998999899989998999899989998999899989998999899989998999899989998999899989998999899989998999899989998999899989998999899989
        9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
        8989898989898989898989898989898989898989898989898989898989898989898989898989898989898989898989898989898989898989898989898989898989898989898989898989898989898989
        9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
        8989898989898989898989898989898989898989898989898989898989898989898989898989898989898989898989898989898989898989898989898989898989898989898989898989898989898989
        9899999998999999989999999899999998999999989999999899999998999999989999999899999998999999989999999899999998999999989999999899999998999999989999999899999998999999
        8989898989898989898989898989898989898989898989898989898989898989898989898989898989898989898989898989898989898989898989898989898989898989898989898989898989898989
        9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
        8989898989898989898989898989898989898989898989898989898989898989898989898989898989898989898989898989898989898989898989898989898989898989898989898989898989898989
        9899989998999899989998999899989998999899989998999899989998999899989998999899989998999899989998999899989998999899989998999899989998999899989998999899989998999899
        8989898989898989898989898989898989898989898989898989898989898989898989898989898989898989898989898989898989898989898989898989898989898989898989898989898989898989
        9998999999989999999899999998999999989999999899999998999999989999999899999998999999989999999899999998999999989999999899999998999999989999999899999998999999989999
        8989898989898989898989898989898989898989898989898989898989898989898989898989898989898989898989898989898989898989898989898989898989898989898989898989898989898989
        9899989998999899989998999899989998999899989998999899989998999899989998999899989998999899989998999899989998999899989998999899989998999899989998999899989998999899
        8989898989898989898989898989898989898989898989898989898989898989898989898989898989898989898989898989898989898989898989898989898989898989898989898989898989898989
        9998999899989998999899989998999899989998999899989998999899989998999899989998999899989998999899989998999899989998999899989998999899989998999899989998999899989998
        8989898989898989898989898989898989898989898989898989898989898989898989898989898989898989898989898989898989898989898989898989898989898989898989898989898989898989
        9899989898999898989998989899989898999898989998989899989898999898989998989899989898999898989998989899989898999898989998989899989898999898989998989899989898999898
        8989898989898989898989898989898989898989898989898989898989898989898989898989898989898989898989898989898989898989898989898989898989898989898989898989898989898989
        9898999898989998989899989898999898989998989899989898999898989998989899989898999898989998989899989898999898989998989899989898999898989998989899989898999898989998
        8989898989898989898989898989898989898989898989898989898989898989898989898989898989898989898989898989898989898989898989898989898989898989898989898989898989898989
        9898989898989898989898989898989898989898989898989898989898989898989898989898989898989898989898989898989898989898989898989898989898989898989898989898989898989898
        8989898989898989898989898989898989898989898989898989898989898989898989898989898989898989898989898989898989898989898989898989898989898989898989898989898989898989
        9898989898989898989898989898989898989898989898989898989898989898989898989898989898989898989898989898989898989898989898989898989898989898989898989898989898989898
        8989898989898989898989898989898989898989898989898989898989898989898989898989898989898989898989898989898989898989898989898989898989898989898989898989898989898989
        9898989898989898989898989898989898989898989898989898989898989898989898989898989898989898989898989898989898989898989898989898989898989898989898989898989898989898
        8989888989898889898988898989888989898889898988898989888989898889898988898989888989898889898988898989888989898889898988898989888989898889898988898989888989898889
        9898989898989898989898989898989898989898989898989898989898989898989898989898989898989898989898989898989898989898989898989898989898989898989898989898989898989898
        8989898989898989898989898989898989898989898989898989898989898989898989898989898989898989898989898989898989898989898989898989898989898989898989898989898989898989
        9898989898989898989898989898989898989898989898989898989898989898989898989898989898989898989898989898989898989898989898989898989898989898989898989898989898989898
        8889888988898889888988898889888988898889888988898889888988898889888988898889888988898889888988898889888988898889888988898889888988898889888988898889888988898889
        9898989898989898989898989898989898989898989898989898989898989898989898989898989898989898989898989898989898989898989898989898989898989898989898989898989898989898
        8989898889898988898989888989898889898988898989888989898889898988898989888989898889898988898989888989898889898988898989888989898889898988898989888989898889898988
        9898989898989898989898989898989898989898989898989898989898989898989898989898989898989898989898989898989898989898989898989898989898989898989898989898989898989898
        8889888988898889888988898889888988898889888988898889888988898889888988898889888988898889888988898889888988898889888988898889888988898889888988898889888988898889
        9898989898989898989898989898989898989898989898989898989898989898989898989898989898989898989898989898989898989898989898989898989898989898989898989898989898989898
        8988898889888988898889888988898889888988898889888988898889888988898889888988898889888988898889888988898889888988898889888988898889888988898889888988898889888988
        9898989898989898989898989898989898989898989898989898989898989898989898989898989898989898989898989898989898989898989898989898989898989898989898989898989898989898
        8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
        9898989898989898989898989898989898989898989898989898989898989898989898989898989898989898989898989898989898989898989898989898989898989898989898989898989898989898
        8988888889888888898888888988888889888888898888888988888889888888898888888988888889888888898888888988888889888888898888888988888889888888898888888988888889888888
        9898989898989898989898989898989898989898989898989898989898989898989898989898989898989898989898989898989898989898989898989898989898989898989898989898989898989898
        8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
        9898989898989898989898989898989898989898989898989898989898989898989898989898989898989898989898989898989898989898989898989898989898989898989898989898989898989898
        8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
        8898989888989898889898988898989888989898889898988898989888989898889898988898989888989898889898988898989888989898889898988898989888989898889898988898989888989898
        8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
        9898989898989898989898989898989898989898989898989898989898989898989898989898989898989898989898989898989898989898989898989898989898989898989898989898989898989898
        8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
        8898889888988898889888988898889888988898889888988898889888988898889888988898889888988898889888988898889888988898889888988898889888988898889888988898889888988898
        8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
        9888988898889888988898889888988898889888988898889888988898889888988898889888988898889888988898889888988898889888988898889888988898889888988898889888988898889888
        8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
        8898889888988898889888988898889888988898889888988898889888988898889888988898889888988898889888988898889888988898889888988898889888988898889888988898889888988898
        8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
        9888988898889888988898889888988898889888988898889888988898889888988898889888988898889888988898889888988898889888988898889888988898889888988898889888988898889888
        8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
        8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
        8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
        8888988888889888888898888888988888889888888898888888988888889888888898888888988888889888888898888888988888889888888898888888988888889888888898888888988888889888
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
        8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
        8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
        8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
        8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
        8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
        8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
        8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
        8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
        `
    ]
    for (let value3 of introAnim) {
        scene.setBackgroundImage(value3)
        pause(100)
    }
    pause(300)
    textSprite = textsprite.create("Big Fish,", 0, 5)
    textSprite.setMaxFontHeight(16)
    textSprite.setOutline(2, 4)
    textSprite.setPosition(80, 30)
    textSprite2 = textsprite.create("Little Fish", 0, 5)
    textSprite2.setMaxFontHeight(16)
    textSprite2.setOutline(2, 4)
    textSprite2.setPosition(80, 60)
    textSprite3 = textsprite.create("Move with arrow keys", 0, 3)
    textSprite3.setMaxFontHeight(6)
    textSprite3.setPosition(80, 96)
    textSprite4 = textsprite.create("B to restart level", 0, 3)
    textSprite4.setMaxFontHeight(6)
    textSprite4.setPosition(80, 106)
    pause(3000)
    music.playMelody("C D - F G - C5 C5 ", 360)
    textSprite.destroy()
    textSprite2.destroy()
    textSprite3.destroy()
    textSprite4.destroy()
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
        for (let value32 of sprites.allOfKind(SpriteKind.Player)) {
            value32.destroy()
        }
        level += 1
        setLevel()
    } else {
        music.playTone(262, music.beat(BeatFraction.Quarter))
    }
})
let move = false
let textSprite4: TextSprite = null
let textSprite3: TextSprite = null
let textSprite2: TextSprite = null
let textSprite: TextSprite = null
let introAnim: Image[] = []
let mySprite: Sprite = null
let paused = false
let levelTotal = 0
let level = 0
intro()
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
