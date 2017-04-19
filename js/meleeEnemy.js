Crafty.c('Enemy', {
	init: function() {
		this.requires('2D, DOM, Enemy, Collision, Solid, Motion, Color, enemySprite, SpriteAnimation')
			.attr({w:30, h: 30})
			.stopOnSolids()
			.hitByAttack()
            .stopOnHoles()
            .reel('Move Up', 200, [[9,3], [10,3], [11,3], [10,3]])
            .reel('Move Down', 200, [[9,0], [10,0], [11,0], [10,0]])
            .reel('Move Left', 200, [[9,1], [10,1], [11,1], [10,1]])
            .reel('Move Right', 200, [[9,2], [10,2], [11,2], [10,2]])
            .bind('EnterFrame', function(e) {
                if(this.dx < 0) {
                    if(!this.isPlaying('Move Left')) {
                        this.animate('Move Left', 1);
                    };
                }
                else if(this.dx > 0) {
                    if(!this.isPlaying('Move Right')) {
                        this.animate('Move Right', 1);
                    };
                }
                else if(this.dy < 0) {
                    if(!this.isPlaying('Move Up')) {
                        this.animate('Move Up', 1);
                    };
                }
                else if(this.dy > 0) {
                    if(!this.isPlaying('Move Down')) {
                        this.animate('Move Down', 1);
                    };
                }
            })

        this._rightHitbox = Crafty.e('EnemyHitbox').attr({x: this.x + 30, y: this.y});
        this._leftHitbox = Crafty.e('EnemyHitbox').attr({x: this.x - 30, y: this.y});
        this._upHitbox = Crafty.e('EnemyHitbox').attr({x: this.x, y: this.y + 30});
        this._downHitbox = Crafty.e('EnemyHitbox').attr({x: this.x, y: this.y - 30});

        this.attach(this._rightHitbox, this._leftHitbox, this._upHitbox, this._downHitbox);

        this.combat();

        this.hp = 3;
        this._attackDirection = ATTACK_DIRECTIONS.DOWN;
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
    combat: function() {
        var enemy = this;

        enemy.velocity().x = 1

        var currently_attacking = false;

        var createAttackOnHit = function(x, y) {
            if (!currently_attacking) {
                currently_attacking = true
                setTimeout(function() {
                    enemy.velocity().x = 0
                    enemy.velocity().y = 0
                }, 100)


                setTimeout (function() {
                    var attack = Crafty.e('EnemyAttack').attr({x: enemy.x + x, y: enemy.y + y});
                    setTimeout(function() {
                        attack.destroy();
                        currently_attacking = false
                    }, 100);
                    enemy.velocity().x = 1
                }, 200);
            }
        }

        this._leftHitbox.checkHits('Player')
            .bind('HitOn', function() { createAttackOnHit(-30, 0) });
        this._rightHitbox.checkHits('Player')
            .bind('HitOn', function() { createAttackOnHit(30, 0) });
        this._upHitbox.checkHits('Player')
            .bind('HitOn', function() { createAttackOnHit(0, 30) });
        this._downHitbox.checkHits('Player')
            .bind('HitOn', function() { createAttackOnHit(0, -30) });

        enemy.bind('Moved', function(movement) {
            var x_distance = Math.abs(enemy.x - Crafty('PlayerCharacter').x);
            var y_distance = Math.abs(enemy.y - Crafty('PlayerCharacter').y);

            if (enemy.x > Crafty('PlayerCharacter').x) {
                enemy.velocity().x = -100
            }
            if (enemy.x < Crafty('PlayerCharacter').x) {
                enemy.velocity().x = 100
            } 
            if (x_distance < 5) {
                enemy.velocity().x = 0
            }
            if (enemy.y > Crafty('PlayerCharacter').y) {
                enemy.velocity().y = -100
            }
            if (enemy.y < Crafty('PlayerCharacter').y) {
                enemy.velocity().y = 100
            } 
            if (y_distance < 5) {
                enemy.velocity().y = 0
            }

        })
    }
});


Crafty.c('EnemyHitbox', {
    init: function() {
        this.requires('2D, DOM, Collision, eAttackHitbox, Color')
        .attr({ w: 30, h: 30})
    }
})

Crafty.c('EnemyAttack', {
    init: function() {
        this.requires('2D, DOM, EAttack, Color')
            .attr({ w: 30, h: 30})
            .color('red')

        console.log('EnemyAttack object created')
    }
});