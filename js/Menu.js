menu = function(game){}

menu.prototype = {
	preload : function() {
		this.load.image('magt1', './images/main/magt1.png');
		this.load.image('magt2', './images/main/magt2.png');
    },

    create: function() {
		magt1 = game.add.button(0, 85, 'magt1', startTrick1, this, 2, 1, 0 );
		magt2 = game.add.button(330, 85, 'magt2', startTrick2, this, 2, 1, 0 );
		
		this.add.text(217, 20, "Choose a mathemagician", style2);
		this.add.text(120, 420, "Abra Kadabraff", style2);
		this.add.text(400, 420, "Daniel Blaine Laroscain", style2);
		
    },

    update: function() {
		if (magt1.input.pointerOver())
			magt1.alpha = 1;
		else
			magt1.alpha = 0.5;
		
		if (magt2.input.pointerOver())
			magt2.alpha = 1;
		else
			magt2.alpha = 0.5;
    	
    }
} // End home

function startTrick1(){
	this.game.state.start('instructions', true, false, 1);
}
	
function startTrick2(){
	this.game.state.start('instructions', true, false, 2);
}