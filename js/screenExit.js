/*function changeSceneLeft(scene) {
    setInterval(function(){ 
        if (Crafty('PlayerCharacter').x < 0) {
			Crafty.scene(scene)
			Crafty('PlayerCharacter').shift(viewWidth - 30)
        }
    }, 50)
}

function changeSceneRight(scene) {
    setInterval(function(){ 
        if (Crafty('PlayerCharacter').x > viewWidth - 30) {
			Crafty.scene(scene)
			Crafty('PlayerCharacter').shift(-(viewWidth - 30))
        }
    }, 50)
}

function changeSceneUp(scene) {
    setInterval(function(){ 
        if (Crafty('PlayerCharacter').y < 0) {
			Crafty.scene(scene)
			Crafty('PlayerCharacter').shift(0, viewHeight - 30)
        }
    }, 50)
}

function changeSceneDown(scene) {
    setInterval(function(){ 
        if (Crafty('PlayerCharacter').y > viewHeight - 30) {
			Crafty.scene(scene)
			Crafty('PlayerCharacter').shift(0, -(viewHeight - 30))
        }
    }, 50)
}*/

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
			}
			if (Crafty('PlayerCharacter').y > 565) {
				Crafty('PlayerCharacter').shift(0, -(viewHeight - 40));
				Crafty.scene(scene);
			}
			if (Crafty('PlayerCharacter').x < 5) {
				Crafty('PlayerCharacter').shift(viewWidth - 40);
				Crafty.scene(scene);
			}
			if (Crafty('PlayerCharacter').x > 565) {
				Crafty('PlayerCharacter').shift(-(viewWidth - 40));
				Crafty.scene(scene)
			}
		})
	}
})