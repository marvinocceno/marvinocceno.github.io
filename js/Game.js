var game = new Phaser.Game(700, 525, Phaser.AUTO, 'game');

game.state.add('boot', boot);
game.state.add('home', home);
game.state.add('menu', menu);
game.state.add('instructions', instructions);
game.state.add('raff', raff);
game.state.add('daniel', daniel);

game.state.start('boot');