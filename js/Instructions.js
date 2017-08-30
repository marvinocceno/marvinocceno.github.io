instructions = function(game){}

var trick;

instructions.prototype = {
	init: function(t) {
		trick = t;
	},
	
	preload : function() {
		this.load.image('continueB', './images/main/continue.png');
    },

    create: function() {
		this.add.text(160, 150, "Pick a whole number from 1 to 200", style2);
		this.add.text(160, 190, "Keep that in mind", style2);
		
		continueB = game.add.button(227, 400, 'continueB', continueGame, this, 2, 1, 0 );
    },

    update: function() {
		if (continueB.input.pointerOver())
			continueB.alpha = 0.5;
		else
			continueB.alpha = 1;
    }

} // End instructions

function continueGame() {
	//alert(trick);
	if(trick == 1)
		this.game.state.start('raff', true, false, 1, 0);
	else if(trick == 2)
		this.game.state.start('daniel', true, false, 1, 0);
}