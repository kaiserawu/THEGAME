Crafty.c('Projectile', {
    init: function() {
        this.requires('2D, DOM, Projectile, Collision, Color, Motion')
            .attr({w: 5, h: 5})
            .color('#ff0000')
            .destroyOnSolids()
        this.velocity().x = 1
    },
    destroyOnSolids: function() {
        this.onHit('Solid', this.destroy);
        return this;
    }
})

Crafty.c('ArrowShooter', {
    init: function() {
        this.requires('2D, DOM, Color')
            .attr({w: 30, h: 30})
            .color('purple')
            .leftOrRight()
    },
    leftOrRight: function() {
        var shooter = this
        var player = Crafty('PlayerCharacter')
        setTimeout(function() {
            console.log(player.x)
            console.log(shooter.x)
            if (Crafty('PlayerCharacter').x > shooter.x) {
                setInterval(function() {
                    Crafty.e('Projectile').attr({x: this.x + 12.5, y: this.y + 12.5})
                }, 500)
            }
        }, 500)
    }
})