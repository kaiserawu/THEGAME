Crafty.c('BEnemy', {
	init: function() {
		this.requires('2D, DOM, BEnemy, Collision, Solid, Motion, Color')
			.color('#d3d3d3')
			.attr({w:50, h: 50})
			.stopOnSolids()
			.hitByAttack()
            .stopOnHoles()

        this._rightHitbox = Crafty.e('EnemyHitbox').attr({x: this.x + 50, y: this.y});
        this._leftHitbox = Crafty.e('EnemyHitbox').attr({x: this.x - 50, y: this.y});
        this._upHitbox = Crafty.e('EnemyHitbox').attr({x: this.x, y: this.y + 50});
        this._downHitbox = Crafty.e('EnemyHitbox').attr({x: this.x, y: this.y - 50});

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
    projectileAttack: function() {
        var enemy = this;
        var player = Crafty('PlayerCharacter')
        var x_distance = Math.abs(enemy.x - player.x);
        var y_distance = Math.abs(enemy.y - player.y);

        if (x_distance > 100 | y_distance > 100) {
            setTimeout(function() {
                enemy.velocity().x = 0
                enemy.velocity().y = 0
                var dx = player.x - enemy.x
                var dy = player.y - enemy.y
                var dist = Math.pow(Math.pow(dx, 2) + Math.pow(dy, 2), .5)
                var multiplier = 200/dist
                console.log(dx, dy)
                var projectile = Crafty.e('Projectile')
                projectile.attr({x:enemy.x + 15, y:enemy.y + 15})
                projectile.rotation = Math.atan(dy/dx) * 180/Math.PI
                console.log(projectile.rotation)
                projectile.velocity().x = dx*multiplier
                projectile.velocity().y = dy*multiplier
                setTimeout(function() {
                    enemy.velocity().x = 1
                }, 200)
            }, 200)

        };
        return this;
    },
    combat: function() {
        var enemy = this;

        enemy.velocity().x = 1

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
            .bind('HitOn', createAttackOnHit(ATTACK_DIRECTIONS.LEFT, -50, 0));
        this._rightHitbox.checkHits('Player')
            .bind('HitOn', createAttackOnHit(ATTACK_DIRECTIONS.RIGHT, 50, 0));
        this._upHitbox.checkHits('Player')
            .bind('HitOn', createAttackOnHit(ATTACK_DIRECTIONS.UP, 0, 50));
        this._downHitbox.checkHits('Player')
            .bind('HitOn', createAttackOnHit(ATTACK_DIRECTIONS.DOWN, 0, -50));

        enemy.bind('Moved', function(movement) {
            var x_distance = Math.abs(enemy.x - Crafty('PlayerCharacter').x);
            var y_distance = Math.abs(enemy.y - Crafty('PlayerCharacter').y);
            var distance = Math.sqrt(x_distance ** 2 + y_distance ** 2)

            if (enemy.x > Crafty('PlayerCharacter').x) {
                enemy.velocity().x = -150
            }
            if (enemy.x < Crafty('PlayerCharacter').x) {
                enemy.velocity().x = 150
            } 
            if (x_distance < 5) {
                enemy.velocity().x = 0
            }
            if (enemy.y > Crafty('PlayerCharacter').y) {
                enemy.velocity().y = -150
            }
            if (enemy.y < Crafty('PlayerCharacter').y) {
                enemy.velocity().y = 150
            } 
            if (y_distance < 5) {
                enemy.velocity().y = 0
            }
        })
        setInterval(function() {
            Crafty('BEnemy').projectileAttack()
        }, 1000)
    }
});


Crafty.c('EnemyHitbox', {
    init: function() {
        this.requires('2D, DOM, Collision, eAttackHitbox, Color')
        .attr({ w: 50, h: 50})
    }
})

Crafty.c('EnemyAttack', {
    init: function() {
        this.requires('2D, DOM, EAttack, Color')
            .attr({ w: 50, h: 50})
            .color('yellow')

        console.log('EnemyAttack object created')
    }
});