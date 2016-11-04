Crafty.c('Enemy', {
	init: function() {
		this.requires('2D, DOM, Enemy, Collision, Solid, Object, Motion, Color')
			.color('#d3d3d3')
			.attr({w:30, h: 30})
			.stopOnSolids()
			.hitByAttack()
            .stopOnHoles()

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

        var createAttackOnHit = function(direction, x, y) {
            return function() {
                enemy._attackDirection = direction;
            
                setTimeout(function() {
                    enemy.velocity().x = 0
                    enemy.velocity().y = 0
                }, 100)


                setTimeout (function() {
                    var attack = Crafty.e('EnemyAttack').attr({x: enemy.x + x, y: enemy.y + y});
                    setTimeout(function() {attack.destroy()}, 100);
                    enemy.velocity().x = 1
                }, 200);
            }
        }

        this._leftHitbox.checkHits('Player')
            .bind('HitOn', createAttackOnHit(ATTACK_DIRECTIONS.LEFT, -30, 0));
        this._rightHitbox.checkHits('Player')
            .bind('HitOn', createAttackOnHit(ATTACK_DIRECTIONS.RIGHT, 30, 0));
        this._upHitbox.checkHits('Player')
            .bind('HitOn', createAttackOnHit(ATTACK_DIRECTIONS.UP, 0, 30));
        this._downHitbox.checkHits('Player')
            .bind('HitOn', createAttackOnHit(ATTACK_DIRECTIONS.DOWN, 0, -30));

        enemy.bind('Moved', function(movement) {
            var x_distance = Math.abs(enemy.x - Crafty('PlayerCharacter').x);
            var y_distance = Math.abs(enemy.y - Crafty('PlayerCharacter').y);

            if (enemy.x > Crafty('PlayerCharacter').x) {
                enemy.velocity().x = -300
            }
            if (enemy.x < Crafty('PlayerCharacter').x) {
                enemy.velocity().x = 300
            } 
            if (x_distance < 5) {
                enemy.velocity().x = 0
            }
            if (enemy.y > Crafty('PlayerCharacter').y) {
                enemy.velocity().y = -300
            }
            if (enemy.y < Crafty('PlayerCharacter').y) {
                enemy.velocity().y = 300
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
            .color('yellow')

        console.log('EnemyAttack object created')
    }
});