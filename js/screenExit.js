function changeSceneLeft(scene) {
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
}