daniel = function(game){}

var counter, answer;
var danI;

daniel.prototype = {
	init: function(c, a) {
		counter = c;
		answer = a;
	},
	
	preload: function() {
		this.load.image('yellowButton', './images/main/yellow.png');
		this.load.image('whiteButton', './images/main/white.png');
        this.load.image('noButton', './images/main/no.png');
		this.load.image('dan', './images/main/dan.png');
		this.load.image('tryButton', './images/main/try.png');
		this.load.image('exitButton', './images/main/exit.png');
    },

    create: function() {
		if(counter <= 5){
			this.add.text(220, 10, "Is your number here?", style2);
			//this.add.text(620, 10, counter + " / 8", style2);
			
			yellowB = game.add.button(190 , 450, 'yellowButton', clickYellow, this);
			yellowB.width = 60;
			yellowB.height = 60;
			yellowB.ctr = counter;
			yellowB.ans = answer;
			whiteB = game.add.button(300 , 450, 'whiteButton', clickWhite, this);
			whiteB.width = 60;
			whiteB.height = 60;
			whiteB.ctr = counter;
			whiteB.ans = answer;
			noB = game.add.button(410 , 450, 'noButton', clickNeither, this);
			noB.width = 60;
			noB.height = 60;
			noB.ctr = counter;
			noB.ans = answer;
			
			bar = game.add.graphics();
			bar.beginFill(0xffffff, 0.3);
			bar.drawRect(0, 0, 700, 40);
			
			var num0 = Math.pow(3, counter-1);
			var num = num0;
			var addNum = num + 1;
			var interval = 2*num - 1;
			var iterator = 0;
			var uCtr = 1;
			var shift = 1;
			
			var i=1, j=0;
			this.add.text(30, 45, num, style4);
			while(num<=200){
				uCtr++;
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
				if(uCtr > num0){
					shift++;
					uCtr = 1;
				}
				
				if(num <= 200){
					if(shift % 2 == 1) // yellow
						this.add.text(30+50*i, 45+37*j, num, style4);
					else // red
						this.add.text(30+50*i, 45+37*j, num, style3);
				}

				i++;
			}
		}
		else{
			this.add.text(200, 65, "Your Number: ", style2);
			this.add.text(380, 50, answer, style1);
			
			tryB = game.add.button(185, 450, 'tryButton', retryD, this, 2, 1, 0 );
			exitB = game.add.button(410, 450, 'exitButton', quit, this, 2, 1, 0 );
			
			danI = game.add.sprite(0, 290, 'dan');
			danI.width = 100;
			danI.height = 123;
			game.physics.enable(danI, Phaser.Physics.ARCADE);
		}
    },

    update: function() {
		if (yellowB.input.pointerOver())
			yellowB.alpha = 0.5;
		else
			yellowB.alpha = 1;
		if (whiteB.input.pointerOver())
			whiteB.alpha = 0.5;
		else
			whiteB.alpha = 1;
		if (noB.input.pointerOver())
			noB.alpha = 0.5;
		else
			noB.alpha = 1;
		
		if(counter > 5){
			danI.x += 2;
			if(danI.x > 600){
				danI.x = 0;
			}
			danI.angle += 4;
		}
		
    }
} // End daniel

function clickWhite(button){
	var a = button.ans + 2*Math.pow(3, button.ctr-1);
	this.game.state.start('daniel', true, false, button.ctr+1, a);
}

function clickYellow(button){
	var a = button.ans + Math.pow(3, button.ctr-1);
	this.game.state.start('daniel', true, false, button.ctr+1, a);
}

function clickNeither(button){
	this.game.state.start('daniel', true, false, button.ctr+1, button.ans);
}

function retryD(){
	this.game.state.start('instructions', true, false, 2);
}