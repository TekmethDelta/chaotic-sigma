namespace SpriteKind {
    export const dooF = SpriteKind.create()
    export const Fire = SpriteKind.create()
    export const bomb = SpriteKind.create()
    export const Freeze = SpriteKind.create()
    export const hollow = SpriteKind.create()
    export const Frozen = SpriteKind.create()
    export const first = SpriteKind.create()
    export const second = SpriteKind.create()
    export const enemy2 = SpriteKind.create()
    export const Weak = SpriteKind.create()
    export const Unkillable = SpriteKind.create()
}
function Number2 () {
    for (let value of sprites.allOfKind(SpriteKind.Enemy)) {
        value.destroy()
    }
    snumber = sprites.create(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `, SpriteKind.second)
    if (Power_up_2 == 1) {
        snumber.setImage(img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . 2 2 . . . . . . . 
            . . . . . 2 2 2 2 2 . . . . . . 
            . . . . 2 2 2 2 2 2 . . . . . . 
            . . . . 2 2 . 2 2 2 . . . . . . 
            . . . . 2 2 . 2 2 2 . . . . . . 
            . . . . . . . 2 2 2 . . . . . . 
            . . . . . . . 2 2 2 . . . . . . 
            . . . . . . . 2 2 2 . . . . . . 
            . . . . . . . 2 2 2 . . . . . . 
            . . . . . . . 2 2 2 . . . . . . 
            . . . . 2 2 2 2 2 2 2 2 . . . . 
            . . . . 2 2 2 2 2 2 2 2 . . . . 
            . . . . 2 2 2 2 2 2 2 2 . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            `)
    } else if (Power_up_2 == 2) {
        snumber.setImage(img`
            . . . . . . . . . . . . . . . . 
            . . . . . . 2 2 2 2 2 2 2 . . . 
            . . . . . 2 2 2 2 2 2 2 2 . . . 
            . . . . 2 2 2 2 2 2 2 2 2 . . . 
            . . . 2 2 2 2 . . 2 2 2 2 . . . 
            . . . 2 2 2 . . . . 2 2 2 . . . 
            . . . 2 2 . . . . 2 2 2 . . . . 
            . . . . . . . . 2 2 2 2 . . . . 
            . . . . . . . 2 2 2 2 . . . . . 
            . . . . . . 2 2 2 2 . . . . . . 
            . . . . . 2 2 2 2 2 . . . . . . 
            . . . . 2 2 2 2 2 . . . . . . . 
            . . 2 2 2 2 2 2 2 2 2 2 2 2 2 . 
            . . 2 2 2 2 2 2 2 2 2 2 2 2 2 . 
            . . 2 2 2 2 2 2 2 2 2 2 2 2 2 . 
            . . . . . . . . . . . . . . . . 
            `)
    } else if (Power_up_2 == 3) {
        snumber.setImage(img`
            . . . . . . . . . . . . . . . . 
            . . . . . 2 2 2 2 2 2 2 2 2 . . 
            . . . . . 2 2 2 2 2 2 2 2 2 . . 
            . . . . . . . . . . . . 2 2 . . 
            . . . . . . . . . . . . 2 2 . . 
            . . . . . . . . . . . . 2 2 . . 
            . . . . . . . . . . . . 2 2 . . 
            . . . . . . 2 2 2 2 2 2 2 2 . . 
            . . . . . . 2 2 2 2 2 2 2 2 . . 
            . . . . . . . . . . . . 2 2 . . 
            . . . . . . . . . . . . 2 2 . . 
            . . . . . . . . . . . . 2 2 . . 
            . . . . . 2 2 2 2 2 2 2 2 2 . . 
            . . . . . 2 2 2 2 2 2 2 2 2 . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            `)
    } else if (Power_up_2 == 4) {
        snumber.setImage(img`
            . . . . . . . . . . . . . . . . 
            . . . . . . 2 2 2 2 . . . . . . 
            . . . . . 2 2 2 2 2 . . . . . . 
            . . . . 2 2 2 . 2 2 . . . . . . 
            . . . 2 2 2 . . 2 2 . . . . . . 
            . . 2 2 2 . . . 2 2 . . . . . . 
            . 2 2 2 . . . . 2 2 . . . . . . 
            . 2 2 2 2 2 2 2 2 2 2 2 2 2 . . 
            . 2 2 2 2 2 2 2 2 2 2 2 2 2 . . 
            . . . . . . . . 2 2 . . . . . . 
            . . . . . . . . 2 2 . . . . . . 
            . . . . . . . . 2 2 . . . . . . 
            . . . . . . . . 2 2 . . . . . . 
            . . . . . . . . 2 2 . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            `)
    } else {
        snumber.setImage(img`
            . . . . . . . . . . . . . . . . 
            . . . . . 2 2 2 2 2 2 . . . . . 
            . . . . 2 . . . . . 2 2 . . . . 
            . . . . 2 . . . . . 2 2 . . . . 
            . . . . 2 . . . . 2 . 2 . . . . 
            . . . . 2 . . . . 2 . 2 . . . . 
            . . . . 2 . . . 2 . . 2 . . . . 
            . . . . 2 . . . 2 . . 2 . . . . 
            . . . . 2 . . 2 . . . 2 . . . . 
            . . . . 2 . . 2 . . . 2 . . . . 
            . . . . 2 . 2 . . . . 2 . . . . 
            . . . . 2 . 2 . . . . 2 . . . . 
            . . . . 2 2 . . . . . 2 . . . . 
            . . . . 2 . . . . . . 2 . . . . 
            . . . . . 2 2 2 2 2 2 . . . . . 
            . . . . . . . . . . . . . . . . 
            `)
    }
    tiles.placeOnRandomTile(snumber, sprites.dungeon.floorDark5)
}
function Levels (levelnum: number) {
    if (levelnum == 0) {
        tiles.setTilemap(tilemap`level1`)
        Level_Start()
        tiles.replaceAllTiles(sprites.dungeon.darkGroundNorthEast1, sprites.builtin.brick)
        tiles.replaceAllTiles(sprites.castle.tileGrass1, sprites.builtin.brick)
        tiles.replaceAllTiles(sprites.castle.tileDarkGrass1, sprites.builtin.brick)
        tiles.replaceAllTiles(sprites.castle.tilePath5, sprites.builtin.brick)
    } else if (levelnum == 1) {
        scene.setBackgroundColor(6)
        // Swamp
        tiles.setTilemap(tilemap`level8`)
        Level_Start()
        tiles.replaceAllTiles(sprites.dungeon.darkGroundNorthEast1, sprites.castle.tileDarkGrass3)
        tiles.replaceAllTiles(sprites.castle.tileGrass1, sprites.castle.tileDarkGrass3)
        tiles.replaceAllTiles(sprites.castle.tileDarkGrass1, sprites.castle.tileDarkGrass3)
        tiles.replaceAllTiles(sprites.castle.tilePath5, sprites.castle.tileDarkGrass3)
        tiles.replaceAllTiles(sprites.castle.tilePath8, sprites.castle.tileDarkGrass3)
    } else if (levelnum == 2) {
        effects.blizzard.startScreenEffect()
        scene.setBackgroundColor(9)
        tiles.setTilemap(tilemap`level18`)
        Level_Start()
        tiles.replaceAllTiles(sprites.dungeon.darkGroundNorthEast1, assets.tile`transparency16`)
        tiles.replaceAllTiles(sprites.castle.tileGrass1, assets.tile`transparency16`)
        tiles.replaceAllTiles(sprites.castle.tileDarkGrass1, assets.tile`transparency16`)
        tiles.replaceAllTiles(sprites.castle.tilePath5, assets.tile`transparency16`)
        tiles.replaceAllTiles(sprites.castle.tilePath8, assets.tile`transparency16`)
    } else if (levelnum == 3) {
        scene.setBackgroundColor(11)
        scene.setBackgroundImage(img`
            .........................................fff.ffffff...............................................ffffff.....ffff...............................................
            .........................................fff.fffffff............................ffffffffff........ffffff.....fffffff.............fffff..........................
            .........................................fff.ffffffff...ffffffffffffffffff....ffffffffffffffffff...fff.......ffffffffff..........fffffff........................
            .........................................fff.fffffffff.fffffffffffffffffffffffffffffffffffffffffff.ffff........fffffffffff.......fffffffff.....fffffffffff......
            .........................................fff.ffff.ffffffffffffffffffffffffffffffff......fffffffffffffff......fffffffffffffff.....ffffffffffffffffffffffffffff...
            .........................................fff..fff..ffffffff...fffffffff.fffffffffff...........ffffffffff.....ffffffffffffffffff.fffffffffffffffffffffffffffff...
            ...................................fff...ffff.ffff..fffffff..fffffffffff....ffffffff............fffffffff....ffffffffffffffffffffffffffffffffffff.......fffff...
            .................................ffffffffffff.fffffffff.fffffffffffffffff......fffffff.............ffffffff.........ffffffffffffffffffff..fffffff........ffff...
            .................................fffffffffffffffffffffffffffffffffffffffff......ffffffff.............ffffffff.........ffffffffffffffffffffffffffff......fffff...
            .................................fffffffffffffffffffffffffffffffffffffffff.......fffffffffff.........ffffffffff.........fffffff.fffffffffffff.ffffff...fffff....
            .................................ffffffffffffffffffffffffffffffffffffffffff......fffffffffffffffffffffffffffffffffffff...fffffff.ffffffffffffffffffffffffff.....
            .......................ffff......fffffffffffffffffffffffffffffffffffffffffff......fff.fffffffffffffffffffffffffffffffffff..fffffffffffffffffffffffffffffff......
            .....................fffffff.....ffffffffffffffffffffffffffffffffffffffffffff.....fff.....fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff.......
            .....................fffffffffffffffffffffffffffffffffffffffffffffffffffffffff..fffff............444444..fffffffff..ffffffffffffffffff.fffffffffffffff..........
            .....................ffffffffffffffffffffffffffffffffffffffffffffffffff.fffffffffffff...444444444444444......444444...fffffffffffffffffffffffffffffffff.........
            .....................ffff.ffffffffffffff...fffffffffffffffffffffffffffff..ffffffffff..44444444444444444......4444444..fffffffffffffffffffffffff.ffffffff........
            ......ffffffff......fffff..fffffffffffff.ffffffff.ffffffffffffffffffffffff..ffffff444444444444444444444......4444444..ffffffffffff.fffffffffffffffffffff........
            ......ffffffffff...ffffffffffffffffffffffffffffff.fffffffffffffffffffffffffffff444444444444444444444444......4444444...ffffffffffffffffffffffffffffffffff.......
            ......ffffffffffff.ffffffffffffffffffffffffff.fff.fffffffffffffffffffffffffffff44444444444444444444444........444444...ffffffffffffffffffffffffffffffffff.......
            ......fffff.ffffffffff.fffffffffffff..fffff...fffffffffffffffffffffffff.fffffff444444444444444444444...........44444..ffffffffffffffffffffffffffff.ffffff.......
            .......ffffff.fffffffffffffffffffffff.ffffff..fffffffffffffffffffffffff...fffff444444444444444444....................ffffffffffffffffffffffff.ffff..fffff.......
            .......fffffffffffffffffffffffffffffffffffff..ffffffffffffffffffffffff......4444444444444444444......................ffff......ffffffffffffffffffffffffff.......
            .........fffffffffffffffffffffffffffffffffff..ffffffffff.fffffffffff........4444444444444444444......................fff........ffffffffffffffffffffffffff......
            ...........fffffffffffffffffffffffffffffffff..ffffff.fff..fffffffffff.......444444444444444444..eeeee................fff........fffffffffffffffffffffffffff.....
            ............ffffffffffffffffffffffffffffffff..ffffff.ffff..ffffffffff.eeeeee4444444444444444444.eeeeee...............fff........fffffffffffffff.fffffffffff.....
            ............ffffffffffffffffffffffffffffffff..ffffff.ffff...fffffffff.eeeeee444444444444444444444eeeeeee.............fff........fffffffffffffffffffffffffffff...
            ............fffffffffffffff...ffffffffffffff..ffffff..fff..ffffffffff.eeeeee444444444444444444444eeeeeeee............fff......fffffffffffffffffffffffffffffff...
            .............fffffffffffffff..ffffffffffffff...ffff...fffffffff.fffff.eeeee4444444444444444444444eeeeeeee............fff.....ffffff.fffffffffffffffffffffffff...
            ..............fffffffffffffffffffffff.ffffff...ffff...ffffffff........eeee44444444444444444444444eeeeeeeee...........ffff....fffff...ffffffffffffffffffffffff...
            ...............ffffffffffffffffffffff..ffffff..ffff....ffffff............444444444444444444444444eeeeeeeeee..........fffff...ffff...ffffffffffffffffffffffff....
            ...............ffffffffffffffffffffff..ffffffffffff....fffff............4444444444444444444444444eeeeeeeeeee..........ffff...ffff.fffffffffffff.....fffff.......
            ...............ffffffffffffffffffffffffffffffffffff.....................4444444444444444444444444eeeeeeeeeee...........ffff...ffffffffffffffffff....ffff........
            ...............ffffffffffffffffffffffffffffffffffff.....................4444444ee4444444444444444eeeeeeeeeeee..........fffff..ffffffffffff..ffff...fffff........
            .................ffffffffffffffffffffffffff..ffffff....................4444444eee4444444444444444eeeeeeeeeeeee..........fffff.ffffffffffff...fff..fffff.........
            ...................fffffffffffffffffffffff....fffff....................4444444ee444444e444444444444eeeeeeeeeeee..........ffffffffffffffffff..fff..fffff.........
            .....................ffffffffffffffffffff.....fffff..................ee444444eee444444e444444444444eeeeeeeeeeeee..........ffffffffffff.fffff.ffffffffff.........
            ........................ffffffffffffffff.....ffff..................eeee444444eee444444ee444444444444eeeeeeeeeeeee.........fffffffffff...ffff.ffffffffff.........
            ........................fffffff...fffffffff..ffff..................eeee444444eee444444ee444444444444eeeeeeeeeeeee..........ffff.ffff.....ffff.fffffffff.........
            ....................................ffffffffffff..................eeeee44444eee4444444eee444444444444eeeeeeeeeeeee.......................ffff.fffffffff.........
            ......................................ffffffffff.................eeeeee44444eee444444eeeee44444444444eeeeeeeeeeeee........................ffffffffffff..........
            .........................................fffffff................eeeeee44444eeee444444eeeee44444444444eeeeeeeeeeeeee.......................ffffffffffff..........
            ...........................................ffff................eeeeeee44444eeee4444444eeee444444444444eeeeeeeeeeeeee.......................fffffffffff..........
            ..............................................................eeeeeeee44444eeee44444444eee444444444444eeeeeeeeeeeeeee......................ffff..fffff..........
            .............................................................eeeeeeeee444444eee44444444eee444444444444eeeeeeeeeeeeeee.............................fff...........
            ............................................................eeeeeeeeee444444eeee4444444eeee44444444444eeeeeeeeeeeeeeeee.........................................
            ...........................................................eeeeeeeeeee444444eeeee444444eeee44444e4444444eeeeeeeeeeeeeee.........................................
            ...........................................................eeeeeeeeeee444444eeeee444444eee444444e44444444eeeeeeeeeeeeee.........................................
            ...........................................................eeeeeeeeeeee44444eeeeeeeeeeeeee444444e444444444eeeeeeeeeeeee.........................................
            ...........................................................eeeeeeeeeeee44444eeeeeeeeeeeeee444444e4444444444eeeeeeeeeeee.........................................
            ...........................................................eeeeeeeeeeee44444eeeeeeeeeeeee4444444e44444444444eeeeeeeeeee.........................................
            ...........................................................eeeeeeeeeeee44444eeeeeeeeeeeee444444eeee4444444444eeeeeeeee..........................................
            ...........................................................eeeeeeeeeeee44444eeeeeeeeeeeee444444eeeee444444444eeeeeeeee..........................................
            ...........................................................eeeeeeeeeeee44444eeeeeeeeeeeee444444eeeeee44444444eeeeeeeee..........................................
            ...........................................................eeeeeeeeeee444444eeeeeeeeeeeee444444eeeeeee4444444eeeeeeeee..........................................
            ..........................................................eeeeeeeeeeee444444eeeeeeeeeeee444444eeeeeeeee444444eeeeeeeee..........................................
            ..........................................................eeeeeeeeeeee444444eeeeeeeeeeee444444eeeeeeeee444444eeeeeeeee..........................................
            ..........................................................eeeeeeeeeeee444444eeeeeeeeeee4444444eeeeeeeee444444eeeeeeeee..........................................
            ..........................................................eeeeeeeeeeee444444eeeeeeeeeee4444444eeeeeeeee444444eeeeeeeee..........................................
            .........................................................eeeeeeeeeeeee44444eeeeeeeeeee4444444eeeeeeeeee444444eeeeeeeeee.........................................
            .........................................................eeeeeeeeeeeee44444eeeeeeeeeee4444444eeeeeeeeee44444eeeeeeeeeee.........................................
            .........................................................eeeeeeeeeeeee44444eeeeeeeeee4444444eeeeeeeeeeeeeeeeeeeeeeeeeee.........................................
            .........................................................eeeeeeeeeeeeeeeeeeeeeeeeeee44444444eeeeeeeeeeeeeeeeeeeeeeeeeee.........................................
            .........................................................eeeeeeeeeeeeeeeeeeeeeeeeeee4444444eeeeeeeeeeeeeeeeeeeeeeeeeeeee........................................
            .........................................................eeeeeeeeeeeeeeeeeeeeeeeee444444444eeeeeeeeeeeeeeeeeeeeeeeeeeeee........................................
            .........................................................eeeeeeeeeeeeeeeeeeeeeeeee44444444eeeeeeeeeeeeeeeeeeeeeeeeeeeeeee.......................................
            .........................................................eeeeeeeeeeeeeeeeeeeeeeeee4444444eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee......................................
            .........................................................eeeeeeeeeeeeeeeeeeeeeeee44444444eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee......................................
            .........................................................eeeeeeeeeeeeeeeeeeeeeeee4444444eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee......................................
            .........................................................eeeeeeeeeeeeeeeeeeeeeeee444444eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee......................................
            .........................................................eeeeeeeeeeeeeeeeeeeeeeee444444eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee.....................................
            ..................................................eeeeee.eeeeeeeeeeeeeeeeeeeeeeee44444eeeeeeeeeeeeeeeeeeeeefffeeeeeeeeeeeee.....................................
            .................................................eeeeeee.eeeeeeeeeeeeeeeeeeeeeeee44444eeeeeeeeeeeeeeeeeeeeeffffeeeeeeeeeeee.....................................
            ................................................eeeeeeee.eeeeeeeeeeeeeeeeeeeeeeee44444eeeeeeeeeeeeeeeeeeeeefffffeeeeeeeeeee.....................................
            ..............................................eeeeeeeeee..eeeeeeeeeeeeeeeeeeeeeee44444eeeeeeeeeeeeeeeeeeeeeeffffeeeeeeeeeee.....................................
            ..........................................eeeeeeeeeeeeee..eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeefffeeeeeeeeeee.....................................
            ........................................eeeeeeeeeeeeeeee..eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeefffeeeeeeeeeee.....................................
            .......................................eeeeeeeeeeeeeeeee..eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeefffeeeeeeeeeee.....................................
            ....................................eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeefffeeeeeeeeeeeeeeeeefffeeeeeeeeeee.....................................
            ...................................eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeefffeeeeeeeeeeeeeeeeffffeeeeeeeeeee.....................................
            .................................eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeefffeeeeeeeeeeeeeeeeffffeeeeeeeeeee.....................................
            ..............................eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeefffeeeeeeeeeeeeeeeeeeeeefffeeeeeeeeeeeeeeeefffeeeeeeeeeeee.....................................
            ............................eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeefffeeeeeeeeeeeeeeeeeeeeefffeeeeeeeeeeeeeeeefffeeeeeeeeeeee.....................................
            ...........................eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeefffeeeeeeeeeeeeeeeeeeeeefffeeeeeeeeeeeeeeeefffeeeeeeeeeeee.....................................
            ...........................eeeeeeeeeeeeeeeeeefffeeeeeeeeeeeeeeeeefffeeeeeeeeeeeeeeeeeeeeefffeeeeeeeeeeeeeeeeffffeeeeeeeeeee.....................................
            .........................eeeeeeeeeeeeeeeeeeeefffeeeeeeeeeeeeeeeeffffeeeeeeeeeeeeeeeeeeeeefffeeeeeeeeeeeeeeeeffffeeeeeeeeeee.....................................
            ........................eeeeeeeeeeeeeeeeeeeeefffeeeeeeeeeeeeeeeeffffeeeeeeeeeeeeeeeeeeeeefffeeeeeeeeeeeeeeeeefffeeeeeeeeee......................................
            ....................eeeeeeeeeeeeeeeeeeeeeeeeeffffeeeeeeeeeeeeeeffffeeeeeeeeeeeeeeeeeeeeeefffeeeeeeeeeeeeeeeeeffffeeeeeeeee......................................
            ...................eeeeeeeeeeeeeeeeeeeeeeeeeeffffeeeeeeeeeeeeefffffeeeeeeeeeeeeeeeeeeeeeefffeeeeeeeeeeeeeeeeeffffeeeeeeeee......................................
            ...................eeeeeeeeeeeeeeeeeeeeeeeeeeeffffeeeeeeeeeeefffffeeeeeeeeeeeeeeeeeeeeeeefffeeeeeeeeeeeeeeeeeefffeeeeeeeee......................................
            ...................eeeeeeeeeeeeeeeeeeeeeeeeeeeffffeeeeeeeeeffffffeeeeeeeeeeeeeeeeeeeeeeeefffeeeeeeeeeeeeeeeeeeffffeeeeeeeee.....................................
            ...................eeeeeeeeeeeeeeeeeeeeeeeeeeeffffeeeeeeeeefffffeeeeeeeeeefffeeeeeeeeeeeefffeeeeeeeeeeeeeeeeeefffffeeeeeeee.....................................
            ...................eeeeeeeeeeeeeeeeeeeeeeeeeeeffffeeeeeeeeeffffeeeeeeeeeeeffffeeeeeeeeeeefffeeeeeeeeeeeeeeeeeeeffffeeeeeeee.....................................
            ...................eeeeeeeeeeeeeeeeeeeeeeeeeefffffeeeeeeeeffffeeeeeeeeeeeefffffeeeeeeeeeefffeeeeeeeeeeeeeeeeeeeeffffeeeeeeee....................................
            ...................eeeeeeeeeeeeeeeeeeeeeeeeeeffffeeeeeeeeeffffeeeeeeeeeeeeefffffeeeeeeeeefffeeeeeeeeeeeeeeeeeeeeffffeeeeeeee....................................
            ...................eeeeeeeeeeeeeeeeeeeeeeeeeffffeeeeeeeeeffffeeeeeeeeeeeeeeefffffeeeeeeeefffeeeeeeeeeeeeeeeeeeeeeffffeeeeeee....................................
            ....................eeeeeeeeeeeeeeeeeeeeeeefffffeeeeeeeefffffeeeeeeeeeeeeeeeefffffeeeeeeffffeeeeeeeeeeeeeeeeeeeeefffffeeeeee....................................
            ....................eeeeeeeeeeeeeeeeeeeeeeeffffeeeeeeeefffffeeeeeeeeeeeeeeeeeefffffeeeeeffffeeeeeeeeeeeeeeeeeeeeeeffffeeeeee....................................
            .....................eeeeeeeeeeeeeeeeeeeeeefffeeeeeeeeeffffeeeeeeeeeeeeeeeeeeeeffffeeeeeffffeeeeeeeeeeeeeeeeeeeeeeffffeeeeeee...................................
            .....................eeeeeeeeeeeeeeeeeeeeeffffeeeeeeeeefffeeeeeeeeeeeeeeeeeeeeeeffffeeeefffeeeeeeeeeeeeeeeeeeeeeeeefffeeeeeee...................................
            ......................eeeeeeeeeeeeeeeeeeeeffffeeeeeeeeefffeeeeeeeeeeeeeeeeeeeeeeffffeeeefffeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee..................................
            .....................eeeeeeeeeeeeeeeeeeeeefffeeeeeeeeeefffeeeeeeeeeeeeeeeeeeeeeefffffeeefffeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee..................................
            ...................eeeeeeeeeeeeeeeeeeeeeeffffeeeeeeeeeefffeeeeeeeeeeeeeeeeeeeeeeeffffeeefffeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee...........................
            .................eeeeeeeeeeeeeeeeeeeeeeeeffffeeeeeeeeeefffeeeeeeeeeeeeeeeeeeeeeeeffffeeefffeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee..........................
            ................eeeeeeeeeeeeeeeeeeeeeeeeffffeeeeeeeeeeefffeeeeeeeeeeeeeeeeeeeeeefffffeeefffeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee.........................
            ................eeeeeeeeeeeeeeeeeeeeeeeeffffeeeeeeeeeeefffeeeeeeeeeeeeeeeeeeeeeeffffeeeefffeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee........................
            ...............eeeeeeeeeeeeeeeeeeeeeeeeefffeeeeeeeeeeeefffeeeeeeeeeeeeeeeeeeeeeeffffeeeffffeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee......................
            ..............eeeeeeeeeeeeeeeeeeeeeeeeeefffeeeeeeeeeeeffffeeeeeeeeeeeeeeeeeeeeeeeeeeeeeffffeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee....................
            ............eeeeeeeeeeeeeeeeeeeeeeeeeeeefffeeeeeeeeeeeffffeeeeeeeeeeeeeeeeeeeeeeeeeeeeffffeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee.................
            ............eeeeeeeeeeeeeeeeeeeeeeeeeeeefffeeeeeeeeeeefffeeeeeeeeeeeeeeeeeeeeeeeeeeeefffffeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee...........
            ............eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeefffeeeeeeeeeeeeeeeeeeeeeeeeeeefffffeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee..........
            ...........eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeefffffeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee........
            ..........eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeffffeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee.......
            ........eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeffffeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee....
            ......eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeefffeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee..
            .eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
            eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
            eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
            eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
            eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
            eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
            `)
        tiles.setTilemap(tilemap`level19`)
        Level_Start()
        tiles.replaceAllTiles(sprites.dungeon.darkGroundNorthEast1, assets.tile`transparency16`)
        tiles.replaceAllTiles(sprites.castle.tileGrass1, assets.tile`transparency16`)
        tiles.replaceAllTiles(sprites.castle.tileDarkGrass1, assets.tile`transparency16`)
        tiles.replaceAllTiles(sprites.castle.tilePath5, assets.tile`transparency16`)
        tiles.replaceAllTiles(sprites.castle.tilePath8, assets.tile`transparency16`)
    } else if (levelnum == 4) {
        tiles.setTilemap(tilemap`level21`)
        tiles.replaceAllTiles(sprites.dungeon.darkGroundNorthEast1, sprites.builtin.brick)
        tiles.replaceAllTiles(sprites.castle.tileGrass1, sprites.builtin.brick)
        tiles.replaceAllTiles(sprites.castle.tileDarkGrass1, sprites.builtin.brick)
        tiles.replaceAllTiles(sprites.castle.tilePath5, sprites.builtin.brick)
    } else if (levelnum == 5) {
        // Ruins
        tiles.setTilemap(tilemap`level8`)
    } else if (levelnum == 6) {
        // mines
        tiles.setTilemap(tilemap`level8`)
    } else if (levelnum == 7) {
        // Desert
        tiles.setTilemap(tilemap`level8`)
    } else if (levelnum == 8) {
        // Under water
        tiles.setTilemap(tilemap`level8`)
        Level_Start()
        tiles.replaceAllTiles(sprites.dungeon.darkGroundNorthEast1, assets.tile`transparency16`)
        tiles.replaceAllTiles(sprites.castle.tilePath5, assets.tile`transparency16`)
    } else {
        tiles.setTilemap(tilemap`level20`)
        Chaser = sprites.create(assets.image`VillainSuit`, SpriteKind.Unkillable)
        Chaser.follow(Sigma, 50)
        Chaser.setFlag(SpriteFlag.GhostThroughWalls, true)
        Weakspot = sprites.create(img`
            . . . . f f f f f f f . . . . . 
            . . f f 9 9 9 9 9 9 1 f f . . . 
            . f 1 1 9 9 1 f 1 9 a 7 7 f . . 
            . f 9 1 1 9 1 f 1 9 a 7 7 f . . 
            f 9 9 1 9 9 f f f 1 a a a a f . 
            f 9 9 9 9 1 f f f 1 a 7 a 7 f . 
            f 9 2 2 2 1 f 4 f a a 7 a 7 f . 
            f 2 2 2 1 1 f 4 f a 7 7 a a f . 
            f 5 2 2 2 2 f 4 f c c c c c f . 
            f 5 5 2 5 2 f f f c b b b c f . 
            f 5 5 2 2 5 f f f c c c b b f . 
            . f 2 2 2 5 5 f b c b c b f . . 
            . f 5 5 2 2 2 f c c b c c f . . 
            . . f f 2 2 b b c b b f f . . . 
            . . . . f f f f f f f . . . . . 
            . . . . . . . . . . . . . . . . 
            `, SpriteKind.Weak)
        tiles.placeOnRandomTile(Weakspot, assets.tile`myTile19`)
        statusbar2 = statusbars.create(200, 8, StatusBarKind.Energy)
        statusbar2.positionDirection(CollisionDirection.Bottom)
        statusbar2.max = 1000
        statusbar2.value = 1000
        Level_Start()
        tiles.replaceAllTiles(sprites.dungeon.darkGroundNorthEast1, assets.tile`transparency16`)
        tiles.replaceAllTiles(sprites.castle.tileDarkGrass1, assets.tile`transparency16`)
        tiles.replaceAllTiles(sprites.castle.tileGrass1, assets.tile`transparency16`)
    }
}
function First_dice (X: number) {
    if (1 == X) {
        powerup = 1
        game.splash("#1")
    } else if (2 == X) {
        powerup = 2
        game.splash("#2")
    } else if (3 == X) {
        powerup = 3
        game.splash("#3")
    } else if (4 == X) {
        powerup = 4
        game.splash("#4")
    }
    game.splash("press A to activate")
}
function Level_Start () {
    Enemyset()
    Place_dice()
    Chacha_slide()
    tiles.placeOnRandomTile(Sigma, sprites.dungeon.darkGroundNorthEast1)
}
controller.up.onEvent(ControllerButtonEvent.Pressed, function () {
    if (Sigma.vy == 0) {
        Sigma.vy = -175
    }
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile6`, function (sprite, location) {
    currentlevel += 1
    choose()
})
controller.B.onEvent(ControllerButtonEvent.Pressed, function () {
    Second_poweup(Power_up_2)
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.first, function (sprite, otherSprite) {
    otherSprite.destroy(effects.spray, 500)
    game.splash("This number has been erased.")
    powerup = 0
})
sprites.onOverlap(SpriteKind.bomb, SpriteKind.enemy2, function (sprite, otherSprite) {
    statusbars.getStatusBarAttachedTo(StatusBarKind.EnemyHealth, otherSprite).value += -1
    info.changeLifeBy(1)
})
scene.onOverlapTile(SpriteKind.Projectile, assets.tile`myTile2`, function (sprite, location) {
    tiles.setTileAt(location, assets.tile`myTile3`)
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Unkillable, function (sprite, otherSprite) {
    info.changeLifeBy(-1)
})
function choose () {
    tiles.setTilemap(tilemap`level4`)
    Number1()
    Number2()
    tiles.placeOnRandomTile(Sigma, sprites.dungeon.collectibleInsignia)
    game.splash("You may choose to delete a number")
}
function Place_dice () {
    if (Power_up_2 == 0) {
        Dice2 = sprites.create(img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . f f f f f f f f f f . . . 
            . . . f 1 1 1 1 1 1 1 1 f . . . 
            . . . f 1 1 f 1 1 f 1 1 f . . . 
            . . . f 1 1 1 1 1 1 1 1 f . . . 
            . . . f 1 1 1 1 1 1 1 1 f . . . 
            . . . f 1 1 f 1 1 f 1 1 f . . . 
            . . . f 1 1 1 1 1 1 1 1 f . . . 
            . . . f 1 1 f 1 1 f 1 1 f . . . 
            . . . f 1 1 1 1 1 1 1 1 f . . . 
            . . . f f f f f f f f f f . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            `, SpriteKind.dooF)
        animation.runImageAnimation(
        Dice2,
        [img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . f f f f f f f f f f . . . 
            . . . f 1 1 1 1 1 1 1 1 f . . . 
            . . . f 1 1 1 1 1 1 1 1 f . . . 
            . . . f 1 1 f 1 1 1 f 1 f . . . 
            . . . f 1 1 1 1 1 1 1 1 f . . . 
            . . . f 1 1 1 1 1 1 1 1 f . . . 
            . . . f 1 1 1 1 1 1 1 1 f . . . 
            . . . f 1 1 f 1 1 1 f 1 f . . . 
            . . . f 1 1 1 1 1 1 1 1 f . . . 
            . . . f f f f f f f f f f . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            `,img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . f f f f f f f f f f . . . 
            . . . f 1 1 1 1 1 1 1 1 f . . . 
            . . . f 1 1 1 1 1 1 f 1 f . . . 
            . . . f 1 1 1 1 1 1 1 1 f . . . 
            . . . f 1 1 1 1 1 1 1 1 f . . . 
            . . . f 1 1 1 1 f 1 1 1 f . . . 
            . . . f 1 1 1 1 1 1 1 1 f . . . 
            . . . f 1 1 f 1 1 1 1 1 f . . . 
            . . . f 1 1 1 1 1 1 1 1 f . . . 
            . . . f f f f f f f f f f . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            `,img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . f f f f f f f f f f . . . 
            . . . f 1 1 1 1 1 1 1 1 f . . . 
            . . . f 1 1 1 1 1 1 1 1 f . . . 
            . . . f 1 1 1 1 1 f 1 1 f . . . 
            . . . f 1 1 1 1 1 1 1 1 f . . . 
            . . . f 1 1 1 1 1 1 1 1 f . . . 
            . . . f 1 1 f 1 1 1 1 1 f . . . 
            . . . f 1 1 1 1 1 1 1 1 f . . . 
            . . . f 1 1 1 1 1 1 1 1 f . . . 
            . . . f f f f f f f f f f . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            `,img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . f f f f f f f f f f . . . 
            . . . f 1 1 1 1 1 1 1 1 f . . . 
            . . . f 1 1 1 1 1 1 1 1 f . . . 
            . . . f 1 1 1 1 1 1 1 1 f . . . 
            . . . f 1 1 1 f f 1 1 1 f . . . 
            . . . f 1 1 1 f f 1 1 1 f . . . 
            . . . f 1 1 1 1 1 1 1 1 f . . . 
            . . . f 1 1 1 1 1 1 1 1 f . . . 
            . . . f 1 1 1 1 1 1 1 1 f . . . 
            . . . f f f f f f f f f f . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            `],
        100,
        true
        )
        tiles.placeOnRandomTile(Dice2, sprites.castle.tileGrass1)
    }
    if (powerup == 0) {
        Dice = sprites.create(img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . f f f f f f f f f f . . . 
            . . . f 1 1 1 1 1 1 1 1 f . . . 
            . . . f 1 1 f 1 1 f 1 1 f . . . 
            . . . f 1 1 1 1 1 1 1 1 f . . . 
            . . . f 1 1 1 1 1 1 1 1 f . . . 
            . . . f 1 1 f 1 1 f 1 1 f . . . 
            . . . f 1 1 1 1 1 1 1 1 f . . . 
            . . . f 1 1 f 1 1 f 1 1 f . . . 
            . . . f 1 1 1 1 1 1 1 1 f . . . 
            . . . f f f f f f f f f f . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            `, SpriteKind.Food)
        animation.runImageAnimation(
        Dice,
        [img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . f f f f f f f f f f . . . 
            . . . f 1 1 1 1 1 1 1 1 f . . . 
            . . . f 1 1 1 1 1 1 1 1 f . . . 
            . . . f 1 1 f 1 1 1 f 1 f . . . 
            . . . f 1 1 1 1 1 1 1 1 f . . . 
            . . . f 1 1 1 1 1 1 1 1 f . . . 
            . . . f 1 1 1 1 1 1 1 1 f . . . 
            . . . f 1 1 f 1 1 1 f 1 f . . . 
            . . . f 1 1 1 1 1 1 1 1 f . . . 
            . . . f f f f f f f f f f . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            `,img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . f f f f f f f f f f . . . 
            . . . f 1 1 1 1 1 1 1 1 f . . . 
            . . . f 1 1 1 1 1 1 f 1 f . . . 
            . . . f 1 1 1 1 1 1 1 1 f . . . 
            . . . f 1 1 1 1 1 1 1 1 f . . . 
            . . . f 1 1 1 1 f 1 1 1 f . . . 
            . . . f 1 1 1 1 1 1 1 1 f . . . 
            . . . f 1 1 f 1 1 1 1 1 f . . . 
            . . . f 1 1 1 1 1 1 1 1 f . . . 
            . . . f f f f f f f f f f . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            `,img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . f f f f f f f f f f . . . 
            . . . f 1 1 1 1 1 1 1 1 f . . . 
            . . . f 1 1 1 1 1 1 1 1 f . . . 
            . . . f 1 1 1 1 1 f 1 1 f . . . 
            . . . f 1 1 1 1 1 1 1 1 f . . . 
            . . . f 1 1 1 1 1 1 1 1 f . . . 
            . . . f 1 1 f 1 1 1 1 1 f . . . 
            . . . f 1 1 1 1 1 1 1 1 f . . . 
            . . . f 1 1 1 1 1 1 1 1 f . . . 
            . . . f f f f f f f f f f . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            `,img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . f f f f f f f f f f . . . 
            . . . f 1 1 1 1 1 1 1 1 f . . . 
            . . . f 1 1 1 1 1 1 1 1 f . . . 
            . . . f 1 1 1 1 1 1 1 1 f . . . 
            . . . f 1 1 1 f f 1 1 1 f . . . 
            . . . f 1 1 1 f f 1 1 1 f . . . 
            . . . f 1 1 1 1 1 1 1 1 f . . . 
            . . . f 1 1 1 1 1 1 1 1 f . . . 
            . . . f 1 1 1 1 1 1 1 1 f . . . 
            . . . f f f f f f f f f f . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            `],
        100,
        true
        )
        tiles.placeOnRandomTile(Dice, sprites.castle.tileDarkGrass1)
    }
}
sprites.onOverlap(SpriteKind.Freeze, SpriteKind.enemy2, function (sprite, otherSprite) {
    otherSprite.setImage(img`
        . . . . . . 9 9 9 9 9 9 9 . . . 
        . . . . . 9 9 9 9 1 9 9 9 . . . 
        . . . 9 9 1 1 1 9 9 9 9 9 . . . 
        . . . 9 1 1 1 1 9 1 1 9 9 . . . 
        . . . 9 1 1 1 9 1 1 1 9 9 . . . 
        . . . 9 9 1 1 9 1 1 1 9 . . . . 
        . . . 9 9 9 9 9 9 9 9 1 9 9 . . 
        . 9 9 9 9 9 9 9 1 9 1 1 9 9 . . 
        . 9 1 9 9 9 9 9 9 1 9 1 1 1 9 . 
        9 1 1 1 1 1 1 9 1 1 9 1 1 1 9 . 
        . 9 1 1 1 1 9 9 1 1 9 1 1 9 9 . 
        . 9 9 1 1 1 1 9 1 1 1 9 1 9 . . 
        . . . 9 9 9 1 9 1 1 1 9 1 9 . . 
        . . . . . . 9 9 9 9 9 9 1 9 . . 
        . . . . . . . . . 9 9 9 9 9 . . 
        . . . . . . . . . . . . . . . . 
        `)
    animation.stopAnimation(animation.AnimationTypes.All, otherSprite)
    otherSprite.setKind(SpriteKind.Frozen)
    pause(5000)
    otherSprite.setImage(assets.image`Fanshy`)
    animation.runMovementAnimation(
    otherSprite,
    animation.animationPresets(animation.bobbing),
    2000,
    true
    )
    otherSprite.setKind(SpriteKind.enemy2)
})
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    First_powerup(powerup)
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile4`, function (sprite, location) {
    currentlevel += 3
    choose()
})
sprites.onOverlap(SpriteKind.bomb, SpriteKind.Weak, function (sprite, otherSprite) {
    statusbar2.value += -4
    scene.cameraShake(4, 500)
    info.changeLifeBy(1)
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.enemy2, function (sprite, otherSprite) {
    info.changeLifeBy(-100)
    pause(1000)
})
controller.left.onEvent(ControllerButtonEvent.Pressed, function () {
    Right_face = false
    animation.runImageAnimation(
    Sigma,
    [img`
        . . . . . 4 4 4 4 . . . . . . . 
        . . . 4 4 5 4 4 4 4 . . . . . . 
        . . . 4 5 5 4 4 4 4 . . . . . . 
        . . 4 5 f 5 5 5 4 4 4 . . . . . 
        . . 4 5 f 5 5 5 4 4 4 . . . . . 
        . . 4 5 5 5 5 5 4 4 4 . . . . . 
        . . 4 f f 5 5 5 4 f 4 . . . . . 
        . . 4 5 5 5 5 5 4 f 4 . . . . . 
        . . 4 f f f 5 5 4 f 4 . . . . . 
        . . 4 f 5 5 5 5 4 f 4 . . . . . 
        . . 4 f f f 5 5 4 4 4 . . . . . 
        . . . 4 f 5 4 4 4 4 . . . . . . 
        . . . 4 4 f 4 4 4 4 . . . . . . 
        . . . . . 4 4 4 4 . . . . . . . 
        . . . . . . f f . . . . . . . . 
        . . . . . f f f . . . . . . . . 
        `,img`
        . . . . . 4 4 4 4 . . . . . . . 
        . . . 4 4 5 4 4 4 4 . . . . . . 
        . . . 4 5 5 4 4 4 4 . . . . . . 
        . . 4 5 f 5 5 5 4 4 4 . . . . . 
        . . 4 5 f 5 5 5 4 4 4 . . . . . 
        . . 4 5 5 5 5 5 4 4 4 . . . . . 
        . . 4 f f 5 5 5 4 f 4 . . . . . 
        . . 4 5 5 5 5 5 4 f 4 . . . . . 
        . . 4 f f f 5 5 4 f 4 . . . . . 
        . . 4 f 5 5 5 5 f 4 4 . . . . . 
        . . 4 f f f 5 5 4 4 4 . . . . . 
        . . . 4 f 5 4 4 4 4 . . . . . . 
        . . . 4 4 f 4 4 4 4 . . . . . . 
        . . . . . 4 4 4 4 . . . . . . . 
        . . . . . . f f . . . . . . . . 
        . . . . . f f . . . . . . . . . 
        `,img`
        . . . . . 4 4 4 4 . . . . . . . 
        . . . 4 4 5 4 4 4 4 . . . . . . 
        . . . 4 5 5 4 4 4 4 . . . . . . 
        . . 4 5 f 5 5 5 4 4 4 . . . . . 
        . . 4 5 f 5 5 5 4 4 4 . . . . . 
        . . 4 5 5 5 5 5 4 4 4 . . . . . 
        . . 4 f f 5 5 5 4 f 4 . . . . . 
        . . 4 5 5 5 5 5 4 f 4 . . . . . 
        . . 4 f f f 5 5 f 4 4 . . . . . 
        . . 4 f 5 5 5 f 4 4 4 . . . . . 
        . . 4 f f f 5 5 4 4 4 . . . . . 
        . . . 4 f 5 4 4 4 4 . . . . . . 
        . . . 4 4 f 4 4 4 4 . . . . . . 
        . . . . . 4 4 4 4 . . . . . . . 
        . . . . . . f f . . . . . . . . 
        . . . . . . f . . . . . . . . . 
        `,img`
        . . . . . 4 4 4 4 . . . . . . . 
        . . . 4 4 5 4 4 4 4 . . . . . . 
        . . . 4 5 5 4 4 4 4 . . . . . . 
        . . 4 5 f 5 5 5 4 4 4 . . . . . 
        . . 4 5 f 5 5 5 4 4 4 . . . . . 
        . . 4 5 5 5 5 5 4 4 4 . . . . . 
        . . 4 f f 5 5 5 4 f 4 . . . . . 
        . . 4 5 5 5 5 5 4 f 4 . . . . . 
        . . 4 f f f 5 5 4 f 4 . . . . . 
        . . 4 f 5 5 5 5 f 4 4 . . . . . 
        . . 4 f f f 5 5 4 4 4 . . . . . 
        . . . 4 f 5 4 4 4 4 . . . . . . 
        . . . 4 4 f 4 4 4 4 . . . . . . 
        . . . . . 4 4 4 4 . . . . . . . 
        . . . . . . f f . . . . . . . . 
        . . . . . f f . . . . . . . . . 
        `],
    200,
    true
    )
})
scene.onOverlapTile(SpriteKind.Player, sprites.dungeon.stairWest, function (sprite, location) {
    Levels(currentlevel)
    if (fnumber) {
        fnumber.destroy()
    }
    if (snumber) {
        snumber.destroy()
    }
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile3`, function (sprite, location) {
    currentlevel += 4
    choose()
})
sprites.onOverlap(SpriteKind.Freeze, SpriteKind.Weak, function (sprite, otherSprite) {
    statusbar2.value += -30
    scene.cameraShake(4, 500)
    sprite.destroy()
})
scene.onOverlapTile(SpriteKind.Freeze, assets.tile`myTile0`, function (sprite, location) {
    tiles.setTileAt(location, assets.tile`myTile5`)
})
function Second_Dice (X: number) {
    if (1 == X) {
        Power_up_2 = 1
        game.splash("#1")
    } else if (2 == X) {
        Power_up_2 = 2
        game.splash("#2")
    } else if (3 == X) {
        Power_up_2 = 3
        game.splash("#3")
    } else if (4 == X) {
        Power_up_2 = 4
        game.splash("#4")
    }
    game.splash("press B to activate")
}
function First_powerup (Y: number) {
    if (Right_face == true) {
        if (4 == Y) {
            projectile = sprites.createProjectileFromSprite(img`
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . f f f f f . . . . . . 
                . . . . f c b b c c f . . . . . 
                . . . . f b c b c c f . . . . . 
                . . . . f c c b c c f . . . . . 
                . . . . f c b b b c f . . . . . 
                . . . . f c c c c c f . . . . . 
                . . . . . f f f f f . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                `, Sigma, 100, 0)
        } else if (3 == Y) {
            flame = sprites.create(img`
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                2 2 2 2 . . . 2 2 . . . . . . . 
                4 4 4 2 2 2 2 2 2 2 . . . . . . 
                4 4 4 4 4 4 4 4 4 2 2 . . . . . 
                4 5 5 5 4 4 4 4 4 4 4 2 2 2 2 2 
                5 5 5 5 5 5 5 5 5 5 5 4 4 4 4 2 
                5 5 5 5 5 5 5 5 4 4 5 5 4 4 2 . 
                5 5 5 5 5 4 4 4 2 2 4 4 4 2 2 . 
                4 4 4 5 5 5 4 4 2 2 2 2 2 2 2 . 
                4 4 4 4 4 4 4 2 . . . . . . . . 
                2 2 2 4 2 2 2 2 . . . . . . . . 
                . . 2 2 2 . 2 2 . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                `, SpriteKind.Fire)
            flame.setPosition(Sigma.x + 14, Sigma.y)
            controller.moveSprite(flame, 100, 100)
            flame.lifespan = 5000
            pause(5000)
        } else if (2 == Y) {
            Ice = sprites.create(img`
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . 9 9 9 . . . . . . . 
                . . . . . . 9 9 9 . 9 9 . . . . 
                . . . . . 9 1 1 9 9 9 9 9 9 . . 
                . . . . . 9 1 1 9 1 1 1 1 9 9 . 
                . . . 9 9 9 9 1 9 9 1 1 1 9 9 . 
                9 . . 9 1 1 9 9 1 9 1 1 1 9 . . 
                9 9 9 1 9 9 1 1 1 9 9 1 1 9 9 . 
                9 1 1 1 1 9 9 9 1 1 1 9 1 1 9 . 
                9 9 9 9 1 1 1 9 9 9 1 9 9 9 9 . 
                . . . 9 9 9 9 1 1 1 1 9 9 9 . . 
                . . . . . . 9 1 1 1 9 9 9 . . . 
                . . . . . . . 9 9 9 9 9 9 . . . 
                . . . . . . . . . 9 9 . . . . . 
                `, SpriteKind.Freeze)
            Ice.setPosition(Sigma.x, Sigma.y)
            Ice.setVelocity(50, 0)
            Ice.lifespan = 3000
            pause(1500)
        } else if (1 == Y) {
            Leech = sprites.create(assets.image`electricbogalo`, SpriteKind.bomb)
            Leech.setPosition(Sigma.x, Sigma.y)
            Leech.lifespan = 5000
            pause(1500)
        }
    } else if (Right_face == false) {
        if (4 == Y) {
            projectile = sprites.createProjectileFromSprite(img`
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . f f f f f . . . . . . 
                . . . . f c b b c c f . . . . . 
                . . . . f b c b c c f . . . . . 
                . . . . f c c b c c f . . . . . 
                . . . . f c b b b c f . . . . . 
                . . . . f c c c c c f . . . . . 
                . . . . . f f f f f . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                `, Sigma, -100, 0)
        } else if (3 == Y) {
            flame = sprites.create(img`
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . 2 2 . . . 2 2 2 2 
                . . . . . . 2 2 2 2 2 2 2 4 4 4 
                . . . . . 2 2 4 4 4 4 4 4 4 4 4 
                2 2 2 2 2 4 4 4 4 4 4 4 5 5 5 4 
                2 4 4 4 4 5 5 5 5 5 5 5 5 5 5 5 
                . 2 4 4 5 5 4 4 5 5 5 5 5 5 5 5 
                . 2 2 4 4 4 2 2 4 4 4 5 5 5 5 5 
                . 2 2 2 2 2 2 2 4 4 5 5 5 4 4 4 
                . . . . . . . . 2 4 4 4 4 4 4 4 
                . . . . . . . . 2 2 2 2 4 2 2 2 
                . . . . . . . . 2 2 . 2 2 2 . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                `, SpriteKind.Fire)
            flame.setPosition(Sigma.x + -14, Sigma.y)
            controller.moveSprite(flame)
            flame.lifespan = 5000
            pause(5000)
        } else if (2 == Y) {
            Ice = sprites.create(img`
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . 9 9 9 . . . . . . 
                . . . . 9 9 . 9 9 9 . . . . . . 
                . . 9 9 9 9 9 9 1 1 9 . . . . . 
                . 9 9 1 1 1 1 9 1 1 9 . . . . . 
                . 9 9 1 1 1 9 9 1 9 9 9 9 . . . 
                . . 9 1 1 1 9 1 9 9 1 1 9 . . 9 
                . 9 9 1 1 9 9 1 1 1 9 9 1 9 9 9 
                . 9 1 1 9 1 1 1 9 9 9 1 1 1 1 9 
                . 9 9 9 9 1 9 9 9 1 1 1 9 9 9 9 
                . . 9 9 9 1 1 1 1 9 9 9 9 . . . 
                . . . 9 9 9 1 1 1 9 . . . . . . 
                . . . 9 9 9 9 9 9 . . . . . . . 
                . . . . . 9 9 . . . . . . . . . 
                `, SpriteKind.Freeze)
            Ice.setPosition(Sigma.x, Sigma.y)
            Ice.setVelocity(-50, 0)
            Ice.lifespan = 3000
            pause(1500)
        } else if (1 == Y) {
            Leech = sprites.create(assets.image`electricbogalo`, SpriteKind.bomb)
            Leech.setPosition(Sigma.x, Sigma.y)
            Leech.lifespan = 5000
            pause(1500)
        }
    }
}
sprites.onOverlap(SpriteKind.Player, SpriteKind.dooF, function (sprite, otherSprite) {
    otherSprite.destroy(effects.warmRadial, 500)
    Second_Dice(randint(1, 4))
})
statusbars.onZero(StatusBarKind.EnemyHealth, function (status) {
    status.spriteAttachedTo().destroy(effects.spray, 500)
})
sprites.onOverlap(SpriteKind.Projectile, SpriteKind.Weak, function (sprite, otherSprite) {
    statusbar2.value += -20
    scene.cameraShake(4, 500)
    sprite.destroy()
})
function Number1 () {
    for (let value3 of sprites.allOfKind(SpriteKind.Frozen)) {
        value3.destroy()
    }
    for (let value4 of sprites.allOfKind(SpriteKind.enemy2)) {
        value4.destroy()
    }
    for (let value5 of sprites.allOfKind(SpriteKind.Enemy)) {
        value5.destroy()
    }
    for (let value6 of sprites.allOfKind(SpriteKind.dooF)) {
        value6.destroy()
    }
    for (let value7 of sprites.allOfKind(SpriteKind.Food)) {
        value7.destroy()
    }
    fnumber = sprites.create(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `, SpriteKind.first)
    if (powerup == 1) {
        fnumber.setImage(img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . 6 6 . . . . . . . 
            . . . . . 6 6 6 6 6 . . . . . . 
            . . . . 6 6 6 6 6 6 . . . . . . 
            . . . . 6 6 . 6 6 6 . . . . . . 
            . . . . 6 6 . 6 6 6 . . . . . . 
            . . . . . . . 6 6 6 . . . . . . 
            . . . . . . . 6 6 6 . . . . . . 
            . . . . . . . 6 6 6 . . . . . . 
            . . . . . . . 6 6 6 . . . . . . 
            . . . . . . . 6 6 6 . . . . . . 
            . . . . 6 6 6 6 6 6 6 6 . . . . 
            . . . . 6 6 6 6 6 6 6 6 . . . . 
            . . . . 6 6 6 6 6 6 6 6 . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            `)
    } else if (powerup == 2) {
        fnumber.setImage(img`
            . . . . . . . . . . . . . . . . 
            . . . . . . 6 6 6 6 6 6 6 . . . 
            . . . . . 6 6 6 6 6 6 6 6 . . . 
            . . . . 6 6 6 6 6 6 6 6 6 . . . 
            . . . 6 6 6 6 . . 6 6 6 6 . . . 
            . . . 6 6 6 . . . . 6 6 6 . . . 
            . . . 6 6 . . . . 6 6 6 . . . . 
            . . . . . . . . 6 6 6 6 . . . . 
            . . . . . . . 6 6 6 6 . . . . . 
            . . . . . . 6 6 6 6 . . . . . . 
            . . . . . 6 6 6 6 6 . . . . . . 
            . . . . 6 6 6 6 6 . . . . . . . 
            . . 6 6 6 6 6 6 6 6 6 6 6 6 6 . 
            . . 6 6 6 6 6 6 6 6 6 6 6 6 6 . 
            . . 6 6 6 6 6 6 6 6 6 6 6 6 6 . 
            . . . . . . . . . . . . . . . . 
            `)
    } else if (powerup == 3) {
        fnumber.setImage(img`
            . . . . . . . . . . . . . . . . 
            . . . . . 6 6 6 6 6 6 6 6 6 . . 
            . . . . . 6 6 6 6 6 6 6 6 6 . . 
            . . . . . . . . . . . . 6 6 . . 
            . . . . . . . . . . . . 6 6 . . 
            . . . . . . . . . . . . 6 6 . . 
            . . . . . . . . . . . . 6 6 . . 
            . . . . . . 6 6 6 6 6 6 6 6 . . 
            . . . . . . 6 6 6 6 6 6 6 6 . . 
            . . . . . . . . . . . . 6 6 . . 
            . . . . . . . . . . . . 6 6 . . 
            . . . . . . . . . . . . 6 6 . . 
            . . . . . 6 6 6 6 6 6 6 6 6 . . 
            . . . . . 6 6 6 6 6 6 6 6 6 . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            `)
    } else if (powerup == 4) {
        fnumber.setImage(img`
            . . . . . . . . . . . . . . . . 
            . . . . . . 6 6 6 6 . . . . . . 
            . . . . . 6 6 6 6 6 . . . . . . 
            . . . . 6 6 6 . 6 6 . . . . . . 
            . . . 6 6 6 . . 6 6 . . . . . . 
            . . 6 6 6 . . . 6 6 . . . . . . 
            . 6 6 6 . . . . 6 6 . . . . . . 
            . 6 6 6 6 6 6 6 6 6 6 6 6 6 . . 
            . 6 6 6 6 6 6 6 6 6 6 6 6 6 . . 
            . . . . . . . . 6 6 . . . . . . 
            . . . . . . . . 6 6 . . . . . . 
            . . . . . . . . 6 6 . . . . . . 
            . . . . . . . . 6 6 . . . . . . 
            . . . . . . . . 6 6 . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            `)
    } else {
        fnumber.setImage(img`
            . . . . . . . . . . . . . . . . 
            . . . . . 6 6 6 6 6 6 . . . . . 
            . . . . 6 . . . . . 6 6 . . . . 
            . . . . 6 . . . . . 6 6 . . . . 
            . . . . 6 . . . . 6 . 6 . . . . 
            . . . . 6 . . . . 6 . 6 . . . . 
            . . . . 6 . . . 6 . . 6 . . . . 
            . . . . 6 . . . 6 . . 6 . . . . 
            . . . . 6 . . 6 . . . 6 . . . . 
            . . . . 6 . . 6 . . . 6 . . . . 
            . . . . 6 . 6 . . . . 6 . . . . 
            . . . . 6 . 6 . . . . 6 . . . . 
            . . . . 6 6 . . . . . 6 . . . . 
            . . . . 6 . . . . . . 6 . . . . 
            . . . . . 6 6 6 6 6 6 . . . . . 
            . . . . . . . . . . . . . . . . 
            `)
    }
    tiles.placeOnRandomTile(fnumber, sprites.dungeon.floorLight5)
}
scene.onHitWall(SpriteKind.Freeze, function (sprite, location) {
    sprite.destroy()
})
scene.onHitWall(SpriteKind.Fire, function (sprite, location) {
    sprite.destroy()
})
controller.right.onEvent(ControllerButtonEvent.Pressed, function () {
    Right_face = true
    animation.runImageAnimation(
    Sigma,
    [img`
        . . . . . . . 4 4 4 4 . . . . . 
        . . . . . . 4 4 4 4 5 4 4 . . . 
        . . . . . . 4 4 4 4 5 5 4 . . . 
        . . . . . 4 4 4 5 5 5 f 5 4 . . 
        . . . . . 4 4 4 5 5 5 f 5 4 . . 
        . . . . . 4 4 4 5 5 5 5 5 4 . . 
        . . . . . 4 f 4 5 5 5 f f 4 . . 
        . . . . . 4 f 4 5 5 5 5 5 4 . . 
        . . . . . 4 f 4 5 5 f f f 4 . . 
        . . . . . 4 f 4 5 5 5 5 f 4 . . 
        . . . . . 4 4 4 5 5 f f f 4 . . 
        . . . . . . 4 4 4 4 5 f 4 . . . 
        . . . . . . 4 4 4 4 f 4 4 . . . 
        . . . . . . . 4 4 4 4 . . . . . 
        . . . . . . . . f f . . . . . . 
        . . . . . . . . f f f . . . . . 
        `,img`
        . . . . . . . 4 4 4 4 . . . . . 
        . . . . . . 4 4 4 4 5 4 4 . . . 
        . . . . . . 4 4 4 4 5 5 4 . . . 
        . . . . . 4 4 4 5 5 5 f 5 4 . . 
        . . . . . 4 4 4 5 5 5 f 5 4 . . 
        . . . . . 4 4 4 5 5 5 5 5 4 . . 
        . . . . . 4 f 4 5 5 5 f f 4 . . 
        . . . . . 4 f 4 5 5 5 5 5 4 . . 
        . . . . . 4 f 4 5 5 f f f 4 . . 
        . . . . . 4 4 f 5 5 5 5 f 4 . . 
        . . . . . 4 4 4 5 5 f f f 4 . . 
        . . . . . . 4 4 4 4 5 f 4 . . . 
        . . . . . . 4 4 4 4 f 4 4 . . . 
        . . . . . . . 4 4 4 4 . . . . . 
        . . . . . . . . f f . . . . . . 
        . . . . . . . . . f f . . . . . 
        `,img`
        . . . . . . . 4 4 4 4 . . . . . 
        . . . . . . 4 4 4 4 5 4 4 . . . 
        . . . . . . 4 4 4 4 5 5 4 . . . 
        . . . . . 4 4 4 5 5 5 f 5 4 . . 
        . . . . . 4 4 4 5 5 5 f 5 4 . . 
        . . . . . 4 4 4 5 5 5 5 5 4 . . 
        . . . . . 4 f 4 5 5 5 f f 4 . . 
        . . . . . 4 f 4 5 5 5 5 5 4 . . 
        . . . . . 4 4 f 5 5 f f f 4 . . 
        . . . . . 4 4 4 f 5 5 5 f 4 . . 
        . . . . . 4 4 4 5 5 f f f 4 . . 
        . . . . . . 4 4 4 4 5 f 4 . . . 
        . . . . . . 4 4 4 4 f 4 4 . . . 
        . . . . . . . 4 4 4 4 . . . . . 
        . . . . . . . . f f . . . . . . 
        . . . . . . . . . f . . . . . . 
        `,img`
        . . . . . . . 4 4 4 4 . . . . . 
        . . . . . . 4 4 4 4 5 4 4 . . . 
        . . . . . . 4 4 4 4 5 5 4 . . . 
        . . . . . 4 4 4 5 5 5 f 5 4 . . 
        . . . . . 4 4 4 5 5 5 f 5 4 . . 
        . . . . . 4 4 4 5 5 5 5 5 4 . . 
        . . . . . 4 f 4 5 5 5 f f 4 . . 
        . . . . . 4 f 4 5 5 5 5 5 4 . . 
        . . . . . 4 f 4 5 5 f f f 4 . . 
        . . . . . 4 4 f 5 5 5 5 f 4 . . 
        . . . . . 4 4 4 5 5 f f f 4 . . 
        . . . . . . 4 4 4 4 5 f 4 . . . 
        . . . . . . 4 4 4 4 f 4 4 . . . 
        . . . . . . . 4 4 4 4 . . . . . 
        . . . . . . . . f f . . . . . . 
        . . . . . . . . . f f . . . . . 
        `],
    200,
    true
    )
})
sprites.onOverlap(SpriteKind.Fire, SpriteKind.Enemy, function (sprite, otherSprite) {
    statusbars.getStatusBarAttachedTo(StatusBarKind.EnemyHealth, otherSprite).value += -2
})
function Enemyset () {
    for (let value8 of tiles.getTilesByType(sprites.castle.tilePath5)) {
        Enemy_up_down = sprites.create(img`
            . . . . . . . . . . . . . . . . 
            . . . . f f f f f f f . . . . . 
            . . . f 1 1 1 1 1 1 1 f . . . . 
            . . f 1 1 f f f f f 1 1 f . . . 
            . f f 1 1 f f 1 f f 1 1 f f . . 
            . f f 1 1 1 1 f 1 1 1 1 f f . . 
            . f f 1 1 1 1 f 1 1 1 1 f f . . 
            . f f 1 1 f f 1 f f 1 1 f f . . 
            . f f 1 1 f f f f f 1 1 f f . . 
            . f f 1 1 1 1 1 1 1 1 1 f f . . 
            . f f f 1 1 1 1 1 1 1 f f f . . 
            . . f f f f f f f f f f f . . . 
            . . . f f f f f f f f f . . . . 
            . . . . f f f f f f f . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            `, SpriteKind.Enemy)
        tiles.placeOnTile(Enemy_up_down, value8)
        animation.runMovementAnimation(
        Enemy_up_down,
        animation.animationPresets(animation.bobbing),
        2000,
        true
        )
        statusbar = statusbars.create(20, 4, StatusBarKind.EnemyHealth)
        statusbar.attachToSprite(Enemy_up_down)
    }
}
sprites.onOverlap(SpriteKind.bomb, SpriteKind.Enemy, function (sprite, otherSprite) {
    statusbars.getStatusBarAttachedTo(StatusBarKind.EnemyHealth, otherSprite).value += -1
    info.changeLifeBy(1)
})
scene.onOverlapTile(SpriteKind.Player, sprites.dungeon.hazardWater, function (sprite, location) {
    game.over(false)
})
sprites.onOverlap(SpriteKind.Projectile, SpriteKind.Frozen, function (sprite, otherSprite) {
    statusbars.getStatusBarAttachedTo(StatusBarKind.EnemyHealth, otherSprite).value += -20
    sprite.destroy()
})
scene.onOverlapTile(SpriteKind.bomb, assets.tile`myTile1`, function (sprite, location) {
    tiles.setTileAt(location, assets.tile`myTile6`)
})
controller.down.onEvent(ControllerButtonEvent.Pressed, function () {
    Sigma.vy = 200
})
sprites.onOverlap(SpriteKind.Projectile, SpriteKind.enemy2, function (sprite, otherSprite) {
    statusbars.getStatusBarAttachedTo(StatusBarKind.EnemyHealth, otherSprite).value += -10
    sprite.destroy()
})
function Second_poweup (Y: number) {
    if (Right_face == true) {
        if (4 == Y) {
            projectile = sprites.createProjectileFromSprite(img`
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . f f f f f . . . . . . 
                . . . . f c b b c c f . . . . . 
                . . . . f b c b c c f . . . . . 
                . . . . f c c b c c f . . . . . 
                . . . . f c b b b c f . . . . . 
                . . . . f c c c c c f . . . . . 
                . . . . . f f f f f . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                `, Sigma, 100, 0)
        } else if (3 == Y) {
            flame = sprites.create(img`
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                2 2 2 2 . . . 2 2 . . . . . . . 
                4 4 4 2 2 2 2 2 2 2 . . . . . . 
                4 4 4 4 4 4 4 4 4 2 2 . . . . . 
                4 5 5 5 4 4 4 4 4 4 4 2 2 2 2 2 
                5 5 5 5 5 5 5 5 5 5 5 4 4 4 4 2 
                5 5 5 5 5 5 5 5 4 4 5 5 4 4 2 . 
                5 5 5 5 5 4 4 4 2 2 4 4 4 2 2 . 
                4 4 4 5 5 5 4 4 2 2 2 2 2 2 2 . 
                4 4 4 4 4 4 4 2 . . . . . . . . 
                2 2 2 4 2 2 2 2 . . . . . . . . 
                . . 2 2 2 . 2 2 . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                `, SpriteKind.Fire)
            flame.setPosition(Sigma.x + 14, Sigma.y)
            controller.moveSprite(flame, 100, 100)
            flame.lifespan = 5000
            pause(5000)
        } else if (2 == Y) {
            Ice = sprites.create(img`
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . 9 9 9 . . . . . . . 
                . . . . . . 9 9 9 . 9 9 . . . . 
                . . . . . 9 1 1 9 9 9 9 9 9 . . 
                . . . . . 9 1 1 9 1 1 1 1 9 9 . 
                . . . 9 9 9 9 1 9 9 1 1 1 9 9 . 
                9 . . 9 1 1 9 9 1 9 1 1 1 9 . . 
                9 9 9 1 9 9 1 1 1 9 9 1 1 9 9 . 
                9 1 1 1 1 9 9 9 1 1 1 9 1 1 9 . 
                9 9 9 9 1 1 1 9 9 9 1 9 9 9 9 . 
                . . . 9 9 9 9 1 1 1 1 9 9 9 . . 
                . . . . . . 9 1 1 1 9 9 9 . . . 
                . . . . . . . 9 9 9 9 9 9 . . . 
                . . . . . . . . . 9 9 . . . . . 
                `, SpriteKind.Freeze)
            Ice.setPosition(Sigma.x, Sigma.y)
            Ice.setVelocity(50, 0)
            Ice.lifespan = 3000
            pause(1500)
        } else if (1 == Y) {
            Leech = sprites.create(assets.image`electricbogalo`, SpriteKind.bomb)
            Leech.setPosition(Sigma.x, Sigma.y)
            Leech.lifespan = 5000
            pause(1500)
        }
    } else if (Right_face == false) {
        if (4 == Y) {
            projectile = sprites.createProjectileFromSprite(img`
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . f f f f f . . . . . . 
                . . . . f c b b c c f . . . . . 
                . . . . f b c b c c f . . . . . 
                . . . . f c c b c c f . . . . . 
                . . . . f c b b b c f . . . . . 
                . . . . f c c c c c f . . . . . 
                . . . . . f f f f f . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                `, Sigma, -100, 0)
        } else if (3 == Y) {
            flame = sprites.create(img`
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . 2 2 . . . 2 2 2 2 
                . . . . . . 2 2 2 2 2 2 2 4 4 4 
                . . . . . 2 2 4 4 4 4 4 4 4 4 4 
                2 2 2 2 2 4 4 4 4 4 4 4 5 5 5 4 
                2 4 4 4 4 5 5 5 5 5 5 5 5 5 5 5 
                . 2 4 4 5 5 4 4 5 5 5 5 5 5 5 5 
                . 2 2 4 4 4 2 2 4 4 4 5 5 5 5 5 
                . 2 2 2 2 2 2 2 4 4 5 5 5 4 4 4 
                . . . . . . . . 2 4 4 4 4 4 4 4 
                . . . . . . . . 2 2 2 2 4 2 2 2 
                . . . . . . . . 2 2 . 2 2 2 . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                `, SpriteKind.Fire)
            flame.setPosition(Sigma.x + -14, Sigma.y)
            controller.moveSprite(flame)
            flame.lifespan = 5000
            pause(5000)
        } else if (2 == Y) {
            Ice = sprites.create(img`
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . 9 9 9 . . . . . . 
                . . . . 9 9 . 9 9 9 . . . . . . 
                . . 9 9 9 9 9 9 1 1 9 . . . . . 
                . 9 9 1 1 1 1 9 1 1 9 . . . . . 
                . 9 9 1 1 1 9 9 1 9 9 9 9 . . . 
                . . 9 1 1 1 9 1 9 9 1 1 9 . . 9 
                . 9 9 1 1 9 9 1 1 1 9 9 1 9 9 9 
                . 9 1 1 9 1 1 1 9 9 9 1 1 1 1 9 
                . 9 9 9 9 1 9 9 9 1 1 1 9 9 9 9 
                . . 9 9 9 1 1 1 1 9 9 9 9 . . . 
                . . . 9 9 9 1 1 1 9 . . . . . . 
                . . . 9 9 9 9 9 9 . . . . . . . 
                . . . . . 9 9 . . . . . . . . . 
                `, SpriteKind.Freeze)
            Ice.setPosition(Sigma.x, Sigma.y)
            Ice.setVelocity(-50, 0)
            Ice.lifespan = 3000
            pause(1500)
        } else if (1 == Y) {
            Leech = sprites.create(assets.image`electricbogalo`, SpriteKind.bomb)
            Leech.setPosition(Sigma.x, Sigma.y)
            Leech.lifespan = 5000
            pause(1500)
        }
    }
}
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile5`, function (sprite, location) {
    currentlevel += 2
    choose()
})
sprites.onOverlap(SpriteKind.Fire, SpriteKind.Weak, function (sprite, otherSprite) {
    statusbar2.value += -6
    scene.cameraShake(4, 500)
})
info.onLifeZero(function () {
    game.over(false)
})
scene.onOverlapTile(SpriteKind.Fire, assets.tile`myTile`, function (sprite, location) {
    tiles.setTileAt(location, assets.tile`myTile4`)
})
sprites.onOverlap(SpriteKind.Fire, SpriteKind.enemy2, function (sprite, otherSprite) {
    statusbars.getStatusBarAttachedTo(StatusBarKind.EnemyHealth, otherSprite).value += -2
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Food, function (sprite, otherSprite) {
    otherSprite.destroy(effects.warmRadial, 500)
    First_dice(randint(1, 4))
})
sprites.onOverlap(SpriteKind.Fire, SpriteKind.Frozen, function (sprite, otherSprite) {
    otherSprite.destroy(effects.blizzard, 500)
})
sprites.onOverlap(SpriteKind.bomb, SpriteKind.Frozen, function (sprite, otherSprite) {
    statusbars.getStatusBarAttachedTo(StatusBarKind.EnemyHealth, otherSprite).value += -1
    info.changeLifeBy(1)
})
statusbars.onZero(StatusBarKind.Energy, function (status) {
    Weakspot.setKind(SpriteKind.hollow)
    Weakspot.setImage(img`
        . . . . f f f f f f f . . . . . 
        . . f f b b b f b b b f f . . . 
        . f b b b b b f b b b b b f . . 
        . f b b b b b f b b b b b f . . 
        f b b b b b f f f b b b b b f . 
        f b b b b b f f f b b b b b f . 
        f b b b b b f f f b b b b b f . 
        f f f f f f f f f f f f f f f . 
        f b b b b b f f f b b b b b f . 
        f b b b b b f f f b b b b b f . 
        f b b b b b f f f b b b b b f . 
        . f b b b b b f b b b b b f . . 
        . f b b b b b f b b b b b f . . 
        . . f f b b b f b b b f f . . . 
        . . . . f f f f f f f . . . . . 
        . . . . . . . . . . . . . . . . 
        `)
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.second, function (sprite, otherSprite) {
    otherSprite.destroy(effects.spray, 500)
    game.splash("This number has been erased.")
    Power_up_2 = 0
})
sprites.onOverlap(SpriteKind.Freeze, SpriteKind.Enemy, function (sprite, otherSprite) {
    otherSprite.setImage(img`
        . . . . . . 9 9 9 9 9 9 9 . . . 
        . . . . . 9 9 9 9 1 9 9 9 . . . 
        . . . 9 9 1 1 1 9 9 9 9 9 . . . 
        . . . 9 1 1 1 1 9 1 1 9 9 . . . 
        . . . 9 1 1 1 9 1 1 1 9 9 . . . 
        . . . 9 9 1 1 9 1 1 1 9 . . . . 
        . . . 9 9 9 9 9 9 9 9 1 9 9 . . 
        . 9 9 9 9 9 9 9 1 9 1 1 9 9 . . 
        . 9 1 9 9 9 9 9 9 1 9 1 1 1 9 . 
        9 1 1 1 1 1 1 9 1 1 9 1 1 1 9 . 
        . 9 1 1 1 1 9 9 1 1 9 1 1 9 9 . 
        . 9 9 1 1 1 1 9 1 1 1 9 1 9 . . 
        . . . 9 9 9 1 9 1 1 1 9 1 9 . . 
        . . . . . . 9 9 9 9 9 9 1 9 . . 
        . . . . . . . . . 9 9 9 9 9 . . 
        . . . . . . . . . . . . . . . . 
        `)
    animation.stopAnimation(animation.AnimationTypes.All, otherSprite)
    otherSprite.setKind(SpriteKind.Frozen)
    pause(5000)
    otherSprite.setImage(assets.image`Eyet Boll`)
    animation.runMovementAnimation(
    otherSprite,
    animation.animationPresets(animation.bobbing),
    2000,
    true
    )
    otherSprite.setKind(SpriteKind.Enemy)
})
sprites.onOverlap(SpriteKind.Projectile, SpriteKind.Enemy, function (sprite, otherSprite) {
    statusbars.getStatusBarAttachedTo(StatusBarKind.EnemyHealth, otherSprite).value += -10
    sprite.destroy()
})
function Chacha_slide () {
    for (let value2 of tiles.getTilesByType(sprites.castle.tilePath8)) {
        Enemy_side = sprites.create(assets.image`Fanshy`, SpriteKind.enemy2)
        tiles.placeOnTile(Enemy_side, value2)
        animation.runMovementAnimation(
        Enemy_side,
        animation.animationPresets(animation.bobbingRight),
        2000,
        true
        )
        animation.runMovementAnimation(
        Enemy_side,
        animation.animationPresets(animation.bobbingLeft),
        2000,
        true
        )
        statusbar = statusbars.create(20, 4, StatusBarKind.EnemyHealth)
        statusbar.attachToSprite(Enemy_side)
    }
}
sprites.onOverlap(SpriteKind.Player, SpriteKind.Enemy, function (sprite, otherSprite) {
    scene.cameraShake(4, 500)
    Sigma.setImage(img`
        . . . . . . . . . . . . . . . . 
        . 2 2 2 2 2 2 2 2 2 2 2 2 2 2 . 
        . 2 2 2 2 f f f f f 2 2 f 2 2 . 
        . 2 f 2 2 f 2 2 2 f f f f 2 2 . 
        . 2 f 2 2 2 2 2 2 2 2 2 2 f 2 . 
        . 2 f 2 2 2 f 2 2 f f 2 2 2 2 . 
        . 2 f f 2 f 2 2 2 2 f f f f 2 . 
        . 2 f 2 f 2 2 2 2 2 2 f f 2 2 . 
        . 2 2 2 f 2 2 2 2 2 2 f f 2 2 . 
        . 2 2 2 2 2 2 2 2 f 2 2 f 2 2 . 
        . 2 2 2 2 f 2 2 f f f 2 f 2 2 . 
        . 2 2 2 2 2 f 2 2 2 f f f f 2 . 
        . 2 f 2 2 2 2 2 2 2 2 2 2 f 2 . 
        . 2 f f 2 2 2 f 2 f f f 2 f 2 . 
        . 2 2 2 2 2 2 2 2 2 2 2 2 2 2 . 
        . . . . . . . . . . . . . . . . 
        `)
    info.changeLifeBy(-100)
    pause(100)
    Sigma.setImage(img`
        . . . . . 4 4 4 4 4 4 . . . . . 
        . . . 4 4 5 5 5 5 5 5 4 4 . . . 
        . . . 4 5 f 5 5 5 5 f 5 4 . . . 
        . . 4 5 5 f 5 5 5 5 f 5 5 4 . . 
        . . 4 5 5 f 5 5 5 5 f 5 5 4 . . 
        . . 4 5 5 5 5 f f 5 5 5 5 4 . . 
        . . 4 5 5 5 5 5 5 5 5 5 5 4 . . 
        . f 4 5 5 5 f f f f f 5 5 4 f . 
        f . 4 5 5 5 5 f 5 5 5 5 5 4 . f 
        f . 4 5 5 5 5 f f f 5 5 5 4 . f 
        . . 4 5 5 5 5 5 f 5 5 5 5 4 . . 
        . . . 4 5 5 5 f 5 5 5 5 4 . . . 
        . . . 4 4 5 5 f f f f 4 4 . . . 
        . . . . . 4 4 4 4 4 4 . . . . . 
        . . . . . f . . . . f . . . . . 
        . . . . f f . . . . f f . . . . 
        `)
    pause(1000)
})
let Enemy_side: Sprite = null
let statusbar: StatusBarSprite = null
let Enemy_up_down: Sprite = null
let Leech: Sprite = null
let Ice: Sprite = null
let flame: Sprite = null
let projectile: Sprite = null
let fnumber: Sprite = null
let Right_face = false
let Dice: Sprite = null
let Dice2: Sprite = null
let statusbar2: StatusBarSprite = null
let Weakspot: Sprite = null
let Chaser: Sprite = null
let snumber: Sprite = null
let Power_up_2 = 0
let powerup = 0
let currentlevel = 0
let Sigma: Sprite = null
Sigma = sprites.create(img`
    . . . . . 4 4 4 4 4 4 . . . . . 
    . . . 4 4 5 5 5 5 5 5 4 4 . . . 
    . . . 4 5 f 5 5 5 5 f 5 4 . . . 
    . . 4 5 5 f 5 5 5 5 f 5 5 4 . . 
    . . 4 5 5 f 5 5 5 5 f 5 5 4 . . 
    . . 4 5 5 5 5 f f 5 5 5 5 4 . . 
    . . 4 5 5 5 5 5 5 5 5 5 5 4 . . 
    . f 4 5 5 5 f f f f f 5 5 4 f . 
    f . 4 5 5 5 5 f 5 5 5 5 5 4 . f 
    f . 4 5 5 5 5 f f f 5 5 5 4 . f 
    . . 4 5 5 5 5 5 f 5 5 5 5 4 . . 
    . . . 4 5 5 5 f 5 5 5 5 4 . . . 
    . . . 4 4 5 5 f f f f 4 4 . . . 
    . . . . . 4 4 4 4 4 4 . . . . . 
    . . . . . f . . . . f . . . . . 
    . . . . f f . . . . f f . . . . 
    `, SpriteKind.Player)
controller.moveSprite(Sigma, 100, 0)
currentlevel = 8
Levels(currentlevel)
scene.setBackgroundColor(13)
scene.cameraFollowSprite(Sigma)
tiles.placeOnRandomTile(Sigma, sprites.dungeon.darkGroundNorthEast1)
Sigma.ay = 200
powerup = 0
Power_up_2 = 0
info.setLife(300)
let Fp = sprites.create(img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    `, SpriteKind.hollow)
let Sp = sprites.create(img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    `, SpriteKind.hollow)
let numberA = textsprite.create("#0", 0, 8)
let NumberB = textsprite.create("#0", 0, 2)
Fp.setPosition(60, 7)
Sp.setPosition(110, 7)
Fp.setFlag(SpriteFlag.RelativeToCamera, true)
Sp.setFlag(SpriteFlag.RelativeToCamera, true)
numberA.setFlag(SpriteFlag.RelativeToCamera, true)
NumberB.setFlag(SpriteFlag.RelativeToCamera, true)
numberA.setPosition(50, 7)
numberA.setMaxFontHeight(10)
NumberB.setPosition(100, 7)
NumberB.setMaxFontHeight(10)
game.showLongText("Try to collect the dice. move around and press the indicated button.", DialogLayout.Center)
game.showLongText("Use the <-- and--> buttons to move. Press up to jump. Press down while in the air to fast fall.", DialogLayout.Center)
game.showLongText("Good luck commander Sigma", DialogLayout.Center)
forever(function () {
    if (1 == Power_up_2) {
        NumberB.setText("1")
        Sp.setImage(assets.image`electricbogalo`)
    } else if (2 == Power_up_2) {
        NumberB.setText("2")
        Sp.setImage(img`
            . . . . . . 9 9 9 9 9 9 9 . . . 
            . . . . . 9 9 9 9 1 9 9 9 . . . 
            . . . 9 9 1 1 1 9 9 9 9 9 . . . 
            . . . 9 1 1 1 1 9 1 1 9 9 . . . 
            . . . 9 1 1 1 9 1 1 1 9 9 . . . 
            . . . 9 9 1 1 9 1 1 1 9 . . . . 
            . . . 9 9 9 9 9 9 9 9 1 9 9 . . 
            . 9 9 9 9 9 9 9 1 9 1 1 9 9 . . 
            . 9 1 9 9 9 9 9 9 1 9 1 1 1 9 . 
            9 1 1 1 1 1 1 9 1 1 9 1 1 1 9 . 
            . 9 1 1 1 1 9 9 1 1 9 1 1 9 9 . 
            . 9 9 1 1 1 1 9 1 1 1 9 1 9 . . 
            . . . 9 9 9 1 9 1 1 1 9 1 9 . . 
            . . . . . . 9 9 9 9 9 9 1 9 . . 
            . . . . . . . . . 9 9 9 9 9 . . 
            . . . . . . . . . . . . . . . . 
            `)
    } else if (3 == Power_up_2) {
        NumberB.setText("3")
        Sp.setImage(img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            2 2 2 2 . . . 2 2 . . . . . . . 
            4 4 4 2 2 2 2 2 2 2 . . . . . . 
            4 4 4 4 4 4 4 4 4 2 2 . . . . . 
            4 5 5 5 4 4 4 4 4 4 4 2 2 2 2 2 
            5 5 5 5 5 5 5 5 5 5 5 4 4 4 4 2 
            5 5 5 5 5 5 5 5 4 4 5 5 4 4 2 . 
            5 5 5 5 5 4 4 4 2 2 4 4 4 2 2 . 
            4 4 4 5 5 5 4 4 2 2 2 2 2 2 2 . 
            4 4 4 4 4 4 4 2 . . . . . . . . 
            2 2 2 4 2 2 2 2 . . . . . . . . 
            . . 2 2 2 . 2 2 . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            `)
    } else if (4 == Power_up_2) {
        NumberB.setText("4")
        Sp.setImage(img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . f f f f f . . . . . . 
            . . . . f c b b c c f . . . . . 
            . . . . f b c b c c f . . . . . 
            . . . . f c c b c c f . . . . . 
            . . . . f c b b b c f . . . . . 
            . . . . f c c c c c f . . . . . 
            . . . . . f f f f f . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            `)
    } else if (0 == Power_up_2) {
        NumberB.setText("0")
        Sp.setImage(img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            `)
    }
    if (1 == powerup) {
        numberA.setText("1")
        Fp.setImage(img`
            . . . . . . . 7 7 7 7 7 7 . . . 
            . . . . . . 7 7 . . . . 7 7 . . 
            7 7 . . a a a a a a a . . 7 7 . 
            7 . . a 7 7 7 7 7 7 7 a . . . . 
            7 7 a 7 7 7 a a a a 7 7 a . 7 7 
            7 7 a 7 a 7 7 a 7 7 a 7 a . 7 . 
            7 . a 7 7 a 7 7 7 7 a 7 a . 7 . 
            7 7 a 7 a 7 7 7 7 7 7 7 a 7 7 . 
            . 7 a 7 a 7 a a 7 7 7 7 a . 7 . 
            . . a 7 a 7 7 7 7 7 a 7 a . 7 . 
            . . a 7 7 7 7 a a a 7 7 a . 7 7 
            . . . a 7 7 7 7 7 7 7 a . . . 7 
            . . . . a a a a a a a . . . 7 7 
            . . . . . . . 7 . . . . . 7 7 . 
            . . 7 . . . 7 7 . . . . . . 7 . 
            . . 7 7 7 7 7 . . . . . . . . . 
            `)
    } else if (2 == powerup) {
        numberA.setText("2")
        Fp.setImage(img`
            . . . . . . 9 9 9 9 9 9 9 . . . 
            . . . . . 9 9 9 9 1 9 9 9 . . . 
            . . . 9 9 1 1 1 9 9 9 9 9 . . . 
            . . . 9 1 1 1 1 9 1 1 9 9 . . . 
            . . . 9 1 1 1 9 1 1 1 9 9 . . . 
            . . . 9 9 1 1 9 1 1 1 9 . . . . 
            . . . 9 9 9 9 9 9 9 9 1 9 9 . . 
            . 9 9 9 9 9 9 9 1 9 1 1 9 9 . . 
            . 9 1 9 9 9 9 9 9 1 9 1 1 1 9 . 
            9 1 1 1 1 1 1 9 1 1 9 1 1 1 9 . 
            . 9 1 1 1 1 9 9 1 1 9 1 1 9 9 . 
            . 9 9 1 1 1 1 9 1 1 1 9 1 9 . . 
            . . . 9 9 9 1 9 1 1 1 9 1 9 . . 
            . . . . . . 9 9 9 9 9 9 1 9 . . 
            . . . . . . . . . 9 9 9 9 9 . . 
            . . . . . . . . . . . . . . . . 
            `)
    } else if (3 == powerup) {
        numberA.setText("3")
        Fp.setImage(img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            2 2 2 2 . . . 2 2 . . . . . . . 
            4 4 4 2 2 2 2 2 2 2 . . . . . . 
            4 4 4 4 4 4 4 4 4 2 2 . . . . . 
            4 5 5 5 4 4 4 4 4 4 4 2 2 2 2 2 
            5 5 5 5 5 5 5 5 5 5 5 4 4 4 4 2 
            5 5 5 5 5 5 5 5 4 4 5 5 4 4 2 . 
            5 5 5 5 5 4 4 4 2 2 4 4 4 2 2 . 
            4 4 4 5 5 5 4 4 2 2 2 2 2 2 2 . 
            4 4 4 4 4 4 4 2 . . . . . . . . 
            2 2 2 4 2 2 2 2 . . . . . . . . 
            . . 2 2 2 . 2 2 . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            `)
    } else if (4 == powerup) {
        numberA.setText("4")
        Fp.setImage(img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . f f f f f . . . . . . 
            . . . . f c b b c c f . . . . . 
            . . . . f b c b c c f . . . . . 
            . . . . f c c b c c f . . . . . 
            . . . . f c b b b c f . . . . . 
            . . . . f c c c c c f . . . . . 
            . . . . . f f f f f . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            `)
    } else if (0 == powerup) {
        numberA.setText("0")
        Fp.setImage(img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            `)
    }
})
game.onUpdateInterval(10000, function () {
    tiles.placeOnRandomTile(Weakspot, assets.tile`myTile19`)
})
