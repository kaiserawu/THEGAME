Crafty.c('Projectile', {
    init: function() {
        this.requires('2D, DOM, Projectile, Collision, Color, Motion')
            .attr({w: 10, h: 5})
            .color('#ff0000')
            .destroyOnImpen()
        this.velocity().x = 1
    },
    destroyOnImpen: function() {
        this.onHit('Impen', this.destroy);
        return this;
    },
})

Crafty.c('ArrowShooter', {
    init: function() {
        this.requires('2D, DOM, Color')
            .attr({w: 30, h: 30})
            .color('purple')
    },
    shootingDirection: function(direction) {
        this.direction = direction;
        return this;
    },
    start: function() {
        var bulletVelocities = {};
        bulletVelocities[ATTACK_DIRECTIONS.UP] = { x: 0, y: 100 };
        bulletVelocities[ATTACK_DIRECTIONS.RIGHT] = { x: 100, y: 0 };
        bulletVelocities[ATTACK_DIRECTIONS.DOWN] = { x: 0, y: -100 };
        bulletVelocities[ATTACK_DIRECTIONS.LEFT] = { x: -100, y: 0 };

        var shooter = this

        var shootingInterval = setInterval(function() {
            var bullet = Crafty.e('Projectile').attr({x: shooter.x + 12.5, y: shooter.y + 12.5});
            bullet.velocity().x = bulletVelocities[shooter.direction].x;
            bullet.velocity().y = bulletVelocities[shooter.direction].y;
        }, 500);

        this.bind("Remove", function() {
            clearInterval(shootingInterval)
            console.log("Interval Removed")
        });
        return this;
    }
})