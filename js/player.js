Crafty.c('PlayerCharacter', {
    init: function() {
        this.requires('2D, DOM, Player, Collision, Fourway, Solid, Color, Persist, pcSprite, SpriteAnimation')
            .attr({w: 30, h: 30})
            .fourway(300)
            .stopOnSolids()
            .attackOnSpace()
            .hitByAttack()
            .hitByProjectile()
            .stopOnHoles()
            .reel('Move Up', 200, [[3,3], [4,3], [5,3], [4,3]])
            .reel('Move Down', 200, [[3,0], [4,0], [5,0], [4,0]])
            .reel('Move Left', 200, [[3,1], [4,1], [5,1], [4,1]])
            .reel('Move Right', 200, [[3,2], [4,2], [5,2], [4,2]])
            .bind('EnterFrame', function(e) {
                if(this.isDown('UP_ARROW')) {
                    if(!this.isPlaying('Move Up')) {
                        this.animate('Move Up', 1);
                    };
                };
                if(this.isDown('DOWN_ARROW')) {
                    if(!this.isPlaying('Move Down')) {
                        this.animate('Move Down', 1);
                    };
                };
                if(this.isDown('LEFT_ARROW')) {
                    if(!this.isPlaying('Move Left')) {
                        this.animate('Move Left', 1);
                    };
                };
                if(this.isDown('RIGHT_ARROW')) {
                    if(!this.isPlaying('Move Right')) {
                        this.animate('Move Right', 1);
                    };
                };
            })


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
    takeDamage: function(dam){
        this.hp -= dam
        console.log("remaining hp", this.hp)
            if (this.hp <= 0) {
                this.destroy();
                Crafty.stop();
                alert('You Lose!')
            }
    },
    hitByAttack: function() {
        this.checkHits('EAttack')
        .bind('HitOn', function() {
            console.log("hit!")
            console.log(arguments);
            this.takeDamage(1);
            console.log("remaining hp", this.hp)
        })
        return this;
    },
    hitByProjectile: function() {
        this.onHit('Projectile', function(hits) {
            this.takeDamage(1);
            for (var i = 0, l = hits.length; i < l; i++) {
                hits[i].obj.destroy();
            }
        });
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
			.color('yellow')
	}
});