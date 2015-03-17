Parallax.Preloader = function(game){
	Parallax.WIDTH = 320;
	Parallax.HEIGHT = 200;
};
Parallax.Preloader.prototype = {
	preload: function(){
		// set background color and preload image
		this.stage.backgroundColor = '#000000';
		this.preloadBar = this.add.sprite( (Parallax.WIDTH-311)/2
													, (Parallax.HEIGHT-27)/2
													, 'preloaderBar');

		this.load.setPreloadSprite(this.preloadBar);

		// load images
		this.load.image('sky', 'assets/Sky.png');
		this.load.image('mountains', 'assets/Mountains.png');
		this.load.image('hills', 'assets/Hills.png');
		this.load.image('forest', 'assets/Forest.png');

		this.load.spritesheet('player', 'assets/Player.png', 19, 32);		

	},
	create: function(){
		// start the MainMenu state
		this.state.start('Game');
	}
};
