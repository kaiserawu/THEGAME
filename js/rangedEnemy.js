Crafty.c('REnemy', {
	init: function() {
		this.requires('2D, DOM, Enemy, Collision, Solid, Object, Motion, Color')
			.color('#d3d3d3')
			.attr({w:30, h: 30})
			.stopOnSolids()
			.hitByAttack()
			.stopOnHoles()

		this.hp = 2;
	},
	stopOnSolids: function() {
        this.onHit('Solid', this.stopMovement);
        return this;
    },
    stopOnHoles: function() {
        this.onHit('Hole', this.stopMovement);
        return this;
    },
    stopMovement: function(hit_vals) {
        this.x -= this.dx;
        this.y -= this.dy;
    },
    hitByAttack: function() {
    	this.checkHits('PAttack')
        .bind('HitOn', function() {
            console.log("hit!")
            this.hp--;
            console.log("remaining hp", this.hp)
            if (this.hp <= 0) {
                this.destroy();
            }
        })
        return this;
    },