raff = function(game){}

var counter, answer;

raff.prototype = {
	init: function(c, a) {
		counter = c;
		answer = a;
	},
	
	preload: function() {
		this.load.image('yesButton', './images/main/yes.png');
        this.load.image('noButton', './images/main/no.png');
		this.load.image('raf', './images/main/raf.png');
		this.load.image('tryButton', './images/main/try.png');
		this.load.image('exitButton', './images/main/exit.png');
    },

    create: function() {
		if(counter <= 8){
			this.add.text(220, 10, "Is your number here?", style2);
			//this.add.text(620, 10, counter + " / 8", style2);
			
			yesB = game.add.button(250 , 450, 'yesButton', clickYes, this);
			yesB.width = 60;
			yesB.height = 60;
			yesB.ctr = counter;
			yesB.ans = answer;
			noB = game.add.button(360 , 450, 'noButton', clickNo, this);
			noB.width = 60;
			noB.height = 60;
			noB.ctr = counter;
			noB.ans = answer;
			
			bar = game.add.graphics();
			bar.beginFill(0xffffff, 0.3);
			bar.drawRect(0, 0, 700, 50);
			
			var num = Math.pow(2, counter-1);
			var addNum = num + 1;
			var interval = num - 1;
			var iterator = 0;
			
			var i=1, j=0;
			this.add.text(30, 60, num, style3);
			while(num<=255){
				iterator++;
				if(iterator <= interval)
					num++;
				else{
					num+=addNum;
					iterator=0;
				}
				// Spacing
				if((45*i + 2) > 550){
					i=0;
					j++;
				}
				if(num <= 200)
					this.add.text(30+50*i, 60+47*j, num, style3);
				i++;
			}
		}
		else{
			this.add.text(200, 65, "Your Number: ", style2);
			this.add.text(380, 50, answer, style1);
			
			tryB = game.add.button(185, 450, 'tryButton', retryR, this, 2, 1, 0 );
			exitB = game.add.button(410, 450, 'exitButton', quit, this, 2, 1, 0 );
			
			spriteR = game.add.sprite(350, 290, 'raf');
			spriteR.anchor.setTo(0.5, 0.5);
		}
    },

    update: function() {
		if (yesB.input.pointerOver())
			yesB.alpha = 0.5;
		else
			yesB.alpha = 1;
		if (noB.input.pointerOver())
			noB.alpha = 0.5;
		else
			noB.alpha = 1;
		
		if(counter > 8)
			spriteR.angle += 7;
    }
} // End raff

function clickYes(button){
	var a = button.ans + Math.pow(2, button.ctr-1);
	this.game.state.start('raff', true, false, button.ctr+1, a);
}

function clickNo(button){
	this.game.state.start('raff', true, false, button.ctr+1, button.ans);
}

function retryR(){
	this.game.state.start('instructions', true, false, 1);
}
	
function quit(){
	this.game.state.start('home');
}