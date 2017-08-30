home = function(game){}

home.prototype = {
	preload : function() {
		this.load.image('title', './images/home/title.png');
		this.load.image('startB', './images/home/start.png');
    },

    create: function() {
		this.add.image(2, 30, 'title');
				
		startB = game.add.button(215, 410, 'startB', startGame, this, 2, 1, 0 );
    },

    update: function() {
    	if (startB.input.pointerOver())
			startB.alpha = 0.5;
		else
			startB.alpha = 1;
    }
} // End home

function startGame() {
	this.game.state.start('menu');
}