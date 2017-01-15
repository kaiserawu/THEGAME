var startGame = true
Crafty.scene("1stScreen", function() {

    if (startGame) {
        Crafty.e('PlayerCharacter').attr({x: 285, y: 285})
        startGame = false
    }

    //changeSceneUp("2ndScreen")

    Crafty.e('Doorway')
        .attr({x: viewWidth/2 - 20, y: 1})
        .enterRoom("2ndScreen")

    //Walls
    Crafty.e('2D, DOM, Solid, Impen, Color')
        .attr({x: 0, y: 0, w: 1, h: viewHeight})
        .color('#F00')

    Crafty.e('2D, DOM, Solid, Impen, Color')
        .attr({x: 599, y: 0, w: 1, h: viewHeight})
        .color('#F00')

    Crafty.e('2D, DOM, Solid, Impen, Color')
        .attr({x: 0, y: 0, w: viewWidth/2 - 30, h: 1})
        .color('#F00')
    Crafty.e('2D, DOM, Solid, Impen, Color')
        .attr({x: viewWidth/2 + 30, y: 0, w: viewWidth/2 - 30, h: 1})
        .color('#F00')

    Crafty.e('2D, DOM, Solid, Impen, Color')
        .attr({x: 0, y: 599, w: viewWidth, h: 1})
        .color('#F00')

    //Enemies Etc.
    Crafty.e('Enemy').attr({x: viewWidth/2 - 15, y: 100})
    Crafty.e('Enemy').attr({x: viewWidth/2 - 15, y: 500})


});

Crafty.scene("2ndScreen", function() {

    //changeSceneDown("1stScreen")
    //changeSceneUp("4thScreen")
    //changeSceneLeft("3rdScreen")
    Crafty.e('Doorway')
        .attr({x: viewWidth/2 - 20, y: 1})
        .enterRoom("4thScreen")
    Crafty.e('Doorway')
        .attr({x: viewWidth/2 - 20, y: 599})
        .enterRoom("1stScreen")
    Crafty.e('Doorway')
        .attr({x: 1, y: viewHeight/4 - 25, rotation: 90})
        .enterRoom("3rdScreen")



    //Walls
    Crafty.e('2D, DOM, Solid, Impen, Color')
        .attr({x: 0, y: 0, w: 1, h: viewHeight/4 - 30})
        .color('#F00')
    Crafty.e('2D, DOM, Solid, Impen, Color')
        .attr({x: 0, y: viewHeight/4 + 30, w: 1, h: viewHeight*3/4})
        .color('#F00')

    Crafty.e('2D, DOM, Solid, Impen, Color')
        .attr({x: 599, y: 0, w: 1, h: viewHeight})
        .color('#F00')

    Crafty.e('2D, DOM, Solid, Impen, Color')
        .attr({x: 0, y: 599, w: viewWidth/2 - 30, h: 1})
        .color('#F00')
    Crafty.e('2D, DOM, Solid, Impen, Color')
        .attr({x: viewWidth/2 + 30, y: 599, w: viewWidth/2 - 30, h: 1})
        .color('#F00')

    Crafty.e('2D, DOM, Solid, Impen, Color')
        .attr({x: 0, y: 0, w: viewWidth/2 - 30, h: 1})
        .color('#F00')
    Crafty.e('2D, DOM, Solid, Impen, Color')
        .attr({x: viewWidth/2 + 30, y: 0, w: viewWidth/2 - 30, h: 1})
        .color('#F00')

    //Terrain
    Crafty.e('2D, DOM, Solid, Impen, Color')
        .attr({x: 0, y: viewHeight/2, w: 400, h: 20})
        .color('brown')

    //Enemies Etc.
    Crafty.e('Enemy').attr({x: viewWidth/2 - 15, y: 100})

});

Crafty.scene("3rdScreen", function() {

    //changeSceneRight("2ndScreen")
    Crafty.e('Doorway')
        .attr({x: 599, y: viewHeight/4 - 25, rotation: 90})
        .enterRoom("2ndScreen")


    //Walls
    Crafty.e('2D, DOM, Solid, Impen, Color')
        .attr({x: 599, y: 0, w: 1, h: viewHeight/4 - 30})
        .color('#F00')
    Crafty.e('2D, DOM, Solid, Impen, Color')
        .attr({x: 599, y: viewHeight/4 + 30, w: 1, h: viewHeight*3/4})
        .color('#F00')

    Crafty.e('2D, DOM, Solid, Impen, Color')
        .attr({x: 0, y: 0, w: 1, h: viewHeight})
        .color('#F00')

    Crafty.e('2D, DOM, Solid, Impen, Color')
        .attr({x: 0, y: 0, w: viewWidth, h: 1})
        .color('#F00')

    Crafty.e('2D, DOM, Solid, Impen, Color')
        .attr({x: 0, y: 599, w: viewWidth, h: 1})
        .color('#F00')

    //Terrain
    Crafty.e('2D, DOM, Hole, Color')
        .attr({x: 200, y: 275, w: 400, h: 250})
        .color('gray')

    //Enemies Etc.
    Crafty.e('REnemy').attr({x: 100, y: 150})

});

Crafty.scene("4thScreen", function() {

    Crafty.e('Doorway')
        .attr({x: viewWidth/2 - 20, y: 1})
        .enterRoom("5thScreen")
    Crafty.e('Doorway')
        .attr({x: viewWidth/2 - 20, y: 599})
        .enterRoom("2ndScreen")

    //changeSceneDown("2ndScreen")
    //changeSceneUp("5thScreen")

    //Walls
    Crafty.e('2D, DOM, Solid, Impen, Color')
        .attr({x: 0, y: 0, w: 1, h: viewHeight})
        .color('#F00')

    Crafty.e('2D, DOM, Solid, Impen, Color')
        .attr({x: 599, y: 0, w: 1, h: viewHeight})
        .color('#F00')

    Crafty.e('2D, DOM, Solid, Impen, Color')
        .attr({x: 0, y: 599, w: viewWidth/2 - 30, h: 1})
        .color('#F00')
    Crafty.e('2D, DOM, Solid, Impen, Color')
        .attr({x: viewWidth/2 + 30, y: 599, w: viewWidth/2 - 30, h: 1})
        .color('#F00')

    Crafty.e('2D, DOM, Solid, Impen, Color')
        .attr({x: 0, y: 0, w: viewWidth/2 - 30, h: 1})
        .color('#F00')
    Crafty.e('2D, DOM, Solid, Impen, Color')
        .attr({x: viewWidth/2 + 30, y: 0, w: viewWidth/2 - 30, h: 1})
        .color('#F00')

    //Terrain
    Crafty.e('2D, DOM, Hole, Color')
        .attr({x: 50, y: 0, w: 200, h: viewHeight})
        .color('gray')

    Crafty.e('2D, DOM, Hole, Color')
        .attr({x: 350, y: 0, w: 200, h: viewHeight})
        .color('gray')

    //Enemies Etc.
    Crafty.e('ArrowShooter').attr({x: 5, y: 400}).shootingDirection(ATTACK_DIRECTIONS.RIGHT).start();
    Crafty.e('ArrowShooter').attr({x: 5, y: 300}).shootingDirection(ATTACK_DIRECTIONS.RIGHT).start();
    Crafty.e('ArrowShooter').attr({x: 5, y: 200}).shootingDirection(ATTACK_DIRECTIONS.RIGHT).start();

    Crafty.e('ArrowShooter').attr({x: 565, y: 400}).shootingDirection(ATTACK_DIRECTIONS.LEFT).start();
    Crafty.e('ArrowShooter').attr({x: 565, y: 300}).shootingDirection(ATTACK_DIRECTIONS.LEFT).start();
    Crafty.e('ArrowShooter').attr({x: 565, y: 200}).shootingDirection(ATTACK_DIRECTIONS.LEFT).start();

});

Crafty.scene("5thScreen", function() {

    //changeSceneDown("4thScreen")
    //changeSceneUp("6thScreen")
    Crafty.e('Doorway')
        .attr({x: viewWidth/2 - 20, y: 1})
        .enterRoom("6thScreen")
    Crafty.e('Doorway')
        .attr({x: viewWidth/2 - 20, y: 599})
        .enterRoom("4thScreen")

    //Walls
    Crafty.e('2D, DOM, Solid, Impen, Color')
        .attr({x: 0, y: 0, w: 1, h: viewHeight})
        .color('#F00')

    Crafty.e('2D, DOM, Solid, Impen, Color')
        .attr({x: 599, y: 0, w: 1, h: viewHeight})
        .color('#F00')

    Crafty.e('2D, DOM, Solid, Impen, Color')
        .attr({x: 0, y: 599, w: viewWidth/2 - 30, h: 1})
        .color('#F00')
    Crafty.e('2D, DOM, Solid, Impen, Color')
        .attr({x: viewWidth/2 + 30, y: 599, w: viewWidth/2 - 30, h: 1})
        .color('#F00')

    Crafty.e('2D, DOM, Solid, Impen, Color')
        .attr({x: 0, y: 0, w: viewWidth/2 - 30, h: 1})
        .color('#F00')
    Crafty.e('2D, DOM, Solid, Impen, Color')
        .attr({x: viewWidth/2 + 30, y: 0, w: viewWidth/2 - 30, h: 1})
        .color('#F00')

    //Terrain
    Crafty.e('2D, DOM, Solid, Impen, Color')
        .attr({x: 150, y: 150, w: 50, h: 50})
        .color('brown')
        
    Crafty.e('2D, DOM, Solid, Impen, Color')
        .attr({x: 400, y: 150, w: 50, h: 50})
        .color('brown')

    Crafty.e('2D, DOM, Solid, Impen, Color')
        .attr({x: 400, y: 400, w: 50, h: 50})
        .color('brown')

    Crafty.e('2D, DOM, Solid, Impen, Color')
        .attr({x: 150, y: 400, w: 50, h: 50})
        .color('brown')

});

Crafty.scene("6thScreen", function() {

    //changeSceneDown("5thScreen")

    //Walls
    Crafty.e('2D, DOM, Solid, Impen, Color')
        .attr({x: 0, y: 0, w: 1, h: viewHeight})
        .color('#F00')

    Crafty.e('2D, DOM, Solid, Impen, Color')
        .attr({x: 599, y: 0, w: 1, h: viewHeight})
        .color('#F00')

    Crafty.e('2D, DOM, Solid, Impen, Color')
        .attr({x: 0, y: 599, w: viewWidth/2 - 30, h: 1})
        .color('#F00')
    Crafty.e('2D, DOM, Solid, Impen, Color')
        .attr({x: viewWidth/2 - 20, y: 599,  w: 40, h: 1})
        .color('#F00')
    Crafty.e('2D, DOM, Solid, Impen, Color')
        .attr({x: viewWidth/2 + 30, y: 599, w: viewWidth/2 - 30, h: 1})
        .color('#F00')

    Crafty.e('2D, DOM, Solid, Impen, Color')
        .attr({x: 0, y: 0, w: viewWidth, h: 1})
        .color('#F00')

    //Enemies Etc.
    Crafty.e('BEnemy').attr({x: viewWidth/2 - 25, y: 200})


});

/*enemies.push(
    Crafty.e('Enemy')
        .attr({x: 5, y: 5})
)

enemies.push(
    Crafty.e('Enemy')
        .attr({x: 300, y: 400})
)
enemies.push(
    Crafty.e('Enemy')
        .attr({x: 100, y: 565})
)

for (var i = 0; i < enemies.length; i++) {
    enemies[i].velocity().x = 1;
}*/