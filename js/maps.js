Crafty.scene("1stScreen", function() {

    Crafty.e('PlayerCharacter').attr({x: 285, y: 285})

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

});

Crafty.scene("2ndScreen", function() {

    Crafty.e('PlayerCharacter').attr({x: 285, y: 400})

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

});

Crafty.scene("3rdScreen", function() {

    Crafty.e('PlayerCharacter').attr({x: 500, y: 150})

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

    var player = Crafty.e('PlayerCharacter').attr({x: 285, y: 400})
    //console.log(player.x)

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

    Crafty.e('PlayerCharacter').attr({x: 285, y: 400})

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

    Crafty.e('PlayerCharacter').attr({x: 285, y: 500})

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
        .attr({x: 0, y: 0, w: viewWidth, h: 1})
        .color('#F00')

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