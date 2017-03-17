Crafty.c('Doorway', {
	init: function() {
		this.requires('2D, DOM, Door, Collision, Color')
			.attr({h: 1, w: 40})
			.color('green')
	},
	enterRoom: function(scene) {
		this.onHit('Player', function() {
			if (Crafty('PlayerCharacter').y < 5) {
				Crafty('PlayerCharacter').shift(0, viewHeight - 40);
				Crafty.scene(scene);
				generateFloor();
			}
			if (Crafty('PlayerCharacter').y > 565) {
				Crafty('PlayerCharacter').shift(0, -(viewHeight - 40));
				Crafty.scene(scene);
				generateFloor();
			}
			if (Crafty('PlayerCharacter').x < 5) {
				Crafty('PlayerCharacter').shift(viewWidth - 40);
				Crafty.scene(scene);
				generateFloor();
			}
			if (Crafty('PlayerCharacter').x > 565) {
				Crafty('PlayerCharacter').shift(-(viewWidth - 40));
				Crafty.scene(scene);
				generateFloor();
			}
		})
	}
})