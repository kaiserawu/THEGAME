Crafty.c('PlayerCharacter', {
    init: function() {
        this.requires('2D, DOM, Player, Collision, Fourway, Solid, Color')
            .attr({w: 30, h: 30})
            .fourway(300)
            .color('#000000')
            .stopOnSolids()
            .attackOnSpace()
            .hitByAttack()
            .stopOnHoles()

        this.hp = 5
        this._attackDirection = ATTACK_DIRECTIONS.DOWN;

        this.bind('Moved', function(movement) {
            if (movement.axis == "x") {
                if (this.x - movement.oldValue < 0) {
                    this._attackDirection = ATTACK_DIRECTIONS.LEFT;
                } else {
                    this._attackDirection = ATTACK_DIRECTIONS.RIGHT;
                }
            } else {
                if (this.y - movement.oldValue < 0) {
                    this._attackDirection = ATTACK_DIRECTIONS.UP;
                } else {
                    this._attackDirection = ATTACK_DIRECTIONS.DOWN;
                }
            };
        });
    },
    stopOnSolids: function() {
        this.onHit('Solid', this.stopMovement);
        return this;
    },
    stopMovement: function(hit_vals) {
        this.x -= this.dx;
        this.y -= this.dy;
    },
    attackOnSpace: function() {
        var hero = this;
        this.bind('KeyDown', function(e) {
            if (e.key == Crafty.keys.SPACE) {
                var attack = Crafty.e('PlayerAttack');
                switch(hero._attackDirection) {
                    case ATTACK_DIRECTIONS.RIGHT:
                        attack.attr({x: hero.x + 30, y: hero.y})
                        break;
                    case ATTACK_DIRECTIONS.LEFT:
                        attack.attr({x: hero.x - 30, y: hero.y})
                        break;
                    case ATTACK_DIRECTIONS.UP:
                        attack.attr({x: hero.x, y: hero.y - 30})
                        break;
                    case ATTACK_DIRECTIONS.DOWN:
                        attack.attr({x: hero.x, y: hero.y + 30})
                        break;
                }
            }
        	setTimeout(function() {Crafty('PlayerAttack').destroy()}, 50)
        });
        return this;
    },
    hitByAttack: function() {
        this.checkHits('EAttack')
        .bind('HitOn', function() {
            console.log("hit!")
            console.log(arguments);
            this.hp--;
            console.log("remaining hp", this.hp)
            if (this.hp <= 0) {
                this.destroy();
                Crafty.stop();
                alert('You Lose!')
            }
        })
        return this;
    },
    stopOnHoles: function() {
        this.onHit('Hole', this.stopMovement);
        return this;
    }
}),

Crafty.c('PlayerAttack', {
	init: function() {
		this.requires('2D, DOM, PAttack, Collision, Color')
			.attr({w: 30, h: 30})
			.color('#ff0000')
	}
});