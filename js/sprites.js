Crafty.sprite(16, "images/basictiles.png", {
	floor1: [6,1]
});
Crafty.sprite(16, "images/characters.png", {
	pcSprite: [4,0],
	enemySprite: [10,0]
})



function generateFloor() {
	for (var i = 0; i < 38; i++) {
	    for (var j = 0; j < 38; j++) {
	        Crafty.e("2D, Canvas, floor, floor1")
		        .attr({x: i * 20, y: j * 20, w:20, h:20});
		}
	}
};