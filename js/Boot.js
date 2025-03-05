boot = function(game) {};

var style1 = { font: "bold 50px Arial", fill: "#fff"};
var style2 = { font: "25px Arial", fill: "#fff"};
var style2p5 = { font: "25px Arial", fill: "#000"};
var style3 = { font: "22px Arial", fill: "#fff"};
var style4 = { font: "22px Arial", fill: "#ffff00"};
var style5 = { font: "15px Arial", fill: "#fff"};

boot.prototype = {
	preload: function() {

	},
	create: function() {
		this.game.scale.pageAlignHorizontally = true;
		this.game.scale.pageAlignVeritcally = true;
		this.game.scale.refresh();

		this.game.state.start('home');
	},
	update: function(){
		
	}
};