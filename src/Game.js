Parallax.Game = function(game){
};

Parallax.Game.prototype = {
	create: function(){

		// Add physics
		this.game.physics.startSystem(Phaser.Physics.ARCADE);
		this.game.physics.arcade.setBounds(0, 0, this.game.width, this.game.height);

		this.scrollSpeed = 1;

		this.sky = this.game.add.tileSprite(0, 0, this.game.width, this.game.height, 'sky');
		this.mountains = this.game.add.tileSprite(0, 0, this.game.width, this.game.height, 'mountains');
		this.hills = this.game.add.tileSprite(0, 0, this.game.width, this.game.height, 'hills');
		this.forest = this.game.add.tileSprite(0, 0, this.game.width, this.game.height, 'forest');

		this.player = this.game.add.sprite(100, this.game.world.height-50, 'player');
		this.player.animations.add('east', [28, 29, 30, 31, 32, 33, 34, 35], 15, true);
		this.player.animations.play('east', 10, true);
	},

	update: function()
	{
		this.forest.tilePosition.x -= this.scrollSpeed;
		this.hills.tilePosition.x -= this.scrollSpeed/5;
		this.mountains.tilePosition.x -= this.scrollSpeed/10;
		this.sky.tilePosition.x -= this.scrollSpeed/20;
	}

};
